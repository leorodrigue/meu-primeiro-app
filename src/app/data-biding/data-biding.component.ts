import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

  public nome: string ="Leonardo";
  public idade: number = 27;

  public checkedDisabled: boolean = true;
  public imgTitle: string = "Property Binding";
  public imgSrc: string ="https://elguaxi.com/wp-content/uploads/2023/01/fundo-guaxi-branco.png";
  public position: {x: number, y: number} = { x: 0 , y: 0 };  

  constructor(){

  }
  ngOnInit(): void {
    
  }

  public alertaInfo(valor: any) {
    console.log(valor);
  }
  public mouseMoveTeste(valor: any){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;  
  }
}
