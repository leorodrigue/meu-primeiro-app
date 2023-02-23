import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [
    { nome: "Leonardo Rodrigues",  idade: 30},
    { nome: "Leonardo Rodrigues 2", idade: 29},
    { nome: "Leonardo Rodrigues 3", idade: 28},
    { nome: "Leonardo Rodrigues 4", idade: 27}
  
  ];
  public nome:string = 'leonardo';

  constructor(){ }
  ngOnInit(): void {
    setInterval(()=>{
      if(this.condition){
      this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)

  }
  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
      }else{
        this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome:"Rodrigues Leonardo", idade: 50})
  }
  public onClickEventList(event: number){
    this.list.splice(event, 1);
  }
}
