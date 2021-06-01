import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';
import { LinkComponent } from '../../BaseComponents';
import { Typography } from '@material-ui/core';

function FormComponent({ 
    children, 
    component,
    schema, 
    initialValues, 
    onSubmit, 
    buttonText, 
    formTitle,
    linkText,
    href 
}) {
    const classes = useStyles();

    return (
        <>
        <Grid 
        container 
        item
        direction="column"
        className={classes.root}>
            {formTitle && <Grid item xs={12}>
                <Typography variant={'h3'} component={component ? component : 'h2'} className={classes.title}>{formTitle}</Typography>
            </Grid>}
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={
                (values, { resetForm }) => {
                    onSubmit(values)
                    resetForm()
                }
            }
            >
                <Form className={classes.formContainer}>
                    <Paper className={classes.paper}>
                        <Grid 
                        container
                        direction="column"
                        spacing={3}
                        className={classes.grid}
                        > 
                        {children}
                        </Grid>
                        {linkText && <LinkComponent href={href}>
                            <p className={classes.link}>{linkText}</p>
                        </LinkComponent>}
                        <Button type="submit" className={classes.submit}>{buttonText}</Button>
                    </Paper>       
                </Form>
            </Formik>
            </Grid>
        </>
    );
}

export default FormComponent;