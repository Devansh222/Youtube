
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useParams  } from "react-router-dom";

import { fetchFromAPI } from "../utilities/fetchFromAPI";
import { Videos, Sidebar } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);            // creating states
  const { searchTerm } = useParams();                   // creating a variable searchTerm  
  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)    // API request for that video query q.
      .then((data) => setVideos(data.items))                  
    }, [searchTerm]);
 
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search Results for:  <span style={{ color: "#FC1503" }}>
            {searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
