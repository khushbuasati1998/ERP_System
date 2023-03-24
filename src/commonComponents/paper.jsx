import React from 'react';
import Paper from '@mui/material/Paper';

const PaperRoot = ({ children, styles }) => {
    return (
        <Paper
            sx={{ borderRadius: '12px', boxShadow: `0px 0px 11px 5px #dedede8c`, ...styles }}
            elevation={0}
        >
            {children}
        </Paper>
    );
}

export default PaperRoot;
