import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

function LoadingComponent() {
    return (
        <Grid 
        container
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
        style={{width: '100%', maxWidth: '1000px', margin: '0 auto'}}
        >
            <Grid item>
                <CircularProgress size={150} style={{color: 'white', marginTop: '100px'}}/>
            </Grid>
        </Grid>
    );
}

export default LoadingComponent;