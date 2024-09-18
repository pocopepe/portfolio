import React from "react";

type BubbyProps = {
  title: string;
  note: string;
  element: React.ReactNode;
};

const Bubby: React.FC<BubbyProps> = ({ note, title, element }) => {
  return (
    <div className="flex flex-col p-8 m-1 bg-[#1f1f1f] rounded-3xl h-full">
      <div className="flex-1">
        <div>{element}</div>
        <h1 className="text-[#ebebeb]">{title}</h1>
        <p className="text-[#ebebeb]">{note}</p>
      </div>
    </div>
  );
};

export default Bubby;
