import React from 'react';
import admin from '../ethereum/admin'
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class validHospitalList extends React.Component {
    static async getInitialProps() {
        const hospitals = await admin.methods.getValidHospitals().call();
        return {hospitals};
    }
    renderHospitals() {
        const items = this.props.hospitals.map(address => {
            return{
                header: address,
                description:( 
                <Link route={`/hospitals/${address}`}>
                <a>Chi tiết chương trình</a>
                </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }
   

    render(){
        return (
        <Layout>
            <div>
                <h3>Chương trình đang kêu gọi</h3>
               <Link route="/hospitals/register">
                <a><Button
                    style={{ marginTop: '10px' }}
                    content="Tạo chương trình"
                    icon="share square"
                    color='grey'
                    floated='right'
                /></a></Link>
                
                {this.renderHospitals()}
            </div>;
        </Layout>
        );    
    }
}

export default validHospitalList;