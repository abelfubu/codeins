import React from 'react';
import Box from '@material-ui/core/Box';
import '../../Blog.css';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import BlogCode from './ContextCode';

const Context = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h1>Context</h1>
        <p>
          Context es un estado global al cual se puede acceder desde todo el
          documento.
        </p>
        <p>Primero creamos un archivo *-context.js</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.context}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>En index.js rodeamos nuestros componentes con el context provider</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.provider}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Importamos el Context en el archivo desde donde queremos usarlo, donde
          podemos actualizar el estado con la función configurada en el propio
          context
        </p>
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

export default Context;
