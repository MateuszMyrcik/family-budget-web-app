import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const StatsView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title="Statystyki">
            <></>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
