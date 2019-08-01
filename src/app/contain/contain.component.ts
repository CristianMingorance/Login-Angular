import {
  Component,
  OnInit
} from '@angular/core';
import {
  ServicioService
} from '../servicio.service'





@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {



  constructor(public _servicio: ServicioService) {}

  doLogin() {

    let user1 = ( < HTMLInputElement > document.querySelectorAll("#login")[0]).value
    let pass1 = ( < HTMLInputElement > document.querySelectorAll("#password")[0]).value


    this._servicio.comprobacion(user1, pass1);

    if (this._servicio.ifStart){
      alert("Welcome")
    }else {
      alert("Usuario incorrecto")
    }


  }

  ngOnInit() {}

}
