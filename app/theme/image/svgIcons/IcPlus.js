import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { size } from "../../Size"
import { color } from "../../Colors"

export const Plus = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M390 1049h-8v-8a4 4 0 10-8 0v8h-8a4 4 0 100 8h8v8a4 4 0 108 0v-8h8a4 4 0 100-8"
        transform="translate(-362 -1037)"
        fill={props.fill ?? color.darkTextColor}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}