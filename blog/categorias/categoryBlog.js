import { posts } from "../../lib/posts.js";
document.addEventListener("DOMContentLoaded", () => {
    //DIV POSTS MAIN
    const divPosts = document.querySelector(".article-category section .posts");
    //DIV POSTS RECENTS

    // Extrai o nome do URL
    const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "")
    .replaceAll(/-/g, "");

    posts.forEach((post) => {
        const themeSlug = post.theme
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
        if(themeSlug === currentPage){
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
            divPosts.appendChild(divPost);
        }

    });
})