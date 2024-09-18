import React from "react";

type BubbyProps = {
  title: string;  // Use 'string' instead of 'String'
  note: string;
  element: React.ReactNode;  
};

const Bubby: React.FC<BubbyProps> = ({ note, title, element }) => {
  return (
    <div className="flex flex-col p-8 m-1 bg-slate-800 rounded-3xl h-full">
      <div className="flex-1">
        <h1 className="text-white">{title}</h1>
        <p className="text-white">{note}</p>
        <div>{element}</div>
      </div>
    </div>
  );
};

export default Bubby;
