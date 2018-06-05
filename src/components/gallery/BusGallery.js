import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  { src: 
  'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-24_13-46-57.jpg',
   width: 4, height:3, size:'' },
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-24_13-49-56.jpg',
   width:4, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254529/photo_2018-05-24_13-50-27.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254529/photo_2018-05-24_13-50-18.jpg',
   width:4, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-25_12-22-23.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254529/photo_2018-05-24_13-50-37.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-25_12-22-11.jpg',
   width:3, height:3},
  {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-24_13-50-09_1.jpg',
   width:4, height:3},

   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1527254530/photo_2018-05-25_12-22-23.jpg',
   width:3, height:3}
  ]


class BusPhotos extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    
    return (
      <div >
        <div style={{margin:'20px'}}>
      <Gallery photos={photos} onClick={this.openLightbox} />
      <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        </div>
      </div>
    );
  }
}

export default BusPhotos;
