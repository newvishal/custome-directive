import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    timeOutSecondSubject: BehaviorSubject<any> = new BehaviorSubject<any>(10000);
    
    constructor() { }

    get timeoutSecond() {
        return this.timeOutSecondSubject.asObservable();
    }

    get getTimeOutValue() {
        return this.timeOutSecondSubject.value();
    }
    
    set setTimeoutSecond(seconds: number) {
        this.timeOutSecondSubject.next(seconds);
    }

}