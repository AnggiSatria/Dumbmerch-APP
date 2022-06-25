import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import leftImg from "../../Assets/left.jpg"
import rightImg from "../../Assets/right.jpg";
import { Box } from '@mui/material';

const Right = () => {

  const chats = [
    {
    txt:'yolobkhbikhsiuhuihuihuihuihihuihuih;'
    },
    {
      txt : "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
    {
      txt: "hallo"
    },
  ]

  const chats2 = [
    {
      txt: "wow"
    },
    {
      txt: "wowwww"
    }
  ]

  return (
    <div style={{width : "100%", display : "flex", marginRight : "1%", marginLeft : "1%"}}>
      <div className="mappingLeft" style={{display : "flex", flexDirection : "column", flex : "1"}}>
        {chats.map((value) => {
          return <div className="left" style={{display : "flex", marginBottom: "50px"}}>
          <div className="avatar">
            <Stack direction="row" spacing={2}>
              <Avatar src="/broken-image.jpg" />
            </Stack>
          </div>

          <div className="chatsbox" style={{marginLeft : "20px", display : "flex"}}>
            <img src={leftImg} alt="" style={{width : "15px", height : "40px"}}/>
            <Box
        sx={{
          width: 200,
          height: 40,
          textAlign : "center",
          wordWrap : "break-word",
          color : "white",
          position: "relative",
          backgroundColor: 'rgba(152, 150, 150, 0.46)',
          borderRadius : '5px',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >{value.txt}</Box>
          </div>
        </div>
        })}
      </div>
      
      <div className="mappingRight" style={{display : "flex", flexDirection : "column", flex : "2"}}>
        {chats2.map((value) => {
          return <div className="right" style={{display : "flex", justifyContent : "flex-end", marginTop : "50px"}}>
        <div className="chatsbox2" style={{marginLeft : "20px", display : "flex"}}>
            <Box
        sx={{
          width: 200,
          height: 40,
          textAlign: "center",
          backgroundColor: 'rgba(46, 40, 44, 0.77)',
          borderRadius : '5px',
          color : 'white',
          wordWrap : "break-word",
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >{value.txt}</Box>
      <img src={rightImg} alt="" style={{width : "15px", height : "40px"}}/>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Right;