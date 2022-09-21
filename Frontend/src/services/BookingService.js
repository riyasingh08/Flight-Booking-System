import httpClient from "../http-common2";
class BookingService{
create (data) {
    return httpClient.post("/register",data);
}
}
export default new BookingService();