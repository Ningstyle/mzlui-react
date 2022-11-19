import React, { CSSProperties } from "react";
import classNames from "classnames";
import './style.scss';

export type CardProps = {
  style?: CSSProperties;
  size?: "default" | "small";
  className?: string;
  children?: React.ReactNode;
  cardTitle?: string;
  extraContent?: React.ReactNode;
  bordered?: boolean;
  cover?: React.ReactNode;
  shadows?: "hover" | "always" | "none";
  actions?: Array<React.ReactNode>;
};

function Card(props: CardProps): JSX.Element {
  const {
    style,
    size,
    className,
    children,
    cardTitle,
    extraContent,
    bordered,
    cover,
    shadows,
    actions,
  } = props;

  const cardClass = classNames("mzl_card", {
    [`mzl_card_${shadows}`]: true,
    [`mzl_card_${size}`]: true,
    mzl_card_border: bordered,
    [className || ""]: !!className,
  });
  return (
    <div className={cardClass} style={style || undefined}>
      {cardTitle !== "" ? (
        <header>
          {cardTitle}
          {extraContent}
        </header>
      ) : null}
      {cover !== null ? <div>{cover}</div> : null}
      {children}
      {actions !== null ? <footer>{actions}</footer> : null}
    </div>
  );
}

Card.defaultProps = {
  style: "",
  size: "default",
  className: "",
  children: null,
  cardTitle: "标题",
  extraContent: null,
  bordered: false,
  cover: null,
  shadows: "none",
  actions: null,
};

export default Card;
