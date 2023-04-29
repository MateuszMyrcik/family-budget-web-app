import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const IncomesView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <>
            <h1>Family budget | Incomes </h1>
          </>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
