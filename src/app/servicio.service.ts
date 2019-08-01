import {
  Injectable
} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  usuarioInput = [{
    user: "Cristian",
    password: "1234",
  }]

  ifStart = false;

  comprobacion(usuario: any, password: any) {

    if (usuario == this.usuarioInput[0]["user"] && password == this.usuarioInput[0]["password"]) {

      this.ifStart = true;  

    } 

    return;

  }

logOut(){

  this.ifStart = false; 


}


  constructor() {}
}
