import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
	selector: '[AppSelect]'
})
export class AppSelectDirective {

	@Input("AppSelect") ubigeo: string[]

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.ubigeo.forEach(item => {
			const option = this.renderer.createElement("option")
			const texto = this.renderer.createText(item)

			this.renderer.appendChild(option, texto)
			this.renderer.appendChild(this.elementRef.nativeElement, option)
		})

	}

}
