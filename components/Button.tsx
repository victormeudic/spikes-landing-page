import React from "react";

type ButtonProps = {
  px: number;
  py: number;
  label: string;
};

const Button = ({ px, py, label }: ButtonProps) => {
  return (
    <button
      className="w-full rounded-full text-[18px] font-semibold text-white bg-[#F2B53C]"
      style={{
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
        paddingRight: `${px}px`,
        paddingLeft: `${px}px`,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
