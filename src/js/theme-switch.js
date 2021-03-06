import { classBody } from 'babel-types';
import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT);

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.checkboxSwitch.checked = true;
}

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
