import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext {
  public $implicit = 1000;
  public Hideafter = 0;
  public counter = 0;
}

@Directive({
  selector: '[Hideafter]'
})
export class HideafterDirective implements OnInit {

  @Input('Hideafter') 
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.Hideafter = this.context.counter = this._delay / 1000;
  }
  private  _delay = 0;

  @Input('HideafterThen')
  placeholder: TemplateRef<HideAfterContext> | null = null;
  context = new HideAfterContext()
  constructor(public templateRef: TemplateRef<HideAfterContext>, public _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.HideAfterHandler();
  }

  HideAfterHandler() {
    // if(this.delay) {
      this._viewContainerRef.createEmbeddedView(this.templateRef, this.context);
      const intervalId = setInterval(()=> {
        this.context.counter--;
      }, 1000)
      setTimeout(() => {
          this._viewContainerRef.clear();
          if(this.placeholder) {
            this._viewContainerRef.createEmbeddedView(this.placeholder,
               this.context)
          }
          clearInterval(intervalId);
      }, this._delay);
    // }
  }

  static ngTemplateContextGuard(dir: HideafterDirective, ctx: unknown): ctx is HideAfterContext {
    return true
  }

}
