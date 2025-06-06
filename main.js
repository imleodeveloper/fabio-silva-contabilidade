import { posts } from "./lib/posts.js";

document.addEventListener("DOMContentLoaded", () => {
    // Slider Clients - About Home Page
    const sliderClients = document.querySelector(".slider-clients .slide");
    const clientsForSlider = [
        {
            id: 1,
            img: "/images/Gota-Web-Sem-Fundo.webp",
            title: "Empresa Gota Web",
            alt: "Logo da empresa Gota Web sem fundo",
        },
        {
            id: 2,
            img: "/images/LeMontt-Sem-Fundo.webp",
            title: "Empresa LE MONTT",
            alt: "Logo da empresa LE MONTT sem fundo",
        },
        {
            id: 3,
            img: "/images/Mania-De-Folia-Sem-Fundo.webp",
            title: "Empresa Mania de Folia",
            alt: "Logo da empresa Mania de Folia sem fundo",
        },
        {
            id: 4,
            img: "/images/LOGO-LGA-ORIGINAL-SEM-FUNDO.webp",
            title: "Empresa LG Engenharia e Terraplanagem",
            alt: "Logo da empresa LG Engenharia e terraplanagem sem fundo",
        },
        {
            id: 5,
            img: "/images/Higienizacao-De-Estofados-Sem-Fundo.webp",
            title: "Empresa Higieniza +",
            alt: "Logo da empresa Higieniza + sem fundo",
        },
        {
            id: 6,
            img: "/images/up-service-sem-fundo.webp",
            title: "Empresa LP Service",
            alt: "Logo da empresa LP Service sem fundo",
        },
        {
            id: 7,
            img: "/images/tech_imports_sem-fundo.webp",
            title: "Empresa Tech Imports",
            alt: "Logo da empresa Tech Imports sem fundo",
        },
        {
            id: 8,
            img: "/images/TR-Gomes-sem-fundo.webp",
            title: "Empresa TR Gomes",
            alt: "Logo da empresa TR Gomes sem fundo",
        },
        {
            id: 9,
            img: "/images/MP-Eventos-sem-fundo.webp",
            title: "Empresa MP Eventos",
            alt: "Logo da empresa MP Eventos sem fundo",
        },
    ];

    sliderClients.innerHTML = "";
    [...clientsForSlider, ...clientsForSlider, ...clientsForSlider].forEach((client) => {
        sliderClients.innerHTML += `
            <div class="client">
                <img src="${client.img}" alt="${client.alt}" title="${client.title}" loading="lazy">
            </div>
        `;
    });



    // Services Home Page
    //Section main
    const serviceSection = document.querySelector(".services-home section");
    
    //Content onde irá ficar os services
    const servicesContent = document.querySelector(".services-home section .content");
    
    // Lista de serviços
    const servicesArray = [
        {
            id: 1,
            service: "MEI - Micro Empreendedor Individual",
            list: `
                <li>Abertura;</li>
                <li>Alteração e baixa;</li>
                <li>Declaração anual;</li>
                <li>Assessoria contábil;</li>
                <li>Acompanhamento e controle através do livro caixa;</li>
            `,
            //text: "Abertura, alteração e baixa. Declaração anual;",
            icon: "mdi mdi-briefcase-account",
            link: "/servicos/mei.html",
        },
        {
            id: 2,
            service: "Imposto de Renda de Pessoa Física",
            list: `
                <li>Atendimento personalizado para a confecção do IRPF;</li>
                <li>Acompanhamento anual dos resultados da DIRPF;</li>
                <li>Assessoria e consultoria nos parcelamentos de pessoas físicas;</li>
            `,
            //text: "Atendimento personalizado para a confecção do IRPF;Acompanhamento anual dos resultados da DIRPF; Assessoria e consultoria nos parcelamentos de pessoas físicas.",
            icon: "mdi mdi-cash-check",
            link: "#",
        },
        {
            id: 3,
            service: "Carnê Leão de Profissionais Liberais",
            text: "Livro caixa e imposto de renda dos profissionais liberais (médicos, dentistas, engenheiros, advogados, aplicando legislação vigente).",
            icon: "mdi mdi-file-certificate-outline",
            link: "#",
        },
        {
            id: 4,
            service: "Abertura de Empresas",
            list: `
                <li>Elaboração de contratos;</li>
                <li>Alterações contratuais e consolidações;</li>
                <li>Encaminhamento e acompanhamento junto aos órgãos competentes;</li>
            `,
            //text: "Elaboração de contratos e alterações contratuais e consolidações; Encaminhamento e acompanhamento junto aos órgãos competentes.",
            icon: "mdi mdi-domain-plus",
            link: "#",
        },
        {
            id: 5,
            service: "Encerramento de Empresas",
            list: `
                <li>Distratos sociais;</li>
                <li>Encaminhamento e acompanhamento de solicitação de baixa junto aos órgãos compoetentes;</li>
                <li>Certidões de baixas;</li>
            `,
            //text: "Distratos Sociais; Encaminhamento e acompanhamento de solicitação de baixa junto aos órgãos competentes; Certidões de baixas.",
            icon: "mdi mdi-domain-remove",
            link: "#",
        },
        {
            id: 6,
            service: "Área de Departamento Pessoal",
            list: `
                <li>Elaboração da folha de pagamento;</li>
                <li>Preenchimento e revisão de declarações acessórias;</li>
                <li>Análise de folha de pagamento;</li>
            `,
            //text: "Elaboração da folha de pagamento; Preenchimento e revisão de declarações acessórias; Análise de folha de pagamento.",
            icon: "mdi mdi-account-group-outline",
            link: "#",
        },
        {
            id: 7,
            service: "Contabilidade e Área Fiscal",
            list: `
                <li>Escrituração contábil;</li>
                <li>Preparação e revisão de declarações acessórias;</li>
                <li>Emissão de balancetes e demonstrações financeiras;</li>
                <li>Escrituração fiscal;</li>
                <li>Preparação de livros fiscais;</li>
            `,
            //text: "Escrituração contábil; Preparação e revisão de declarações acessórias; Emissão de balancetes e demonstrações financeiras; Escrituração fiscal; Preparação de livros fiscais.",
            icon: "mdi mdi-file-chart",
            link: "#",
        },
        {
            id: 8,
            service: "Doméstica",
            list: `
                <li>Folha de pagamento;</li>
                <li>E-Social;</li>
                <li>Geração DAE (guia de pagamento);</li>
                <li>Rescisão;</li>
            `,
            //text: "Folha de pagamento; E-social, Geração DAE ( guia de pagamento); Rescisão.",
            icon: "mdi mdi-file-document-outline",
            link: "#",
        },
        {
            id: 9,
            service: "Contabilidade Consultiva",
            list: `
                <li>Assessoria para gestão financeira;</li>
                <li>Análise de registro contábeis;</li>
                <li>Preparação de demonstrações financeiras;</li>
                <li>Gerenciamento de fluxo de caixa;</li>
            `,
            //text: "Acessória para gestão financeira; Análise de registros contábeis, Preparação de demonstrações financeiras; Gerenciamento de fluxo de caixa.",
            icon: "mdi mdi-chart-line-variant",
            link: "#",
        }
    ];

    // Zera o HTML de servicesContent caso tenha
    servicesContent.innerHTML = "";

    //Para cada objeto da lista
    servicesArray.forEach((service) => {

        //Criação do container de cada serviço
        const serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service");

        //  Icon
        const iconDiv = document.createElement("div");
        iconDiv.classList.add("icon");
        iconDiv.innerHTML = `<i class="${service.icon}"></i>`;

        // Text
        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.innerHTML = `<h3>${service.service}</h3>`;

        // AppendChild
        serviceDiv.appendChild(iconDiv);
        serviceDiv.appendChild(textDiv);
        servicesContent.appendChild(serviceDiv);


        //Evento de clique
        serviceDiv.addEventListener("click", () => {
            const existing = document.querySelector(".service-expanded");
            if(existing) existing.remove();

            //Cria os elementos
            const expandedWrapper = document.createElement("div");
            expandedWrapper.classList.add("service-expanded");
            
            expandedWrapper.innerHTML += `
                <div class="expanded">
                    <div class="icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <div class="text">
                        <h3>${service.service}</h3>
                        <p>${service.text ? service.text : ""}</p>
                        <ul>${service.list ? service.list : ""}</ul>

                        <div class="btn-link">
                            <a href="${service.link}">Saiba mais</a>
                        </div>
                    </div>
                    <div class="btn-close">
                        <i class="mdi mdi-close"></i>
                    </div>
                </div>
            `;
            serviceSection.appendChild(expandedWrapper);
            expandedWrapper.scrollIntoView({behavior: "smooth", block: "center"});


            const btnClose = document.querySelector(".btn-close");   
            btnClose.addEventListener("click", () => {
                expandedWrapper.remove();
            })
        });
    });




    // Section Feedback Home Page
    const feedbackContainer = document.querySelector(".feedbacks-home section .content .container");
    const feedbackWrapper = document.querySelector(".feedbacks-home section .content .container .feedbacks-wrapper");
    const feedbacks = [
        {
            id: 1,
            img: "/images/feedback-noPhoto.webp",
            name: "Isaac Dimas",
            text: `“Fabinho” ou Fábio né… rs <br>Um profissional exemplar… não  há problemas que não se transformem em soluções e possibilidades quando você tem um contador de confiança ao seu lado. Eu e minha família só temos agradecer e celebrar a sua presença na nossa empresa e vida pessoal, não só hoje, mas todos os dias. Muito obrigado pela sua responsabilidade, parceria e dedicação, a qual é essencial para nós! Tmj sempre meu amigo !!!`,
        },
        {
            id: 2,
            img: "/images/Higienizacao-De-Estofados-Redonda.webp",
            name: "Higieniza +",
            alt: "Logo empresa Higieniza +",
            title: "Empresa Higieniza +",
            text: "Olá, sou Rodrigo Malaquias proprietário da Higieniza + , empresa especializada em higienização de estofados desde 2014. É com enorme satisfação que tenho a Fábio Silva Contabilidade como parceiro desde o início da minha jornada empreendedora, sempre me atendendo com cordialidade, agilidade, ética e respeito. Obrigado Fábio Silva, nossa parceria é vitalícia.",
        },
        
        {
            id: 3,
            img: "/images/Mania-De-Folia-Redonda.webp",
            name: "Mania de Folia",
            alt: "Logo empresa Mania de Folia",
            title: "Empresa Mania de Folia",
            text: "A ajuda e o suporte do Fábio foram essenciais para a minha empresa. A dedicação e a atenção que ele oferece me deixam segura e confiante para seguir em frente!",
        },
        {
            id: 4,
            img: "/images/LOGO-LGA-ORIGINAL-FEEDBACK.webp",
            name: "LG Engenharia",
            alt: "Logo empresa LG Engenharia & Terraplanagem",
            title: "Empresa LG Engenharia & Terraplanagem",
            text: "A Fábio Contabilidade é uma empresa que mudou o dia a dia da empresa LG Terraplanagem, uma empresa que tem a expertise em contabilidade ajuda muito, pois temos todos os suportes necessário,  a Fábio Contabilidade conta com melhores profissionais qualificados, isso ajuda a organização da empresa e sabemos que estamos respaldado em nossa parte contábil.",
        },
        {
            id: 5,
            img: "/images/LeMontt.webp",
            name: "LE MONTT",
            alt: "Logo empresa LE MONTT",
            title: "Empresa LE MONTT",
            text: "Com a Fábio Silva Contabilidade, encontramos muito mais do que serviços contábeis: encontramos uma parceria. Eles estão sempre presentes, oferecendo suporte, orientação clara e comprometimento em cada etapa. É esse apoio constante que nos dá tranquilidade para focar no crescimento da nossa empresa.",
        },
        {
            id: 6,
            img: "/images/Gota-Web-Fundo-Azul.webp",
            name: "Gota Web",
            alt: "Logo empresa Gota Web fundo azul",
            title: "Empresa Gota Web",
            text: "Recomendo muito a Contabilidade Fábio Silva! Profissionais extremamente competentes, atenciosos e sempre dispostos a nos atender com excelência. Nos auxiliam em todas as questões fiscais, contábeis e tributárias com muita eficiência e clareza. Sem dúvida, um parceiro essencial para o nosso negócio. Nota 10!",
        },
        {
            id: 7,
            img: "/images/UP-Service.webp",
            name: "LP Service",
            alt: "Logo empresa LP Service",
            title: "Empresa LP Service",
            text: "Minha empresa teve a honra de ser uma das primeiras a contar com os serviços da Fábio Silva Contabilidade. Sempre com excelência, pontualidade e total compromisso. A equipe é atualizada, ética e profissional, transmitindo segurança nas decisões. Um parceiro essencial, que recomendamos com total confiança.",
        },
        {
            id: 8,
            img: "/images/tech_imports.webp",
            name: "Tech Imports",
            alt: "Logo empresa Tech Imports",
            title: "Empresa Tech Imports",
            text: "Gostaríamos de elogiar o excelente trabalho prestado por Fábio Silva Contabilidade. A qualidade, responsabilidade e pontualidade nos serviços contábeis têm sido exemplares. Agradecemos pela parceria e profissionalismo.",
        },   
        {
            id: 9,
            img: "/images/MP-Eventos.webp",
            name: "MP Eventos",
            alt: "Logo empresa MP Eventos",
            title: "Empresa MP Eventos",
            text: "É uma grande honra poder contar com os serviços da Fábio Silva Contabilidade. Uma parceria pautada pela excelência, pontualidade e compromisso irrepreensível, sempre conduzida com ética, transparência e elevado padrão profissional. A confiança transmitida e o comprometimento demonstrado fazem desta empresa um parceiro indispensável, cuja contribuição é decisiva para o contínuo sucesso e desenvolvimento de nossos negócios.",
        },   
    ];

    feedbackContainer.innerHTML = "";
    [...feedbacks, ...feedbacks, ...feedbacks].forEach((item) => {
        // Cria a div do feedback
        const feedback = document.createElement("div");
        feedback.classList.add("feedback");

        feedback.innerHTML = `
            <div class="text">
                <i class="mdi mdi-format-quote-close"></i>
                <p>
                    ${item.text}
                </p>
            </div>
            <div class="client">
                <img src="${item.img}" alt="${item.alt}" title="${item.title}" loading="lazy">
                <p>${item.name}</p>
                <span>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                </span>
            </div>
        `;

        feedbackWrapper.appendChild(feedback);
    });

    feedbackContainer.innerHTML = "";
    feedbackContainer.appendChild(feedbackWrapper);
   
    //FAQ Section Home
    // Perguntas FAQ
    const FAQuestions = [
        {
            id: 1,
            title: "A Fábio Silva Contabilidade atende qualquer tipo de empresa?",
            text: "Sim, temos uma equipe qualificada para todos os tipos de negócios, seja MEI, seja simples, ou lucro presumido. Com foco no estudo do melhor regime tributário pra sua empresa."
        },
        {
            id: 2,
            title: "Preciso trocar minha contabilidade, porém não sei como funciona. Podem me auxiliar?",
            text: "Claro, será um prazer! Solicite agora a sua proposta. Nossa equipe irá entrar em contato com você e tirar todas as suas dúvidas antes de dar início na transferência de sua empresa."
        },
        {
            id: 3,
            title: "Pequenos empresários precisam de um CNPJ?",
            text: "Bom, é possível trabalhar de forma autônoma, mas você precisa ter em mente que estará pagando uma tributação maior do que poderia com um CNPJ. Como, por exemplo, no caso do Imposto de Renda. Essa incidência é mais pesada para profissionais autônomos do que para funcionários e donos de empresa. Um profissional autônomo, por exemplo, é tributado pelo imposto de renda em que a alíquota pode chegar a 27,5%. Já para uma empresa de serviços, em sua maioria, é tributada em 6%. Com um CNPJ você pode reduzir em até 23% o valor de impostos!"
        },
        {
            id: 4,
            title: "Vou poder falar com o contador pelo Whatsapp?",
            text: "Sim, temos uma equipe preparada para atendê-los com agilidade e competência."
        }
    ];
    //Ao clicar no botão Questions + será adicionado a classe active
    //Para o div text
    const divFAQ = document.querySelector(".FAQ");
    divFAQ.innerHTML = "";
    FAQuestions.forEach((FAQ) => {
        const divQuestion = document.createElement("div");
        divQuestion.classList.add("question");
        divQuestion.innerHTML = `
            <div class="title">
                <h3>${FAQ.title}</h3>
                <i class="mdi mdi-plus"></i>
                <i class="mdi mdi-minus"></i>
            </div>   
            <div class="text">
                <p>${FAQ.text}</p>
            </div>  
        `;
        
        divFAQ.appendChild(divQuestion);

        divQuestion.addEventListener("click", () => {
            const allTexts = document.querySelectorAll(".FAQ .question .text");
            const mdiPlus = document.querySelectorAll(".mdi-plus");
            const mdiMinus = document.querySelectorAll(".mdi-minus");

            allTexts.forEach(text => {
                if( text !== divQuestion.querySelector(".text")){
                    text.classList.remove("active");
                }
            });

            mdiPlus.forEach(plus => {
                if(plus !== divQuestion.querySelector(".mdi-plus")){
                    plus.classList.remove("active");
                }
            })
            mdiMinus.forEach(plus => {
                if(plus !== divQuestion.querySelector(".mdi-minus")){
                    plus.classList.remove("active");
                }
            })
            
            
            const iconPlus = divQuestion.querySelector(".mdi-plus");
            iconPlus.classList.toggle("active");
            const iconMinus = divQuestion.querySelector(".mdi-minus");
            iconMinus.classList.toggle("active");

            const currentText = divQuestion.querySelector(".text");
            currentText.classList.toggle("active");
        });
    })

    // Renderizar Post blog Home
    
    const postsRecents = posts.slice(-3); 

    const containerBlogHome = document.getElementById("wrapper-blog-home");
    containerBlogHome.innerHTML = "";
    postsRecents.forEach((post) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <div class="image">
                <img src="${post.img}" alt="${post.alt}" title="${post.titleImg}" loading="lazy">
                <span>
                    ${post.day}<br>
                    ${post.month}
                </span>
            </div>
            <div class="blog-title">
                <div class="author">
                    <div>
                        <i class="mdi mdi-account-circle"></i>
                        <p>${post.author}</p>
                    </div>
                    <div>
                        <i class="mdi mdi-calendar"></i>
                        <p>${post.date}</p>
                    </div>
                </div>
                <h3>${post.title}</h3>
            </div>
            <div class="blog-text">
                <p>
                    ${post.resume}                    
                </p>
                <a href="${post.link}">Leia mais...</a>
            </div>
        `;
        containerBlogHome.appendChild(itemDiv);
    });
});