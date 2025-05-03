import React from "react";
import { dummyUsers } from "./dummyData";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <div>
      {dummyUsers.map((user) => {
        return (
          <div key={user.id}>
            <p>
              Name:<span>{user.name}</span>{" "}
            </p>
            <p>
              Place:<span>{user.address.city}</span>{" "}
            </p>
            <br />
            <Link to={`/users/${user.id}`}>Show {user.name} details</Link>
            <Link to="/users/contactuser">Contact user</Link>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
