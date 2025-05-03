import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyUsers } from "./dummyData";

const UserDetails = () => {
  const userId = useParams();
  const navigate = useNavigate();
  const user = dummyUsers.filter((user) => user.id === Number(userId.id));
  console.log(userId);
  console.log(user);
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      {}
      <p>
        Name:<span>{user[0].name}</span>{" "}
      </p>
      <p>
        Place:<span>{user[0].address.city}</span>{" "}
      </p>
      <button onClick={handleClick}>Go to home</button>
    </div>
  );
};

export default UserDetails;
