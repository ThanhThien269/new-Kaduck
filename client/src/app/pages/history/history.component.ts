import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;

  date: string;
  symbol: string;
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent {

  history = [
    {name: 'title', date: '1/4/23', symbol: '32/32'},
    {name: 'title', date: '12/3/23', symbol: '15/32'},
    {name: 'title', date: '31/1/23', symbol: '6/32'},
    {name: 'title', date: '12/12/22', symbol: '11/32'},
    {name: 'title', date: '10/11/22', symbol: '20/32'},
  ];

}
