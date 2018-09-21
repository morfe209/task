import React, {Component} from "react";
// import { Link } from "react-router-dom";

class PhotoItem extends Component{
    render(){
      const {title, thumbnailUrl, url} = this.props;
      return (
        <div className="row col-sm thumbnail-photo">
          <img 
              src={thumbnailUrl}
              alt={title}
              height="150"
              width="150"
              className="thumbnail-image"
            />
            <div className="message-area">
              <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
            </div>
        </div>)
  }
}
export default PhotoItem;
