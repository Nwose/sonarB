import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Buttons: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white font-semibold transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
