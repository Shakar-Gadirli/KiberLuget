import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Articles = props => (
  <tr>
    <td>{props.articles.term}</td>
    <td>{props.articles.definition}</td>
  </tr>
)

export default function ArticleList () {

  const [articles,setArticles] = useState([])

  useEffect(() =>{
    axios.get('/articles/')
    .then(response => {
      setArticles(response.data)
      console.log(articles)
    })
    .catch((error) => {
      console.log(error);
    })

})


 
    return (
      <div>
        <h3>Articles</h3>
        
      </div>
    )
}
