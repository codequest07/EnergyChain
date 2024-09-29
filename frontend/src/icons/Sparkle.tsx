import * as React from "react";

function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_639_297)">
        <mask
          id="prefix__a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}>
          <path d="M24 0H0v24h24V0z" fill="#fff" />
        </mask>
        <g mask="url(#prefix__a)" fill="#1A1A1A">
          <path d="M17.91 2.552c0-.25-.17-.467-.412-.528l-.298-.075A1.7 1.7 0 0115.963.711l-.075-.298a.545.545 0 00-1.056 0l-.075.298A1.701 1.701 0 0113.52 1.95l-.298.075a.545.545 0 000 1.057l.298.075a1.7 1.7 0 011.237 1.238l.074.298a.544.544 0 001.056 0l.075-.298A1.701 1.701 0 0117.2 3.156l.298-.075a.545.545 0 00.412-.529zM24 7.5a.747.747 0 00-.566-.725l-.41-.102a2.333 2.333 0 01-1.697-1.698l-.102-.41a.747.747 0 00-1.45 0l-.102.41a2.332 2.332 0 01-1.698 1.698l-.41.102a.747.747 0 000 1.45l.41.102a2.333 2.333 0 011.698 1.698l.102.41a.747.747 0 001.45 0l.102-.41a2.333 2.333 0 011.698-1.698l.41-.102A.747.747 0 0024 7.5zM9.713 4.514c.27-.685 1.304-.685 1.574 0l1.95 5.155c.085.216.266.948.496 1.028l4.72 2.079a.77.77 0 010 1.476l-4.72 1.583c-.23.08-.411.812-.496 1.027l-1.95 4.624c-.27.685-1.303.685-1.574 0l-1.95-4.624c-.084-.215-.265-.948-.495-1.027l-4.72-1.583a.77.77 0 010-1.476l4.72-2.08c.23-.079.41-.811.496-1.027l1.95-5.155z" />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0_639_297">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSparkle = React.memo(Sparkle);
export default MemoSparkle;
