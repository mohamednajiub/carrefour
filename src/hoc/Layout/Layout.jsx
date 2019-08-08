import React, {Component} from 'react';
import './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {FaGrin, FaPizzaSlice, FaTshirt, FaBaseballBall, FaBriefcaseMedical, FaStar, FaMobileAlt, FaShoppingBasket} from 'react-icons/fa';
class Layout extends Component {
    state={
        showSideDrawer: false,
        linksItems:[
            {
                link: '/smart-phone',
                title: 'Smart Phone',
                icon: <FaMobileAlt />
            },
            {
                link: '/super-market',
                title: 'Super Market',
                icon: <FaShoppingBasket />
            },
            {
                link: '/babys',
                title: 'Babys',
                icon: <FaGrin />
            },
            {
                link: '/girls',
                title: 'Girls',
                icon: <FaStar />
            },
            {
                link: '/health-care',
                title: 'Health Care',
                icon: <FaBriefcaseMedical />
            },
            {
                link: '/baby-world',
                title: 'Baby World',
                icon: <FaBaseballBall />
            },
            {
                link: '/clothes',
                title: 'Clothes',
                icon: <FaTshirt />
            },
            {
                link: '/food',
                title: 'Food',
                icon: <FaPizzaSlice />
            },
        ]
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }
    
    render(){

        return(
            <>
                <Toolbar linksItems={this.state.linksItems} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    linksItems={this.state.linksItems}
                />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;