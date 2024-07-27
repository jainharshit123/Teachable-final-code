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

export const axiosInstance = axios.create({});

export const apiConnector =async (method, url, bodyData, headers, params) => {
  try {
    console.log('Making request:', { method, url, bodyData, headers, params });
    const response = await axiosInstance({
      method, // Directly pass the method string
      url,
      data: bodyData, // Pass bodyData directly
      headers, // Pass headers directly, defaults to an empty object
      params, // Pass params directly, defaults to an empty object
    });
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error in API call:', error);
    throw error;
  }
};

