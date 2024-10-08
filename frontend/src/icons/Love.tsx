import * as React from "react";

function Love(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.222 3.5a5.25 5.25 0 00-2.36.56A5.286 5.286 0 0012 5.626a5.278 5.278 0 00-2.649-1.883 5.245 5.245 0 00-3.242.03 5.28 5.28 0 00-2.613 1.934A5.336 5.336 0 002.5 8.812c0 6.367 8.787 11.387 9.157 11.6.105.059.223.09.343.088a.665.665 0 00.343-.089 27.661 27.661 0 004.53-3.329c3.07-2.78 4.627-5.56 4.627-8.27a5.33 5.33 0 00-1.546-3.756A5.26 5.26 0 0016.222 3.5z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

const MemoLove = React.memo(Love);
export default MemoLove;
