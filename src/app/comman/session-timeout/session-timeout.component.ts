import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, Subject, Subscription, takeUntil, timer } from 'rxjs';
import { SessionTimeoutModalComponent } from './session-timeout-modal.component';

@Component({
    selector: 'session-timeout',
    template: `
        <app-session-timeout></app-session-timeout>
    `
})

export class SessionTimeoutComponent implements AfterViewInit {

    @ViewChild(SessionTimeoutModalComponent, {static: true}) 
    private sessionTimeOutModal: SessionTimeoutModalComponent;
    timeOutSecond: number = 5;
    private subscription: Subscription[] = [];
    destroy$ = new Subject();
    IsUserActive:boolean = true;
    constructor() { }

    ngOnDestroy(): void {
        this.destroy$.next({});
        this.subscription.forEach(subscription => subscription.unsubscribe());
    }

    private setUserActivity(): void {
        this.IsUserActive = true;
    }

    ngAfterViewInit(): void {
        this.bindActions();
        this.writeStorage();
        this.subscription.push(timer(1000, 1000).subscribe((res) => {
            // console.log(res);
            this.control();
        }))
        // console.log(this.sessionTimeOutModal.start());
    }

    control() {
        this.writeStorage();
        this.controlStorage();
    }


    writeStorage() {
        if(this.IsUserActive) {
            localStorage.setItem('lastActivityTimeStorageKey', Date.now().toString());
        }
        this.IsUserActive = false;
    }

    controlStorage() {
       let lastActivetime = localStorage.getItem('lastActivityTimeStorageKey');
        this.controlValue(parseInt(lastActivetime));
    }

    controlValue(lastActivetime: number) {
        if(Date.now() - lastActivetime <= this.timeOutSecond * 1000) {
            this.sessionTimeOutModal.stop();
            return
        }
        this.sessionTimeOutModal.start();
    }

    private bindActions() {
        this.subscription.push(fromEvent(window, 'mousemove')
        .pipe(takeUntil(this.destroy$), debounceTime(350))
        .subscribe(() => {
            this.setUserActivity();
        }));

        this.subscription.push(fromEvent(window, 'mousedown')
        .pipe(takeUntil(this.destroy$), debounceTime(350))
        .subscribe(() => {
            this.setUserActivity();
        }));
        
        this.subscription.push(fromEvent(window, 'click')
        .pipe(takeUntil(this.destroy$), debounceTime(350))
        .subscribe(() => {
            this.setUserActivity();
        }));

        this.subscription.push(fromEvent(window, 'scroll')
        .pipe(takeUntil(this.destroy$), debounceTime(350))
        .subscribe(() => {
            this.setUserActivity();
        }));

        this.subscription.push(fromEvent(window, 'keypress')
        .pipe(takeUntil(this.destroy$), debounceTime(350))
        .subscribe(() => {
            this.setUserActivity();
        }));

    }

    ngOnInit() { }
}