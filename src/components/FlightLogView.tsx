import React from 'react';
import { Box, Typography, Card, CardContent,Chip, Grid } from '@mui/material';
import {  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { School, TrendingUp, Water, Terrain, Flight as FlightIcon, Speed, Timer, LocalFireDepartment } from '@mui/icons-material';
import { flightLogs, flightSummary } from '../data/mockData';

const FlightLogView: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'school': return <School />;
      case 'trending_up': return <TrendingUp />;
      case 'water': return <Water />;
      case 'terrain': return <Terrain />;
      case 'landing': return <FlightIcon sx={{ transform: 'rotate(180deg)' }} />;
      default: return <FlightIcon />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'takeoff': return 'success';
      case 'altitude': return 'primary';
      case 'landmark': return 'secondary';
      case 'landing': return 'error';
      default: return 'primary';
    }
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 3, 
          textAlign: 'center', 
          fontWeight: 'bold',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
          p: 2,
          borderRadius: 2,
          mx: -2,
          mt: -2
        }}
      >
        Flight Log
      </Typography>

      {/* 飛行統計 */}
      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="primary">
            今日の飛行記録
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <Speed color="primary" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  飛行距離
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {flightSummary.distance}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <Timer color="secondary" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  飛行時間
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {flightSummary.duration}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <LocalFireDepartment color="error" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  消費カロリー
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {flightSummary.calories}kcal
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* タイムライン */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: 0 }}>
          <Timeline sx={{ px: 2, py: 1 }}>
            {flightLogs.map((log, index) => (
              <TimelineItem key={log.id}>
                <TimelineSeparator>
                  <TimelineDot 
                    color={getIconColor(log.type) as any}
                    sx={{ 
                      p: 1,
                      boxShadow: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: 3
                      }
                    }}
                  >
                    {getIcon(log.icon)}
                  </TimelineDot>
                  {index < flightLogs.length - 1 && (
                    <TimelineConnector sx={{ minHeight: 30 }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 1.5 }}>
                  <Card 
                    variant="outlined" 
                    sx={{ 
                      backgroundColor: 'grey.50',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'grey.100',
                        boxShadow: 2,
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" color="primary">
                          {log.timestamp}
                        </Typography>
                        <Chip 
                          label={log.type} 
                          size="small" 
                          color={getIconColor(log.type) as any}
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="body2">
                        {log.message}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FlightLogView;