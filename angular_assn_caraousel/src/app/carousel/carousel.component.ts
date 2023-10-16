import { Component } from '@angular/core';

@Component({
  selector: 'app-caraousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images : String[] = [
    "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "https://imageio.forbes.com/blogs-images/danafeldman/files/2019/04/Got.png?format=png&width=1200",
    "https://www.oerlive.com/wp-content/uploads/2019/04/jonsnowonthronegot.jpg",
    "https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_1280,c_limit/jon-snow-series-1200.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_caXWvJ7B25r0xrVRj0ay7_zMCxmL_vWww&usqp=CAU"
  ]
  curr_slide : number = 0;
  prevSlide(){
    this.curr_slide = (this.curr_slide - 1 + this.images.length)% this.images.length;
    console.log(this.curr_slide)
    
  }
  nextSlide(){
    this.curr_slide = (this.curr_slide + 1)% this.images.length;
    console.log(this.curr_slide)

  }
  Slide(num : number){
    this.curr_slide = num-1;
  }
}
