import * as React from 'react';
import { green, pink, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import IconButton from '@mui/material/IconButton';


export default function IconAvatars() {


  const onclick = () =>{
    alert('do smthing')
  }
  return (
    
    <IconButton aria-label="delete" onClick={onclick}>
    <SettingsApplicationsIcon />
  </IconButton>
      
  );
}
