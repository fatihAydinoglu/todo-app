import React from 'react';

import Wrapper from './Wrapper';
import WebsiteHeader from './WebsiteHeader';
import WebsiteFooter from './WebsiteFooter';

const App = (props) => (
    <Wrapper>
        <WebsiteHeader />
            { props.children }
        <WebsiteFooter />
    </Wrapper>
);

export default App;