import React from "react";

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div>
      <div className="">
        <h1 className={`text-4xl font-bold text-justify ${className}`}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
