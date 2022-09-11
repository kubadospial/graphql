import { trigger, transition, style, animate } from '@angular/animations';

export const SMOOTH_ENTER = trigger('smoothEnter', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);
