import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const SummaryView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title="Podsumowanie">
            <></>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
