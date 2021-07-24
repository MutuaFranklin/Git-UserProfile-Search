import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCursorPointer]'
})
export class CursorPointerDirective {

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {

    this.cursor('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cursor('none');

  }

  private cursor(action: string) {
    this.el.nativeElement.style.cursor = action;

  }
}
