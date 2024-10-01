import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(10),
  marginTop: size.moderateScale(30),
  paddingBottom: size.moderateScale(60)
})

export const topView = () => ({
  paddingVertical: size.moderateScale(10)
})

export const headerText = () => ({
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.mPlusBold,
  color: color.secondary
})

export const bottomView = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(10),
  marginTop: size.moderateScale(30)
})

export const noCartItemsView = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

export const noCartItemsText = () => ({
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.mPlusBold,
  color: color.secondary
})

export const orderTotalContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: size.moderateScale(20)
})

export const darkText = () => ({
  color: color.secondary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.mPlusMedium
})

export const totalAmountText = () => ({
  color: color.darkTextColor,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.mPlusBold
})