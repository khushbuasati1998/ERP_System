import React from 'react';
import { Box, CssBaseline, Fab, List, ListItem, ListItemIcon, ListItemText, Divider, Stack, Typography } from '@mui/material';

import CardTitle from '../commonComponents/cardTitle';
import PaperRoot from '../commonComponents/paper';

import colors from '../constant/colors';
import {detailsList, buttonsList} from '../data/officeDetails';

const OfficeDetails = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <PaperRoot styles={{ width: 'fit-content', paddingTop: '1rem', paddingBottom: '1.5rem' }}>
        <CardTitle title="Our Office" style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }} />
        <List>
          {detailsList.map((item, index) => (
            <>
              <ListItem key={item.id} sx={{ paddingLeft: '21px', paddingRight: '23px' }}>
                <ListItemIcon sx={{ minWidth: '34px', color: colors.black }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={<Typography sx={{ color: colors.black, fontSize: '14px' }}>{item.text}</Typography>}
                />
              </ListItem>
              {index === detailsList.length - 1 ? null : <Divider />}
            </>
          ))}
        </List>
        <Stack direction="row" spacing={1} sx={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          {
            buttonsList.map((item) => (
              <Fab key={item.id} size="small"
                sx={{ background: item.color, color: colors.white }}
              >
                {item.icon}</Fab>
            ))
          }
        </Stack>
      </PaperRoot>
    </Box>
  );
}

export default OfficeDetails;
