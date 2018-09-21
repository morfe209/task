import React, {Component} from "react";
import { connect } from 'react-redux';
import PhotoItem from "../components/PhotoItem";


class PhotoList extends Component{
  render(){
    if(this.props.photos){

      const {albumIndex, photos} = this.props;
      const {id, title} = this.props.albums[albumIndex];
      var photoList = photos[id].map(p => 
        (<PhotoItem 
            key={+p.id}
            title={p.title}
            thumbnailUrl={p.thumbnailUrl}
            url={p.url}
          />
        ));
      return (
        <div className="container">
          <h1>Album title: {title}</h1>
          <div className="row">
              {photoList}
          </div>
        </div>
      )
    } else {
      return(
        <div className="container">
            <p> Load Photos </p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    albums: state.albums
  };
}

export default connect(mapStateToProps)(PhotoList);