import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/getall");
};
const create = (data) => {
  return httpClient.post("/register", data);
};
const get = (id) => {
  return httpClient.get(`/getById/${id}`);
};

const getBtnDestination=(origin, destination)=>{
  return httpClient.get(`getFlightInBetweenDestinations/${origin}/${destination}`);
}
const remove = (id) => {
  return httpClient.delete(`/delete/${id}`);
};
// const update = (Flight) => {
//   return httpClient.put(`/updateById/${Flight.id}`);
// };
const update = (data,id) => {
  return httpClient.put(`/update/${id}`,data);
};
export default { create,getAll ,getBtnDestination,remove,update,get};