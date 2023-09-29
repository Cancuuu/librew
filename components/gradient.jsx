import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={474}
      height={976}
      viewBox="0 0 474 976"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        position: "absolute",
        left: -23,
        top: -20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 8,
      }}
    >
      <G filter="url(#filter0_d_47_580)" shapeRendering="crispEdges">
        <Path
          d="M105.729 840.432C100.585 823.577 86.713 780.025 22 742v209h430c-71.43-106.185-224.224-285.925-263.96-155.402-39.736 130.524-70.169 84.612-82.311 44.834z"
          fill="url(#paint0_angular_47_580)"
          fillOpacity={0.3}
        />
        <Path
          d="M105.729 840.432C100.585 823.577 86.713 780.025 22 742v209h430c-71.43-106.185-224.224-285.925-263.96-155.402-39.736 130.524-70.169 84.612-82.311 44.834z"
          fill="url(#paint1_linear_47_580)"
        />
      </G>
      <G filter="url(#filter1_d_47_580)" shapeRendering="crispEdges">
        <Path
          d="M368.271 129.568C423.5 129.568 387.287 32.975 452 71V19H22C47.327 56.65 95 8 133.5 64.5c62 109.5 126.813 194.146 152.46 109.902 39.736-130.524 40.721-44.834 82.311-44.834z"
          fill="url(#paint2_angular_47_580)"
          fillOpacity={0.3}
        />
        <Path
          d="M368.271 129.568C423.5 129.568 387.287 32.975 452 71V19H22C47.327 56.65 95 8 133.5 64.5c62 109.5 126.813 194.146 152.46 109.902 39.736-130.524 40.721-44.834 82.311-44.834z"
          fill="url(#paint3_linear_47_580)"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_angular_47_580"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(215.0004 77.00034 -158.4213 442.34408 237 874)"
        >
          <Stop stopColor="#FEFEFE" stopOpacity={0} />
          <Stop offset={0.0001} stopColor="#fff" stopOpacity={0.572917} />
          <Stop offset={1} stopColor="#DCDCDC" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="paint1_linear_47_580"
          x1={237}
          y1={684}
          x2={230}
          y2={1113.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.380208} stopColor="#FAFF00" />
          <Stop offset={1} stopColor="#BDFF00" stopOpacity={0.89} />
        </LinearGradient>
        <RadialGradient
          id="paint2_angular_47_580"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-162 125.537 25.66) scale(226.064 430.622)"
        >
          <Stop stopColor="#FEFEFE" stopOpacity={0} />
          <Stop offset={0.0001} stopColor="#fff" stopOpacity={0.572917} />
          <Stop offset={1} stopColor="#DCDCDC" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="paint3_linear_47_580"
          x1={237}
          y1={261.231}
          x2={242.762}
          y2={-128.443}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.380208} stopColor="#FAFF00" />
          <Stop offset={1} stopColor="#BDFF00" stopOpacity={0.89} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
