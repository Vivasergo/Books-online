import Axios from "axios";
import React from "react";
import Preloader from "../../../../common/Preloader/Preloader";
import s from "./users.module.css";

class Users extends React.Component {
  // let items = [
  //   {
  //     id: "1",
  //     name: "Dima",
  //     photos: {
  //       small:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU",
  //       large: null,
  //     },
  //     followed: false,
  //     status: "Hi, everyone",
  //   },
  // ];

  componentDidMount() {
    this.props.toggleIsLoading(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countItems}`
    ).then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalPages(response.data.totalCount);
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
      Axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countItems}&page=${page}`
      ).then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setCurrentPage(page);
        this.props.setTotalPages(response.data.totalCount);
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
                  <img
                    className={s.avatar}
                    src={
                      user.photos.small
                        ? user.photos.small
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU"
                    }
                    alt=""
                  />
                  <br />
                  {user.followed ? (
                    <button
                      className="btn btn-sm btn-warning"
                      type="button"
                      onClick={() => this.props.followTrigger(user.id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary"
                      type="button"
                      onClick={() => this.props.followTrigger(user.id)}
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
