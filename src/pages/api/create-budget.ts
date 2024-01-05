import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { CreateBudgetResponse } from "@/shared";

type Data = {
  error?: string;
  data?: CreateBudgetResponse;
};

const API_URL = process.env.API_URL;

async function createBudget(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${API_URL}/budgets`, {
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

    const data = await response.json();
    res.status(200).json({ data });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(createBudget);
