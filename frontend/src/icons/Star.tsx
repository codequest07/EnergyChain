import * as React from "react";

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M8.01 2.047l1.026 2.054c.14.286.513.56.828.612l1.86.31c1.19.198 1.47 1.061.613 1.913l-1.446 1.446c-.245.245-.38.718-.304 1.056l.415 1.791c.326 1.418-.426 1.966-1.68 1.225l-1.745-1.032c-.315-.187-.834-.187-1.155 0l-1.744 1.032c-1.248.741-2.006.187-1.68-1.225l.414-1.79c.076-.339-.058-.812-.303-1.057L1.662 6.936c-.851-.852-.577-1.715.613-1.914l1.86-.309c.31-.052.683-.326.823-.612l1.027-2.054c.56-1.114 1.47-1.114 2.024 0z"
        fill="#FDCC4F"
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;
