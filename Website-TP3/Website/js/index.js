const toggleMenu = () => {
    if(document.getElementById("burguer-menu").classList.contains("active")){
        document.getElementById("burguer-menu").classList.remove("active");
        document.getElementById("navigation").classList.remove("active");
    } else {
        document.getElementById("burguer-menu").classList.add("active");
        document.getElementById("navigation").classList.add("active");
    }
}