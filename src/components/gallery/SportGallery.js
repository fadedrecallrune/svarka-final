import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  { src: 
  'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0121.jpg',
   width: 1, height:1, size:'' },
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0120.jpg',
   width:4, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0119.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0117.jpg',
   width:4, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0114.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0115.jpg',
   width:3, height:3},
  {src: 'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0118.jpg',
   width:3, height:3},
  {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0113.jpg',
   width:4, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/sport/IMG-0116.jpg',
   width:3, height:3},

   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/1.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/2.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/3.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/4.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/5.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/6.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/7.jpg',
   width:3, height:3},
   {src:'http://res.cloudinary.com/dg28o9yt1/image/upload/v1534366269/svarka/circus/8.jpg',
   width:3, height:3},
  ]


  class SportGallery extends Component {
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

    render(){
      return (
        <div>
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
      )
    }
  }

  export default SportGallery