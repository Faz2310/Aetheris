import React from "react";

export const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`rounded-2xl shadow-md p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="text-white">{children}</div>;
};
