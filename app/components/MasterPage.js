import { Link } from 'react-router';
import React from "react";
import DocumentTitle from 'react-document-title';

import Header from './Header';
import { LoginLink } from 'react-stormpath';

const MasterPage = props => (
    <DocumentTitle title='Stormpath Express'>
          <div className='MasterPage'>
              <Header />
              { props.children }
          </div>
    </DocumentTitle>
);

export default MasterPage;