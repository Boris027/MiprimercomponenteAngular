import { Component } from '@angular/core';
import { PersonCard } from '../interfaces/personcard';
import { PersonService } from '../shared/services/person.service';
import { Person } from '../interfaces/person';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  people:PersonCard[] = [];
  inputnombre:string=""
  inputapellido:string=""
  inputedad:string=""

  constructor(private personservice:PersonService) {
    personservice.observableperson.subscribe(
      (value:Person[])=>{
        this.people=[]
        for(let a of value){
          this.people.push({id:a.id,age:a.age,name:a.name,surname:a.surname,favourite:false})
        }
      }
    )
  }

  anadircarta(){
    try {
      let edad=parseInt(this.inputedad)
      if(Number.isNaN(parseInt(this.inputedad))){
        console.log("En la edad no has introducido un número")
        throw Error
      }else if(this.inputnombre.length==0){
        console.log("No has introducido nada en el nombre")
        throw Error
      }else if(this.inputapellido.length==0){
        console.log("No has introducido nada en el apellido")
        throw Error
      }
    
      this.personservice.add({id:"",name:this.inputnombre,surname:this.inputapellido,age:edad})
      this.inputnombre=""
      this.inputapellido=""
      this.inputedad=""
    } catch (error) {
        console.log("Ha ocurrido un error")
    }
  }


  llegadehijo(evento:any,persona:PersonCard){
    let personafinal:Person={id:persona.id,name:persona.name,surname:persona.surname,age:persona.age}
    if(evento=="changebutton"){
      this.actualizarcorazon(persona)
    }else if(evento=="deletethis"){
      this.eliminarpersona(persona)
    }
  }

  actualizarcorazon(persona:PersonCard){
    persona.favourite=!persona.favourite
  }

  eliminarpersona(persona:Person){
    
    this.personservice.delete(persona)
  }


  

}
