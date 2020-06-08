import React from 'react';
import Box from '@material-ui/core/Box';
import './Blog.css';
import Container from '@material-ui/core/Container';
import { CopyBlock, nord } from 'react-code-blocks';
import BlogCode from './BlogCode';

const Blog = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <h3>Renderizando html desde la base de datos</h3>
        <p>Pequeño truco para pasar data entre rutas</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.inner}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>preventDefault()</h3>
        <p>Evita que al hacer submit en un formulario se recargue la página</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.prevent}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>React Form</h3>
        <p>Ejemplo de formulario dinámico de React</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.form}
            language='jsx'
            theme={nord}
            codeBlock
          />
        </Box>
        <h3>React Input</h3>
        <p>Ejemplo de input dinámico de React</p>
        <Box my={3}>
          <CopyBlock
            text={BlogCode.input}
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
