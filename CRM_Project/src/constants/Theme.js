import { Dimensions } from "react-native";

export const COLORS = {
    WHITE:'#ffffff',
    APP_COLOR: '#536dfe',
    RED :'#ff0000',
    BLACK: '#000000',
    GREY: '#bcbcbc',
    PLACEHOLDER_APP_COLOR : '#E5E9FF',
}
export const PADDING = {
    SMALL: 5,
    MEDIUM: 10,
}
export const SIZES = {
    SMALL: 10,
    MEDIUM: 16,
    LARGE : 24,
}
export const viewportWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;