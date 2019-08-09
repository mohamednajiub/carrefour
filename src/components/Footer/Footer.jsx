import React, {Component} from 'react';
import * as classes from './Footer.module.scss';
import Logo from '../Logos/Logo';
import {Data} from '../../Data';
import {Link} from 'react-router-dom';
import Label from '../UI/Label/Label';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {MdMail} from 'react-icons/md'
import LinkButton from '../UI/LinkButton/LinkButton';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Button from '../UI/Button/Button'
class Footer extends Component {

    render() {
        const initialValues={
            email: '',
        };
        return(
            <footer className={classes.Footer}>
                <div className="container">
                    <header>
                        <Logo source={Data.logos.carrfour.source} name={Data.logos.carrfour.name}/>
                    </header>
                    <section className={classes.FooterMainSection}>
                        <div className={classes.FooterLinks}>
                            <div className={classes.Column}>
                                <Link to="smart-phone">Smart Phone</Link>
                                <Link to="super-market">Super Market</Link>
                                <Link to="babys">Babys</Link>
                            </div>
                            <div className={classes.Column}>
                                <Link to="girls">Girls</Link>
                                <Link to="health-care">Health Care</Link>
                                <Link to="baby-world">Baby World</Link>
                            </div>
                            <div className={classes.Column}>
                                <Link to="baby-world">Baby World</Link>
                                <Link to="clothes">Clothes</Link>
                                <Link to="food">Food</Link>
                            </div>
                        </div>
                        <div className={classes.Store}>
                            <Label link="#" className={classes.Icon} title='Find a carrefour store' icon={<FaMapMarkerAlt />}/>
                            <LinkButton link="/branches" className={classes.Button}>Find Store</LinkButton>
                        </div>
                        <div className={classes.Subscribtion}>
                            <Label link="#" className={classes.SubscribeIcon} title='Subscribe to carrefour' icon={<MdMail />}/>
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                render={(FormikProps)=>(
                                    <Form className={classes.SubscribtionForm}>
                                        <div className={classes.Input}>
                                            <Field type="email" id="email" name="email" placeholder="Your Email" className={classes.InputElement}/>
                                            <ErrorMessage name="email" />
                                        </div>
                                        <Button className={classes.Submit} type="submit" btnType="Default" disabled={FormikProps.isSubmitting}>Subscribe</Button>
                                    </Form>
                                )}
                            />
                        </div>
                    </section>
                    <footer>
                        <p>&copy; Careefour Store .Inc</p>
                        <img src={Data.paymentMethods.source} alt={Data.paymentMethods.name}/>
                        <div>
                            <p>Powerd by</p>
                            <Logo source={Data.logos.nasNav.source} name={Data.logos.nasNav.name}/>
                        </div>
                    </footer>
                </div>
            </footer>
        )
    }
}

export default Footer