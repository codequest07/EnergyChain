import * as React from "react";

function ShieldSecurity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M18.267 3.517L9.1 6.95c-1.75.667-3.183 2.733-3.183 4.617v13.5c0 1.35.883 3.133 1.967 3.933l9.166 6.85c1.617 1.217 4.267 1.217 5.884 0L32.1 29c1.084-.817 1.967-2.583 1.967-3.933v-13.5c0-1.867-1.433-3.95-3.183-4.6l-9.167-3.434c-.933-.366-2.5-.366-3.45-.016z"
        fill="#CD5334"
      />
      <path
        d="M24.166 17.5c0-2.3-1.866-4.167-4.166-4.167a4.168 4.168 0 00-4.167 4.167c0 1.867 1.233 3.417 2.917 3.95v4.383c0 .684.566 1.25 1.25 1.25a1.26 1.26 0 001.25-1.25V21.45c1.683-.533 2.916-2.083 2.916-3.95z"
        fill="#CD5334"
      />
    </svg>
  );
}

const MemoShieldSecurity = React.memo(ShieldSecurity);
export default MemoShieldSecurity;
