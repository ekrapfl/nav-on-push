import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit, OnChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal-page',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          The below text should update
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-title size="large">{{testText$ | async}}</ion-title>
    </ion-content>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPageComponent implements OnInit, OnChanges, AfterViewInit {
  private testText = new BehaviorSubject<string>('Wait for it...');
  testText$ = this.testText.asObservable();

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ionViewWillEnter() {
    // this.changeDetector.markForCheck();

    console.log('ionViewWillEnter');

    setTimeout(() => {
      this.testText.next('I give you: TEXT!');
      // this.changeDetector.markForCheck();
    }, 3000);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [ModalPageComponent],
  exports: [ModalPageComponent]
})
export class ModalPageComponentModule { }
