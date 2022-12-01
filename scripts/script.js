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

// hiding text and add new note //

const notesArray = [
    {
        title: "Note one", 
        body: "This is my first note"
    },
    {
        title: "Note two",
        body: "This is my second note"
    }
]

function new_note(){
    if (text_area.classList.contains("note_text")){
        text_area.classList.remove("note_text")
        save_cancel.classList.remove("note_text")
    }
    else{
        text_area.value = ''
    }
}

new_note_button.addEventListener("click", new_note);

function hide_text(){
    text_area.classList.add("note_text");
    save_cancel.classList.add("note_text")
}

cancel_button.addEventListener("click", hide_text);

//
