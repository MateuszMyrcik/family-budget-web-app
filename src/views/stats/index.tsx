import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const StatsView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <>
            <h1>Family budget | Stats </h1>
          </>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
