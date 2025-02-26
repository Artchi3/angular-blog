import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; 
import { dataFake } from '../../data/dataFake';
 
@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  coverPic:string = ''
  contentDesc:string = ''
  contentTitle:string ='' 
  private id:string|null ='' 

  constructor(private route:ActivatedRoute){  
  }
  ngOnInit():void{
    this.route.paramMap.subscribe( (value) =>
      this.id = value.get('id')
    ) 
    console.log(this.id)
    this.setValToComponent(this.id)  
  } 
  setValToComponent(id:string|null):void{
    const result:any = dataFake.filter(article => article.id == id)[0]
    console.log(result)
    
    this.contentDesc = result.body
    this.contentTitle = result.headline
    this.coverPic = result.image
    console.log(this.contentDesc)
    console.log(this.contentTitle)
    console.log(this.coverPic) 
  }

}
