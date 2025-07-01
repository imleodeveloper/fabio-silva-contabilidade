//EMAIL JS
/* ***********************************FUNÇÃO ENVIAR FORMULÁRIO     ********************************** */
emailjs.init("rqmgzplGEHnUy168R");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Verifica se o reCAPTCHA foi preenchido
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      document.querySelector(".error").classList.add("visible");
      document.querySelector(".error").textContent =
        "Por favor, complete o reCAPTCHA.";
      return;
    }

    // Se o reCAPTCHA for válido, prossegue com o envio
    emailjs
      .sendForm(
        "service_hc66l8p",
        "template_91okstr",
        this,
        "rqmgzplGEHnUy168R"
      )
      .then(() => {
        console.log("Email enviado com sucesso!");
        document.querySelector(".error").classList.remove("visible");
        window.location.href = "/contato/agradecimento.html"; // Redireciona para o agradecimento.html
      })
      .catch((error) => {
        console.error("Erro ao enviar email: ", error);
        document.querySelector(".error").classList.add("visible");
        document.querySelector(".error").textContent =
          "Erro ao enviar o formulário. Tente novamente.";
      });
  });

/* *********************************** ERRO SE NÃO HOUVER TEXTOS NAS INPUTS @EMAIL.COM CORRETO ************/
document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector("#name");
  const inputTel = document.querySelector("#phone");
  const inputEmail = document.querySelector("#email");
  const error = document.querySelector(".error");

  const whatsappBtn = document.querySelector(".btn-whatsapp");
  const phoneBtn = document.querySelector(".btn-phone");
  const hiddenInput = document.querySelector("#contact-preference");
  const form = document.querySelector("#contact-form");

  const toggleButtons = (selectedBtn, value) => {
    //Marca visualmente o botão selecionado
    [whatsappBtn, phoneBtn].forEach((btn) => btn.classList.remove("selected"));
    selectedBtn.classList.add("selected");

    //Atualiza o valor do campo oculto
    hiddenInput.value = value;

    //Faz a submissão manual do formulário
    form.requestSubmit();
  };

  whatsappBtn.addEventListener("click", () => {
    toggleButtons(whatsappBtn, "WhatsApp");
  });

  phoneBtn.addEventListener("click", () => {
    toggleButtons(phoneBtn, "Telefone");
  });

  inputName.addEventListener("change", () => {
    if (inputName.value.trim().length > 6) {
      error.classList.remove("visible");
      whatsappBtn.classList.remove("disabled");
      phoneBtn.classList.remove("disabled");
    } else {
      error.classList.add("visible");
      whatsappBtn.classList.add("disabled");
      phoneBtn.classList.add("disabled");
      error.textContent = "Informe o nome completo.";
    }
  });

  inputTel.addEventListener("change", () => {
    const checkTel = (tel) => {
      const telValid = /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/;
      return telValid.test(tel);
    };
    const checkInputTel = checkTel(inputTel.value);

    if (!checkInputTel) {
      error.classList.add("visible");
      error.textContent = "Informe o telefone correto.";
      whatsappBtn.classList.add("disabled");
      phoneBtn.classList.add("disabled");
    } else {
      error.classList.remove("visible");
      whatsappBtn.classList.remove("disabled");
      phoneBtn.classList.remove("disabled");
    }
  });

  inputEmail.addEventListener("change", () => {
    const checkEmail = (email) => {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailValid.test(email);
    };
    const checkInputEmail = checkEmail(inputEmail.value);
    if (checkInputEmail) {
      error.classList.remove("visible");
      whatsappBtn.classList.remove("disabled");
      phoneBtn.classList.remove("disabled");
    } else {
      error.classList.add("visible");
      whatsappBtn.classList.add("disabled");
      phoneBtn.classList.add("disabled");
      error.textContent = "Informe o email correto";
    }
  });
});
/* *********************************** ERRO SE NÃO HOUVER TEXTOS NAS INPUTS @EMAIL.COM CORRETO ************/
