import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  greeting : boolean = true;
  star: boolean = true;

  constructor() { }
  press():void{
    this.greeting = ! this.greeting;
  }
  notfi():void{
    this.star = ! this.star;
  }

  ngOnInit(): void {
  }

}
