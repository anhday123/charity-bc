import React from 'react';
import Layout from '../../components/Layout';
import Hospital from '../../ethereum/hospital';
import web3 from '../../ethereum/web3';
import {Card,Grid,Button} from 'semantic-ui-react';
import ContributeForm from '../../components/contributeForm';
import {Link } from '../../routes';


class hospitalDetails extends React.Component {
     
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
                meta:"Địa chỉ ",
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
                // description:"totals funds available"
            }
        ];
        return <Card.Group items={items} />
    }
 
    render() {
        return (
            <Layout>
                <h3> Chi tiết chương trình </h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                    <Link route={`/hospitals/${this.props.address}/withdraw`}>           
                    <a> <Button
                    style={{ marginTop: '30px' }}
                    content="Sử dụng quỹ"
                    icon="key"
                    color='grey'
                      /></a>
                      </Link>
                      
                          <Link route={`/hospitals/${this.props.address}/contributerList`}>
                             <a><Button
                              style={{ marginTop: '30px', marginLeft: "30px" }}
                              content="Danh sách ủng hộ"
                              icon="list ul"
                              color="grey"/></a>
                               </Link>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={10}>
                    <Link route={`/hospitals/${this.props.address}/requests/create`}>           
                    <a> <Button
            
                    content="Gửi yêu cầu hỗ trợ "
                    
                    color='grey'
                      /></a>
                      </Link>
                      
                          <Link route={`/hospitals/${this.props.address}/requests`}>
                             <a><Button
                              style={{ marginLeft: "30px" }}
                              content="Danh sách yêu cầu"
                              icon="list ul"
                              color="grey"/></a>
                               </Link>
                      </Grid.Column>
                    </Grid.Row>
                </Grid>      
            </Layout>
        );
    }
}

export default hospitalDetails;