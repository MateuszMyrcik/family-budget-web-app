import { AddTransactionView } from "@/views/transaction";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = "pl",
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});

function TransactionPage() {
  return <AddTransactionView />;
}

export default withPageAuthRequired(TransactionPage);
