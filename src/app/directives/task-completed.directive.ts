import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]'
})


export class TaskCompletedDirective implements OnInit{
  @Input('completed') compl: boolean;
  public c;
  constructor( private el:ElementRef) { 
    
  }

  ngOnInit(){
    if(this.compl){
      this.el.nativeElement.style.textDecoration = "line-through";    
    }
    
  }

}
