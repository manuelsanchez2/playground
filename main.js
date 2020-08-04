// import '/style.css';

const toggleButton = document.querySelector('.toggle')

let isDark = true;

toggleButton.addEventListener("click", () => {
    const rootStyle = document.documentElement.style;

    if (isDark) {
    rootStyle.setProperty('--main-bg-color', "#fff");
    rootStyle.setProperty('--main-font-color', "#000");
    } else {
    rootStyle.setProperty('--main-bg-color', "red");
    rootStyle.setProperty('--main-font-color', "grey");
    }
    isDark = !isDark;
});
