import { connect } from "react-redux";
import {
  followTrigger,
  setCurrentPage,
  setTotalPages,
  setUsers,
  toggleIsLoading,
} from "../../../../../Redux/usersReducer";

import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.items,
    currentPage: state.usersPage.currentPage,
    countItems: state.usersPage.countItems,
    totalPages: state.usersPage.totalPages,
    isLoading: state.usersPage.isLoading,
  };
};

// вместо mapDispatchToProps, передаем вторым аргументом в connect объект,
// где свойства будут переданы в props, а их значения это action creators.
//Поскольку имя свойства и имя экшен креэйтора совпадает, то можно приминить
//сокращенную запись, т.е. не setUsers: setUsers, а просто setUsers

const UsersContainer = connect(mapStateToProps, {
  followTrigger,
  setUsers,
  setCurrentPage,
  setTotalPages,
  toggleIsLoading,
})(Users);

export default UsersContainer;
