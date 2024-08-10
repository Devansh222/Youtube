import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utilities/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (          // id, videoID, snippet contains data of video

  // md is for medium devices , xs is extra small , sm is small

  <Card sx={{ width: { xs: '300px', sm: '300px', md: "280px" }, boxShadow: "none", borderRadius: 5 }}> 
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}    // ? is used to become error free when it is undefined
        sx={{ width: { xs: '300px', sm: '300px', md: '280px'}, height: 180 }} // width is dynamic
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '95px' }}>

      {/* This link point to video id */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >         
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">    
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}       
        </Typography>
      </Link>
      {/* Link to the channel id */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {/*  if this is not exists snippet?.channelTitle  then write demoChannelId*/}
          {snippet?.channelTitle || demoChannelTitle}     
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />  

          {/* ml is for margin left */}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard