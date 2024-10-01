import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  alignItems: 'flex-start',
  gap: size.moderateScale(10),
  width: size.moderateScale(150),
  marginRight: size.moderateScale(20)
})

export const imageView = () => ({
  width: size.moderateScale(150),
  height: size.moderateScale(150),
  borderRadius: size.moderateScale(10),
})

export const imageStyle = () => ({
  width: size.moderateScale(150),
  height: size.moderateScale(150),
  borderRadius: size.moderateScale(10),
  objectFit: 'cover'
})

export const productDetails = () => ({
  paddingHorizontal: size.moderateScale(10),
  width: '100%'
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