export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
export const APP_LOGO_URL = "https://www.svgrepo.com/show/530376/movie.svg";
export const APP_BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg";
export const USER_AVATAR_URL =
  "https://static.vecteezy.com/system/resources/previews/048/216/761/large_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png";
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_API_TOKEN,
  },
};
export const IMAGE_CDN_URL = "http://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
