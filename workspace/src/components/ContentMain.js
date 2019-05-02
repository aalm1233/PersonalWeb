import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import User from './user';
import Music from './Music';
import Vedio from './Vedio';

class ContentMain extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/page/User' component={User}/>
                    <Route exact path='/page/Music' component={Music}/>
                    <Route exact path='/page/Video' component={Vedio}/>
                </Switch>
            </div>
        )
    }
}
export default ContentMain