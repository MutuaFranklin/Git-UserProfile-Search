import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='rgba(82, 69, 90, 0.5)';
  }
}


// background-color: rgba(82, 69, 90, 0.5);
