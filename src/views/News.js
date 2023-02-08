import React, { Component } from 'react'
import Article from '../components/Article';
import Button from '@mui/material/Button';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      inputText: ''

    }
  }

  getNews = async (term='bitcoin') => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6`);
    const data = await res.json();
    const articles = data.articles;
    this.setState({ articles: articles })
  }

  componentDidMount() {
    //this becomes very helpful when dealing with ASYNC actions
    console.log(this.state.articles)
    this.getNews()
  }

  showArticles = () => {
    return this.state.articles.map((a, i) => <Article age = {this.props.age} key={i} articleInfo={a} />)
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const term = e.target.input1.value
    this.getNews(term)
  };
  handleChange = (e)=> {
    this.setState({inputText: e.target.value})
  };


  render() {
    return (

      <div>
        <h1>News</h1>

        <form onSubmit={this.handleSubmit}>
          <input placeholder='uncontrolled' name='input1'/>
          <button type='submit'>Search</button>
        </form>

        <form>
          <input placeholder='controlled' value={this.state.inputText} onChange={this.handleChange}/>
          <Button variant="contained">Search</Button>
        </form>

        {/* SHOW ARTICLES HERE */}
        <div className='row'>
          {this.state.articles.length === 0 ? <p>loading..</p> : this.showArticles()}
        </div>

      </div>
  
    )
  }
}
