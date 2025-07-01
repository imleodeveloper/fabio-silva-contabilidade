import { posts } from "/lib/posts.js";

class BlogSearch {
  constructor() {
    this.posts = posts;
    this.init();
  }

  init() {
    this.setupBlogSearchListeners();
    this.setupHeaderSearchListeners();
    this.setupResultsPageListeners();
    this.setupNoResultsPageListeners();
    this.handlePageLoad();
  }

  // Configurar listeners para o input de pesquisa do blog.html
  setupBlogSearchListeners() {
    const blogSearchInput = document.querySelector(".input-search input");
    const blogSearchButton = document.querySelector(".input-search button");

    if (blogSearchInput && blogSearchButton) {
      blogSearchButton.addEventListener("click", () => {
        this.performSearch(blogSearchInput.value.trim());
        console.log(blogSearchButton);
      });

      blogSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.performSearch(blogSearchInput.value.trim());
          console.log(blogSearchInput);
        }
      });
    }
  }

  // Configurar listeners para o header search
  setupHeaderSearchListeners() {
    const headerSearchBlocks = document.querySelectorAll(".search-header");

    headerSearchBlocks.forEach((block) => {
      const input = block.querySelector(".search");
      const button = block.querySelector("button");

      if (input && button) {
        button.addEventListener("click", () => {
          this.performSearch(input.value.trim());
        });

        input.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            this.performSearch(input.value.trim());
          }
        });
      }
    });
  }

  // Configurar listeners para a página de resultados
  setupResultsPageListeners() {
    const resultsSearchInput = document.getElementById("search-input-results");
    const resultsSearchButton = document.getElementById(
      "search-button-results"
    );

    if (resultsSearchInput && resultsSearchButton) {
      resultsSearchButton.addEventListener("click", () => {
        this.performSearch(resultsSearchInput.value.trim());
      });

      resultsSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.performSearch(resultsSearchInput.value.trim());
        }
      });
    }
  }

  // Configurar listeners para a página de não encontrado
  setupNoResultsPageListeners() {
    const noResultsSearchInput = document.getElementById(
      "search-input-no-results"
    );
    const noResultsSearchButton = document.getElementById(
      "search-button-no-results"
    );

    if (noResultsSearchInput && noResultsSearchButton) {
      noResultsSearchButton.addEventListener("click", () => {
        this.performSearch(noResultsSearchInput.value.trim());
      });

      noResultsSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.performSearch(noResultsSearchInput.value.trim());
        }
      });
    }

    // Configurar tags de sugestão
    const suggestionTags = document.querySelectorAll(".suggestion-tag");
    suggestionTags.forEach((tag) => {
      tag.addEventListener("click", () => {
        const searchTerm = tag.getAttribute("data-search");
        this.performSearch(searchTerm);
      });
    });
  }

  handlePageLoad() {
    const currentPath = window.location.pathname;

    if (currentPath.includes("/blog/pesquisados.html")) {
      this.handleResultsPage();
    } else if (currentPath.includes("/blog/nao-encontrado-post.html")) {
      this.handleNoResultsPage();
    }
  }

  handleResultsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("q");

    if (searchTerm) {
      const searchInput = document.getElementById("search-input-results");
      if (searchInput) {
        searchInput.value = searchTerm;
      }

      const results = this.searchPosts(searchTerm);
      this.displayResults(results, searchTerm);
    }
  }

  handleNoResultsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("q");

    if (searchTerm) {
      const searchInput = document.getElementById("search-input-no-results");
      if (searchInput) {
        searchInput.value = searchTerm;
      }
    }

    this.displayRecentPosts();
  }

  performSearch(searchTerm) {
    if (!searchTerm) {
      return;
    }

    const results = this.searchPosts(searchTerm);

    if (results.length > 0) {
      // Redirecionar para página de resultados
      window.location.href = `/blog/pesquisados.html?q=${encodeURIComponent(
        searchTerm
      )}`;
    } else {
      // Redirecionar para página de não encontrado
      window.location.href = `/blog/nao-encontrado-post.html?q=${encodeURIComponent(
        searchTerm
      )}`;
    }
  }

  searchPosts(searchTerm) {
    const term = searchTerm.toLowerCase();
    console.log("Posts disponíveis:", this.posts);
    console.log("Termo pesquisado:", term);

    return this.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(term) ||
        post.theme.toLowerCase().includes(term) ||
        post.resume.toLowerCase().includes(term) ||
        post.text.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term)
      );
    });
  }

  displayResults(results, searchTerm) {
    const resultsContainer = document.getElementById("search-results");
    const countElement = document.getElementById("results-count");
    const searchTermElement = document.getElementById("search-term");

    if (!resultsContainer) return;

    // Atualizar informações da pesquisa
    if (countElement) countElement.textContent = results.length;
    if (searchTermElement) searchTermElement.textContent = searchTerm;

    // Limpar resultados anteriores
    resultsContainer.innerHTML = "";

    // Exibir resultados
    results.forEach((post) => {
      const postElement = this.createMiniPostElement(post);
      resultsContainer.appendChild(postElement);
    });
  }

  displayRecentPosts() {
    const recentPostsContainer = document.getElementById("recent-posts-grid");
    if (!recentPostsContainer) return;

    // Pegar os 6 posts mais recentes
    const recentPosts = this.posts.slice(0, 6);

    recentPostsContainer.innerHTML = "";

    recentPosts.forEach((post) => {
      const postElement = this.createRecentPostElement(post);
      recentPostsContainer.appendChild(postElement);
    });
  }

  createMiniPostElement(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "mini-post-result";

    postDiv.innerHTML = `
      <a href="${post.link}" class="mini-post-link">
        <div class="mini-post-image">
          <img src="${post.img}" alt="${
      post.alt || post.title
    }" loading="lazy" />
          <span class="post-date">
            ${post.day}<br>${post.month}
          </span>
        </div>
        <div class="mini-post-content">
          <div class="post-meta">
            <div class="post-author">
              <i class="mdi mdi-account"></i>
              <p>${post.author}</p>
            </div>
            <div class="post-theme">
              <i class="mdi mdi-tag"></i>
              <p>${post.theme}</p>
            </div>
          </div>
          <h3>${post.title}</h3>
          <p class="post-excerpt">${post.resume}</p>
        </div>
      </a>
    `;

    return postDiv;
  }

  createRecentPostElement(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "recent-post-card";

    postDiv.innerHTML = `
      <a href="${post.link}" class="recent-post-link">
        <div class="recent-post-image">
          <img src="${post.img}" alt="${
      post.alt || post.title
    }" loading="lazy" />
        </div>
        <div class="recent-post-content">
          <h4>${post.title}</h4>
          <p class="recent-post-theme">${post.theme}</p>
          <p class="recent-post-date">${post.date}</p>
        </div>
      </a>
    `;

    return postDiv;
  }
}

// Inicializar a funcionalidade de pesquisa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new BlogSearch();
});
