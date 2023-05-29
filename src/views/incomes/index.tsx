import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const IncomesView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title="Zarządzaj przychodami">
            <></>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
