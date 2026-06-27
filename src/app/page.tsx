import React from "react";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  return <h1>{data.title}</h1>;
};

export default Page;
