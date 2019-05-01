import React, { Component } from 'react';
import config from '../chart/config';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class Home extends Component{
    constructor(props){
        super(props);
        let id = ('_'+Math.random()).replace('.','_');
        this.state = {
            pieId : 'pie' +id,
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
        this.initPie(this.state.pieId);
        // setTimeout(()=>{
        //   config.series[0].data = [
        //     {value:355,name:'中国'},
        //     {value:310, name:'美国'},
        //     {value:274, name:'英国'},
        //     {value:235, name:'俄罗斯'},
        //     {value:400, name:'法国'}
        //   ].sort(function(a,b){return a.value - b.value;});
        //   this.initPie(this.state.pieId);
        // },1000*5);
      }
      componentWillUpdate() {
        this.initPie(this.state.pieId);
      }

      render(){
          return(
            <div id={this.state.pieId} style={{ margin: '24px 16px', padding: 15, background: '#fff', minHeight: 280, }}>
            </div>
          );
      }
}
export default Home;
