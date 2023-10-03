import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
    link:"https://lu.ma/open-day-rv"
  },
  {
    name:"Code of Conduct",
    description:"We prioritize creating a welcoming space for all, regardless of their tech discipline, expertise.We have special sessions and plans to support women in Open Source",
    link:"https://lu.ma/open-day-rv"
  }
]

}
