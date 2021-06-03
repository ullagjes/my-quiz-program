import React from 'react';

import { Field, ErrorMessage } from 'formik';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles';

//USED WITH FORMCOMPONENT. FORM ITEM WILL RENDER AN INPUT FIELD AND AN OPTIONAL CHECKBOX.
function FormItem({
    largeTitle,
    fieldName, 
    fieldType,
    placeholder, 
    labelText, 
    cbValue, 
    cbName, 
    cbText
}) {
    const classes = useStyles();
    
    return (
        <Grid item xs={12} className={classes.itemContainer}>
            <label 
            htmlFor={fieldName} 
            className={largeTitle ? `${classes.labelLarge} + ${classes.label}` : classes.label}>
                {labelText}
            </label>
            <Field 
            name={fieldName} 
            type={fieldType ? fieldType : 'text'}
            placeholder={placeholder} 
            className={classes.field}
            />
            <ErrorMessage 
            component="div" 
            name={fieldName} 
            className={classes.errorMessage}
            />
            {cbName && <>
                <label className={classes.label}>
                    <Field type="checkbox" name={cbName} value={cbValue}/>
                        {cbText}
                </label>
                <ErrorMessage
                component="div"
                name={cbName}
                className={classes.errorMessage}
                />
            </>}
        </Grid>
    );
}

export default FormItem;