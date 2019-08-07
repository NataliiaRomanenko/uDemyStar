import {Link, Route} from "react-router-dom";
import React from "react";
import './breadcrumbs.css'


const Breadcrumbs = ({ match }) => (

    <React.Fragment>
      <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
          {match.url.substr(match.url.lastIndexOf('/')+1, match.url.length)}
      </Link>
      <Route path={`${match.url}/:path/`} component={Breadcrumbs} />
    </React.Fragment>
)
export {Breadcrumbs};
