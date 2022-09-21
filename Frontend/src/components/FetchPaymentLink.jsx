import axios from "axios";
class FetchPaymentLink {
  async FetchPaymentLink(amt) {
    let url = "http://localhost:9090/Payment/pay/" + amt;
    let axiosResponse;

    let result;
    let error = "";
    console.log("in func");
    try {
      axiosResponse = await axios.post(url).catch((err) => {
        if (err.response.status !== 200) {
          console.log(err.response.status);
          error = err.response.status;
          throw new Error("CANNOT BOOK FLIGHT");
        }
        throw err;
      });
    } catch (err) {
      alert(err);
      result = err;
    }
    if (error === "") {
      result = axiosResponse.data;
    }
    console.log("profile ", axiosResponse);

    return result;
  }
}
export default new FetchPaymentLink();