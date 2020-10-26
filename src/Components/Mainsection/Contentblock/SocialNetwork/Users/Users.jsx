import React from "react";
import s from "./users.module.css";

const Users = (props) => {
  console.log(s);

  return (
    <div>
      {props.users.map((user) => {
        return (
          <div className={s.userBlock + " p-2 mt-2 row"} key={user.id}>
            <div className="col-3 pl-0 text-center">
              <img className={s.avatar} src={user.avatarURL} alt="" />
              <br />
              {user.followed ? (
                <button
                  className="btn btn-sm btn-warning"
                  type="button"
                  onClick={() => props.follow_trigger(user.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-primary"
                  type="button"
                  onClick={() => props.follow_trigger(user.id)}
                >
                  Follow
                </button>
              )}
            </div>
            <div className="col-9">
              <div className="col pl-0">
              <h4>{user.firstName + " " + user.lastName}</h4>
              <p>{user.status}</p>
            </div>
            <div className="col-2">
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
