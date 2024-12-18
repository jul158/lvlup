import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FastfoodIcon from '@mui/icons-material/Restaurant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecommendIcon from '@mui/icons-material/Recommend';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import React from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

function SideNav() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            display: 'flex',
            marginInline: 5,
            alignItems: 'start',
            gap: 10
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: '#ffffff',
            fontWeight: 'bold',
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#333333',
          }
        }
      }
    },
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  // Used to open and close the drawer
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleNavigate = (path: string) => {
    handleDrawerClose();
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Hamburger Menu Icon */}
        <IconButton
          onClick={handleDrawerOpen}
          color="primary"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Component */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
          >
            <List>
              <ListItemButton onClick={() => handleNavigate('/WorkoutJournal')}>
                <ListItemIcon>
                  <FitnessCenterIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Workout" />
              </ListItemButton>

              <ListItemButton onClick={() => handleNavigate('/FoodJournal')}>
                <ListItemIcon>
                  <FastfoodIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Food" />
              </ListItemButton>

              <ListItemButton onClick={() => handleNavigate('/Account')}>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>

              <ListItemButton onClick={() => handleNavigate('/Recommendations')}>
                <ListItemIcon>
                  <RecommendIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Recommendations" />
              </ListItemButton>

              <ListItemButton onClick={() => handleNavigate('/Leaderboard')}>
                <ListItemIcon>
                  <LeaderboardIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Leaderboard" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default SideNav;
