import {useEffect, useState} from "react";

export default function useHome() {
  interface Data {
    imgData: (string | number)[],
    data: (string | number)[],
  }
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/5')
      const imgData: Data = await response.json();
      // @ts-ignore
      setData(imgData)
    }
    getData();
  }, [])
  return {data}
};
