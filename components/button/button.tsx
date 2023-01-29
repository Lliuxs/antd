import React from "react";
import type { ButtonType, ButtonHTMLType, ButtonShape } from "./buttonHelpers";
import type { SizeType } from "../config-provider/SizeContext";

export interface BaseButtonProps {
  // "default","primary", "ghost",
  // "dashed", "link", "text",
  type?: ButtonType; // 类型
  icon?: React.ReactNode;
  // "default", "circle", "round"
  shape?: ButtonShape;
  // "small" | "middle" | "large"
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

export type NativeButtonProps = {
  // "submit", "button", "reset"
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    "type" | "onClick"
  >;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const { children } = props;
  // const kids =
  //   children || children === 0
  //     ? spaceChildren(children, isNeedInserted() && autoInsertSpace)
  //     : null;
  let buttonNode = (
    <button>
      {/* {iconNode} */}
      {/* {kids} */}
      {children}
    </button>
  );
  // return wrapSSR(buttonNode);
  return buttonNode;
};

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(InternalButton);

// Button.Group = Group;

export default Button;
