import React from 'react';
import { render } from 'react-dom';
import Layout from '../components/Layout';
import {Button} from 'semantic-ui-react';

class help extends React.Component {
    render(){
        return (
            <div>
                <Layout>
                <h1>Hè lố</h1>
                {/* <h3></h3>
                <h3>maybe regarding your payment or hospitals</h3> */}
                <hr></hr>
                <h4>Liên hệ</h4>
                <Button circular color="google plus" icon="mail" />
                <Button circular color='linkedin' icon='linkedin' />
                <Button circular color='facebook' icon='facebook' />
            </Layout>
            </div>
        );
    }
}

export default help;