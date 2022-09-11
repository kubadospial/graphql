import { Component } from '@angular/core';
import { AppService } from './app.service';
import { QUICK_ENTER } from './common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [QUICK_ENTER],
})
export class AppComponent {
  isLoading$ = this._appService.isLoading$;

  constructor(private _appService: AppService) {}
}
