import React from 'react';
import './MarqueeBar.css';
import { RiStarSFill } from "react-icons/ri";

const MarqueeBar = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <p>DESCONTO NA PRIMEIRA COMPRA <RiStarSFill /> UTILIZE O CUPOM "WELCOME 10" <RiStarSFill /> DESCONTO NA PRIMEIRA COMPRA <RiStarSFill /> UTILIZE O CUPOM "WELCOME 10" <RiStarSFill /> DESCONTO NA PRIMEIRA COMPRA <RiStarSFill /> UTILIZE O CUPOM "WELCOME 10" <RiStarSFill /> DESCONTO NA PRIMEIRA COMPRA <RiStarSFill /> UTILIZE O CUPOM "WELCOME 10" <RiStarSFill /> DESCONTO NA PRIMEIRA COMPRA <RiStarSFill /> UTILIZE O CUPOM "WELCOME 10" <RiStarSFill /></p>
      </div>
    </div>
  );
};

export { MarqueeBar };
