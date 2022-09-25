import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { QUICK_LEAVE } from 'src/app/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [QUICK_LEAVE],
})
export class AppComponent {
  texturesLoaded$ = this._appState.areTexturesLoaded$;
  percentageLoaded$ = this._appState.percentageLoaded$;

  constructor(private _appState: AppService) {}
}
