import React, { Component } from 'react';


interface ProcessTransactionProps {
  fill: string;
}

export const ProcessTransactionIcon: React.FC<ProcessTransactionProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3.06243 17.75C2.90029 17.75 2.76603 17.6956 2.65963 17.5869C2.55321 17.4781 2.5 17.3434 2.5 17.1827V6.8173C2.5 6.65657 2.55484 6.52183 2.66453 6.4131C2.77419 6.30437 2.91008 6.25 3.0722 6.25C3.23432 6.25 3.36858 6.30437 3.475 6.4131C3.5814 6.52183 3.6346 6.65657 3.6346 6.8173V17.1827C3.6346 17.3434 3.57977 17.4781 3.4701 17.5869C3.36043 17.6956 3.22454 17.75 3.06243 17.75ZM19.3269 12.5673H6.7442C6.58347 12.5673 6.44873 12.5124 6.34 12.4028C6.23128 12.2931 6.17692 12.1572 6.17692 11.9951C6.17692 11.833 6.23128 11.6987 6.34 11.5923C6.44873 11.4859 6.58347 11.4327 6.7442 11.4327H19.3173L15.4404 7.5115C15.3288 7.39997 15.2747 7.26984 15.2779 7.12113C15.2811 6.97243 15.3371 6.84481 15.4458 6.73828C15.558 6.62814 15.6906 6.57308 15.8436 6.57308C15.9965 6.57308 16.1288 6.62884 16.2404 6.74038L20.9975 11.4976C21.0722 11.5723 21.1278 11.6516 21.1644 11.7357C21.2009 11.8197 21.2192 11.9098 21.2192 12.0059C21.2192 12.1019 21.2009 12.19 21.1644 12.2702C21.1278 12.3503 21.0722 12.4277 20.9975 12.5024L16.2307 17.2692C16.1208 17.3807 15.9888 17.4365 15.8347 17.4365C15.6807 17.4365 15.5479 17.384 15.4364 17.279C15.3211 17.1673 15.2651 17.0301 15.2683 16.8672C15.2715 16.7043 15.3288 16.5697 15.4404 16.4635L19.3269 12.5673Z"
        />
    </svg>
  )
}