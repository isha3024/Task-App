import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { size } from "../../Size"
import { color } from "../../Colors"

export const Minus = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 -12 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M442 1049h-24a4 4 0 100 8h24a4 4 0 100-8"
        transform="translate(-414 -1049)"
        fill={props.fill ?? color.darkTextColor}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}