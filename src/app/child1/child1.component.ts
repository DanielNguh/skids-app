import { Component, OnInit } from '@angular/core';
interface kidsInterface {
  name: string,
  class: string,
  picture: string
}


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  kid1: kidsInterface = {
    name: 'Daniel N.',
    class: 'Grade 1',
    picture: '../../assets/images/kid1.png'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
