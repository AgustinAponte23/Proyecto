import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  constructor(rederer: Renderer2, elRef: ElementRef) {
    
   }

}
