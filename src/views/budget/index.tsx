import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { UpdateBudgetForm } from "@/features/update-budget";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";

export const BudgetView = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("budget.pageTitle")}>
            <UpdateBudgetForm />
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
