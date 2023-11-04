
const API_KEY = "112994a47ea365ecfd3987a45e7dc396";
const API_BASE_URL = "https://api.themoviedb.org/3";
const page = 1

export default async function fetchMovie(endpoint, language = "pt-BR", query) {
  try {
    const params = new URLSearchParams({
      language,
      api_key: API_KEY,
      page,
    });

    let url;
    if (query) {
      const encodedQuery = query.replace(/\s/g, "%20");
      url = `${API_BASE_URL}/${endpoint}?query=${encodedQuery}&include_adult=false&api_key=${API_KEY}&page=1`;
      console.log(url);
    } else {
      url = `${API_BASE_URL}/movie/${endpoint}?${params}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na solicitação da API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
