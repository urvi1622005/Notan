import React from 'react';
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import Nota from './components/Nota.jsx';
import Cards from './components/Cards.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    <ChakraProvider>
    
      <Nota />
      <Cards/>
      
    </ChakraProvider>
    </React.StrictMode>,
)
