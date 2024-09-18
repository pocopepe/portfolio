import React from 'react';

type TinyProps = {
  svg?: React.ReactNode;
};

function Tiny({ svg }: TinyProps): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-[#2a2a2a] rounded-3xl p-4">
      <div className="w-10 h-10">
        {svg ? React.cloneElement(svg as React.ReactElement, { className: "w-full h-full" }) : <div>No SVG provided</div>}
      </div>
    </div>
  );
}

export default Tiny;
