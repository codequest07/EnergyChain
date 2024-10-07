import * as React from "react";

function Devices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M10.707 11.167H4.24C2.487 11.047 1.7 9.7 1.7 8.5c0-1.053.607-2.22 1.927-2.567-.347-1.446-.027-2.8.913-3.786C5.633 1 7.38.547 8.893 1.013c1.374.42 2.34 1.54 2.7 3.094 1.194.286 2.147 1.193 2.527 2.446.42 1.374.033 2.78-1 3.68-.647.6-1.507.934-2.413.934zM4.267 6.84c-1.074.087-1.554.893-1.554 1.66 0 .773.487 1.587 1.574 1.667H10.713c.654 0 1.28-.24 1.754-.68.88-.767.94-1.867.706-2.647-.24-.78-.9-1.66-2.06-1.807a.502.502 0 01-.433-.413c-.227-1.367-.967-2.307-2.073-2.647-1.14-.346-2.507.007-3.334.874-.806.846-.993 2.026-.526 3.333a.5.5 0 01-.3.64c-.06.013-.114.027-.18.02z"
        fill="#575757"
      />
      <path
        d="M8 13.167a.504.504 0 01-.5-.5v-2c0-.274.227-.5.5-.5s.5.226.5.5v2c0 .273-.227.5-.5.5z"
        fill="#575757"
      />
      <path
        d="M8 15.833a1.832 1.832 0 110-3.666 1.832 1.832 0 110 3.666zm0-2.666a.834.834 0 100 1.667.834.834 0 000-1.667z"
        fill="#575757"
      />
      <path
        d="M12 14.5H9.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5H12c.273 0 .5.227.5.5s-.227.5-.5.5zM6.667 14.5H4a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5z"
        fill="#575757"
      />
    </svg>
  );
}

const MemoDevices = React.memo(Devices);
export default MemoDevices;
