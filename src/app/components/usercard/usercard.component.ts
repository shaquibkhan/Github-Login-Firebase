import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
@Input() user: any;
}
