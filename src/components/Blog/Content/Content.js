const Content = {
  axios: {
    title: 'Axios',
    code1: `<Typography variant='h4' color='initial'>
            {code.title}
                </Typography>
                
        {code.content}

        <CopyBlock
            text={code.content}
            language='jsx'
            showLineNumbers='true'
            theme={nord}
            wrapLines
            codeBlock
        />
        <Box my={3}></Box>
        </Container>`,
  },
};

export default Content;
