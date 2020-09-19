import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'AVISO',
      subHeader: 'Finalizando Cadastro',
      message: 'Cadastro realizado com sucesso!!',
      buttons: ['OK']
      
      
    });

    await alert.present();
    
  }
  
  ngOnInit() {
  }

}
