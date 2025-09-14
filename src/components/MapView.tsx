import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Box, Typography, Button, Chip, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Flight, AttachMoney, GetApp, ArrowBack } from '@mui/icons-material';
import { wingRentals } from '../data/mockData';
import type { WingRental } from '../types';
import 'leaflet/dist/leaflet.css';

// Custom wing icon for rental stations
const wingIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588314.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15]
});

const MapView: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<WingRental | null>(null);
  const [isRentalDialogOpen, setIsRentalDialogOpen] = useState(false);

  const handleStationClick = (station: WingRental) => {
    setSelectedStation(station);
    setIsRentalDialogOpen(true);
  };

  const handleRent = () => {
    alert('羽のレンタル機能は開発中です');
    setIsRentalDialogOpen(false);
  };

  const handleReturn = () => {
    alert('羽の返却機能は開発中です');
    setIsRentalDialogOpen(false);
  };

  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <MapContainer
        center={[35.6762, 139.6503]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {wingRentals.map((station) => (
          <Marker
            key={station.id}
            position={[station.location.lat, station.location.lng]}
            icon={wingIcon}
            eventHandlers={{
              click: () => handleStationClick(station)
            }}
          >
            <Popup>
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="h6" gutterBottom>
                  {station.stationName}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Flight color="primary" />
                  <Typography variant="body2">
                    利用可能: {station.availableWings}機
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AttachMoney color="secondary" />
                  <Typography variant="body2">
                    ¥{station.pricePerHour}/時間
                  </Typography>
                </Box>
              </Box>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Dialog open={isRentalDialogOpen} onClose={() => setIsRentalDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Flight color="primary" />
          {selectedStation?.stationName}
        </DialogTitle>
        <DialogContent>
          {selectedStation && (
            <Box>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">利用可能な羽</Typography>
                    <Chip 
                      label={`${selectedStation.availableWings}機`} 
                      color={selectedStation.availableWings > 0 ? 'success' : 'error'}
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    料金: ¥{selectedStation.pricePerHour}/時間
                  </Typography>
                </CardContent>
              </Card>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <Flight color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="スタンダード羽" 
                    secondary="初心者向け・最大高度100m" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Flight color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="プロフェッショナル羽" 
                    secondary="上級者向け・最大高度300m" 
                  />
                </ListItem>
              </List>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button 
            onClick={() => setIsRentalDialogOpen(false)}
            startIcon={<ArrowBack />}
          >
            戻る
          </Button>
          <Button 
            onClick={handleReturn}
            variant="outlined"
            startIcon={<GetApp />}
          >
            返却
          </Button>
          <Button 
            onClick={handleRent}
            variant="contained"
            startIcon={<AttachMoney />}
          >
            借りる
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MapView;