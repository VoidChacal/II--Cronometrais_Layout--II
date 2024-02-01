import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  showVolt() {
    this.navCtrl.navigateForward('true-home')
  }

  showConfirm() {
    this.navCtrl.navigateForward('true-home')
  }

  ngOnInit() {
  }

}
