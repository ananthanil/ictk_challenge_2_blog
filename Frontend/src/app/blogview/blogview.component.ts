import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {
  title:String = "Blog";
  constructor() { }

  ngOnInit(): void {
  }

}
