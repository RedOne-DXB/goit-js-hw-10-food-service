import { classBody } from 'babel-types';
import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    refs.body.setAttribute('theme', currentTheme);
    if (currentTheme === Theme.DARK) {
    refs.checkboxSwitch.checked = true;
    refs.body.classList.add(Theme.DARK);
    }
}

// if (localStorage.getItem('theme') === Theme.DARK) {
//     refs.body.classList.add(Theme.DARK);
//     refs.checkboxSwitch.checked = true;
// } else {
//     toggleClass(Theme.DARK, Theme.LIGHT);
//     refs.checkboxSwitch.checked = false;
// };




const setLocalStorage = theme => {
    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        console.log(error);
    }
};

const toggleClass = (addClass, removeClass) => {
    refs.body.classList.add(addClass);
    refs.body.classList.remove(removeClass);
}

refs.checkboxSwitch.addEventListener('change', () => {

    if (refs.checkboxSwitch.checked) {
        toggleClass(Theme.DARK, Theme.LIGHT)
        setLocalStorage(Theme.DARK);
    } else {
        toggleClass(Theme.LIGHT, Theme.DARK)
        setLocalStorage(Theme.LIGHT);
    };

});

