// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// // Helper function to get auth headers
// const getAuthHeaders = () => {
//   const headers: Record<string, string> = {
//     "Content-Type": "application/json",
//   };

//   // Browser environment check & token fetching from localStorage
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem("token");
//     if (token) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }
//   }

//   return headers;
// };

// const api = {
//   post: async (endpoint: string, data: any) => {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: "POST",
//       headers: getAuthHeaders(),
//       body: JSON.stringify(data),
//     });

//     // Check if response is JSON or HTML/error
//     const contentType = response.headers.get("content-type");
//     let resData;
//     if (contentType && contentType.includes("application/json")) {
//       resData = await response.json();
//     } else {
//       const text = await response.text();
//       throw new Error(`Server Error (${response.status}): ${text.substring(0, 100)}`);
//     }

//     if (!response.ok) {
//       throw new Error(resData.message || "Something went wrong");
//     }

//     return resData;
//   },

//   get: async (endpoint: string) => {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: "GET",
//       headers: getAuthHeaders(),
//     });

//     const contentType = response.headers.get("content-type");
//     let resData;
//     if (contentType && contentType.includes("application/json")) {
//       resData = await response.json();
//     } else {
//       const text = await response.text();
//       throw new Error(`Server Error (${response.status}): ${text.substring(0, 100)}`);
//     }

//     if (!response.ok) {
//       throw new Error(resData.message || "Something went wrong");
//     }

//     return resData;
//   },
// };

// export default api;

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Helper function to get auth headers
const getAuthHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};

const handleResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  let data;

  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = null;
  }

  if (!response.ok) {
    const errorMessage =
      data?.message ||
      data?.error ||
      `Request failed with status ${response.status} (${response.statusText})`;
    const error = new Error(errorMessage) as any;
    error.response = {
      data,
      status: response.status,
      statusText: response.statusText,
    };
    throw error;
  }

  return data;
};

const request = async (
  endpoint: string,
  config: RequestInit = {}
) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...config,
      headers: {
        ...getAuthHeaders(),
        ...(config.headers || {}),
      },
    });

    return await handleResponse(response);
  } catch (error: any) {
    console.error('API Request Error:', error);
    if (error?.response) {
      throw error;
    }
    throw new Error(
      error?.message || 'Unable to reach the API. Please try again later.'
    );
  }
};

const api = {
  post: async (endpoint: string, data: any) => {
    try {
      return await request(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error: any) {
      console.error("API POST Error:", error);
      throw error;
    }
  },

  get: async (endpoint: string) => {
    try {
      return await request(endpoint, {
        method: "GET",
      });
    } catch (error: any) {
      console.error("API GET Error:", error);
      throw error;
    }
  },
};

export default api;
