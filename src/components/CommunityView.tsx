import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Box, Avatar, Typography, Dialog, DialogContent, DialogTitle, TextField, Button, IconButton } from '@mui/material';
import { Close, Favorite, Comment } from '@mui/icons-material';
import { mockUsers } from '../data/mockData';
import 'leaflet/dist/leaflet.css';

const CommunityView: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [commentText, setCommentText] = useState('');

  const createUserIcon = (avatarUrl: string) => {
    return new Icon({
      iconUrl: avatarUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
      className: 'user-marker'
    });
  };

  const handleUserClick = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
  };

  const handleCommentSubmit = () => {
    alert('コメント機能は開発中です');
    setCommentText('');
  };

  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <style>
        {`
          .user-marker {
            border-radius: 50% !important;
            border: 3px solid #1976d2 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
          }
        `}
      </style>
      
      <MapContainer
        center={[35.171278960483285, 136.88074296590105]}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {mockUsers.map((user) => (
          <Marker
            key={user.id}
            position={[user.location.lat, user.location.lng]}
            icon={createUserIcon(user.avatar)}
            eventHandlers={{
              click: () => handleUserClick(user)
            }}
          >
            <Popup>
              <Box sx={{ textAlign: 'center', minWidth: 150 }}>
                <Avatar 
                  src={user.avatar} 
                  sx={{ width: 50, height: 50, mx: 'auto', mb: 1 }}
                />
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={user.isOnline ? 'success.main' : 'text.secondary'}
                >
                  {user.isOnline ? 'オンライン' : 'オフライン'}
                </Typography>
              </Box>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Dialog 
        open={!!selectedUser} 
        onClose={() => setSelectedUser(null)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={selectedUser?.avatar} sx={{ width: 40, height: 40 }} />
            <Typography variant="h6">{selectedUser?.name}</Typography>
          </Box>
          <IconButton onClick={() => setSelectedUser(null)}>
            <Close />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ pt: 0 }}>
          {selectedUser && selectedUser.photos.length > 0 && (
            <Box>
              <Box
                component="img"
                src={selectedUser.photos[0].url}
                alt="空中写真"
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 2
                }}
              />
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <IconButton size="small" color="error">
                  <Favorite />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  {selectedUser.photos[0].likes} いいね
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedUser.photos[0].caption}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="コメントを入力..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  sx={{ flexGrow: 1 }}
                />
                <Button 
                  variant="contained" 
                  size="small" 
                  onClick={handleCommentSubmit}
                  startIcon={<Comment />}
                  disabled={!commentText.trim()}
                >
                  送信
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CommunityView;