import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as classes from './SearchForm.module.scss';
import Button from '../Button/Button'
import {MdSearch} from 'react-icons/md'
const searchForm = (props) => {
    let initialValues = {
        search: ''
    }
    return (
        props.show ?
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                render={(FormikProps)=>(
                    <Form className={[props.className, classes.SearchForm].join(' ')}>
                        <div className={classes.Input}>
                            <Field type="search" id="search" name="search" placeholder="Search" className={classes.InputElement}/>
                            <ErrorMessage name="search" />
                        </div>
                        <Button className={classes.Submit} type="submit" btnType="Default" disabled={FormikProps.isSubmitting}><MdSearch /></Button>
                    </Form>
                )}
            />
        :null
    )
}

export default searchForm;
