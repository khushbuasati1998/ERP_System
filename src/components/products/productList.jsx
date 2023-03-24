import React from 'react';
import Grid from '@mui/material/Grid';

import CardTitle from '../../commonComponents/cardTitle';
import colors from '../../constant/colors';
import productsList from '../../data/productsList';

const RenderProductDetails = ({ details }) => {
    const { title, des, prePrice, newPrice, src, alt, id } = details;
    return (
        <Grid key={id} item xs={12} sm={12} md={8} lg={6} sx={{ display: 'flex', mb: 1 }}>
            <img src={src} alt={alt} style={{ borderRadius: '8px', marginRight: '0.8rem', width: '6.5rem', height: '6.5rem' }} />
            <Grid>
                <CardTitle title={title} style={{ color: colors.black1 }} />
                <CardTitle title={des} style={{ fontSize: '12px', fontWeight: '400', margin: '0.4rem 0px 0.6rem', color: colors.black1 }} />
                <Grid sx={{ display: 'flex' }}>
                    <CardTitle title={`$${prePrice}`} style={{ fontSize: '12px', fontWeight: '400', textDecoration: 'line-through', marginRight: '0.8rem', color: colors.grey }} />
                    <CardTitle title={`$${newPrice}`} style={{ fontSize: '12px', fontWeight: '400' }} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default function ProductList() {
    return (
        <Grid container spacing={2}>
            {productsList.map(item => <RenderProductDetails details={item} key={item.id} />)}
        </Grid>
    );
}