import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const Products = ({ products = [] }) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Productos
            </Typography>
            <Grid container spacing={2}>
                {products.length === 0 ? (
                    <Grid item xs={12}>
                        <Typography>No hay productos disponibles</Typography>
                    </Grid>
                ) : (
                    products.map((prod, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle1">{prod.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {prod.description}
                                    </Typography>
                                    <Typography variant="body1" color="primary">
                                        ${prod.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default Products; 