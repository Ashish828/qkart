import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState, useEffect} from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const [username, setUsername] = useState("");

  let history = useHistory();


    useEffect(() =>{
      if(localStorage.getItem('username') !== null){
        setUsername(localStorage.getItem('username'));
      }
    }, [])
    const logout = () =>{
      localStorage.clear();
      history.push("/login");
    }
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        {
          hasHiddenAuthButtons ? 
          <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
        :
          username ?
            <div style={{display: "flex", alignItems: "center"}}>
              <img style={{ marginRight: '0.5rem' }} src="avatar.png" alt={username} />
              <p>{username}</p>
              <Button
                className="explore-button"
                variant="text"
                onClick={logout}
              >
                LOGOUT
              </Button>
          
            </div> 
          : 
            <div style={{display: "flex", alignItems: "center"}}>
            
              <Button
                className="explore-button"
                variant="text"
                onClick={() => history.push("/login")}
              >
                LOGIN
              </Button>
              <Button
                className="explore-button"
                variant="contained"
                style={{color: "white"}}
                onClick={() => history.push("/register")}
              >
                REGISTER
              </Button>
            </div>        
        }
      </Box>
    );
};

export default Header;
