import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "business",
    pageSize: 5,
  };

  constructor() {
    super();
    this.state = {
      articles: parsedData.articles || [],
      page: 1,
      loading: false,
      totalResults:0,
    };
  }
  updatenews = async () => {
   this.props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ab81e5c02a47909bc85b0b65c1f0db&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(40)
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles ||[],
      totalResults: parsedData.totalResultss ||0,
      author: parsedData.author,
      date: parsedData.publishedAt,
      loading: false,
    });
    this.props.setProgress(100)
  };
  async componentDidMount() {
    this.updatenews();
  }
  
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ab81e5c02a47909bc85b0b65c1f0db&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page:this.state.page+1,
      articles: this.state.articles.concat(parsedData.articles) ||[],
      totalResults: parsedData.totalResultss ||0,
      author: parsedData.author,
      date: parsedData.publishedAt,
     loading:false

    });
  };

  
  // handleNextClick = async () => {
  //   console.log("next");
  //   this.updatenews();
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  // };
  // handlePervClick = async () => {
  //   this.updatenews();
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  // };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4"> Top Headlines </h1>
        <div>{this.state.loading && <Loader />}</div> 
        <InfiniteScroll
            dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData  }
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={this.state.loading &&<Loader/>}
        >
          <div className="container">
        <div className="row">

          { this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className=" container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page === 1}
            onClick={this.handlePervClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page > this.state.totalResults / this.props.pageSize
            }
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
export default News;
