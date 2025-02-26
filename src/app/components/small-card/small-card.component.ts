import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input()
  picCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s";
  @Input()
  cardTitle:string = "Nova serie fresquinha com toda formula basica de hollywood";
  @Input()
  cardDescription:string ="Tudo que ninguem pediu! mais uma serie generica imperialista com todos os requisitos facistoides para derreter o seu cerebro! mas veja só vai ter explosoes, machismo toxico, lacração comica e uma gostosa sofendo por questoes racio-feminilizantes!";
  @Input()
  Id:string = '0'
  
  constructor(){

  }
  ngOnInit():void{

  }
}
