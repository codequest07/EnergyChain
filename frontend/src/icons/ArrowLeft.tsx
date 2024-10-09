import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 17" fill="none" {...props}>
      <path
        d="M6.38 13.047a.495.495 0 01-.353-.147L1.98 8.853a.503.503 0 010-.706L6.027 4.1a.503.503 0 01.706 0 .503.503 0 010 .707L3.04 8.5l3.693 3.693a.503.503 0 010 .707.484.484 0 01-.353.147z"
        fill="#292D32"
      />
      <path
        d="M13.666 9H2.446a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h11.22c.274 0 .5.227.5.5s-.226.5-.5.5z"
        fill="#292D32"
      />
    </svg>
  );
}

const MemoArrowLeft = React.memo(ArrowLeft);
export default MemoArrowLeft;
