import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)   // gives video detail data
      .then((data) => setVideoDetail(data.items[0]))    // first video


      // fetching all the videos related to that video id to the right side
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);


  //  Data may be not be loaded
  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;     //  object destructuring

  return (
    <Box minHeight="90vh">
      {/* satck property is dynamic for extra small and medium devices or higher */}
      <Stack direction={{ xs: "column", md: "row" }}>   
        <Box flex={1}>

          {/* This box is for left side of youtube includes video, subscriber,views, etc.*/}
          <Box sx={{ width: "100%", position: "sticky", top: "85px" }}> 
          
           {/* ReactPlayer accepts an url with dynamic id of videos , "controls" control all functionalities of video*/}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className="react-player" controls />  

            {/*  Renders the video title */}

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={0} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}

                  {/* channelIcon */}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px", mb: "10px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Creating right side of youtube page , px is for padding x*/}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;