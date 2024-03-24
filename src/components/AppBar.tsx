import * as React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './AppBar.module.css'
import theme from '../theme';

const pages = ['Radar', 'Focus View', 'Equipments', 'Brews'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function ResponsiveAppBar() {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar position="sticky" color='secondary'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {isMobile ? (
            <MobileToolbar />
          ) : (
            <DesktopToolbar />
          )}

          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function MobileToolbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box className={styles.mobileIcon}>
        <img src="/CropsterIconOnly.svg" alt="Cropster Logo" />
      </Box>
    </React.Fragment>
  )
}

function DesktopToolbar() {
  return (
    <React.Fragment>
      <Box className={styles.desktopIcon} >
        <img src="/CropsterIconOnly.svg" alt="Cropster Logo" />
      </Box>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ color: 'white' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </React.Fragment>
  )
}
function Profile() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}