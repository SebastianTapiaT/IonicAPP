import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; 
  password: string = ''; 
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  login() {
    
    if (this.username && this.password) {
      console.log('Nombre de usuario:', this.username);
      console.log('Contraseña:', this.password);
      
      this.navCtrl.navigateForward('/home'); 
    } else {
      console.error('Por favor, completa todos los campos');
    }
  }

  goToRecoverPassword() {
    this.navCtrl.navigateForward('/reset-password'); 
  }
}
