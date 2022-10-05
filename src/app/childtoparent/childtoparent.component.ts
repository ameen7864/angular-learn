import { Component, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {

  constructor() { }
  @Output() update=new EventEmitter<string>();

  ngOnInit(): void {
  }

}
