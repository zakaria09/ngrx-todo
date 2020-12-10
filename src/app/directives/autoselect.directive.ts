import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoselect]'
})
export class AutoselectDirective {

  constructor(
    private host: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.host.nativeElement.select();
  }
}
