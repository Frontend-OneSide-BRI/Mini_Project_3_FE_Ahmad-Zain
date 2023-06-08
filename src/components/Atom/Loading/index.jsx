import React from "react";

const Loading = () => {
  return (
    <div className="z-50 absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 rounded-full bg-red-darker">
      <div className="border-t-red-flix border-solid animate-spin rounded-full border-8 w-16 h-16 border-red-950"></div>
    </div>
  );
};

export default Loading;
