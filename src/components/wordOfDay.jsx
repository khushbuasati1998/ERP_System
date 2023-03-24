import React from 'react';
import { Box, CssBaseline, Grid, IconButton } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import CardTitle from '../commonComponents/cardTitle';
import colors from '../constant/colors';
import PaperRoot from '../commonComponents/paper';

const description = `The defination of benevolent is enjoying helping
 others or someone whose characteristic is being 
 friendly.`;

const WordOfDay = () => {
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <PaperRoot styles={{ width: 'fit-content', padding: '1rem 1.5rem 1.5rem' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardTitle title="Word of the day" style={{ marginBottom: '0.5rem' }} />
                    <LoopIcon fontSize='small' />
                </Grid>
                <CardTitle title="be-nev-o-lent" style={{ marginBottom: '0.45rem' }} />
                <CardTitle title="adjective" style={{ marginBottom: '1rem', fontWeight: '400', color: colors.lightPurple, fontSize: '13px' }} />
                <CardTitle title={description} style={{ marginBottom: '2rem', fontWeight: '400', color: colors.lightPurple, fontSize: '13px' }} />
                <IconButton sx={{ background: colors.purple, padding: '6px 11px', borderRadius: '16%', color: colors.white }}><VolumeUpOutlinedIcon fontSize='small' /></IconButton>
            </PaperRoot>
        </Box>
    );
}

export default WordOfDay;
