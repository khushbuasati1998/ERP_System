import React from 'react';
import { Box, CssBaseline, Grid, Button } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import ProductList from './productList';
import CardTitle from '../../commonComponents/cardTitle';
import colors from '../../constant/colors';
import PaperRoot from '../../commonComponents/paper';

const description = `Checkout what other people are liking the most!`;

const Products = () => {
    return (
        <Box>
            <CssBaseline />
            <PaperRoot styles={{ width: 'fit-content', padding: '1rem 1.5rem' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardTitle title="Popular Products" style={{ marginBottom: '0.3rem' }} />
                    <MoreHorizOutlinedIcon fontSize='small' />
                </Grid>
                <CardTitle title={description} style={{ marginBottom: '2rem', fontWeight: '400', color: colors.grey, fontSize: '13px' }} />
                <ProductList />
                <Button sx={{ color: colors.purple, fontSize: '13px' }}>View All</Button>
            </PaperRoot>
        </Box>
    );
}

export default Products;
