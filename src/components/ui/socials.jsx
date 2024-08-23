import React from "react";
import Link from "next/link";
import { socials } from "@/lib/constants";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyles}
          title={item.name}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
