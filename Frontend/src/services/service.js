import httpClient from "../http-common";
class Service{
create (data) {
    return httpClient.post("/savecust",data);
}
update(cust){
    return httpClient.put(`custupdate/${cust.cust_id}`)
}
get (email,pass) {
    return httpClient.get(`getcustbylogin/${email}/${pass}`)
}
getbyid(id) {
    return httpClient.get(`getcustbyid/${id}`)
}
getmail (email)
{
    return httpClient.get(`getcustbymail/${email}`)
}

createlogin (data) {
    return httpClient.post("/loggedin",data);
}

logout () {
    httpClient.delete("/logout");
}

islogged() {
    return httpClient.get("/isloggedin");
}
}

export default new Service();