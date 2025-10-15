import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = ({ href, text = "Hover this link" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
      style={{
        textDecoration: "none",
        width: "fit-content",
        alignSelf: "flex-end",
      }}
    >
      <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
      </span>
      <span>{text}</span>
    </a>
  );
};

export default DotExpandButton;
