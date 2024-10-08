import * as React from "react";

function Filters(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M5 10h10M2.5 5h15m-10 10h5"
        stroke="#21250F"
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoFilters = React.memo(Filters);
export default MemoFilters;
