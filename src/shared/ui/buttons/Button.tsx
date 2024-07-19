import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/button";

interface ButtonProps extends NextUIButtonProps {}

export const Button = ({
  disableRipple = true,
  children,
  ...props
}: ButtonProps) => {
  return (
    <NextUIButton disableRipple={disableRipple} {...props}>
      {children}
    </NextUIButton>
  );
};
