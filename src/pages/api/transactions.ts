import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
  expenses?: any;
};

const API_URL = process.env.API_URL;

async function transactions(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${API_URL}/transactions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());

    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(transactions);
