import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem =(props)=> {
    let{title,description,imgUrl,newsUrl,author,date,source} =props;
    return (
      <><div className="my-3">

        <div className="card" >
       <div style={
        {
          display:'flex', justifyContent:'flex-end',position:'absolute' ,right:'0'
        }
       }>
        <span className=" badge rounded-pill bg-danger" >{source} </span>
       </div>
        
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
    <Link to={newsUrl} className="btn btn-primary btn-dark"target='_blank'>Read More</Link>
  </div>
</div>
      </div>

      </>
    )
  
}

export default NewsItem