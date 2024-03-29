import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
  expenses?: any;
};

const API_URL = process.env.API_URL;

async function removeMember(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const userId = JSON.parse(req.body).userId;
    const response = await fetch(`${API_URL}/households/members/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    res.status(200).json({ expenses: await response.json() });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(removeMember);
