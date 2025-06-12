document.addEventListener("DOMContentLoaded", () => {
  // Criando a div
  const bannerPolicy = document.createElement("div");
  bannerPolicy.classList.add("banner-policy");

  const textPolicy = document.createElement("span");
  textPolicy.textContent = `
        Respeitamos sua privacidade. Ao navegar, você aceita nossa:
    `;
  const linkPolicy = document.createElement("a");
  linkPolicy.textContent = "Política de Privacidade";
  linkPolicy.setAttribute("href", "/politica-de-privacidade/index.html");
  textPolicy.appendChild(linkPolicy);

  const divButton = document.createElement("div");
  const buttonAccept = document.createElement("button");
  const buttonClose = document.createElement("button");
  buttonAccept.classList.add("accept-policy");
  buttonClose.classList.add("close-policy");
  buttonAccept.textContent = `Prosseguir`;
  buttonClose.textContent = `Fechar`;

  divButton.appendChild(buttonAccept);
  divButton.appendChild(buttonClose);

  buttonAccept.addEventListener("click", () => {
    localStorage.setItem("accept_policy", "accept");
    bannerPolicy.style.display = "none";
  });

  buttonClose.addEventListener("click", () => {
    bannerPolicy.style.display = "none";
  });

  bannerPolicy.appendChild(textPolicy);
  bannerPolicy.appendChild(divButton);
  document.body.appendChild(bannerPolicy);

  if (localStorage.getItem("accept_policy") === "accept") {
    bannerPolicy.style.display = "none";
  }
});
