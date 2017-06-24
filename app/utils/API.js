import axios from "axios";

const API = {
  getApproval: function() {
    return axios.get("/api/approval");
  },
  getEmployee: function() {
    return axios.get("/api/employee");
  },
  saveEmployee: function(id) {
    return axios.post('/api/employee/${id}');
  },
  getPayrollcycle: function() {
    return axios.get("/api/payrollcycle");
  },
  getSchedule: function() {
    return axios.get("/api/schedule");
  },
  getTimeOffSegment: function() {
    return axios.get("/api/timeoffsegment");
  },
  saveTimeOffSegment: function(text) {
    return axios.post("/api/timeoffsegment", { text });
  },
  getWorkSegment: function() {
    return axios.get("api/worksegment");
  },
  saveWorkSegment: function(id) {
    return axios.post(`/api/worksegment/${id}`);
  },
  updateWorkSegment: function (id) {
    return axios.update('/api/worksegment/${id}');
  }
};

export default API;