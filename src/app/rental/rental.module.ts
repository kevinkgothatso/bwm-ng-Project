import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router'; //imported 

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListingItemComponent } from './rental-listing-item/rental-listing-item.component';

import {RentalService} from '../shared/rental.services';
import { RentalDetailComponent } from './rental-detail/rental-detail.component'

const routes : Routes = [
  {path: 'rentals', component: RentalComponent,
children: [{path: '', component: RentalListComponent},
{path: ':rentalId', component: RentalDetailComponent}
]}
];

@NgModule({
    declarations: [
      // components
      RentalListComponent,
      RentalListingItemComponent,
      RentalComponent,
      RentalDetailComponent
    ],
    imports: [ CommonModule
      ,RouterModule.forChild(routes)
    ],
     providers: [RentalService]
    // a service.ts must stay inside proiders whwen imorted
    // imports contains modules
  })

  export class RentalModule{}