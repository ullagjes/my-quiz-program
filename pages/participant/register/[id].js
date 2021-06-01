import React, { useState } from 'react';
//NEXT
import { useRouter } from 'next/router';
//YUP
import * as Yup from 'yup';
//MATERIAL-UI
import { Grid } from '@material-ui/core';
//UTILS
import { addParticipantToRunningQuiz } from '../../../utils/firebaseHelpers';
//COMPONENTS
import PageContainer from '../../../components/PageComponents/PageContainer';
import FormComponent from '../../../components/FormComponents/FormComponent';
import FormItem from '../../../components/FormComponents/FormItem';
import { Alert } from '@material-ui/lab';

const schema = Yup.object().shape({
    nickname: Yup.string().required('Please enter nickname').label('Nickname'),
});

function RegisterParticipant() {

    //BY USING THE ROUTER ID WE CAN ACCESS THE QUIZ DOCUMENT THAT IS RUNNING
    //ADDING PARTICIPANT NICKNAME CREATES A NEW DOCUMENT IN FIRESTORE WHERE POINTS AND ANSWERS ARE REGISTERED

    const router = useRouter();
    const { id } = router.query;

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('error')

    async function onSubmit(values){
        let checkNickname = await addParticipantToRunningQuiz(id, values.nickname.toLowerCase())
        if(checkNickname === false){
            setError(true)
            setErrorMessage('This nickname is already taken! Please try another one.')
        } else {
            setError(false)
            setSuccess(true)
            router.push(`/participant/quiz/${id}/${values.nickname.toLowerCase()}`)
        }
    }

    return (
        <PageContainer title={"Join quiz with a nickname"}>
            <Grid 
            container 
            direction="column"
            alignItems="center"
            style={{width: '100%'}}
            >
                <Grid item xs={12}>
                    <FormComponent
                    initialValues={{nickname: '',}}
                    schema={schema}
                    onSubmit={values => onSubmit(values)}
                    formTitle={"Add a nickname"}
                    buttonText={"Join quiz!"}
                    >
                        <FormItem
                        fieldName={"nickname"}
                        placeholder={"Nickname"}
                        labelText={"One last step - enter your nickname:"}
                        />
                        {error && <Alert severity="error">{errorMessage}</Alert>}
                        {success && <Alert severity="success">Success! Please wait...</Alert>}
                    </FormComponent>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default RegisterParticipant;