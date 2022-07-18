import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  valu:Number = 1+1;

  Blog = [{
    bloggerId : '',
    bloggerName : '',
    imageUrl : '',
    blogTitle : '',
    blogDate : '',
    blogContent : ''
  }]

  sus:boolean = true;
  
  constructor(private contentService: ContentService) { }

  toggle(): void{
    this.sus = !this.sus
  }
  

  ngOnInit(): void {
    this.contentService.getblogs().subscribe((data:any)=>{
      this.Blog=JSON.parse(JSON.stringify(data));
    })
  }

}
