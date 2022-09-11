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
