import { Directive, ElementRef, Input, HostListener, Renderer2 } from "@angular/core";

@Directive({
	selector: "[app-directiva]"
})
export class AppDirective {
	@Input() colorActivo: string = "red"

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		//this.elementRef.nativeElement.style.backgroundColor = this.colorActivo
	}

	@HostListener("mouseenter") ratonEntro() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.colorActivo)
		//this.elementRef.nativeElement.style.backgroundColor = this.colorActivo
	}

	@HostListener("mouseleave") ratonSalio() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "white")
		//this.elementRef.nativeElement.style.backgroundColor = "white"
	}


}