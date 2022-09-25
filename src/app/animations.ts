import { trigger, transition, style, animate } from '@angular/animations';

export const SLIDE_UP = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translate3d(0, 100vh, 0)' }),
    animate(1000, style({ transform: 'translate3d(0, 0, 0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(300, style({ transform: 'translate3d(0, 100vh, 0)' })),
  ]),
]);

export const QUICK_LEAVE = trigger('quickLeave', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate(200, style({ opacity: 0 })),
  ]),
]);
