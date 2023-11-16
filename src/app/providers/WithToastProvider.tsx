import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export const WithToastProvider = ({ children }: Props) => {
  const isClient = typeof window !== "undefined";
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};
