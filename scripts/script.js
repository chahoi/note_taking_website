//dark theme button query selectors

const darkThemeButton = document.querySelector(".but_theme2");

const newNoteButton = document.querySelector(".but_theme1");

const saveButton = document.querySelector(".but_theme3");

const cancelButton = document.querySelector(".but_theme4");

const sideBar = document.querySelector(".sidenav");

const textArea = document.querySelector(".note_area");

const saveCancel = document.querySelector(".button_below");

const sideBarList = document.querySelector(".note_list");



//dark theme toggle 

function darkTheme(){
    textArea.classList.toggle("note_black");
    newNoteButton.classList.toggle("dark1");
    saveButton.classList.toggle("dark2");
    cancelButton.classList.toggle("dark3");
    sideBar.classList.toggle("sidebar_dark");
    // darkThemeButton.classList.toggle("dark1");
    document.body.classList.toggle("text_container_dark");
};


darkThemeButton.addEventListener("click", darkTheme);

//change text for dark theme button

function changeName(){
    if (darkThemeButton.textContent === "Dark Theme"){
        darkThemeButton.textContent = "Light Theme"
    }
    else if (darkThemeButton.textContent === "Light Theme"){
        darkThemeButton.textContent = "Dark Theme";
    };
};

darkThemeButton.addEventListener("click", changeName);

//cancel button to hide text area, save, and cancel buttons

function hideTextArea(){
    textArea.classList.add("note_text");
    saveCancel.classList.add("note_text")
}

cancelButton.addEventListener("click", hideTextArea);

//make new note button to make visible again.

function new_note(){
    if (textArea.classList.contains("note_text")){
        textArea.classList.remove("note_text")
        saveCancel.classList.remove("note_text")
    }
    else{
        textArea.value = '';
    }
}

newNoteButton.addEventListener("click", new_note);