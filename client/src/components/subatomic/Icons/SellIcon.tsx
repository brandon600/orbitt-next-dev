import React, { Component } from 'react';


interface SellIconProps {
  fill: string;
}

export const SellIcon: React.FC<SellIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13.7057 21.1807C13.4757 21.4102 13.2012 21.525 12.8823 21.525C12.5633 21.525 12.2891 21.4102 12.0596 21.1807L2.83848 11.9596C2.71028 11.8314 2.62181 11.6967 2.57308 11.5555C2.52436 11.4143 2.5 11.2657 2.5 11.1096V3.6346C2.5 3.31025 2.60802 3.04007 2.82405 2.82405C3.04007 2.60802 3.31025 2.5 3.6346 2.5H11.1096C11.2583 2.5 11.4086 2.52329 11.5604 2.56988C11.7123 2.61646 11.8524 2.69958 11.9807 2.81923L21.1615 12C21.4076 12.2462 21.5323 12.532 21.5355 12.8577C21.5387 13.1833 21.4205 13.466 21.1807 13.7057L13.7057 21.1807ZM12.9265 20.4057L20.4057 12.9211L11.1139 3.6346H3.6346V11.1096L12.9265 20.4057ZM6.22963 7.31343C6.52909 7.31343 6.78716 7.20387 7.00383 6.98475C7.22049 6.76563 7.32883 6.50634 7.32883 6.20688C7.32883 5.90741 7.22087 5.64934 7.00495 5.43268C6.78903 5.21603 6.53134 5.1077 6.23188 5.1077C5.92601 5.1077 5.66474 5.21565 5.44808 5.43155C5.23141 5.64747 5.12308 5.90516 5.12308 6.20462C5.12308 6.50409 5.23103 6.76376 5.44695 6.98363C5.66285 7.20349 5.92374 7.31343 6.22963 7.31343Z"
        />
    </svg>
  )
}