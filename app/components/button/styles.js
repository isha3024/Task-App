import { color, fonts, fontSize, size } from "../../theme"

export const btnContainer = () => ({
    backgroundColor: color.secondary,
    height: size.moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: size.moderateScale(10)
})

export const btnText = () => ({
    fontSize: fontSize.littleMedium,
    fontFamily: fonts.mPlusBold,
    color: color.primary,
    textTransfrom: 'capitalize'
})