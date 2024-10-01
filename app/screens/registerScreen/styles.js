import { color, fonts, fontSize, size } from "../../theme";

export const screen = () => ({
  flex: 1,
})

export const mainView = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(25),
  backgroundColor: color.primary,
})

export const topView = () => ({
  alignItems: 'center',
  height: size.moderateScale(70),
  justifyContent: 'center'
})

export const headerText = () => ({
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.mPlusBold,
  color: color.secondary,
  textTransform: 'uppercase'
})

export const middleView = () => ({
  
})

export const formView = () => ({
  gap: size.moderateScale(15)
})

export const button = () => ({
  marginTop: size.moderateScale(20)
})