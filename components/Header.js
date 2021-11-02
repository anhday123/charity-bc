import React from 'react';
import { Menu,Dropdown,Segment } from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
    return(
        <Segment inverted>
        <Menu inverted secondary>
            <Link route="/"><a>
            <Menu.Item>
LOGO
            </Menu.Item></a></Link>
            <Menu.Menu position='right'>
             <a className="item" href="/hospitalList">Kiểm duyệt chương trình</a>
             <Dropdown item text='CHƯƠNG TRÌNH'>
            <Dropdown.Menu>
              <Link route="/validHospitalList"><a className="item">Chương trình đã kiểm duyệt</a></Link>
              <Link route="/hospitals/register"><a className="item">Tạo chương trình</a></Link>
            </Dropdown.Menu>
          </Dropdown>
             <a href="/help" className="item"> Trợ giúp</a>
            </Menu.Menu>
        </Menu>
        </Segment>
    );  
};