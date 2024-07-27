// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };


import axios from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({});

// Function to make API calls
export const apiConnector = (method, url, bodyData = null, headers = {}, params = {}) => {
  return axiosInstance({
    method, // Directly pass the method string
    url,
    data: bodyData, // Pass bodyData directly
    headers, // Pass headers directly, defaults to an empty object
    params, // Pass params directly, defaults to an empty object
  });
};
