import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params, RouterLink} from "@angular/router";
import { usuario } from '../modelos/usuario.model';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
  providers: [UsuarioService]
})
export class EditarPerfilComponent implements OnInit {
  
  public usuario: usuario;
  public status: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,private servicio: UsuarioService,) { 
      this.usuario = new usuario("",null,"","","","",);
  }


  ngOnInit(): void {

  }

  actualizarUsuario(){
    this.servicio.actualizarUsuario(this.usuario).subscribe(
      Response=>{
        console.log(Response);
        if(Response){
          this.status = 'se actualizo xd'
          this._router.navigate(['/principal']); 
        }
      }
    )
  }



}
