import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/user";

function ListadoUser(props) {
const { loadding, getUsers, users} = props;

    useEffect(() => {
        getUsers();
    },[]);

    if (loadding) {
        return "Cargando"
    }

    return <div>
        {users && users.map(u => <li>{u.username}</li>)}
    </div>;
}

const mapStateToProps = (state) => {
    return {
        loadding: state.user.loadding,
        users:state.user.users
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListadoUser);
