import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Avatar, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 220;

function FakeDashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#232f3e', color: '#fff' },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Accon-Lab
          </Typography>
        </Toolbar>
        <Divider sx={{ background: '#394867' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
          <Avatar sx={{ width: 64, height: 64, mb: 1 }}>U</Avatar>
          <Typography variant="subtitle1">John Doe</Typography>
          <Typography variant="caption" color="#b0b8c1">User</Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static" elevation={0} sx={{ background: '#fff', color: '#232f3e', mb: 3 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Avatar sx={{ bgcolor: '#232f3e' }}>U</Avatar>
          </Toolbar>
        </AppBar>
        {/* Dashboard Content */}
        <Box sx={{ background: '#fff', borderRadius: 2, p: 4, boxShadow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Welcome back, John!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here’s a summary of your account activity.
          </Typography>
          {/* Add widgets, charts, or stats here */}
        </Box>
      </Box>
    </Box>
  );
}

export default FakeDashboard;