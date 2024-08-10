import React from 'react'
import { Stack } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { logo } from '../utilities/constants';

import SearchBar from './SearchBar';



const Navbar = () => { 
  return (
    // p is used for padding
    // The sx prop is a shortcut for defining custom styles that has access to the theme.
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky',background:'#000',top:0, justifyContent: 'space-between'}}
    >
      <Link to="/" style={{display: 'flex',alignItems: 'center'}} >
        <img src={logo} alt="logo" height={45}/>
        <h2 className="responsive-heading" 
        style={{
          color: "white",
          pl: 20,
            }}  
        >
          Devansh_YT</h2>
      </Link>
      <SearchBar/>
 
    </Stack>
  )
}

export default Navbar