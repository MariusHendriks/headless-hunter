import {Directive, HostListener} from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@Directive({
  selector: '[appMouseTracker]',
  exportAs: 'mouseTracker'
})
export class MouseTrackerDirective {
  mousePos: Subject<MouseEvent> = new Subject();

  @HostListener('mousemove', ['$event']) onMouseMove(event:MouseEvent) {
    this.mousePos.next(event);
  }
}
