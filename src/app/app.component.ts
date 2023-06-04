import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  numero : string = '';
  resultado : string = '0';

  dobleOperador(operador:string): boolean {
    const operadores = ['+', '*', '-', '/'];
    const ultimocaracter = this.resultado.slice(-1);

    return operadores.includes(operador) && operadores.includes(ultimocaracter);
    //La condición operadores.includes(operador) && operadores.includes(ultimocaracter) verifica que tanto el operador que se desea agregar como el último carácter de la expresión sean operadores y si se cumplen las 2 condiciones retorna true.
  }

  agregarNumero(value: string) {
    if (this.dobleOperador(value)) {
      //Si la función retorna true, se sale de la función sin modificar la expresión, evitando así la adición del segundo operador consecutivo.
      return;
    }

    this.numero += value;
    this.resultado = this.numero;
  }

  calcular(){
    this.resultado = eval(this.numero);
    this.resultado = this.resultado.toString();
    this.numero = this.resultado.toString();
  }

  limpiar() {
    this.numero = '';
    this.resultado = '0';
  }

}
