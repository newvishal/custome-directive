import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'form'
})
export class FormFocusDirective implements AfterViewInit {
  focusable: string[] = ['input', 'select', 'textarea'];

  constructor(public element: ElementRef<HTMLInputElement>) { }

  ngAfterViewInit(): void {
    const input = <HTMLInputElement>this.element.nativeElement.querySelector(
      this.focusable.join(',')
    );
    if(input) {
      input.focus();
    }
    console.log(input)
  }

  @HostListener('submit')
  submit() {
    const input = <HTMLInputElement>this.element.nativeElement.querySelector(
      this.focusable.map(x => `${x}.ng-invalid`).join(',')
    )
    if(input) {
      input.focus();
    }
  }



}
