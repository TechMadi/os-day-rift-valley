import { Component, Input } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk';
import { tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight, TuiDurationOptions } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight],
})
export class HomeComponent {
  @Input() speed = 0;

  @tuiPure
  getAnimation(duration: number): TuiDurationOptions {
      return {value: '', params: {duration}};
  }
  
  isLeft = false;
  isTop = false;
  isRight = false;
  isBottom = false;


options:{
  name:string,
  description:string,
  link:string
}[]=[
  {
    name:"About Event",
    description:"We prioritize creating a welcoming space for all, regardless of their tech discipline, expertise.We have special sessions and plans to support women in Open Source",
    link:"https://lu.ma/open-day-rv"
  },
  {
    name:"Call  For Speakers",
    description:"We prioritize creating a welcoming space for all, regardless of their tech discipline, expertise.We have special sessions and plans to support women in Open Source",
    link:"https://sessionize.com/open-source-day-rift-valley"
  },
  {
    name:"Sponsorship Dec",
    description:"We prioritize creating a welcoming space for all, regardless of their tech discipline, expertise.We have special sessions and plans to support women in Open Source",
    link:"https://www.canva.com/design/DAFutsPtLps/gEMmL0zvKP8qnXQh713ZvQ/view?utm_content=DAFutsPtLps&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
  },
  {
    name:"Code of Conduct",
    description:"We prioritize creating a welcoming space for all, regardless of their tech discipline, expertise.We have special sessions and plans to support women in Open Source",
    link:"https://lu.ma/open-day-rv"
  }
]

}
