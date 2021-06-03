import React, { useState } from 'react';
import { useRouter } from 'next/router';

import * as Yup from 'yup';

import { 
    createQuizDocument, 
    createQuizPin 
} from '../../utils/firebaseHelpers';

import FormComponent from './FormComponent';
import FormItem from './FormItem';
import Alert from '@material-ui/lab/Alert';

const schema = Yup.object().shape({
    title: Yup.string().required('Please add a title').label('Title')
})

//SMALLER FORM TO ADD A QUIZ DOCUMENT TO FIRESTORE
//IS RENDERED WHEN USER PRESSES 'CREATE QUIZ'-BUTTON
function QuizForm({ quizPin, userId }) {
    const router = useRouter()
    const initialValues = {title: ''}
    const [success, setSuccess] = useState(false)

    async function addNewQuizFirestore(values){
        createQuizPin()
        await createQuizDocument(userId, quizPin, values.title)
        setSuccess(true)
        router.push(`/createquiz/${quizPin}`)
    }
    
    return (
        <div>
            <FormComponent
            schema={schema}
            onSubmit={addNewQuizFirestore}
            initialValues={initialValues}
            buttonText={'Create'}
            >
                <FormItem 
                fieldName={'title'}
                labelText={'Name your quiz'}
                placeholder={'Type title here'}
                />
                {success && <Alert severity="success">Quiz created! Please wait...</Alert>}
            </FormComponent>
        </div>
    );
}

export default QuizForm;
