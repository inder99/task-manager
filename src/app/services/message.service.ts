import { Injectable } from '@angular/core';
import {Observable , Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public subject: Subject<any> = new Subject<any>();

  constructor() { }

  setMessage(msg : String) : void{
    this.subject.next({
      msg
    });
  }
  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
