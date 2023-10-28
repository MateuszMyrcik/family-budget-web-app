import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, GetAccessTokenResult } from "@auth0/nextjs-auth0";

type Data = {
  error?: string;
  accessToken?: string;
};

export default async function token(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { accessToken } = (await getAccessToken(
      req,
      res
    )) as GetAccessTokenResult;

    console.log(accessToken);

    res.status(200).json({ accessToken });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}
