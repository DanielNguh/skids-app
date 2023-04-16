import { Component, OnInit } from '@angular/core';
interface kidsInterface {
  name: string,
  class: string,
  picture: string
}


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  kid2: kidsInterface = {
    name: 'John B.',
    class: 'Grade 2',
    picture: '../../assets/images/kid2.png'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
