import * as React from "react";

function NetflixLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 165 58" fill="none" {...props}>
      <path
        d="M45.523 41.252c-1.534.265-3.095.344-4.71.554l-4.925-14.127v14.732L31.5 43V16.004h4.093l5.599 15.313V16.004h4.334l-.003 25.248zm8.48-15.365l5.762-.079v4.217l-5.761.079v6.272l7.618-.448v4.06l-11.927.922V16.004h11.927v4.217h-7.618v5.666zm23.637-5.666h-4.47v19.397l-4.308.053V20.22h-4.47v-4.216h13.246l.002 4.217zm7 5.376h5.895v4.217H84.64v9.567h-4.228V16.004h12.034v4.217h-7.807v5.376zm14.805 10.094l7.323.369v4.164l-11.63-.553V16.004h4.306l.001 19.687zm10.957 4.822l4.227.316V16.004h-4.227v24.509zm23.098-24.51l-5.465 12.835L133.5 42.99l-4.845-.764-3.096-7.801-3.149 7.169-4.631-.554 5.545-12.361L118.317 16h4.63l2.827 7.09 3.015-7.09 4.711.003z"
        fill="#4D4D4D"
      />
    </svg>
  );
}

const MemoNetflixLogo = React.memo(NetflixLogo);
export default MemoNetflixLogo;
