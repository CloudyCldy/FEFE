import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Categories = ({ categories = [] }) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Categorías
            </Typography>
            <List>
                {categories.length === 0 ? (
                    <ListItem>
                        <ListItemText primary="No hay categorías disponibles" />
                    </ListItem>
                ) : (
                    categories.map((cat, idx) => (
                        <ListItem key={idx}>
                            <ListItemText primary={cat} />
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    );
};

export default Categories; 