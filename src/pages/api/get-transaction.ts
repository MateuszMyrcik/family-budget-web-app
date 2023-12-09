import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { GetTransactionsResponse } from "@/shared";

type Data = {
  error?: string;
  data?: GetTransactionsResponse;
};

const API_URL = process.env.API_URL;

async function getTransaction(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const transactionId = JSON.parse(req.body).id;
    const response = await fetch(`${API_URL}/transactions/${transactionId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message });
    }

    const data = await response.json();

    res.status(200).json({ data });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(getTransaction);
