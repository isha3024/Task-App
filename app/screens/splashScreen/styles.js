import { color, size } from "../../theme";

export const mainView = () => ({
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center'
})

export const lottieImage = () => ({
    width: size.moderateScale(200),
    height: size.moderateScale(200)
})