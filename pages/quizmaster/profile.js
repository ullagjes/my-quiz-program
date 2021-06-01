
import React from 'react';
//NEXT
import { useRouter } from 'next/router'
//MATERIAL UI
import { 
    Grid, 
    Card, 
    CardActions, 
    CardContent
} from '@material-ui/core';
import FaceRounded from '@material-ui/icons/FaceRounded'
//CONTEXT
import { useAuth } from '../../context/authContext';
import { useQuizMaster } from '../../context/quizMasterContext';
//UTILS
import { handleSignOut } from '../../utils/firebaseHelpers';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import { 
    TextElement, 
    ButtonComponent,
    SubTitle 
} from '../../components/BaseComponents';
import PageContainer from '../../components/PageComponents/PageContainer';

function profile() {

    const router = useRouter();
    
    const { userData } = useQuizMaster();
    const user = userData.uid
    const { loading, isAuthenticated } = useAuth();

    const classes = useStyles();

    async function signOut(){
        await handleSignOut()
        router.push('/')
    }

    //AUTHENTICATION
    if(loading){
        return(
        <>Loading...</>
        );
    };
    
    if(isAuthenticated === false) {
        router.push('/login');
        return <>You aren't logged in.</>
    };

    return (
        <PageContainer title={"Profile page"} user={user}>
            <Grid 
            className={classes.grid} 
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid item xs={12} className={classes.titleGrid}>
                    <SubTitle component={"h1"}>Profile</SubTitle>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <FaceRounded className={classes.icon}/>
                            <TextElement>User: {userData.email}</TextElement>
                        </CardContent>
                        <CardActions>
                            <ButtonComponent onClick={signOut}>Sign out</ButtonComponent>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default profile;