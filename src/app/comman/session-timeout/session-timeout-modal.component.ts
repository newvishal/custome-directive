import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-session-timeout',
    templateUrl: './session-timeout-modal.component.html'
})

export class SessionTimeoutModalComponent implements OnDestroy {
    @ViewChild('modal', {static: true}) modal: ModalDirective;
    timeoutSecond: number
    prograsebarWidth: string = '100%';

    timeOutSecond: number = 100;
    currentSecond: number;
    subscription: Subscription;
    constructor() { }

    /**
     * use for memory leak problem
     * @function ngOnDestroy 
     * @param 
     * @returns void
     */

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    start() {
        this.currentSecond = this.timeOutSecond;
        this.subscription  = timer(0, 1000).subscribe(() => {
            this.changeNotifyContent();
        })
        this.modal.show();
    }

 

    stop() {
        this.currentSecond = this.timeOutSecond;
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
        this.modal.hide();
    }

    done() {
        this.stop();
        //logout code
    }

    changeNotifyContent() {
        this.currentSecond--;
        if(this.currentSecond <= 0) {
            this.prograsebarWidth = '0%';
            this.done();
        } else {
            this.prograsebarWidth = (this.currentSecond / this.timeOutSecond * 100) + '%';
        }
    }
}