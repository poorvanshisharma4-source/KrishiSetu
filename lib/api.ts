// const API_URL = "http://localhost:5000/api";

// const api = {
//   post: async (endpoint: string, data: any) => {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     return response.json();
//   },

//   get: async (endpoint: string, token?: string) => {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       headers: {
//         "Content-Type": "application/json",
//         ...(token && {
//           Authorization: `Bearer ${token}`,
//         }),
//       },
//     });

//     return response.json();
//   },
// };

// export default api;

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = {
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || "Something went wrong");
    }

    return resData;
  },

  get: async (endpoint: string, token?: string) => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers,
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || "Something went wrong");
    }

    return resData;
  },
};

export default api;