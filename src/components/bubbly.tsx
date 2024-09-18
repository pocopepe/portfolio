import React from "react";

type BubbyProps = {
  element: React.ReactNode;
};

const Bubby: React.FC<BubbyProps> = ({element }) => {
  return (
    <div className="flex flex-col p-8 m-1 bg-[#1f1f1f] rounded-3xl h-full">
      <div className="flex-1">
        <div>{element}</div>
      </div>
    </div>
  );
};

export default Bubby;
