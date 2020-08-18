import { Component, OnInit } from '@angular/core';
import {RentalService} from '../../shared/rental.services'
import {Rental} from '../../shared/rental.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
   rentals: Rental[] = [];
  constructor(private rentalServices: RentalService) { }

  ngOnInit() {
    const rentalObservable  = this.rentalServices.getRentals();
    // returns observable from getRentals
    rentalObservable.subscribe(
      (rentals: Rental[]) =>{
        this.rentals = rentals;
      },
      (err) =>{
      },
      ()=>{

      }
    );

  }

}
