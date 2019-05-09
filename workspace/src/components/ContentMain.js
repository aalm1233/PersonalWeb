import React from 'react';
import {HashRouter,Switch} from 'react-router-dom';
import {Route,Redirect} from 'react-router';
import Home from './Home';
import User from './User/user';
import Music from './Muisc/Music';
import Video from './Video/Video';
import File from './File/File'


class ContentMain extends React.Component {
    render() {
        return(
                <div>
                    <Route exact path='/' render ={ () =>{
                            return(
                                <Redirect to="/page/Home"/>
                            )
                    }}/>
                    <Switch>
                        <Route path='/page/Home' component={Home}/>
                        <Route path='/page/User' component={User}/>
                        <Route path='/page/Music' component={Music}/>
                        <Route path='/page/Video' component={Video}/>
                        <Route path='/page/File' component={File}/>
                    </Switch>
                </div>
        )
    }
}
export default ContentMain