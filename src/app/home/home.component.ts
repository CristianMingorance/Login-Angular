import {
  Component,
  OnInit
} from '@angular/core';

import {
  ServicioService
} from '../servicio.service';

import {
  ContainComponent
} from '../contain/contain.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public _servicio: ServicioService) {}


logOut(){

  this._servicio.logOut()


return;
}


  ngOnInit() {}

}
