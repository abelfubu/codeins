const Content = {
  code1: `import axios from 'axios';

  const instance = axios.create({
      baseURL: 'https://react-my-burger-e0cf1.firebaseio.com/'
  });
  
  export default instance;`,
  code2: `npm i axios`,
  code3: `import axios from '../../axios-orders';`,
  code4: `componentDidMount() {
    axios.get('/ingredients.json')
        .then(response => {
            this.setState({ ingredients: response.data });
        })
        .catch(error => {
            this.setState({error: true})
        })
}`,
  code5: `postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post('/posts', data).then((response) => {
      console.log(response);
      this.props.history.replace('/posts');
      //this.setState({submitted: true})
    });
  };`,
  delete: `deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
}`,
};

export default Content;
