import * as React from "react";

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 41 40" fill="none" {...props}>
      <path
        d="M12.167 28.333l16.667-16.666m0 0H12.167m16.667 0v16.666"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoArrowUpRight = React.memo(ArrowUpRight);
export default MemoArrowUpRight;
