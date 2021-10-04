const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
  fetchAction: {
    title: "Action",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
  fetchHorror: {
    title: "Horror",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `abc?api_key=${API_KEY}&lang=en-us`,
  },
};
