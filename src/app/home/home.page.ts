import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProcessComponent } from './process.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async launchModal() {
    const modal = await this.modalCtrl.create({ component: ProcessComponent });
    modal.present();
  }
}
