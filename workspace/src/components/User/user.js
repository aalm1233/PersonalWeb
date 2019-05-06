import React, { Component } from 'react';
import config from '../../chart/config';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/parallel';
import 'echarts/lib/component/title';



class User extends Component{
    constructor(props){
        super(props);
        let id = ('_'+Math.random()).replace('.','_');
        this.state = {
            lineId : 'line' +id,
        }
    }
    initPie = (id) => {
        let mychart = echarts.getInstanceByDom(document.getElementById(id));
        if (mychart === undefined){
          mychart = echarts.init(document.getElementById(id));
        }
        mychart.setOption(config);
      }
      componentDidMount() {
        this.initPie(this.state.lineId);
      }
      componentWillUpdate() {
        this.initPie(this.state.lineId);
      }

      render(){
          return(
            <div id={this.state.lineId} style={{background: '#fff', minHeight: 280,Width:'100%' }}>
            </div>
          );
      }
}

export default User;