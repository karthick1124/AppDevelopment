import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useDispatch, useSelector } from 'react-redux';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from '../../redux/slice/loggedSlice';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/slice/userSlice';

const sidebarItems = [
  { text: 'Home', icon: <HomeIcon />, link: '/' },
  { text: 'About', icon: <InfoIcon />, link: '/aboutus' },
  { text: 'Work', icon: <WorkIcon />, link: '/suggestion' },
  { text: 'Contact', icon: <ContactMailIcon />, link: '/contactus' },
];

const Sidebar = ({ open, onClose }) => {
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(deleteUser());
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: 340,
          background: 'linear-gradient(135deg, #333, #444)', // Gradient background
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0 20px 20px 0',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow for depth
        },
      }}
    >
      {isLogged ? (
        <div style={{ padding: 16, display: 'flex', alignItems: 'center', background: '#222', borderRadius: '8px' }}>
          <Avatar alt="User Profile" src={user.profilePic || "https://via.placeholder.com/100"} sx={{ width: 106, height: 106 }} />
          <div style={{ marginLeft: 16 }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{user.name}</div>
            <div style={{ fontSize: '0.875rem' }}>{user.email}</div>
          </div>
        </div>
      ) : (
        <Button sx={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          marginTop: 2,
          background: 'linear-gradient(135deg, #ff416c, #ff4b2b)', // Button background gradient
          borderRadius: '30px',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff4b2b, #ff416c)',
          }
        }} to="/login" component={Link}>
          Sign In <LoginIcon sx={{ height: '40px', marginLeft: '10px' }} />
        </Button>
      )}
      <Divider sx={{ backgroundColor: '#555' }} />
      <List sx={{ flexGrow: 1 }}>
        {sidebarItems.map((item) => (
          <ListItem
            button
            key={item.text}
            to={item.link}
            component={Link}
            sx={{
              '&:hover': {
                backgroundColor: '#555',
              },
              borderRadius: '10px',
              transition: 'background-color 0.2s',
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#fff', fontWeight: 'bold' }} />
          </ListItem>
        ))}
        {isLogged && (
          <ListItem
            button
            to="/saved"
            component={Link}
            sx={{
              '&:hover': {
                backgroundColor: '#555',
              },
              borderRadius: '10px',
              transition: 'background-color 0.2s',
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}><BookmarkIcon /></ListItemIcon>
            <ListItemText primary="Saved Messages" sx={{ color: '#fff', fontWeight: 'bold' }} />
          </ListItem>
        )}
      </List>
      {isLogged && (
        <Button sx={{
          color: 'white',
          fontSize: '20px',
          width: '100%',
          height: '50px',
          background: '#c62828',
          borderRadius: '30px',
          marginTop: 'auto',
          '&:hover': {
            background: '#b71c1c',
          }
        }} onClick={handleLogout}>
          <LogoutIcon sx={{ height: '40px', width: '40px' }} />
        </Button>
      )}
    </Drawer>
  );
};

export default Sidebar;
