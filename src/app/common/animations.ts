import { trigger, transition, style, animate } from '@angular/animations';

const getEnter = (name: string, time: string) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(time, style({ opacity: 1 })),
    ]),
  ]);
export const SMOOTH_ENTER = getEnter('smoothEnter', '500ms');

export const QUICK_ENTER = getEnter('quickEnter', '200ms');

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
