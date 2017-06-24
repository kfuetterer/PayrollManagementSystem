import axios from "axios";

const API = {
  getSchedule: function() {
    return axios.get("/api/schedule");
  },
  getCompany: function() {
    return axios.get("/api/company")
  },
  saveTimeOffSegment: function(text) {
    return axios.post("/api/timeoffsegment", { text });
  },
  saveWorkSegment: function(id) {
    return axios.delete(`/api/worksegment/${id}`);
  }
};

export default API;