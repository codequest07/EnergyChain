import * as React from "react";

function Profile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M20 3.333c-4.367 0-7.917 3.55-7.917 7.917 0 4.283 3.35 7.75 7.717 7.9a1.35 1.35 0 01.366 0h.117a7.897 7.897 0 007.633-7.9c0-4.367-3.55-7.917-7.916-7.917z"
        fill="#CD5334"
      />
      <path
        d="M28.467 23.583c-4.65-3.1-12.234-3.1-16.917 0C9.433 25 8.267 26.917 8.267 28.967c0 2.05 1.166 3.95 3.266 5.35 2.334 1.566 5.4 2.35 8.467 2.35s6.133-.784 8.467-2.35c2.1-1.417 3.266-3.317 3.266-5.384-.016-2.05-1.166-3.95-3.266-5.35z"
        fill="#CD5334"
      />
    </svg>
  );
}

const MemoProfile = React.memo(Profile);
export default MemoProfile;
