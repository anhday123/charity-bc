import React from 'react';
import Layout from '../../components/Layout';
import { Form ,Button ,Checkbox,Message } from 'semantic-ui-react';
import admin from '../../ethereum/admin';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';


class hospitalRegister extends React.Component {
    state = {
        nameHospital: '',
        addressHospital: '',
        noPaitients: '',
        errorMessage: '',
        loading: false
    };

    onSubmit =  async event => {
        event.preventDefault();
        this.setState({loading: true , errorMessage: '' });

        try{
        const accounts = await web3.eth.getAccounts();
        await admin.methods.RegisterHospital(this.state.nameHospital,this.state.addressHospital,this.state.noPaitients)
        .send({
            from: accounts[0]
        });
        Router.pushRoute('/validHospitalList');
        } catch(err) {
            this.setState({errorMessage: err.message})
        }
        this.setState({ loading: false});
    };


    render() {
        return(
            <Layout>
                <h3> Tạo chương trình</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                     <Form.Field>
                        <label>Tên chương trình</label>
                        <input 
                            // placeholder='name'
                            value = {this.state.nameHospital}
                            onChange={ event => 
                            this.setState({ nameHospital: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Địa điểm tổ chức</label>
                        <input 
                        // placeholder='Location'
                        value = {this.state.addressHospital}
                        onChange={ event => 
                        this.setState({ addressHospital: event.target.value })}
                        />
                     </Form.Field>
                     <Form.Field>
                         <label>Số tiền kêu gọi</label>
                         <input
                        //  placeholder="number"
                          value = {this.state.noPaitients}
                          onChange={ event => 
                          this.setState({ noPaitients: event.target.value })}
                          />
                     </Form.Field>
                    <Form.Field>
                        <Checkbox label='Đồng ý với mọi điều khoản của Hà và Tài!' />
                    </Form.Field>
                    <Message error header="lỗi" content={this.state.errorMessage} />
                    <Button type='submit' secondary loading={this.state.loading}>Tạo</Button>
              </Form>
            </Layout>
        );

    }
}

export default hospitalRegister;