import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import ReduxCode from './ReduxCode';

const Blog = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h1>Redux</h1>
        <p>Instalamos redux</p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.code1}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Entonces creamos la store</p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.store}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Y configuramos el reducer en un nuevo archivo dentro de la carpeta
          store
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.reducer}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Ahora instalamos el paquete que nos permitirá usar redux con react
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.reactredux}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Provider</h3>
        <p>
          Importamos provider que nos permitirá pasar la store a todos los
          componentes
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.provider}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>connect de react-redux</h3>
        <p>
          Configuramos el estado y las acciones a través de props en los
          componentes
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.component}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>actions.js</h3>
        <p>
          Para llevar un control de las acciones y recibir un error si hemos
          tipografiado algo mal, creamos un archivo actions.js
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.actions}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Lo importamos para usarlo en los componentes donde necesitamos las
          acciones de redux{' '}
        </p>
        <Box my={3}>
          <CopyBlock
            text={ReduxCode.actionsimport}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
