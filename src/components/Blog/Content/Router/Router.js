import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import RouterCode from './RouterCode';

const Router = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h1>React Router</h1>
        <p>Primero hay que instalar el paquete</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.code1}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Es imprescindible rodear los componentes donde queremos usar router
          con BrowserRouter
        </p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.browserrouter}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Si la ruta por defecto no es '/' entonces podemos configurarlo</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.default}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Para definir una ruta primero hay que importar route</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.route}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          También se puede crear una ruta que hace un render de un componente,
          el componente debe estar importado primero
        </p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.component}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>WithRouter</h3>
        <p>Pasa los history props entre archivos</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.withrouter}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Link y NavLink</h3>
        <p>
          Lo utilizaremos en lugar de 'a' tags para que la pagina no se
          recargue, NavLink utiliza la clase .active en elementos activos
        </p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.link}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Switch</h3>
        <p>
          Se encarga de que solo los elementos por orden son renderizados, de
          esa manera evitamos que '/hola/hola' se cargue debajo de '/hola'
        </p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.switch}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Params</h3>
        <p>Se refieren a los parametros de ruta dinamicos</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.params}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Redirect</h3>
        <p>Redireccionar rutas</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.redirect}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>404</h3>
        <p>Rutas no disponibles, podemos crear una página 404</p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.error}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>Suspense</h3>
        <p>
          Para evitar cargar por defecto rutas que posiblemente no se usarán
          podemos usar Suspense
        </p>
        <Box my={3}>
          <CopyBlock
            text={RouterCode.lazy}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
      </Container>
    </div>
  );
};

export default Router;
