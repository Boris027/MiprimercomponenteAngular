import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {

  @Input() name:string=""
  @Input() surname:string=""
  @Input() age:number=0
  @Input() favourite:boolean=false
  @Output() newItemEvent = new EventEmitter<string>();

  sendoutput(){
    this.newItemEvent.emit("changebutton")
  }

  deletethis(){
    this.newItemEvent.emit("deletethis")
  }

  constructor() { }

  ngOnInit() {}

}
