import React from 'react';
import Box from '@material-ui/core/Box';
import '../../Blog.css';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import BlogCode from './muiCode';

const Mui = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h1>Material UI</h1>
        <p>Componentes para usar con react</p>
        <h3>createMuiTheme</h3>
        <p>Primero creamos un archivo theme.js</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.theme}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Provider</h3>
        <p>Rodeamos nuestra app con el provider</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.provider}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
      </Container>
    </div>
  );
};

export default Mui;
