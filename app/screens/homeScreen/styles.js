import { color, fonts, fontSize, size } from "../../theme"

export const screen = () => ({
  flex: 1
})

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.primary,
  marginTop: size.moderateScale(20)
})

export const topView = () => ({
  paddingVertical: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(25),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const name = () => ({
 fontSize: fontSize.littleMedium,
 fontFamily: fonts.mPlusMedium,
 color: color.darkTextColor
})

export const rightIconView = () => ({
  width: size.moderateScale(30),
  height: size.moderateScale(30),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(25),
  backgroundColor: color.errorBg
})

export const bottomView = () => ({
  flex: 1,
  marginTop: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(25),
})

export const header = () => ({
  fontSize: fontSize.middleSmallMedium,
  color: color.secondary,
  fontFamily: fonts.mPlusBold
})

export const flatListView = () => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: size.moderateScale(10),
  paddingBottom: size.moderateScale(100)
})

export const error = () => ({
  fontSize: fontSize.middleSmallMedium,
  color: color.secondary,
  fontFamily: fonts.mPlusBold
})