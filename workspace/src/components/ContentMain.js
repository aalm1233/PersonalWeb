import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import User from './User/user';
import Music from './Muisc/Music';
import Video from './Video/Video';
import File from './File/File'

class ContentMain extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/page/User' component={User}/>
                    <Route exact path='/page/Music' component={Music}/>
                    <Route exact path='/page/Video' component={Video}/>
                    <Route exact path='/page/File' component={File}/>
                </Switch>
            </div>
        )
    }
}
export default ContentMain