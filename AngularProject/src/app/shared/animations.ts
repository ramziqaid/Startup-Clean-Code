import { animate, style, transition, trigger } from '@angular/animations';

export const $animations = [
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(50px)' }),
      animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateX(0)' }),
      animate('0.2s', style({ opacity: 0, transform: 'translateX(100%)' })),
    ]),
  ]),
];