import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";

const News = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await axios.get("http://localhost:3002/news/get");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />;
      <div className="container mx-auto my-3">
        {data &&
          data.map((item) => (
            <Card key={uuid()} title={item.title} content={item.content} />
          ))}
      </div>
    </>
  );
};

export default News;
