import React, {Component} from "react";
import { connect } from 'react-redux';
import { fetchAlbums } from "../store/actions/albums";
import { fetchPhotos } from "../store/actions/photos";
import AlbumItem from "../components/AlbumItem";


class AlbumList extends Component{
  componentDidMount() {
    const {fetchAlbums, currentUser} = this.props;
    // fetchAlbums(currentUser.user.id);
    var addAlbums = async function(){
      await fetchAlbums(currentUser.user.id);
    };
    addAlbums().then(() => {
      var {albums, fetchPhotos} = this.props;
        const tempAlbums = albums.slice();
        async function callPhotosApi(newAlbums){
          if(newAlbums.length === 0) return ;
          const albumId = newAlbums.pop().id;
          await fetchPhotos(albumId);
          callPhotosApi(newAlbums);
        };
        callPhotosApi(tempAlbums);
    });
    
  }

  render(){
    if(this.props.albums && Object.keys(this.props.photos).length === this.props.albums.length ){
      const {photos} = this.props;
      var albumList = this.props.albums.map((a, i) => 
        (<AlbumItem 
                key={a.id}
                albumIndex={i}
                albumId = {a.id}
                title={a.title}
                countAlbum={10}
                photos = {photos[a.id]}
          />
        ));

      return (
        <div className="row">
          {albumList}
        </div>
      )
    }else{
      return (
        <div className="loads">
            <p> Please waite, loading</p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    albums: state.albums,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchAlbums, fetchPhotos })(AlbumList);