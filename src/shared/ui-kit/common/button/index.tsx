import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import clsx from "clsx";

type ButtonProps = {} & MuiButtonProps;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  const buttonClasses = clsx(className);
  return (
    <MuiButton className={buttonClasses} {...props}>
      {children}
    </MuiButton>
  );
};
