import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function SmartLink({ href, className, children }: SmartLinkProps) {
  if (href.startsWith("/chapters/")) {
    const slug = href.replace("/chapters/", "").split("/")[0];
    return (
      <Link to="/chapters/$slug" params={{ slug }} className={className}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("/papers/") && href !== "/papers/") {
    const slug = href.replace("/papers/", "").split("/")[0];
    return (
      <Link to="/papers/$slug" params={{ slug }} className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/papers") {
    return (
      <Link to="/papers" className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/map") {
    return (
      <Link to="/map" className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/about") {
    return (
      <Link to="/about" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/" className={className}>
      {children}
    </Link>
  );
}
