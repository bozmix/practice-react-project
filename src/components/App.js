import React, {Fragment} from 'react';
import './App.css';
import { BlogList } from './BlogList/BlogList';
import { Header } from './Header/Header';

function App() {
  return (
    //Decomposed page
    //<Header />
    //<BlogList>
    //  <BlogItem />
    //  <BlogItem />
    //  <BlogItem />
    //</BlogList>

    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;
