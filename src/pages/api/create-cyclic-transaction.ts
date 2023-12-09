import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
};

const API_URL = process.env.API_URL;

async function createCyclicTransaction(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${API_URL}/transactions/cyclic`, {
      method: "POST",
      body: req.body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      return res.status(response.status).json({ error: errorData.message });
    }

    res.status(200).json({});
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(createCyclicTransaction);
