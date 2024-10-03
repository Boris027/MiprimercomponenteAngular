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
    this.behaviourperson.next(array)
    return persona
  }
  delete(persona: Person): Person {
    
    let array:Person[]=this.behaviourperson.getValue()
    let index=array.findIndex(c=>c.id==persona.id)
    
    let devolver:Person=array[index]
    array.splice(index,1)
    this.behaviourperson.next(array)

    return devolver
    
  }

  update(persona: Person): Person {
    let array:Person[]=this.behaviourperson.getValue()
    let index=array.findIndex(c=>c.id==persona.id)
    array[index]=persona
    this.behaviourperson.next(array)
    return persona
  }
  
  seachbyid(id: Person): Person {
    throw new Error('Method not implemented.');
  }


  getall(): Person[] {
    let array:Person[]=this.behaviourperson.getValue()
    return array
  }


}
