import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: String;

  constructor(
    private BackendService: BackendService
  ) { }

  ngOnInit() {

    this.BackendService.get().subscribe(data => {
    this.data = data.product;
  });
 

  }

}
