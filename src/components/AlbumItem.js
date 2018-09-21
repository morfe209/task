import React, {Component} from "react";
import { Link } from "react-router-dom";

class AlbumItem extends Component{
  render(){
    if(this.props.photos){
      const {title, albumIndex, photos} = this.props;
      const thumbnailUrl = photos[Math.floor(Math.random()*photos.length)].thumbnailUrl;
      return (
        <div className="col-sm thumbnail-album">
          <img 
              src={thumbnailUrl}
              alt={title}
              height="150"
              width="150"
              className="thumbnail-image"
          />
          <div className="message-area">
            <Link to={`/albums/${albumIndex}/photos`}>{title}</Link>
          </div>
        </div>
        )
    } else {
      return (
        <div className="loads">
            <p> Please waite, loading</p>
        </div>
      )
    }

  }
}

export default AlbumItem;
