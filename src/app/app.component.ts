import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ships$ = this.apollo
    .watchQuery({
      query: gql`
        query Ships {
          ships {
            model
            name
            type
            status
          }
        }
      `,
    })
    .valueChanges.pipe(
      filter(Boolean),
      map((response: any) => response.data['ships'])
    );

  constructor(private apollo: Apollo) {}
}
