import React from 'react';
import * as classes from './Product.module.scss';
import Button from '../Button/Button';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const product = (props) => {
    const initialValues={
        quentety: 0,
    };
    return(
        <section className={classes.Product}>
            {
                props.sale?
                    <div className={classes.Sale}>
                        <p>Sale <span>{props.sale}</span></p>
                    </div>
                :null
            }
            <div className={classes.ProductDetails}>
                <img src={props.source} alt={props.productName} />
                <div className={classes.Prices}>
                    <span className={classes.Price}>{props.price}</span>
                    <span className={classes.Descount}>{(parseInt(props.price)*parseInt(props.sale))/100}$</span>
                </div>
                <p>{props.productName}</p>
                <div className={classes.Actions}>
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        render={(FormikProps)=>(
                            <Form className={classes.SearchForm}>
                                <div className={classes.Input}>
                                    <Field type="number" id="quentety" name="quentety" className={classes.InputElement}/>
                                    <ErrorMessage name="quentety" />
                                </div>
                                <Button className={classes.Submit} type="submit" btnType="Default" disabled={FormikProps.isSubmitting}>Add</Button>
                            </Form>
                        )}
                    />
                </div>
            </div>
            {
                props.lastUpdate?
                    <time dateTime={props.lastUpdate}>Last Update: {props.lastUpdate} </time>
                :null
            }
        </section>
    )
}

export default product;