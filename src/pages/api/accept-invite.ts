import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
};

const API_URL = process.env.API_URL;

async function acceptInvite(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const inviteId = JSON.parse(req.body).inviteId;
    const response = await fetch(
      `${API_URL}/households/invites/accept/${inviteId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).catch((error) => {
      console.error("Error accepting invite", error);
      throw error;
    });

    res.status(200).json({ error: await response.json() });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(acceptInvite);
