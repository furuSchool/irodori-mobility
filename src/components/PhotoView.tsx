import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Avatar, Typography, IconButton, Divider, Pagination } from '@mui/material';
import { Download, Favorite, Comment } from '@mui/icons-material';
import { mockUsers, myPhotos } from '../data/mockData';

const PhotoView: React.FC = () => {
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  // ページングのためのstateを追加
  const [myPhotosPage, setMyPhotosPage] = useState(1);
  const [friendsPhotosPage, setFriendsPhotosPage] = useState(1);

  // 1ページあたりの表示件数
  const ITEMS_PER_PAGE = 5;

  const handleLike = (photoId: string) => {
    const newLikedPhotos = new Set(likedPhotos);
    if (newLikedPhotos.has(photoId)) {
      newLikedPhotos.delete(photoId);
    } else {
      newLikedPhotos.add(photoId);
    }
    setLikedPhotos(newLikedPhotos);
  };

  const handleDownload = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${fileName}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PhotoCardコンポーネントは変更なし
  const PhotoCard = ({ photo, user, isMyPhoto = false }: { 
    photo: any, 
    user?: any, 
    isMyPhoto?: boolean 
  }) => (
    <Card sx={{ mb: 2, borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="250"
          image={photo.url}
          alt="空中写真"
          sx={{ objectFit: 'cover' }}
        />
        <IconButton
          onClick={() => handleDownload(photo.url, `flight-photo-${photo.id}`)}
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)'
            }
          }}
        >
          <Download />
        </IconButton>
      </Box>
      
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar 
            src={isMyPhoto ? 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg' : user?.avatar} 
            sx={{ width: 32, height: 32, mr: 1.5 }}
          />
          <Typography variant="subtitle2" fontWeight="bold">
            {isMyPhoto ? 'あなた' : user?.name}
          </Typography>
        </Box>
        
        <Typography variant="body2" sx={{ mb: 2 }}>
          {photo.caption}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton
                size="small"
                onClick={() => handleLike(photo.id)}
                color={likedPhotos.has(photo.id) ? 'error' : 'default'}
              >
                <Favorite fontSize="small" />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton size="small">
                <Comment fontSize="small" />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {photo.comments?.length || 0}
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="caption" color="text.secondary">
            {new Date(photo.timestamp).toLocaleDateString('ja-JP')}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  // --- 表示データの計算ロジック ---

  // 1. あなたの写真のページング処理
  const myPhotosTotalPages = Math.ceil(myPhotos.length / ITEMS_PER_PAGE);
  const displayedMyPhotos = myPhotos.slice(
    (myPhotosPage - 1) * ITEMS_PER_PAGE,
    myPhotosPage * ITEMS_PER_PAGE
  );

  // 2. フレンドの写真のページング処理
  // まず、全フレンドの写真を1つの配列にまとめる
  const allFriendsPhotos = mockUsers.flatMap(user => 
    user.photos.map(photo => ({ photo, user }))
  );
  const friendsPhotosTotalPages = Math.ceil(allFriendsPhotos.length / ITEMS_PER_PAGE);
  const displayedFriendsPhotos = allFriendsPhotos.slice(
    (friendsPhotosPage - 1) * ITEMS_PER_PAGE,
    friendsPhotosPage * ITEMS_PER_PAGE
  );


  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      {/* フレンドの写真セクション */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        フレンドの空中写真
      </Typography>
      
      {displayedFriendsPhotos.map(({ photo, user }) => (
        <PhotoCard key={photo.id} photo={photo} user={user} />
      ))}

      {/* フレンドの写真用ページネーション */}
      {allFriendsPhotos.length > ITEMS_PER_PAGE && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={friendsPhotosTotalPages}
            page={friendsPhotosPage}
            onChange={(event, value) => setFriendsPhotosPage(value)}
            color="primary"
          />
        </Box>
      )}
      {/* 自分の写真セクション */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        あなたの空中写真
      </Typography>
      
      {displayedMyPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} isMyPhoto />
      ))}
      
      {/* 自分の写真用ページネーション */}
      {myPhotos.length > ITEMS_PER_PAGE && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={myPhotosTotalPages}
            page={myPhotosPage}
            onChange={(event, value) => setMyPhotosPage(value)}
            color="primary"
          />
        </Box>
      )}
      
      <Divider sx={{ my: 3 }} />
    </Box>
  );
};

export default PhotoView;