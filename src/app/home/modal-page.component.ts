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
    // All of these angular events are skipped when the parent component uses OnPush
    console.log('ngOnChanges');
  }

  ngOnInit() {
    // All of these angular events are skipped when the parent component uses OnPush
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    // All of these angular events are skipped when the parent component uses OnPush
    console.log('ngAfterViewInit');
  }

  ionViewWillEnter() {
    // Ionic lifecycle hooks are still firing, though
    console.log('ionViewWillEnter');

    // Putting this line in will cause it to display the correct value initially,
    // and also after the timeout.  But that really shouldn't be necessary.
    // this.changeDetector.markForCheck();

    setTimeout(() => {
      this.testText.next('I give you: TEXT!');
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
