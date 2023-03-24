import React from 'react';
import { Box, Avatar, CssBaseline, BottomNavigation, BottomNavigationAction } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Post from '../assets/images/post.jpg';
import PaperRoot from '../commonComponents/paper';

const PostRoot = () => {
  return (
    <Box sx={{ pb: 7, borderRadius: '12px' }}>
      <CssBaseline />
      <img src={Post} width="100%" height="100%" style={{ objectFit: 'contain', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', }} />
      <PaperRoot styles={{ marginTop: '-3rem', padding: '0px' }}>
        <BottomNavigation
          sx={{
            borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px',
            marginTop: '2rem', paddingTop: '0.5rem'
          }}
        >
          <BottomNavigationAction sx={{ marginTop: '-2rem' }} icon={<Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtALV6HmrS30mehszlmFAz3UbADreFNYopQ&usqp=CAU" />} />
          <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon sx={{ color: "#7266ba" }} />} />
          <BottomNavigationAction icon={<ChatBubbleOutlineOutlinedIcon sx={{ color: "#7266ba" }} />} />
          <BottomNavigationAction icon={<LinkIcon sx={{ color: "#7266ba" }} />} />
        </BottomNavigation>
      </PaperRoot>
    </Box>
  );
}

export default PostRoot;
