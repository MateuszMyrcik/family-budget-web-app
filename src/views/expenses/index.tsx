import { PrimaryTemplate } from "@/app/layout";
import { RootState, store } from "@/app/store";
import { MovingOutlined } from "@mui/icons-material";

import { Box, Button, Typography } from "@mui/material";
import clsx from "clsx";

import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";
import { formatDate, getTotalAmount, isValuePositive } from "./lib";

export const ExpensesView = () => {
  const { expenses } = useSelector((state: RootState) => state.expensesSlice);
  const { push } = useRouter();

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title="Zarządzaj wydatkami">
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                pb={2}
              >
                <Typography
                  variant="body1"
                  color={
                    isValuePositive(getTotalAmount(expenses))
                      ? "success.main"
                      : "error.main"
                  }
                >
                  {getTotalAmount(expenses)}
                  <MovingOutlined />
                </Typography>
                <Button
                  onClick={() => {
                    push("/expense");
                  }}
                  variant="contained"
                >
                  Dodaj nową transakcję
                </Button>
              </Box>

              <div className="flex flex-col gap-2 text-sm">
                {expenses.map(({ amount, date, name, category }, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[40px_300px_100px_100px] items-center p-2 border-[1px] rounded-lg gap-2 hover:bg-gray-100 cursor-pointer justify-between"
                  >
                    <div className=" text-gray-500 text-sm">
                      {formatDate(date)}
                    </div>
                    <div className="basis-40 flex-grow-0">{name}</div>
                    <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                      {category}
                    </div>
                    <div
                      className={clsx(
                        "text-base",
                        isValuePositive(amount.value)
                          ? "text-success-main"
                          : "text-error-main"
                      )}
                    >
                      {amount.value}
                    </div>
                  </div>
                ))}
              </div>
            </>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
