import React from 'react';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';

import FormComponent from './FormComponent';
import FormItem from './FormItem';

const schema = Yup.object().shape({
    title: Yup.string().required('Please add a question').label('Question'),
    option_one: Yup.string().required('At least two options required').label('First option'),
    option_two: Yup.string().required('At least two options required').label('Second option'),
    option_three: Yup.string().label('Question'),
    option_four: Yup.string().label('Question'),
    correctAnswers: Yup.array().of(Yup.string().required()).min(1, 'Please select one or more correct answers').required()
});

//COMPONENT USED TO RENDER FORM FOR QUESTIONS ADDED TO FIRESTORE
function QuestionForm({ 
    initialValues, 
    onSubmit,
    feedBack,
    success 
}) {
    
    return (
        <FormComponent
        schema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        buttonText={"Done"}
        >
            <FormItem
            largeTitle
            fieldName={"title"}
            placeholder={"Type your question here"}
            labelText={"Question:"}
            />
            <FormItem
            fieldName={"option_one"}
            placeholder={"Option 1(required)"}
            labelText={"Option 1:"}
            cbValue={"option_one"}
            cbName={"correctAnswers"}
            cbText={"Option one is correct."}
            />
            <FormItem
            fieldName={"option_two"}
            placeholder={"Option 2(required)"}
            labelText={"Option 2:"}
            cbValue={"option_two"}
            cbName={"correctAnswers"}
            cbText={"Option two is correct."}
            />
            <FormItem
            fieldName={"option_three"}
            placeholder={"Option 3(optional)"}
            labelText={"Option 3:"}
            cbValue={"option_three"}
            cbName={"correctAnswers"}
            cbText={"Option three is correct."}
            />
            <FormItem
            fieldName={"option_four"}
            placeholder={"Option 4(optional)"}
            labelText={"Option 4:"}
            cbValue={"option_four"}
            cbName={"correctAnswers"}
            cbText={"Option four is correct."}
            />
            {success && <Alert severity="success">{feedBack}</Alert>}
        </FormComponent>
    );
}

export default QuestionForm;
