import React from "react";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-900 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div>
          <p className="mx-3">©2019 CodeFund</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
