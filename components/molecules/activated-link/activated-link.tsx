import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Children, ReactElement } from "react";
import styles from "./activated-link.module.css";

interface ActivatedLinkProps {
  href: string;
  as?: string;
  children: ReactElement;
  activeStyle: string;
}

export const ActivatedLink = ({
  href,
  as,
  children,
  activeStyle,
}: ActivatedLinkProps) => {
  const router = useRouter();
  const child = Children.only<ReactElement>(children);
  let className = child.props.className ?? "";
  if (href === "/") {
    if (href === router.pathname) {
      className += " " + activeStyle;
    }
  } else {
    if (router.asPath.startsWith(href)) {
      className += " " + activeStyle;
    }
  }
  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};
