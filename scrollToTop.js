// Button ScrollToTop
document.addEventListener("DOMContentLoaded", () => {

    //Cria o elemento
    const divScroll = document.createElement("div");
    divScroll.classList.add("scroll-to-top");

    // Link com Icon
    const linkScroll = document.createElement("a");
    linkScroll.setAttribute("href", "#scrollToTop");
    linkScroll.setAttribute("aria-label", "Botão de voltar ao ínicio");
    const iconScroll = document.createElement("i");
    iconScroll.classList.add("mdi", "mdi-chevron-up");
    
    //Adiciona Link e Icon na Div
    linkScroll.appendChild(iconScroll);
    divScroll.appendChild(linkScroll);

    window.addEventListener("scroll", () => {
        if(window.scrollY < 200){
            divScroll.classList.add("active");
        } else{
            divScroll.classList.remove("active");
        };
    });

    //Adiciona O botão ao body
    document.body.appendChild(divScroll)
});