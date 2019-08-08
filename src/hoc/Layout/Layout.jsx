import React, {Component} from 'react';
import './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer'
class Layout extends Component {
    
    render(){
        return(
            <div>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default Layout;