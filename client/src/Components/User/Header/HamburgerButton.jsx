import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import {  useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenState } from "../../../Store/AuthSlice";
import LoginPage from "../../../Pages/LoginPage";


export default function MenuPopupState() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { token } = useSelector((state) => state.auth);
  // console.log(token);

  const onLogout = (popupState) => {
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    dispatch(tokenState.setToken(''))
    popupState.close()
  }

  const onNavigate = (popupState, to) => {
    navigate(to)
    popupState.close();
  };
 
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            style={{
              color: "black",
              marginBottom: "15px",
              paddingRight: "20px",
              backgroundColor: " #e4aa09",
              boxShadow: "none",
            }}
          >
            <AiOutlineMenu />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {token ? (
              <MenuItem onClick={() => onLogout(popupState)}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={() => onNavigate(popupState, '/login')}>Login</MenuItem>
            )}
            <MenuItem onClick={()=> onNavigate(popupState, '/profile')}>Profile</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
