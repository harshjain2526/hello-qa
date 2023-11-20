import React, { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log("THIS IS THE API CALL", response);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
        console.error("API call error:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetchData;
