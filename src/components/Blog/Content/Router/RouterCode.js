const Content = {
  code1: `npm i react-router-dom`,
  browserrouter: `import React, { Component } from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import Blog from './containers/Blog/Blog';
  
  class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
        
      );
    }
  }
  
  export default App;`,
  route: `import { Route, Link } from 'react-router-dom';

<Route path='/' exact render={() => <h1>Hello</h1>} />`,
  component: `<Route path='/' exact component={Posts} />
<Route path='/new-post' component={NewPost} />`,
  withrouter: `import React from 'react';
import {withRouter} from 'react-router-dom'
  
import './Post.css';
  
const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);
  
export default withRouter(post);`,
  default: `<BrowserRouter basename="/my-app">
<div className="App">
  <Blog />
</div>
</BrowserRouter>`,
  link: `import { NavLink, Link } from 'react-router-dom';
<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  
when placing this link in a component loaded on /posts . If you'd use the same <Link>  
in a component loaded via /all-posts , the link would point to /all-posts/new .

<li><NavLink
  activeClassName="my-active"
  activeStyle={{color: 'steelBlue'}}
  exact
  to="/">Home</NavLink>
</li>`,
  switch: `import { Route, Link, Switch } from 'react-router-dom';

<Switch>
     <Route path='/' exact component={Posts} />
     <Route path='/new-post' component={NewPost} />
     <Route path='/posts/:id' exact component={FullPost} />
</Switch>`,
  params: `this.props.match.params.id , refers to the url params where id is /:id in the route`,
  redirect: `import { Route, Link, Switch, Redirect } from 'react-router-dom';

<Redirect from='/' to='Posts' />`,
  error: `<Route component={ErrorPage} />`,
  lazy: `const Lazy = React.lazy(() => import('./containers/Lazy'));
  
import React, { Suspense } from 'react';
  
<Route path='/lazy' render={() => (
  <Suspense fallback={<Spinner/>}>
    <Lazy/>
  </Suspense>
)}`,
  push: `this.props.history.push('/checkout');
this.props.history.goBack();
this.props.history.replace('/checkout/more');`,
  data: `<Route
  path={this.PaymentResponse.match.path + '/contact-data'}
  render={(props) => (<Component data={this.state.data} {...props} />)}
/>`,
  test: `<h3>Pasando datos a través de route</h3>
  <p>Pequeño truco para pasar data entre rutas</p>
  <Box my={3}>
    <CopyBlock
      text={RouterCode.data}
      language='jsx'
      theme={nord}
      codeBlock
    />
  </Box>`,
};

export default Content;
