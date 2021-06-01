import React, { useState } from 'react';
//YUP
import * as Yup from 'yup'
//NEXT
import { useRouter } from 'next/router';
//MATERIAL-UI
import Alert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';
//UTILS
import { createUserInFirestore } from '../utils/firebaseHelpers';
import firebaseInstance from '../utils/firebase';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import FormComponent from '../components/FormComponents/FormComponent';
import FormItem from '../components/FormComponents/FormItem';
import PageContainer from '../components/PageComponents/PageContainer';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().min(8).label('Email'),
    password: Yup.string().required().min(8).label('Password'),
})

function register() {
    const classes = useStyles();
    const router = useRouter();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Error!');
    const [success, setSuccess] = useState(false);

    //CREATES USER IN FIRESTORE
    async function onSubmit(values){
        try {
            await firebaseInstance.auth().createUserWithEmailAndPassword(values.email, values.password)
            firebaseInstance.auth().onAuthStateChanged((user) => {
                createUserInFirestore(user.uid)
                router.push('/login')
            })
            setError(false)
            setSuccess(true)
        } catch(error) {
            setErrorMessage(error.message)
            setError(true)
        }
    }

    return (
        <>
            <PageContainer title={"Register a new user"}>
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
                        formTitle={'Register new user'}
                        component={'h1'}
                        buttonText={'Submit'}
                        linkText={'Already registered? Log in here.'}
                        href={'/login'}
                        >
                            <FormItem
                            fieldName={"email"}
                            placeholder={"Email adress"}
                            labelText={"Enter email adress"}
                            />
                            <FormItem
                            fieldName={"password"}
                            placeholder={"Password"}
                            labelText={"Choose a password (min. 8 characters)"}
                            fieldType={'password'}
                            />
                            {success && <Alert severity="success">New user registered!</Alert>}
                            {error && <Alert severity="error">{errorMessage}</Alert>}
                        </FormComponent>
                    </Grid> 
                </Grid>
            </PageContainer>
        </>
    );
}

export default register;