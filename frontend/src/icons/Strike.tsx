import * as React from "react";

function Strike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.983 11.725a.632.632 0 00-.398-.451l-4.58-.71 1.16-6.802a.638.638 0 00-.725-.753.63.63 0 00-.356.19l-8.908 9.5a.625.625 0 00-.016.852c.07.078.157.14.255.177l4.58.71-1.16 6.802a.638.638 0 00.326.689c.09.046.192.07.294.071a.63.63 0 00.461-.198l8.908-9.499a.625.625 0 00.16-.578z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

const MemoStrike = React.memo(Strike);
export default MemoStrike;
