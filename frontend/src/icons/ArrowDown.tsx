import * as React from "react";

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 15" fill="none" {...props}>
      <path
        d="M10.453 5.272H3.547c-.56 0-.84.676-.444 1.073l3.022 3.022a1.243 1.243 0 001.756 0l1.149-1.15 1.873-1.872a.631.631 0 00-.45-1.073z"
        fill="#21250F"
      />
    </svg>
  );
}

const MemoArrowDown = React.memo(ArrowDown);
export default MemoArrowDown;
