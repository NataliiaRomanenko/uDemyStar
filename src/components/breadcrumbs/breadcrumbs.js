import {Link, Route} from "react-router-dom";
import React, {Component} from "react";
import './breadcrumbs.css'

export default class Breadcrumbs extends Component{
    render(){
        const {match}=this.props;
        let url = match.url.substr(match.url.lastIndexOf('/')+1, match.url.length);
        console.log("url", url.length, "match", match);
        return(
            <React.Fragment>
                <Link to={match.url || ""} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
                    { url.length <= 0 ?
                        match.url
                        :
                        url
                    }
                </Link>
                <Route path={`${match.url}/:path/`} component={Breadcrumbs}/>
            </React.Fragment>
        )
    }
}

