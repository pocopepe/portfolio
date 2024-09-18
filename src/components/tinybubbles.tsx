import React from 'react';

type TinyProps = {
  svg?: React.ReactNode; // Make svg optional if you want to handle default cases
};

function Tiny({ svg }: TinyProps): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-[#2a2a2a] rounded-3xl p-4">
      {svg || <div>No SVG provided</div>} {/* Display a default message or empty content */}
    </div>
  );
}

export default Tiny;
