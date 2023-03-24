import React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, IconButton, InputBase, Badge, Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MuiAppBar from '@mui/material/AppBar';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';

import colors from '../../constant/colors';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background: colors.bodyGrey,
    boxShadow: `0px 1px 10px -4px #b9b5b578`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: colors.white,
    marginRight: 'auto',
    marginLeft: 0,
    width: '100%',
    boxShadow: `0px 4px 9px 0px #d8d8d8b8`,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 5, 1, 0),
        color: colors.black,
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: colors.pink2,
        color: colors.pink2,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function TopAppBar({ open, handleDrawerOpen }) {
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon sx={{ color: colors.purple }} />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon fontSize='small' />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search anything"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Stack direction="row" spacing={1}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                    >
                        <IconButton sx={{ background: colors.white, p: 1.25, boxShadow: `0px 4px 9px 0px #d8d8d8b8`, }}>
                            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '13px' }} />
                        </IconButton>
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                    >
                        <IconButton sx={{ background: colors.white, p: 1.25, boxShadow: `0px 4px 9px 0px #d8d8d8b8`, }}>
                            <NotificationImportantOutlinedIcon sx={{ fontSize: '13px' }} />
                        </IconButton>
                    </StyledBadge>
                </Stack>
                    <IconButton>
                        <Avatar sx={{ width: 34, height: 34 }} size="small" alt="Remy Sharp" src="https://i.pinimg.com/736x/60/7a/c7/607ac7108708bddbc549c37fdef374b0.jpg" />
                    </IconButton>
            </Toolbar>
        </AppBar>
    );
}