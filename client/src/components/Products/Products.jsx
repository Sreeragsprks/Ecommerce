import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

const Product = React.lazy(() => import('./Product/Product'));

const Products = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3} alignItems='center'>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(item => <Product key={item} />)}
            </Grid>
        </Container>
    )
}

export default Products
