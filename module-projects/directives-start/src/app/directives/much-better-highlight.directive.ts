import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMutchBetterHighlight]'
})
export class MuchBetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseenter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseleave() {
    this.backgroundColor = this.defaultColor;
  }
}
