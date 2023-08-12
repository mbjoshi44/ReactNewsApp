import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstCharactor = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b6837b7cb284f99a6b86a68744b900e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
     document.title = `${capitalizeFirstCharactor(props.category)}-MyNews`
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5b6837b7cb284f99a6b86a68744b900e&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        MyNews:-Top {capitalizeFirstCharactor(props.category)} Headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
 
        next={fetchMoreData}
        hasMore={articles.length!== totalResults}
        dataLength={articles.length}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={
                    !element.urlToImage
                      ? "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/chandrayaan-3-082904-16x9.jpg?VersionId=PjNHv6oa7HfJYpnsS3_BsuzI4efMzSKu"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  Category: PropTypes.string,
};

export default News;
