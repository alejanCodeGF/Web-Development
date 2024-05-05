const change_theme_btn = document.querySelector(".change_theme_btn");
const html = document.querySelector("html");


change_theme_btn.addEventListener ("click", () => {
    if (html.className == "dark"){
        html.className = "light";
        change_theme_btn.textContent = "dark mode";
    }
    else {
        html.className = "dark"
        change_theme_btn.textContent = "light mode";
    }
});