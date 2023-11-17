import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
  data?: string;
};

const API_URL = process.env.API_URL;

async function removeClassification(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const classificationId = JSON.parse(req.body).id;
    const response = await fetch(
      `${API_URL}/classifications/${classificationId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message });
    }

    res.status(200).json({ data: classificationId });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default withApiAuthRequired(removeClassification);
