import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "secondary" | "primary";
};

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2";
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800"
      : "bg-blue-600 text-white";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
