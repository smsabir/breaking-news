import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=17b91d27e4804f7bad2379e104d0cf27";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
            console.log(data);
        });
        
    }, []);
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;