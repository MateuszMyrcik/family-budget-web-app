import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
  data?: any;
};

const API_URL = process.env.API_URL;

async function createHousehold(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const ownerEmail = JSON.parse(req.body).ownerEmail;
    const response = await fetch(
      `${API_URL}/households/invites/${ownerEmail}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      res.status(200).json({ data: await response.json() });
    } else {
      res.status(400).json({ error: await response.json() });
    }
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(createHousehold);
