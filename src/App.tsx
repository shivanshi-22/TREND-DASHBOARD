'use client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Grid, AppBar, Toolbar, Typography, Container, Paper, Fade } from '@mui/material';
import { BarChart3, Sparkles } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { RevenueChart } from './components/RevenueChart';
import { ProductPerformance } from './components/ProductPerformance';
import { RegionChart } from './components/RegionChart';
import { CustomerTable } from './components/CustomerTable';
import { OrdersChart } from './components/OrdersChart';
import { metricsData } from './data/mockData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#f59e0b',
    },
    background: {
      default: '#f8f9fa',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.95)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.9)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        flexGrow: 1,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <AppBar position="static" color="inherit">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
              <Box sx={{ 
                p: 1.5, 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
              }}>
                <BarChart3 color="white" size={28} />
              </Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 800, 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                Analytics Dashboard
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="xl" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          <Fade in timeout={800}>
            <Grid container spacing={4}>
              {/* Metrics Cards */}
              {metricsData.map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Fade in timeout={1000 + index * 200}>
                    <div>
                      <MetricCard {...metric} />
                    </div>
                  </Fade>
                </Grid>
              ))}
              
              {/* Revenue Chart */}
              <Grid item xs={12} lg={8}>
                <Fade in timeout={1800}>
                  <div>
                    <RevenueChart />
                  </div>
                </Fade>
              </Grid>
              
              {/* Region Chart */}
              <Grid item xs={12} lg={4}>
                <Fade in timeout={2000}>
                  <div>
                    <RegionChart />
                  </div>
                </Fade>
              </Grid>
              
              {/* Orders Chart */}
              <Grid item xs={12} lg={8}>
                <Fade in timeout={2200}>
                  <div>
                    <OrdersChart />
                  </div>
                </Fade>
              </Grid>
              
              {/* Product Performance */}
              <Grid item xs={12} lg={4}>
                <Fade in timeout={2400}>
                  <div>
                    <ProductPerformance />
                  </div>
                </Fade>
              </Grid>
              
              {/* Customer Table */}
              <Grid item xs={12}>
                <Fade in timeout={2600}>
                  <div>
                    <CustomerTable />
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;