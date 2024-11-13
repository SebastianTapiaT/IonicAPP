import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; // Propiedad para almacenar el nombre de usuario
  password: string = ''; // Propiedad para almacenar la contraseña

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Puedes realizar alguna acción inicial si es necesario
  }

  login() {
    // Aquí iría la lógica para verificar las credenciales
    if (this.username && this.password) {
      console.log('Nombre de usuario:', this.username);
      console.log('Contraseña:', this.password);
      // Implementa la lógica de validación aquí (ej. verificar con un servicio)
      this.navCtrl.navigateForward('/home'); // Navegar a la página de inicio si las credenciales son válidas
    } else {
      console.error('Por favor, completa todos los campos');
    }
  }

  goToRecoverPassword() {
    this.navCtrl.navigateForward('/reset-password'); // Corrige la ruta a '/reset-password'
  }
}
