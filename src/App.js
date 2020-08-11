import React from "react";
import { connect } from "react-redux";
import ListadoUser from "./componentes/ListadoUser";

function App(props) {
    const {userName}=props
    return (
        <div>
            <ListadoUser name={userName}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userName: state.user.userName,
    };
};

    export default connect(mapStateToProps)(App);