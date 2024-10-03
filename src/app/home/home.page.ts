import { Component } from '@angular/core';

export interface Person{
  name:string,
  surname:string,
  age:number
}

export interface PersonCard extends Person{
  favourite:boolean
}

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

  constructor() {
    this.people.push({
      name:"Juan A.",
      surname:"García Gómez",
      age:47,
      favourite:false
    });
    this.people.push({
      name:"Alejandro.",
      surname:"García Gómez",
      age:46,
      favourite:true
    });

    this.people.push({
      name:"Juan",
      surname:"García Valencia",
      age:5,
      favourite:false
    });

    this.people.push({
      name:"María del Mar",
      surname:"Valencia Valencia",
      age:47,
      favourite:false
    });
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
    
      this.people.push({name:this.inputnombre,age:parseInt(this.inputedad),surname:this.inputapellido,favourite:false})
      this.inputnombre=""
      this.inputapellido=""
      this.inputedad=""
    } catch (error) {
        console.log("Ha ocurrido un error")
    }
  }


  llegadehijo(evento:any,index:number){
    if(evento=="changebutton"){
      this.actualizarcorazon(index)
    }else if(evento=="deletethis"){
      this.eliminarpersona(index)
    }
  }

  actualizarcorazon(index:number){
    this.people[index].favourite=!this.people[index].favourite
  }

  eliminarpersona(index:number){
    this.people.splice(index,1)
    
  }


  

}
