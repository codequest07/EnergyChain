import * as React from "react";

function SearchStatus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M18.333 33.35c8.294 0 15.017-6.723 15.017-15.017 0-8.293-6.723-15.016-15.017-15.016-8.293 0-15.017 6.723-15.017 15.016 0 8.294 6.724 15.017 15.017 15.017z"
        fill="#CD5334"
      />
      <path
        d="M23.333 17.083h-10a1.26 1.26 0 01-1.25-1.25c0-.683.567-1.25 1.25-1.25h10c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 01-1.25 1.25zM18.333 22.083h-5a1.26 1.26 0 01-1.25-1.25c0-.683.567-1.25 1.25-1.25h5c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 01-1.25 1.25zM36.65 31.583C36.1 30.567 34.934 30 33.367 30c-1.183 0-2.2.483-2.8 1.317-.6.833-.733 1.95-.367 3.066.717 2.167 1.967 2.65 2.65 2.734.1.016.2.016.317.016.733 0 1.867-.316 2.967-1.966.883-1.284 1.05-2.567.516-3.584z"
        fill="#CD5334"
      />
    </svg>
  );
}

const MemoSearchStatus = React.memo(SearchStatus);
export default MemoSearchStatus;
