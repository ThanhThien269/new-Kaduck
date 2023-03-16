// import { question_kit } from './../../models/question_kit.model';
import { map, Observable } from 'rxjs';
import { question_kit } from './../../models/question_kit.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {

  constructor(
    private router: Router,
    private store: Store<{ question_kit: QuestionKitState }>,
    private authService: LoginService
  ) {
    this.questionKits$ = this.store.select('question_kit').pipe(map((state) => state.question_kits));
    this.store.dispatch(QuestionKitActions.getQuestionKitByOwner({ id: this.authService.user?.uid }));
    this.questionKits$.subscribe((e) => {
      console.log(e)
    }
    );
  }
  questionKits$ = new Observable<question_kit[]>();

  // ngOnInit() {
  //   this.questionKits$ = this.store
  //     .select('question_kit')
  //     .pipe(map((state) => state.question_kits));
  //   this.store.dispatch(QuestionKitActions.getQuestionKitByOwner({ id: this.authService.user?.uid }));
  //   this.questionKits$.subscribe((e) => {
  //     console.log(e)
  //   });
  // }

  lobby(id: string) {
    console.log(id);
    this.router.navigate(['/lobby/' + id]);
  }

}
