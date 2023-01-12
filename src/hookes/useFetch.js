import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, method = "GET", body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url,
          body,
        });
        const data = await response?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, apiError };
};

export default useFetch;
