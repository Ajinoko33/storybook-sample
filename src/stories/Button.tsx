import { Button as AntdButton } from 'antd';

export type ButtonProps = {
  /** We add a space between two Chinese characters by default, which removed by setting `autoInsertSpace` to `false`. */
  autoInsertSpace?: boolean;
  /** Option to fit button width to its parent width */
  block?: boolean;
  /** Semantic DOM class */
  classNames?: {
    icon: string;
  };
  /** Set button color */
  color?: 'default' | 'primary' | 'danger';
  /** Syntactic sugar. Set the danger status of button. will follow `color` if provided */
  danger?: boolean;
  /** Disabled state of button */
  disabled?: boolean;
  /** Make background transparent and invert text and border colors */
  ghost?: boolean;
  /** Redirect url of link button */
  href?: string;
  /** Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button#type) */
  htmlType?: 'submit' | 'reset' | 'button';
  /** Set the icon component of button */
  icon?: React.ReactNode;
  /** Set the icon position of button */
  iconPosition?: 'start' | 'end';
  /** Set the loading status of button */
  loading?: boolean | { delay: number };
  /** Can be used to set button shape */
  shape?: 'default' | 'circle' | 'round';
  /** Set the size of button */
  size?: 'large' | 'middle' | 'small';
  /** Semantic DOM style */
  styles?: {
    icon: React.CSSProperties;
  };
  /** Same as target attribute of a, works when href is specified */
  target?: string;
  /** Syntactic sugar. Set button type. Will follow `variant` & `color` if provided */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  /** Set the handler to handle `click` event */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Set button variant */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
};

export const Button = ({
  autoInsertSpace = true,
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  htmlType = 'button',
  iconPosition = 'start',
  loading = false,
  shape = 'default',
  size = 'middle',
  type = 'default',
  ...restProps
}: ButtonProps) => {
  return (
    <AntdButton
      autoInsertSpace={autoInsertSpace}
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      htmlType={htmlType}
      iconPosition={iconPosition}
      loading={loading}
      shape={shape}
      size={size}
      type={type}
      {...restProps}
    />
  );
};
