import React from 'react';
//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router';
//MATERIAL UI
import Grid from '@material-ui/core/Grid';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import { 
  ButtonComponent, 
  UnderTitle, 
  SubTitle 
} from '../components/BaseComponents';
import PageContainer from '../components/PageComponents/PageContainer';

export default function Home() {

  const router = useRouter()
  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PageContainer title={"Welcome to Kashoot"}>
        <Grid 
        container
        direction='column'
        alignItems='center'
        alignContent='center'
        justify='space-between'
        className={classes.grid}
        >
          <Grid 
          item xs={12}
          container
          justify='space-between'
          direction='column'
          className={classes.titleContainer}
          >
            <SubTitle component={"h1"}>Welcome!</SubTitle>
            <UnderTitle component={"h2"} className={classes.underTitle}>Choose to create or join quiz to get started.</UnderTitle>
          </Grid>
          <Grid 
          item xs={12} 
          sm={6}
          >
            <ButtonComponent
            className={classes.welcomeButton} 
            onClick={() => router.push('/login')} 
            size={"large"}
            >Create quiz</ButtonComponent>
          </Grid>
          <Grid 
          item xs={12} 
          sm={6}
          >
            <ButtonComponent 
            className={classes.welcomeButton}
            onClick={() => router.push('/participant')} 
            size={"large"}
            >Join quiz</ButtonComponent>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  )
}
