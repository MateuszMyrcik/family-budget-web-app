import { UpdateTransactionView } from "@/views/transaction";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Page = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const { locale } = context;

    return {
      props: {
        ...(await serverSideTranslations(locale as string, ["common"])),
      },
    };
  },
});

function UpdateTransactionPage() {
  return <UpdateTransactionView />;
}

export default UpdateTransactionPage;
