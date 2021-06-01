import React from 'react';
import Head from 'next/head';

import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import NavComponent from '../NavComponent';

function PageContainer({title = '', user, children}) {

    const classes = useStyles();

    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
            <NavComponent user={user} />
            <Container component={"section"} className={classes.section}>
                {children}
            </Container>
        </>
    );
}

export default PageContainer;