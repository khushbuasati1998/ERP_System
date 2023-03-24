import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, CssBaseline, Typography, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

import colors from '../../constant/colors';
import logo from '../../assets/images/logo.png';

import AllComponents from './allComponents';
import DrawerMenu from './menu';
import TopAppBar from './appBar';

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 1rem',
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function AppDrawer() {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopAppBar open={open} handleDrawerOpen={() => setOpen(true)} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Typography sx={{color: colors.grey3, fontWeight: 'bold', display: 'flex', alignItems: 'center'}}><img src={logo} width="26%" style={{marginRight: '5px'}} /> jumbo</Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        <MenuOpenOutlinedIcon fontSize="small" />
                    </IconButton>
                </DrawerHeader>
                <DrawerMenu open={open} />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: colors.bodyGrey }}>
                <DrawerHeader />
                <AllComponents />
            </Box>
        </Box>
    );
}