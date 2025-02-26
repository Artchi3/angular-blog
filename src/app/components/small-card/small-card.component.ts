import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent { 
  picCover:string =''
  cardTitle:string = ''
  cardDescription:string =''
  @Input()
  Id:string = '0'
  
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
