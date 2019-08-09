import React, {Component} from 'react';
import './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {FaGrin, FaPizzaSlice, FaTshirt, FaBaseballBall, FaBriefcaseMedical, FaStar, FaMobileAlt, FaShoppingBasket} from 'react-icons/fa';
import {MdPlace, MdAccessTime, MdLocalPhone} from 'react-icons/md';
class Layout extends Component {
    state={
        showSideDrawer: false,
        mainNavigation: [
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
        ],
        infoNavigation:[
            {
                link: '/stores',
                title: 'Stores',
                icon: <MdPlace />
            },
            {
                link: '/works-time',
                title: 'Works Time',
                icon: <MdAccessTime />
            },
            {
                link: '/contact-us',
                title: 'Contact us',
                icon: <MdLocalPhone />
            }
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
                <Toolbar infoNavigation={this.state.infoNavigation} mainNavigation={this.state.mainNavigation} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    infoNavigation={this.state.infoNavigation}
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