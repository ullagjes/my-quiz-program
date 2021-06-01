import React, { useState } from 'react';
//YUP
import * as Yup from 'yup'
//NEXT
import { useRouter } from 'next/router';
//MATERIAL-UI
import Alert from '@material-ui/lab/Alert';
//UTILS
import firebaseInstance from '../utils/firebase';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import PageContainer from '../components/PageComponents/PageContainer';
import FormComponent from '../components/FormComponents/FormComponent';
import FormItem from '../components/FormComponents/FormItem';
import { Grid } from '@material-ui/core';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().min(8).label('Email'),
    password: Yup.string().required().min(8).label('Password'),
})

function logIn() {

    const classes = useStyles();
    const router = useRouter();
    
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Error!');
    const [success, setSuccess] = useState(false);

    //SIGNS IN USER WITH FIRESTORE
    async function onSubmit(values){
        try {
            await firebaseInstance
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            router.push('/quizmaster')
            setError(false)
            setSuccess(true)
            
        } catch(error) {
            setError(true)
            setErrorMessage(error.message)
        }
    }
    
    return (
        <>
            <PageContainer title={'Log in to Kashoot'}>
                <Grid 
                container
                direction='column'
                justify='center'
                alignItems='center'
                alignContent='center'
                >
                    <Grid item xs={12} className={classes.grid}>
                        <FormComponent
                        schema={validationSchema}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values) => onSubmit(values)}
                        buttonText={"Submit"}
                        formTitle={"Log in"}
                        component={'h1'}
                        linkText={'New user? Register here'}
                        href={'/register'}
                        >
                            <FormItem
                                fieldName={"email"}
                                placeholder={"Enter email adress"}
                                labelText={"Email adress"}
                            />
                            <FormItem
                                fieldName={"password"}
                                placeholder={"Password"}
                                labelText={"Password (min. 8 characters)"}
                                fieldType={"password"}
                            />
                            {success && <Alert severity="success">Logged in! Please wait...</Alert>}
                            {error && <Alert severity="error">{errorMessage}</Alert>}
                        </FormComponent>
                    </Grid>
                </Grid>
            </PageContainer>
        </>
    );
}

export default logIn;