import React, {Component} from 'react';
import './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
class Layout extends Component {
    
    render(){
        return(
            <>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;