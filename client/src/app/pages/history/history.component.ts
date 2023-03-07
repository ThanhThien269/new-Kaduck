import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;

  weight: string;
  symbol: string;
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent {

  history = [
    {name: 'Hydrogen', weight: '1.0079', symbol: 'H'},
    {name: 'Helium', weight: '4.0026', symbol: 'He'},
    {name: 'Lithium', weight: '6.941', symbol: 'Li'},
    {name: 'Beryllium', weight: '9.0122', symbol: 'Be'},
    {name: 'Boron', weight: '10.811', symbol: 'B'},
  ];

}
