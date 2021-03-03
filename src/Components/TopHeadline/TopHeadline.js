import React, { useEffect } from 'react';

const TopHeadline = () => {
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=17b91d27e4804f7bad2379e104d0cf27";
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    });
    return (
        <div>
            
        </div>
    );
};

export default TopHeadline;