import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/person';
import { personservice } from 'src/app/interfaces/personservice';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements personservice<Person> {

  constructor() { }
  private behaviourperson:BehaviorSubject<Person[]> =new BehaviorSubject<Person[]>([])
  public observableperso:Observable<Person[]> = this.behaviourperson.asObservable()
  
  add(persona: Person): Person {
    throw new Error('Method not implemented.');
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
