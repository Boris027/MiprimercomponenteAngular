import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.scss'],
})
export class PeopleCounterComponent  implements OnInit {

  constructor(private personservice:PersonService) { }
  
  number:number=0
  ngOnInit() {
    this.personservice.observableperson.subscribe(
      (value:Person[])=>{
        this.number=value.length
      }
    )
  }

}
