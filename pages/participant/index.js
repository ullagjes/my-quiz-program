import React, { useState } from 'react';
//NEXT
import { useRouter } from 'next/router';
//YUP
import * as Yup from 'yup';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//UTILS
import { checkIfQuizExists } from '../../utils/firebaseHelpers';
//COMPONENTS
import PageContainer from '../../components/PageComponents/PageContainer';
import FormComponent from '../../components/FormComponents/FormComponent';
import FormItem from '../../components/FormComponents/FormItem';
import { Alert } from '@material-ui/lab';

const schema = Yup.object().shape({
    pincode: Yup.string().required('Please add a pincode').label('Pincode'),
});

function Participant() {
    const router = useRouter();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('error')
    async function onSubmit(values){
        const checked = await checkIfQuizExists(values.pincode)
        
        if(checked){
            router.push(`/participant/register/${values.pincode}`)
            setSuccess(true)
            setError(false)
        } else {
            setError(true)
            setErrorMessage('This quiz does not exist!')
        }
    }

    return (
        <PageContainer title={"Join quiz with pincode"}>
            <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            style={{width: '100%'}}>
                <Grid item xs={12}>
                    <FormComponent
                    initialValues={{pincode: '',}}
                    schema={schema}
                    onSubmit={values => onSubmit(values)}
                    formTitle={"Welcome to KaShoot!"}
                    component={'h1'}
                    buttonText={"Next"}
                    >
                        <FormItem 
                        fieldName={"pincode"}
                        placeholder={"000000"}
                        labelText={"Use the pincode supplied by your quizmaster to join the quiz"}
                        />
                        {error && <Alert severity="error">{errorMessage}</Alert>}
                        {success && <Alert severity="success">Success! Please wait...</Alert>}
                    </FormComponent>
                </Grid>
            </Grid>
        </PageContainer>
        
    );
}

export default Participant;
