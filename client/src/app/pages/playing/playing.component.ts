import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent {
   data: number = 0;
    NgONInit(): void {
        const obs$ = interval(1000)
        obs$.subscribe((d) => {
            console.log(d);
            this.data = d;
        });
    }
}
