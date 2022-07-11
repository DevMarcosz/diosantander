function darkMode(){
    var element = document.getElementsByTagName('body')[0];
    var element2 = document.getElementsByClassName('group')[0];
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
}