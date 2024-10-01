import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { size } from "../../Size"
import { color } from "../../Colors"

export const Home = props => {
  return (
    <Svg
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521z"
        stroke={props.stroke ?? color.secondary}
        strokeWidth={1.5}
      />
      <Path
        d="M15 18H9"
        stroke={props.stroke ?? color.secondary}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
