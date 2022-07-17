import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  Blog = [{
    bloggerId : '',
    bloggerName : '',
    imageUrl : '',
    blogTitle : '',
    blogDate : '',
    blogContent : ''
  }]

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getblogs().subscribe((data:any)=>{
      this.Blog=JSON.parse(JSON.stringify(data));
    })
  }

}
