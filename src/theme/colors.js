
/**
 * App Theme - Colors
 *
 * */


const colorsRepo = {
    primary: "#974279",
    primaryDark: '#77325f',
    secondary: "#cc70ae",
    bg: "#e59ece",
    black: '#252525',
    textBlack: '#676767',
    white: '#efefef',
    red: '#860f0f',
    green: '#779317',
    darkGreen: '#1f3737',
    grey: '#d5d5d5',
    darkgray: '#b0adbc',
    active: '#fff',
    deactive: '#7f6b75'
};

const text = {
    primary: colorsRepo.primary,
    secondary: colorsRepo.secondary,
    white: colorsRepo.white,
    black: colorsRepo.black,
    textBlack: colorsRepo.textBlack,
    green: colorsRepo.green,
};

const background = {
    primary: colorsRepo.red,
    secondary: colorsRepo.green
};

const border = {
    primary: colorsRepo.grey,
    secondary: colorsRepo.green
};

const shadow = {

};

export default {
    ...colorsRepo,
    text,
    background,
    border,
    shadow
};
