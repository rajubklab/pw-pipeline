import React from "react";

const UserPage = async () => {
  let user;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: "no-store",
    });
    user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading user data</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserPage;
