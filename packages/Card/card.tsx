import React, { CSSProperties } from "react";
import classNames from "classnames";
import "./style.scss";

export type CardProps = {
  style?: CSSProperties;
  size?: "default" | "small";
  cardType?: "outer" | "inner";
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
    cardType,
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
    [`mzl_card_shadows_${shadows}`]: true,
    [`mzl_card_${size}`]: true,
    mzl_card_inner:cardType === 'inner',
    mzl_card_border: bordered,
    mzl_card_noContent:children === null,
    [className || ""]: !!className,
  });
  return (
    <div className={cardClass} style={style || undefined}>
      {cardTitle !== "" ? (
        <header className="mzl_card_header">
          {cardTitle}
          <div className="mzl_card_link">{extraContent}</div>
        </header>
      ) : null}
      {cover !== null ? <div className="mzl_card_cover">{cover}</div> : null}
      <main className="mzl_card_main">{children}</main>
      {actions !== null ? (
        <footer className="mzl_card_footer">{actions}</footer>
      ) : null}
    </div>
  );
}

Card.defaultProps = {
  style: "",
  size: "default",
  cardType:'outer',
  className: "",
  children: null,
  cardTitle: "",
  extraContent: null,
  bordered: true,
  cover: null,
  shadows: "none",
  actions: null,
};

export default Card;
