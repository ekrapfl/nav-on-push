import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalPageComponentModule, ModalPageComponent } from './modal-page.component';

@Component({
  selector: 'app-process',
  template: `<ion-nav [root]="ModalPageComponent"></ion-nav>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Swap back to default change detection strategy to see it work properly
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class ProcessComponent {
  ModalPageComponent = ModalPageComponent;

  constructor() { }
}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalPageComponentModule,
  ],
  declarations: [ProcessComponent],
  exports: [ProcessComponent],
})
export class ProcessComponentModule { }
