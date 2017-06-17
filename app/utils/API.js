import axios from "axios";

const API = {
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default API;