import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/person';
import { personservice } from 'src/app/interfaces/personservice';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements personservice<Person> {

  constructor() { }
  private id:number=1
  private behaviourperson:BehaviorSubject<Person[]> =new BehaviorSubject<Person[]>([])
  public observableperson:Observable<Person[]> = this.behaviourperson.asObservable()

  add(persona: Person): Person {

    let array=this.behaviourperson.getValue()
    persona.id=this.id.toString();
    this.id+=1;
    array.push(persona)

    return persona
  }
  delete(persona: Person): Person {
    throw new Error('Method not implemented.');
  }
  update(persona: Person): Person {
    throw new Error('Method not implemented.');
  }
  seachbyid(id: Person): Person {
    throw new Error('Method not implemented.');
  }
  getall(): Person {
    throw new Error('Method not implemented.');
  }


}
