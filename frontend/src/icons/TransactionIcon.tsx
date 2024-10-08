import * as React from "react";

function TransactionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <rect width={32} height={32} rx={16} fill="#ECFDF3" />
      <path
        d="M12.185 19.815a.433.433 0 01-.128-.309v-5.007a.44.44 0 01.437-.438.44.44 0 01.437.438v4.57h4.57a.44.44 0 01.438.437.44.44 0 01-.437.437h-5.008a.433.433 0 01-.31-.128z"
        fill="#027A48"
      />
      <path
        d="M12.255 19.745a.44.44 0 010-.618l6.941-6.942a.44.44 0 01.62 0c.168.169.168.45 0 .618l-6.943 6.942a.44.44 0 01-.618 0z"
        fill="#027A48"
      />
    </svg>
  );
}

const MemoTransactionIcon = React.memo(TransactionIcon);
export default MemoTransactionIcon;
