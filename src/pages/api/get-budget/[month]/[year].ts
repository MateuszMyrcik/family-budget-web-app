import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { GetBudgetResponse, GetTransactionsResponse } from "@/shared";

type Data = {
  error?: string;
  data?: GetBudgetResponse;
};

const API_URL = process.env.API_URL;

async function getBudget(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { month, year } = req.query;

  try {
    const { accessToken } = await getAccessToken(req, res);

    const response = await fetch(`${API_URL}/budgets/${month}/${year}`, {
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

export default withApiAuthRequired(getBudget);
