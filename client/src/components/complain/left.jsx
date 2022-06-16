import { Modal } from "react-bootstrap"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Complain from "../../pages/complainUser";
import ComplainAdmin from "../../pages/complainAdmin"

export default function Left() {

    const [show, setShow] = useState(false);

    const handleClick = () => setShow(true)

    const chat = [
      {
        img: "",
        chats: "Hallo",
        users: "Anggi",
      },
    ]

    return (
      <List sx={{ width: '100%', maxWidth: 360}} onClick={Complain}>
        {chat.map((value)=>{
          return <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/broken-image.jpg"/>
          </ListItemAvatar>
          <ListItemText style={{color : "white"}}
            primary={value.chats}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline', color: "white" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <b style={{color : "grey"}}>{value.users}</b>
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        })}
      </List>
    );
  }