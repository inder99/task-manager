import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustumDirective]'
})
export class CustumDirectiveDirective {

  constructor(private el : ElementRef, private rend: Renderer) { 
    this.rend.setElementStyle(
      this.el.nativeElement,'background-color','#efefef'
    )

  }

}
