import React from 'react';
import {StarShipList} from '../sw-components';
import {withRouter} from 'react-router-dom';

const StarshipsPage =({history})=> {
        return (
            <StarShipList
                onItemSelected={(itemId)=>{
                    const newPath = `/starships/${itemId}`
                    history.push(newPath)
                }}
            />
        );
};
export default withRouter(StarshipsPage);
