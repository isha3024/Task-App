import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
	gap: size.moderateScale(8),
	paddingBottom: size.moderateScale(15),
})

export const label = () => ({
	fontSize: fontSize.littleMedium,
	fontFamiy: fonts.mPlusRegular,
	color: color.darkTextColor
})

export const textInputView = (error) => ({
	borderWidth: size.moderateScale(1),
	borderColor: error ? color.error : color.borderColor,
	borderRadius: size.moderateScale(10),
	paddingHorizontal: size.moderateScale(10),
	height: size.moderateScale(50),
	flexDirection: 'row',
})

export const textInput = () => ({
	flex: 1,
	fontSize: fontSize.littleMedium,
	fontFamiy: fonts.mPlusRegular,
	color: color.textColor
})

export const rightIconView = () => ({
	width: size.moderateScale(40),
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center'
})

export const errorView = () => ({
	position: 'absolute',
	bottom: size.moderateScale(0),
	left: size.moderateScale(4)
})

export const errorText = () => ({
	fontSize: fontSize.verySmall,
	fontFamiy: fonts.mPlusRegular,
	color: color.error,
})