import {connect} from 'react-redux'
import UserDetails from "./UserDetails";


const getVisibleUsers = (users) => {
    return users
};

const VisibleUserDetailList = connect(getVisibleUsers)(UserDetails);
export default VisibleUserDetailList;
