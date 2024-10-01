import { color, fonts, fontSize, size } from "../../theme"

export const mainView = (horizontal) => ({
  alignItems: 'flex-start',
  gap: size.moderateScale(10),
  width: size.moderateScale(150),
  height: horizontal ? size.moderateScale(100) :  size.moderateScale(270),
  marginRight: size.moderateScale(20),
  flexDirection: horizontal ? 'row' : 'column',
})

export const imageView = (horizontal) => ({
  width: horizontal ? size.moderateScale(100) : size.moderateScale(150),
  height: horizontal ? size.moderateScale(100) : size.moderateScale(150),
  borderRadius: size.moderateScale(10),
})

export const imageStyle = (horizontal) => ({
  width: horizontal ? size.moderateScale(100) : size.moderateScale(150),
  height: horizontal ? size.moderateScale(100) : size.moderateScale(150),
  borderRadius: size.moderateScale(10),
  objectFit: 'cover'
})

export const productDetails = (horizontal) => ({
  paddingHorizontal: size.moderateScale(10),
  width: '100%',
  justifyContent: horizontal ? 'space-between' : 'flex-start',
  height: '100%'
})

export const productName = () => ({
  fontSize: fontSize.littleMedium,
  color: color.darkTextColor,
  fontFamily: fonts.mPlusMedium
})

export const productPrice = () => ({
  fontSize: fontSize.small,
  color: color.textColor,
  fontFamily: fonts.mPlusBold
})

export const button = () => ({
  height: size.moderateScale(40),
  width: '100%',
  marginTop: size.moderateScale(10)
})

export const quanityView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10)
})

export const quanityBtn = () => ({
  width: size.moderateScale(40),
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(25),
  backgroundColor: color.borderColor
})

export const quanityText = () => ({
  marginHorizontal: size.moderateScale(5),
  fontSize: fontSize.middleMedium,
  color: color.secondary,
  fontFamily: fonts.mPlusBold
})