import { AfterViewInit, Directive, ElementRef, Input, OnInit, TemplateRef } from "@angular/core";

@Directive({
    selector: "[buttonBusy]",
})

export class ButtonBusyDirective implements OnInit, AfterViewInit{
        @Input() 
        public set buttonBusy(isBusy: boolean) {
        console.log(isBusy)
            this.refreshState(isBusy);
        }
        @Input() busyText: string;

        private _button: any;
        private _originalButtonInnerHTML: any;

        constructor(public elementRef: ElementRef<HTMLElement>) {}

        ngAfterViewInit(): void {
            this._originalButtonInnerHTML = this.elementRef.nativeElement.innerHTML;
        }

        ngOnInit(): void {
            this._button = this.elementRef.nativeElement;
            console.log(this._button)
        }

        refreshState(isBusy: boolean): void {
            if(!this._button) return;
            if(isBusy) {
                this._button.setAttribute('disabled', 'disabled');
                this._button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${this.busyText}`;
                // this._button.setAttribute('_disabledBefore', true);
            } else {
                // if (!this._button.getAttribute('_disabledBefore')) {
                //     return;
                // }
                this._button.removeAttribute('disabled');
                this._button.innerHTML = this._originalButtonInnerHTML;
            }
        }

     

        
} 

