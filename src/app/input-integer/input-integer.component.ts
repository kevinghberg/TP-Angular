import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})


export class InputIntegerComponent implements OnInit {




  @Input()
  quantityInput!: number;

  @Input()
  maxStock!: number;

  @Input()
  stock!: number;


  @Input()
  soon!: boolean;

  @Output()
  quantityInputChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  stockChange: EventEmitter<number> = new EventEmitter<number>();




  constructor() {

  }


  ngOnInit(): void {
  }
  downQuantity(): void {

    if (this.quantityInput > 0 && this.soon != true) {

      this.quantityInput--;

      this.stock++;
      this.stockChange.emit(this.stock);
      
      this.quantityInputChange.emit(this.quantityInput);
    }
  }


 upQuantity() {

    if (this.quantityInput < this.maxStock && this.soon != true ) {

      this.quantityInput++;
      
      this.stock--;

      console.log(this.stock)

  
      this.stockChange.emit(this.stock);
      this.quantityInputChange.emit(this.quantityInput);
    }
    else
      if (this.quantityInput == this.maxStock)
        alert('El stock disponible es' + ' ' + this.maxStock);
       
  

  }

  inputQuantityEvent(event: KeyboardEvent,) {
    if (event.key == 'Enter') this.changeQuantityInput();
  }

  changeQuantityInput() {
    if (this.quantityInput > 0) {
      if (this.maxStock - this.quantityInput >= 0) {
        this.stock = this.maxStock - this.quantityInput;
        this.quantityInputChange.emit(this.quantityInput);
      } else alert('El stock disponible es' + ' ' + this.stock);
    } else alert('Ingrese un numero mayor a 0');

  }

}
