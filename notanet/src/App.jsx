import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Nota from './components/Nota.jsx';
import Cards from './components/Cards.jsx';

function App() {
  return (
    <ChakraProvider>
      <Nota />
      <Cards />
    </ChakraProvider>
  );
}
<React/>
export default App;
