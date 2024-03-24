import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-1/6 px-5 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between">
      <img className="h-6" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
