import { color, fonts, fontSize, size } from "../../theme"

export const screen = () => ({
	flex: 1,
})

export const mainView = () => ({
	flex: 1,
	paddingHorizontal: size.moderateScale(25),
	backgroundColor: color.primary,
})

export const topView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  height: size.moderateScale(70),
  justifyContent: 'flex-start',
})

export const backArrowView = () => ({
  width: size.moderateScale(30),
  height: size.moderateScale(30),
  alignItems: 'center',
  justifyContent:'center',
})

export const headerText = () => ({
  flex: 1,
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.mPlusBold,
  color: color.secondary,
  textTransform: 'uppercase',
  textAlign: 'center',
})

export const middleView = () => ({
  
})

export const formView = () => ({
  gap: size.moderateScale(15)
})

export const button = () => ({
  marginTop: size.moderateScale(20)
})