import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageTransform]'
})
export class ImageTransformDirective {


  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {

    this.transform('scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transform('none');

  }

  private transform(action: string) {
    this.el.nativeElement.style.transform = action;

  }
}

    // this.elem.nativeElement.style.transform='scale(1.2)';
