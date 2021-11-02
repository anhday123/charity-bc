import React from 'react';
import Layout from '../components/Layout';
import {Button} from 'semantic-ui-react';
import { Link } from '../routes';



class homePage extends React.Component {
    render() {
        return(
            <div>
     
            <Layout>
             <div>
             <h1 
             style={{ 
                textAlign: "center",
            color:"dimgrey",
            fontSize:"50px",
            marginTop:"17%"
            }}
             >Chương trình từ thiện</h1>
             <h3
             style={{
                 textAlign:"center",
                 color:"darkgrey"
             }}
             >Một cách tạo chương trình từ thiện theo xu hướng mới</h3>
            <Link route="/validHospitalList">
             <a><Button 
             style={{width:"300px",
            marginTop:"40px",
            marginLeft:"200px"
            }}
             basic color="grey">Chương trình đang kêu gọi</Button></a>
            </Link>
            <Link route="/hospitals/register">
             <a>   <Button 
             style={{width:"300px",
            marginTop:"40px",
            marginLeft:"100px"
            }}
             basic color="grey">Tạo 1 chương trình</Button></a>
             </Link>
         </div>
         </Layout>
         </div>
        );
    }
}

export default homePage;