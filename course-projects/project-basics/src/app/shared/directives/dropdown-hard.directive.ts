import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdownHard]'
})
export class DropdownHardDirective {

  @Input() set appDropdownHard(condition: string) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.vcRef.element.nativeElement.nextElementSibling.classList.add('show');
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }
}
