import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import AxiosCode from './AxiosCode';

const Blog = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h1>Axios</h1>
        <p>Primero hay que instalar axios</p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.code2}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Podemos configurar la ruta principal que vamos a utilizar para llegar
          al servidor, de esa manera no necesitaremos especificarla despues en
          cada request.
        </p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.code1}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>
          Después importaremos axios desde el archivo que hemos creado y no
          desde el paquete principal
        </p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.code3}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Un ejemplo de get request para una aplicacion de react</p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.code4}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Un ejemplo de post request</p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.code5}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <p>Delete request</p>
        <Box my={3}>
          <CopyBlock
            text={AxiosCode.delete}
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
