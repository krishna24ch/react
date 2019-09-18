import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Container } from 'react-bootstrap';

import routes from './routes';
import { store, history } from './store';
import logo from './assets/images/logo.svg';
import { ContentCenterContainer } from './components/common/ContentCenterContainer';

function App() {
    return (
        <Provider store={store}>
            <Container>
                <header className="header">
                    <img className="logo" alt="logo" src={logo} />
                </header>
                <ContentCenterContainer>
                    <Router history={history} routes={routes} />
                </ContentCenterContainer>
            </Container>
        </Provider>
    );
}

export default App;
