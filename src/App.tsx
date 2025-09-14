import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography } from '@mui/material';
import { Map, Group, Photo, Flight, Person } from '@mui/icons-material';
import MapView from './components/MapView';
import CommunityView from './components/CommunityView';
import PhotoView from './components/PhotoView';
import FlightLogView from './components/FlightLogView';
import AccountView from './components/AccountView';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#42a5f5',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

const tabConfig = [
  { label: 'Map', icon: <Map />, component: MapView },
  { label: 'Community', icon: <Group />, component: CommunityView },
  { label: 'Photo', icon: <Photo />, component: PhotoView },
  { label: 'Flight log', icon: <Flight />, component: FlightLogView },
  { label: 'Account', icon: <Person />, component: AccountView },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabConfig[activeTab].component;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        bgcolor: 'background.default'
      }}>
        {/* Header */}
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Flight sx={{ mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
              Sky Community
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ 
          flexGrow: 1, 
          overflow: 'auto',
          pb: activeTab === 3 ? 0 : 2  // FlightLogViewのpaddingを考慮
        }}>
          <ActiveComponent />
        </Box>

        {/* Bottom Navigation */}
        <BottomNavigation
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ 
            position: 'sticky',
            bottom: 0,
            zIndex: 1000,
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.75rem',
              fontWeight: 500,
            }
          }}
        >
          {tabConfig.map((tab, index) => (
            <BottomNavigationAction
              key={index}
              label={tab.label}
              icon={tab.icon}
              sx={{
                minWidth: 0,
                '&.Mui-selected': {
                  color: 'primary.main',
                  '& .MuiSvgIcon-root': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }
              }}
            />
          ))}
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}

export default App;