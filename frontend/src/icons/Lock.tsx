import * as React from "react";

function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8c0-2.762 2.238-5 5-5s5 2.238 5 5v1h2c1.5 0 2 .72 2 1.6v9.5a2 2 0 01-2 2H5a2 2 0 01-2-2v-9.5C3 9.72 3.5 9 4.85 9H7V8zm8 0v1H9V8c0-1.658 1.342-3 3-3s3 1.342 3 3zm-3 4c-1.105 0-2.056.897-2 2 .037.73.409 1.3 1 1.582V17c0 .414.177 1.5 1 1.5s1-1.086 1-1.5v-1.418c.591-.281.963-.852 1-1.582.056-1.103-.895-2-2-2z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

const MemoLock = React.memo(Lock);
export default MemoLock;
