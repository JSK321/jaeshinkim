import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react'
import Picture from '../../utils/Images/me.jpg'

const styles = {
  nav: css`
  background-color: transparent;
  box-shadow: none;
  color: black;
  `,
  content: css`
  display: flex;
  justify-content: space-evenly;
  `,
  avatar: css`
  display: flex;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  `,
  name: css`
  letter-spacing: 5px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  `,
}

export default function ButtonAppBar() {
  const handleAvatarClick = event => {
    window.location.reload()
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '1.5rem' }}>
      <AppBar position="static" sx={styles.nav}>
        <Toolbar
          sx={styles.content}
        >
          <Box sx={styles.avatar} onClick={handleAvatarClick}>
            <Avatar
              alt='Jae Kim'
              src={Picture}
              sx={{ width: 56, height: 56}}
            />
            <Typography variant="h5" component="div" sx={styles.name}>
              JAE KIM
            </Typography>
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
