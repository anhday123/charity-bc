import React from 'react';
import Layout from '../../components/Layout';
import Hospital from '../../ethereum/hospital';
import web3 from '../../ethereum/web3';
import {Card,Grid,Button} from 'semantic-ui-react';
import admin from '../../ethereum/admin';

import {Link } from '../../routes';




class validationDetail extends React.Component {
    state = {
        disabled: false,
        loading: false,
    
    };
     
    static async getInitialProps(props) {
        const hospital = Hospital(props.query.address);
        
        const summary = await hospital.methods.getDetails().call();
       return {
            address: props.query.address,
            manager: summary[0],
            name: summary[1],
            no: summary[2],
            location: summary[3],
            contributersCount: summary[4],
            balance: summary[5]
            

        };
    }

    renderCards() {
        
        const {
            manager,
            name,
            no,
            location,
            contributersCount,
            balance
        }= this.props;

        const items = [
            {
                header: name,
                meta:"Tên chương trình",
                // description:"one of the prestigious hospital of the city "
            },
            {
                header:manager,
                meta:"Địa chỉ người quản lí",
                // description:" he/she can only withdraw the donation for the wel being of covid 19 positive paitients",
                style: { overflowWrap: 'break-word'}
            },
            {
                header:no,
                meta:"Số tiền kêu gọi",
                // description:" now its spreading very fast "
            },
            {
                header:location,
                meta:"Địa điểm tổ chức",
                // description:"bhubaneswar"
            },
            {
                header:contributersCount,
                meta:"Số lần ủng hộ",
                // description:"be the first to help "
                
            },
            {
                header:balance,
                meta:"Số tiền hiện tại",
                // description:"total donation available"
            }
       
        ];
        return <Card.Group items={items} />
    }

    onClick = async event => {
        event.preventDefault();

        this.setState({loading: true});

        const accounts =  await web3.eth.getAccounts();
        await admin.methods.validateHospital(this.props.address).send({
            from: accounts[0]
        });

        
        this.setState({loading: false, disabled:true });
    

    };

    render() {
        return (
            <Layout>
                <h3>Chi tiết chương trình</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {/* <h2>Hello Developer</h2> */}
                            <h3>Hãy kiểm tra kĩ và phê duyệt chương trình là chương trình hợp lệ</h3>
                            <Button disabled={this.state.disabled} loading={this.state.loading} onClick={this.onClick} >
                                 Phê duyệt
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

}

export default validationDetail;