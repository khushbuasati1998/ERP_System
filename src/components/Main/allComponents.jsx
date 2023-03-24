import React from 'react';
import Grid from '@mui/material/Grid';

import ProjectsAndTeams from '../ProjectsTeams/index';
import PostRoot from '../post';
import OfficeDetails from '../officeDetails';
import WordOfDay from '../wordOfDay';
import Products from '../products/index';

const AllComponents = () => {
    return (
        <Grid container spacing={4} justifyContent="center" sx={{ padding: '0px 2rem' }} >
            <Grid item xs={12} sm={12} md={6} lg={3}><WordOfDay /></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><OfficeDetails /></Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}><PostRoot /></Grid>
            <Grid item xs={12} sm={12} md={7} lg={8}><Products /></Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}><ProjectsAndTeams /></Grid>
        </Grid>
    );
}

export default AllComponents;