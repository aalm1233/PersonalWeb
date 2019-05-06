import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';

import {menuData} from '../data/MenuData'


const menus = menuData;


const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


class Home extends Component{
  renderCradItem = ({key,title}) => {
    return(
        <Card.Grid style={gridStyle}><Link to={key}>{title}</Link></Card.Grid>
    )
}
render(){
    return(
            <Card >
                {
                    menus.map(item =>{
                        return this.renderCradItem(item)
                    })
                }
            </Card>
    );
}
}
export default Home;
