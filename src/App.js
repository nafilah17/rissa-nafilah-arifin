import React from 'react';
import {NavbarComponent,  Search} from './components';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
   <NavbarComponent />
    <div className="mt-3">
      <Container>
        <Search />
      </Container>
    </div>
   </>
  );
}

export default App;
