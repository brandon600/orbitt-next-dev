import React, { Component } from 'react';


interface GroupsIconProps {
  fill: string;
}

export const GroupsIcon: React.FC<GroupsIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.1827 17.7885C0.995533 17.7885 0.83495 17.7215 0.70095 17.5875C0.566983 17.4536 0.5 17.293 0.5 17.1058V16.752C0.5 16.1316 0.825733 15.6284 1.4772 15.2425C2.12867 14.8565 2.99237 14.6635 4.0683 14.6635C4.25713 14.6635 4.4436 14.6698 4.6277 14.6823C4.8118 14.6948 4.9891 14.7141 5.1596 14.7403C5.04385 14.9945 4.95626 15.2585 4.89682 15.5322C4.83741 15.806 4.8077 16.0954 4.8077 16.4005V17.7885H1.1827ZM7.22512 17.7885C7.01656 17.7885 6.84357 17.7194 6.70615 17.5812C6.56872 17.443 6.5 17.2717 6.5 17.0674V16.4385C6.5 15.4834 7.00609 14.7132 8.01827 14.128C9.03044 13.5427 10.3564 13.2501 11.9962 13.2501C13.6513 13.2501 14.9823 13.5427 15.9894 14.128C16.9964 14.7132 17.5 15.4834 17.5 16.4385V17.0674C17.5 17.2717 17.4308 17.443 17.2926 17.5812C17.1544 17.7194 16.9831 17.7885 16.7788 17.7885H7.22512ZM19.1922 17.7885V16.4005C19.1922 16.0954 19.1633 15.806 19.1054 15.5322C19.0476 15.2585 18.9592 14.9922 18.8403 14.7335C19.0108 14.7035 19.1878 14.6844 19.3713 14.676C19.5548 14.6677 19.7426 14.6635 19.9347 14.6635C21.0006 14.6635 21.8613 14.8565 22.5168 15.2425C23.1722 15.6284 23.4999 16.1316 23.4999 16.752V17.1058C23.4999 17.293 23.433 17.4536 23.299 17.5875C23.165 17.7215 23.0044 17.7885 22.8172 17.7885H19.1922ZM12 14.3847C10.6628 14.3847 9.59452 14.5808 8.79517 14.9731C7.99581 15.3655 7.60574 15.8699 7.62497 16.4866V16.6539H16.3846V16.4616C16.3974 15.868 16.0041 15.3735 15.2048 14.978C14.4054 14.5824 13.3372 14.3847 12 14.3847ZM4.06432 13.8751C3.64067 13.8751 3.28206 13.7251 2.98847 13.4251C2.69489 13.1251 2.5481 12.7645 2.5481 12.3433C2.5481 11.922 2.69588 11.5624 2.99145 11.2644C3.28702 10.9664 3.64662 10.8174 4.07027 10.8174C4.49392 10.8174 4.85415 10.9674 5.15095 11.2674C5.44773 11.5674 5.59612 11.928 5.59612 12.3492C5.59612 12.7705 5.44614 13.1301 5.14618 13.4281C4.84619 13.7261 4.48557 13.8751 4.06432 13.8751ZM19.9297 13.8751C19.506 13.8751 19.1458 13.7251 18.849 13.4251C18.5522 13.1251 18.4038 12.7645 18.4038 12.3433C18.4038 11.922 18.5538 11.5624 18.8538 11.2644C19.1538 10.9664 19.5144 10.8174 19.9356 10.8174C20.3593 10.8174 20.7179 10.9674 21.0115 11.2674C21.3051 11.5674 21.4518 11.928 21.4518 12.3492C21.4518 12.7705 21.3041 13.1301 21.0085 13.4281C20.7129 13.7261 20.3533 13.8751 19.9297 13.8751ZM12 12.5001C11.2788 12.5001 10.6658 12.2477 10.161 11.7429C9.65625 11.2381 9.40385 10.6251 9.40385 9.90396C9.40385 9.18283 9.65625 8.56986 10.161 8.06506C10.6658 7.56026 11.2788 7.30786 12 7.30786C12.7211 7.30786 13.3341 7.56026 13.8389 8.06506C14.3437 8.56986 14.5961 9.18283 14.5961 9.90396C14.5961 10.6251 14.3437 11.2381 13.8389 11.7429C13.3341 12.2477 12.7211 12.5001 12 12.5001ZM12.0016 8.44244C11.5819 8.44244 11.2332 8.58082 10.9553 8.85759C10.6774 9.13434 10.5384 9.48257 10.5384 9.90229C10.5384 10.322 10.6768 10.6708 10.9536 10.9487C11.2303 11.2266 11.5786 11.3655 11.9983 11.3655C12.418 11.3655 12.7668 11.2271 13.0447 10.9504C13.3226 10.6736 13.4615 10.3254 13.4615 9.90566C13.4615 9.48594 13.3231 9.13714 13.0464 8.85926C12.7696 8.58138 12.4214 8.44244 12.0016 8.44244Z"
        />
    </svg>
  )
}