import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2797cff16feb4e49b13ad1f62f7d16ed",
  },
});
