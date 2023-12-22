async function fetchAllNews() {
  try {
    const response = await fetch("/news");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const allNews = await response.json();
    displayAllNews(allNews);

  } catch (error) {
    console.error("Error fetching all news:", error);
    // Handle error display or fallback
  }
}
function displayAllNews(allNews) {
  const newsContainer = document.getElementById("newsContainer");

  // Limpiar el contenedor antes de agregar nuevas noticias
  newsContainer.innerHTML = "";

  allNews.forEach((news) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-3"); // Assuming Bootstrap grid, adjust classes as needed
    console.log(news);

    card.innerHTML = `
                <div class="card">
                    <h5 class="card-header">${news.title}</h5>
                    <div class="card-body">
                        <p class="card-text">${news.content}</p>
                    </div>
                </div>
            `;

    newsContainer.appendChild(card);
  });
}

// Ejecutar fetchAllNews() solo una vez al cargar la página
window.onload = function () {
  fetchAllNews();
};
