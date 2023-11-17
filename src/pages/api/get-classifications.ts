import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { ClassificationRecord } from "@/shared";

type Data = {
  error?: string;
  data?: ClassificationRecord[];
};

const API_URL = process.env.API_URL;

async function getClassification(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${API_URL}/classifications`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("response", response);

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message });
    }

    res.status(200).json({ data: await response.json() });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(getClassification);
