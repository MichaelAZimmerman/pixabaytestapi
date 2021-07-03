import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import Button from "@material-ui/core/Button";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="text-center">
      <div className="flex-wrap margin">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="marginLeft"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="flex-wrap margin">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="marginLeft"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <br />

      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          if (username.length > 4 && password.length > 4) {
            setUser(username);
            // history.push("/search");
          }
        }}
      >
        Login
      </Button>
    </form>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
