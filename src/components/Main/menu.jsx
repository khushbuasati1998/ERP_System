import React from 'react';
import { Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import CardTitle from '../../commonComponents/cardTitle';
import { homeMenu, appMenu, cardsMenu, componentsMenu, extentionsMenu } from '../../data/drawerMenu';
import colors from '../../constant/colors';

const RenderListItem = ({ title, list, open }) => {
    return (
        <>
            {open ? <CardTitle title={title} style={{ margin: '1rem 0px 0px', fontWeight: '400', color: colors.lightPurple, fontSize: '11px' }} /> : null}
            <List>
                {list.map(item => <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 35,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5, p: 0, 
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={<CardTitle title={item.name} style={{ fontWeight: '400', color: colors.black1, fontSize: '11px' }} />} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                )}
            </List>
        </>
    )
};

export default function DrawerMenu({ open }) {
    return (
        <Stack sx={{padding: '0px 1rem', height: '97vh', overflowX: 'hidden', overflowY: 'scroll'}}>
            <RenderListItem title="HOME" list={homeMenu} open={open} />
            <RenderListItem title="APPS" list={appMenu} open={open} />
            <RenderListItem title="CARDS" list={cardsMenu} open={open} />
            <RenderListItem title="COMPONENTS" list={componentsMenu} open={open} />
            <RenderListItem title="EXTENSIONS" list={extentionsMenu} open={open} />
        </Stack>
    );
}