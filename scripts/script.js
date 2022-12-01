//Select buttons

const new_note_button = document.querySelector(".but_theme1");

const dark_theme_button = document.querySelector(".but_theme2");

const save_button = document.querySelector(".but_theme3");

const cancel_button = document.querySelector(".but_theme4");

const side_bar = document.querySelector(".sidenav");

const text_area = document.querySelector(".note_area");

const save_cancel = document.querySelector(".button_below");

const side_bar_list = document.querySelector(".note_list");


// dark theme function//

function darkTheme(){
    new_note_button.classList.toggle("dark1");
    save_button.classList.toggle("dark2");
    cancel_button.classList.toggle("dark3");
    side_bar.classList.toggle("sidebar_dark");
    document.body.classList.toggle("text_container_dark");
};

dark_theme_button.addEventListener("click", darkTheme);


//change the button text when dark theme clicked//

function change_name(){
    if (dark_theme_button.textContent === "Dark Theme"){
        dark_theme_button.textContent = "Light Theme"
    }
    else if (dark_theme_button.textContent === "Light Theme"){
        dark_theme_button.textContent = "Dark Theme";
    };
};


dark_theme_button.addEventListener("click", change_name);