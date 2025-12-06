import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PickupSelectionComponent } from './pickup-selection/pickup-selection.component';
//import { TimeSlotComponent } from './time-slot/time-slot.component';
//import { PaymentComponent } from './payment/payment.component';
//import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: 'pickup', component: PickupSelectionComponent },
  //{ path: 'time-slot', component: TimeSlotComponent },
  //{ path: 'payment', component: PaymentComponent },
  //{ path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    PickupSelectionComponent,
  ]
})
export class OrderModule { }

