import React, { Component } from 'react';
import * as classes from './SearchSection.module.scss';
import Select from 'react-select';
import CarrfourLogo from '../../Logos/Logo';
import {Categories, Data} from '../../../Data'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Button from '../../UI/Button/Button';
import {MdSearch, MdShoppingCart} from 'react-icons/md';
import {FaUserPlus} from "react-icons/fa";
import LinkButton from '../../UI/LinkButton/LinkButton';
import Notifications from '../../UI/Notifications/Notifications'

class SearchSection extends Component{
    state = {
        selectedCategory: {
            label: 'All Categories',
            value: 'allCategories'
        }
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
                <div className={classes.SearchSection}>
                    <Select
                        value={this.state.selectedCategory}
                        onChange={this.handleChange}
                        options={Categories}
                        className={classes.Categories}
                        styles={{
                            control: () => ({
                                // none of react-select's styles are passed to <Control />
                                width: 200,
                                display: 'flex',
                                border: '1px solid #ccc',
                                borderRadius: "5px",
                                borderRight: 'none',
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                height: '35px'
                            }),
                        }}
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
                                <Button className={classes.Submit} type="submit" btnType="Default" disabled={FormikProps.isSubmitting}><MdSearch /></Button>
                            </Form>
                        )}
                    />
                </div>
                <div className={classes.ButtonsSection}>
                    <LinkButton Link='/cart'>
                        <MdShoppingCart />
                    </LinkButton>
                    <Notifications numberOfNotifications={5} className={classes.Notifications}/>
                    <LinkButton Link='/login' className={classes.Login}>
                        <FaUserPlus />
                        Login
                    </LinkButton>
                </div>
            </section>
        )
    }
}

export default SearchSection;