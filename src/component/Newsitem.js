import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3" >
        <div className="card" >
          <div className="source" style={{
           
              right: '0%',
              display:' flex',
              justifyContent:' end',
              position:' absolute',
         
          
        }}>
        <span
          
          className="badge rounded-pill bg-danger "
        >
          {source}
        </span>
        </div>
        <img style={{height:"300px"}} src={imageurl==null?"https://www.shutterstock.com/shutterstock/photos/1732584347/display_1500/stock-vector-picture-vector-icon-no-image-symbol-picture-coming-soon-no-photo-available-missing-image-sign-1732584347.jpg":imageurl} className="card-img-top " alt="..." />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Published by{!author == null ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString().toString().slice(0, 25)}
            </small>
          </p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-dark "
          >
         
            Read More
          </a>
        </div>
        

      </div>
      </div>
    );
  }
}

export default Newsitem;
