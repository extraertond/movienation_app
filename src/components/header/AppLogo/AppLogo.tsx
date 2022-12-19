import { SvgIcon, SvgIconProps } from "@mui/material";

const AppLogo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <radialGradient
        id="SVGID_1_"
        cx="101"
        cy="51.4762"
        r="79.2081"
        gradientTransform="matrix(1 0 0 0.5 0 25.7385)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#F5C518" }} />
        <stop offset="0.8296" style={{ stopColor: "#F5C518" }} />
        <stop offset="1" style={{ stopColor: "#F5B918" }} />
      </radialGradient>
      <path
        style={{ fill: "url(#SVGID_1_)" }}
        d="M173.68,101.95H28.32C13.23,101.95,1,89.72,1,74.63V28.32C1,13.23,13.23,1,28.32,1h145.35
	C188.77,1,201,13.23,201,28.32v46.31C201,89.72,188.77,101.95,173.68,101.95z"
      />
      <text
        transform="matrix(0.85 0 0 1 12.5219 69.5146)"
        style={{ fontFamily: "Haettenschweiler", fontSize: "55px", color: "black" }}
      >
        MovieNation
      </text>
    </SvgIcon>
  );
};

export default AppLogo;
