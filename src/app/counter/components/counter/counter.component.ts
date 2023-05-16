import { Component } from "@angular/core";

//Decorador que me convierte la clase en un componente
@Component({
  selector: 'app-counter',  //Nombre de como llamare al componente en html
  template: `

      <h3>Counter: {{ counter }} </h3>

      <button (click)="increaseBy(+1)" >+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{
 //Clase de mi componente
 public counter: number = 10;

 increaseBy( value: number ):void {
   this.counter += value;
 }

 resetCounter(): void {
   this.counter = 10;
 }
}
