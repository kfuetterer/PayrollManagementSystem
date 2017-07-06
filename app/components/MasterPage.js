import Link from 'react-router';
import React from "react";

import Header from './Header';

const MasterPage = props => (
    <div className='MasterPage'>
        <Header />
            { props.children }
    </div>
);

export default MasterPage;