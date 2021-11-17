import axios from "axios";
import React from "react";

class userAccount extends React.Component {
    constructor(props) {
        super(props);

        this.token = ""
    }

    setToken(e) {
        this.token = e
    }

    getToken() {
        return this.token
    }
}

export default userAccount