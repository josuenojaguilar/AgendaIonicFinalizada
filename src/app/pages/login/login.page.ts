import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo;

  constructor(
    private restU:UsuarioService,
    private nav:NavController,
    private loading:LoadingController
    ) { }

  ngOnInit() {
  }

  async login(){
    const loading = await this.loading.create({
      message: 'Cargando...'
    });

    await loading.present();
    this.restU.login(this.correo).subscribe((res)=>{
      loading.dismiss();
      let usuarioId = res.user._id;
      this.nav.navigateForward('/menu/personas/'+usuarioId)
    });

  }

}
