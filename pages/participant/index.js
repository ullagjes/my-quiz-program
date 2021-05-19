import React from 'react';

import { useRouter } from 'next/router';

import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import firebaseInstance from '../../utils/firebase';
import { checkIfQuizExists } from '../../utils/firebaseHelpers';
import PageContainer from '../../components/PageComponents/PageContainer';
import { TextElement, UnderTitle } from '../../components/BaseComponents';
import FormComponent from '../../components/FormComponents/FormComponent';
import FormItem from '../../components/FormComponents/FormItem';



const schema = Yup.object().shape({
    pincode: Yup.string().required('Please add a pincode').label('Pincode'),
});

function Participant() {

    const router = useRouter();

    async function onSubmit(values){
        console.log(typeof values.pincode)
        const checked = checkIfQuizExists(values.pincode)
        if(checked){
            router.push(`/participant/register/${values.pincode}`)
        } else {
            alert('This quiz does not exist!')
        }
    }

    return (
        <PageContainer>
            <FormComponent
            initialValues={{pincode: '',}}
            schema={schema}
            onSubmit={values => onSubmit(values)}
            formTitle={"Welcome to KaShoot!"}
            buttonText={"Next"}
            >
                <FormItem 
                fieldName={"pincode"}
                placeholder={"000000"}
                labelText={"Use the pincode supplied by your quizmaster to join the quiz"}
                />
            </FormComponent>
        </PageContainer>
        
    );
}

export default Participant;

/*
<UnderTitle component={"h1"}>Welcome to KaShoot!</UnderTitle>
            <TextElement>Use the pincode supplied by your quizmaster to join the quiz.</TextElement>
            
<Formik
                validationSchema={validationSchema}
                onSubmit={(values)=> console.log(values)}
            >
                <Form>
                    <label htmlFor="pincode">Enter pin code here</label>
                    <Field name="pincode" type="text" placeholder="000000" />
                    <ErrorMessage name="pincode" />
                    <label htmlFor="name">Enter pin code here</label>
                    <Field name="name" type="text" placeholder="name" />
                    <ErrorMessage name="name" />
                    <button type="submit">Done</button>
                </Form>
                <Formik
            initialValues={{
                pincode: '',
                }}
            validationSchema={schema}
            onSubmit={
                (values, { resetForm }) => {
                    onSubmit(values)
                }
            }
            >
                <Form>
                    <label htmlFor="pincode">Enter pincode here: </label>
                    <Field name="pincode" type="text" placeholder="00000"/>
                    <ErrorMessage name="pincode" />
                    <br></br>
                    
                    <button type="submit">Join quiz!</button>
                            
                </Form>
            </Formik>

            </Formik>*/