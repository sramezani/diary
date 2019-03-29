
/**
 * App Theme - Colors
 *
 * */


const colorsRepo = {
    primary: "#a334a3",
    secondary: "#e572e5",
    black: '#252525',
    white: '#efefef',
    red: '#860f0f',
    green: '#a2bbbb',
    darkGreen: '#1f3737',
    grey: '#d5d5d5'
};

const text = {
    primary: colorsRepo.red,
    secondary: colorsRepo.darkGreen,
    white: colorsRepo.white,
    black: colorsRepo.black
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
