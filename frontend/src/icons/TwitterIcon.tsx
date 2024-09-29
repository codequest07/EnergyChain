import * as React from "react";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M25.856 6.599a9.782 9.782 0 01-2.803.767 4.896 4.896 0 002.147-2.7 9.751 9.751 0 01-3.098 1.185 4.88 4.88 0 00-8.314 4.45A13.852 13.852 0 013.73 5.201a4.863 4.863 0 00-.66 2.454c0 1.691.86 3.186 2.17 4.06a4.861 4.861 0 01-2.21-.61v.061a4.882 4.882 0 003.914 4.785 4.911 4.911 0 01-2.205.084A4.883 4.883 0 009.3 19.425a9.792 9.792 0 01-7.223 2.02 13.802 13.802 0 007.478 2.194c8.975 0 13.883-7.435 13.883-13.883 0-.21-.006-.423-.015-.63A9.913 9.913 0 0025.857 6.6l-.001-.001z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

const MemoTwitterIcon = React.memo(TwitterIcon);
export default MemoTwitterIcon;
