import { posts } from "./lib/posts.js";
document.addEventListener("DOMContentLoaded", () => {

    //Renderiza os posts
    const containerPosts = document.querySelector(".content-blog section .posts");
    containerPosts.innerHTML = "";
    posts.forEach((post) => {
        const divPost = document.createElement("a");
        divPost.classList.add("post");
        divPost.setAttribute("href", `${post.link}`);
        divPost.innerHTML = `
            <div class="image">
                <img src="${post.img}" alt="${post.alt}" title="${post.titleImg}" loading="lazy">
            </div>
            <div class="text">
                <div class="date-author">
                    <div>
                        <i class="mdi mdi-account-circle"></i>
                        <p>${post.author}</p>
                    </div>
                    <div>
                        <i class="mdi mdi-calendar-outline"></i>
                        <p>${post.date}</p>
                    </div>
                    <div>
                        <i class="mdi mdi-folder-open"></i>
                        <p>${post.theme}</p>
                    </div>
                </div>
                <h2>${post.title}</h2>
                <p>${post.resume}</p>
            </div>
        `;

        containerPosts.appendChild(divPost);
    });

    // ASIDE POST RECENTS
    const postWrapper = document.querySelector(".posts-wrapper");
    const btnPrev = document.querySelector("#btn-prev");
    const btnNext = document.querySelector("#btn-next");
    let currentIndex = 0;

    const recentPosts = posts.slice(-4);

    const renderPost = (index) => {
        postWrapper.innerHTML = "";

        const post = recentPosts[index];
        const postRecent = document.createElement("a");
        postRecent.classList.add("post-recent");
        postRecent.setAttribute("href", `${post.link}`);
        postRecent.innerHTML = `
            <div class="img-recent">
                <img src="${post.img}" alt="${post.alt}" title="${post.titleImg}">
            </div>
            <div class="title-recent">
                <div class="author-recent">
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
            <div class="text-recent">
                <p>${post.resume}</p>
            </div>  
                     
        `;
        
        postWrapper.appendChild(postRecent);
        
    };


    btnPrev.addEventListener("click", () => {
        currentIndex--;
        if( currentIndex < 0 ) currentIndex = recentPosts.length - 1;
        renderPost(currentIndex);
    });
    btnNext.addEventListener("click", () => {
        currentIndex++;
        if( currentIndex >= recentPosts.length ) currentIndex = 0; //Limite de 3 itens
        renderPost(currentIndex);
    });
    
    renderPost(currentIndex);
    

});