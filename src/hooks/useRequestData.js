import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      });
      setData(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return [data, getData];
};

export default useRequestData;
