import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

function PageTitle({ title, buttonText, onClick }) {

    const classes = useStyles();

    return (
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        className={classes.container}
        >
            <Grid item xs={12} md={8}>
                <Typography variant={"h2"} component={"h1"}>
                    {title}
                </Typography>
            </Grid>
            {buttonText && 
                <Grid item xs={12} md={2}>
                    <Button className={classes.button} onClick={onClick}>
                        {buttonText}
                    </Button>
                </Grid>
            }
        </Grid>
    );
}

export default PageTitle;