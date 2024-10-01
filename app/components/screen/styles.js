import {color} from '../../theme';
export const full = (statusBarHeight) => ({
  flexGrow: 1,
  marginTop: statusBarHeight,
});
export const mainContainer = secondary => ({
  flex: 1,
  backgroundColor: secondary ? color.primary : color.primary,
});
export const container = (bgColor) => ({
    flex: 1,
    backgroundColor: bgColor ?? color.primary,
    overflow: 'hidden',
})