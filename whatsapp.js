// Button WhatsApp
document.addEventListener("DOMContentLoaded", () => {
    //Cria o elemento
    const divWhatsApp = document.createElement("div");
    divWhatsApp.classList.add("whatsapp-banner");

    // Link com Icon
    const linkWhatsApp = document.createElement("a");
    linkWhatsApp.setAttribute("href", "https://wa.me/5532999511666");
    linkWhatsApp.setAttribute("target", "_blank");
    linkWhatsApp.setAttribute("rel", "noopener noreferrer");
    linkWhatsApp.setAttribute("aria-label", "Link para WhatsApp");
    
    const iconWhatsApp = document.createElement("i");
    iconWhatsApp.classList.add("mdi", "mdi-forum")
    
    //Adiciona Link e Icon na Div
    linkWhatsApp.appendChild(iconWhatsApp);
    divWhatsApp.appendChild(linkWhatsApp);
    //Adiciona O botão ao body
    document.body.appendChild(divWhatsApp)
});