import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Settings, Notifications, Help, ExitToApp, Person, Photo } from '@mui/icons-material';

const AccountView: React.FC = () => {
  const handleMenuClick = (item: string) => {
    alert(`${item}機能は開発中です`);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      {/* プロフィールセクション */}
      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Avatar 
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            sx={{ 
              width: 80, 
              height: 80, 
              mx: 'auto', 
              mb: 2,
              border: '3px solid',
              borderColor: 'primary.main'
            }}
          />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            あなた
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Sky Pilot レベル 5
          </Typography>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<Person />}
            onClick={() => handleMenuClick('プロフィール編集')}
            sx={{ mt: 1 }}
          >
            プロフィール編集
          </Button>
        </CardContent>
      </Card>

      {/* 統計情報 */}
      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="primary">
            あなたの記録
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <Box>
              <Avatar 
              src="/logo_02.PNG" 
              sx={{ 
                width: 32, 
                height: 32, 
                mb: 1, 
                mx: 'auto', 
                bgcolor: 'transparent' 
              }} 
              variant="rounded"
              />
              <Typography variant="h6" fontWeight="bold">47</Typography>
              <Typography variant="caption" color="text.secondary">総飛行回数</Typography>
            </Box>
            <Box>
              <Photo color="secondary" sx={{ mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">23</Typography>
              <Typography variant="caption" color="text.secondary">投稿写真数</Typography>
            </Box>
            <Box>
              <Person color="success" sx={{ mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">15</Typography>
              <Typography variant="caption" color="text.secondary">フレンド数</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* メニューリスト */}
      <Card sx={{ borderRadius: 2 }}>
        <List>
          <ListItem button onClick={() => handleMenuClick('設定')}>
            <ListItemIcon>
              <Settings color="primary" />
            </ListItemIcon>
            <ListItemText primary="設定" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('通知')}>
            <ListItemIcon>
              <Notifications color="secondary" />
            </ListItemIcon>
            <ListItemText primary="通知設定" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('ヘルプ')}>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            <ListItemText primary="ヘルプ" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('ログアウト')}>
            <ListItemIcon>
              <ExitToApp color="error" />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default AccountView;