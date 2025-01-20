import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, data: randomMovie });
  } catch (error) {
    console.log(`❌ Error in getTrendingMovie controller ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getMovieTrailers = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    );
    res.status(200).json({ success: true, data: data.results });
  } catch (error) {
    console.log(`❌ Error in getMovieTrailers controller ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    );
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    console.log(`❌ Error in getMovieDetails controller ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    );
    res.status(200).json({ success: true, data: data.results });
  } catch (error) {
    console.log(`❌ Error in getSimilarMovies controller ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getMoviesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    );
    res.status(200).json({ success: true, data: data.results });
  } catch (error) {
    console.log(`❌ Error in getSimilarMovies controller ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
