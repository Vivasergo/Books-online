import Axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import {followAPI, usersAPI} from "../../../../../api/api";
import Preloader from "../../../../common/Preloader/Preloader";
import s from "./users.module.css";

class Users extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);

    usersAPI.getUsers(this.props.countItems).then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setUsers(data.items);
      this.props.setTotalPages(data.totalCount);
    });
  }

  render() {
    let totalSheets = Math.ceil(this.props.totalPages / this.props.countItems);

    let pages = [];

    for (let i = 1; i <= totalSheets; i++) {
      pages.push(i);
    }

    let handlePageLinkClick = (page) => {
      this.props.toggleIsLoading(true);

      usersAPI.getUsers(this.props.countItems, page).then((data) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(data.items);
        this.props.setCurrentPage(page);
        this.props.setTotalPages(data.totalCount);
      });
    };

    return (
      <>
        {this.props.isLoading && <Preloader />}
        <div>
          <div>
            {pages.map((page) => {
              return (
                <span
                  key={page}
                  className={
                    this.props.currentPage === page ? s.activePageLink : ""
                  }
                  onClick={() => handlePageLinkClick(page)}
                >
                  {page}
                </span>
              );
            })}
          </div>
          {this.props.users.map((user) => {
            return (
              <div className={s.userBlock + " p-2 mt-2 row"} key={user.id}>
                <div className="col-3 pl-0 pr-0 text-center">
                  <NavLink to={"/profile/" + user.id}>
                    <img
                      className={s.avatar}
                      src={
                        user.photos.small
                          ? user.photos.small
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU"
                      }
                      alt=""
                    />
                  </NavLink>
                  <br />
                  {user.followed ? (
                    <button
                      className="btn btn-sm btn-warning"
                      type="button"
                      onClick={() => {
                        followAPI.unfollow(user.id).then((data) => {
                          if (data.resultCode === 0) {
                            this.props.followTrigger(user.id);
                          }
                        });
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary"
                      type="button"
                      onClick={() => {
                        followAPI.follow(user.id).then((data) => {
                          if (data.resultCode === 0) {
                            this.props.followTrigger(user.id);
                          }
                        });
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
                <div className="col-9 row">
                  <div className="col-8 pl-0">
                    <h4>{user.name}</h4>
                    <p>{user.status}</p>
                  </div>
                  <div className="col-4">
                    <div>location.country</div>
                    <div>location.city</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Users;
