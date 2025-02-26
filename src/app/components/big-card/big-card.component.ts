import { Component, Input } from '@angular/core'; 
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  
  @Input()
  picCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s";
  @Input()
  cardTitle:string = "Nova serie fresquinha com toda formula basica de hollywood";
  @Input()
  cardDescription:string ="Tudo que ninguem pediu! mais uma serie generica imperialista com todos os requisitos facistoides para derreter o seu cerebro! mas veja só vai ter explosoes, machismo toxico, lacração comica e uma gostosa sofendo por questões racio-feminilizantes!";
  @Input()
  Id:string='1'

  constructor(){

  }
  ngOnInit():void{ 
    console.log(this.Id)
    this.setValToComponent(this.Id)  
  } 
  setValToComponent(id:string|null):void{
    const result:any = dataFake.filter(article => article.id == id)[0] 
    
    this.cardDescription = result.abstract
    this.cardTitle = result.headline
    this.picCover = result.image 
  }
}
