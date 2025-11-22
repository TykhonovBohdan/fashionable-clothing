import { Directive, ElementRef, HostListener, input, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  public color = input<string>('#f9f9f9', { alias: 'appHighlight' });

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color());
    this.scale('1.02');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.scale('1');
  }

  private highlight(color: string | null) {
    const bgColor = color ? color : '#ffffff';

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
  }

  private scale(scale: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
  }
}
