import React from 'react';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout';
import Hospital from '../../../ethereum/hospital';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const {address} = props.query;
        const hospital = Hospital(address);
        const requestCount = await hospital.methods.getRequestCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
                return hospital.methods.requests(index).call();
            })
        );
        return {address, requests, requestCount};
    }
    renderRows() {
        return this.props.requests.map((request,index) => {
            return(
                <RequestRow 
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                />
            );
        });
    }
    
    render() {
            const {Header, Row, HeaderCell, Body} = Table;
            return (
                <Layout>
                    <h3>Requests</h3>
                    <Table>
                        <Header>
                            <Row>
                                <HeaderCell>Stt</HeaderCell>
                                <HeaderCell>Mô tả</HeaderCell>
                                <HeaderCell>Sô tiền</HeaderCell>
                                <HeaderCell>Địa chỉ nhận</HeaderCell>
                                <HeaderCell>Tình trạng</HeaderCell>
                            </Row>
                        </Header>
                        <Body>{this.renderRows()}</Body>
                    </Table>
                       {/* <div>Có {this.props.requestCount} yêu cầu</div> */}
                </Layout>
            );
        }
    
}

export default RequestIndex;