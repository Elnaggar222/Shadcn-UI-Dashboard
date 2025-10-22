import React from "react";

const CustomHeader = ({
  title,
  clasName,
}: {
  title: string;
  clasName?: string;
}) => {
  return <h1 className={`${clasName} text-md font-medium mb-6`}>{title}</h1>;
};

export default CustomHeader;
