import { useEffect, useState } from "react";

export default function useHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return { data };
}
