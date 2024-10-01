import axios from "axios"

export const productList = () => {
  const options = {
    method: "POST",
    url: "http://192.168.1.62:3053/api/frontend/products/list",
    headers: {
      "Content-Type": "application/json",
      "apikey": "pwunzyconu",
      "authorization": "Bearer undefined",
      "reqfrom": "ext"
    },
    data: {
      "page": 1,
      "perPage": 10
    }
  }
  axios(options)
    .then((response) => {
      console.log("response::: ", response.data.data);
      return response.data.data
    })
    .catch((error) => {
      console.log("error fetching products in apiCalls: ", error);
    })
}
