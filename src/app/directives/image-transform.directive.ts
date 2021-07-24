import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageTransform]'
})
export class ImageTransformDirective {


  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {

    this.cursor('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cursor('none');
  }

  private cursor(action: string) {
    this.el.nativeElement.style.Cursor = action;
  }

}

    // this.elem.nativeElement.style.transform='scale(1.2)';
