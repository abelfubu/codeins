import React from 'react';
import Box from '@material-ui/core/Box';
import './Blog.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CopyBlock, nord } from 'react-code-blocks';
import Content from './Content/Content';

const Blog = () => {
  return (
    <div className='Blog'>
      <Container maxWidth='lg'>
        <Typography variant='h4' color='initial'>
          {Content.axios.title}
        </Typography>

        <CopyBlock
          text={Content.axios.code1}
          language='jsx'
          showLineNumbers='true'
          theme={nord}
          wrapLines
          codeBlock
        />
        <Box my={3}></Box>
      </Container>
    </div>
  );
};

export default Blog;
