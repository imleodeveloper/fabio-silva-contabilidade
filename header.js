document.addEventListener("DOMContentLoaded", () => {


    //MENU DROPDOWN
    const navLinkDropdown = document.querySelectorAll(".nav-link.dropdown");

    navLinkDropdown.forEach((link) => {
        const ulNavDropdown = link.querySelector(".nav-dropdown");

        link.addEventListener("mouseenter", () => {
            ulNavDropdown.classList.add("active");
        });

        link.addEventListener("mouseleave", () => {
            ulNavDropdown.classList.remove("active");
        })

        link.addEventListener("mouseleave", () => {
            ulNavDropdown.classList.remove("active");
        })
    });


    const navMain = document.querySelector("header nav");

    //RETIRA O TOP-HEADER
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            navMain.classList.add("active");
        } else{
            navMain.classList.remove("active");
        }
    
    })


    // Toggle e menu mobile
    const toggleMobile = document.querySelector(".toggle-mobile");
    const navList = document.querySelector(".menu-desktop .nav-list");
    toggleMobile.addEventListener("click", () => {
        navList.classList.toggle("active");
    })
});