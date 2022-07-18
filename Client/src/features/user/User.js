import React from "react";
import { useSelector } from "react-redux";
import "./user.css";

function User() {
  const user = useSelector((state) => state.user.user);

  const renderUser = () => {
    return (
      <>
        <div className="user__left">
          <img src={user.picture.large} alt="" />
        </div>
        <div className="user__right">
          {
            <ul>
              <li>
                <h1>
                  {user.name.first} {user.name.last}
                </h1>
              </li>
              <li>
                <h3>Email: {user.email}</h3>
              </li>
              <li>
                <h3>Phone: {user.phone}</h3>
              </li>
              <li>
                <h3>City: {user.location.city}</h3>
              </li>
            </ul>
          }
        </div>
      </>
    );
  };

  return <div className="user">{user && renderUser()}</div>;
}

export default User;
