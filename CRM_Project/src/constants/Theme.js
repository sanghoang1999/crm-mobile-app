import { Dimensions } from "react-native";

export const COLORS = {
    WHITE:'#ffffff',
    APP_COLOR: '#536dfe',
    RED :'#ff0000',
    BLACK: '#000000',
    GREY: '#bcbcbc',
    BORDER_GREY: '#e6e6e6',
    PLACEHOLDER_APP_COLOR : '#E5E9FF',
    APP_COLOR_BLUR: '#f5f7ff',
    INPUT_BORDER: '#c4c4c4',
}
export const PADDING = {
    SMALL: 5,
    MEDIUM: 10,
    LARGE: 16,
}
export const SIZES = {
    SMALL: 10,
    MEDIUM: 16,
    LARGE : 24,
}
export const viewportWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;