import React, { Component } from 'react';
import * as classes from './SearchSection.module.scss';
import Select from 'react-select';
import CarrfourLogo from '../../Logos/Logo';
import {Categories, Data} from '../../../Data'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Button from '../../UI/Button/Button';
import {MdSearch} from 'react-icons/md';

class SearchSection extends Component{
    state = {
        selectedCategory: {
            label: 'All Categories',
            value: 'allCategories'
        },
    }

    handleChange = (selectedCategory) => {
        this.setState({ selectedCategory });
    };

    render(){
        const initialValues={
            search: '',
        };
        return(
            <section className={classes.Actions}>
                <CarrfourLogo source={Data.logos.carrfour.source} name={Data.logos.carrfour.title}/>
                <div class={classes.SearchSection}>
                    <Select
                        value={this.state.selectedCategory}
                        onChange={this.handleChange}
                        options={Categories}
                        className={classes.Categories}
                    />
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        render={(FormikProps)=>(
                            <Form className={classes.SearchForm}>
                                <div className={classes.Input}>
                                    <Field type="search" id="search" name="search" placeholder="Search" className={classes.InputElement}/>
                                    <ErrorMessage name="search" />
                                </div>
                                <Button type="submit" btnType="Default" disabled={FormikProps.isSubmitting}><MdSearch /></Button>
                            </Form>
                        )}
                    />
                </div>
            </section>
        )
    }
}

export default SearchSection;