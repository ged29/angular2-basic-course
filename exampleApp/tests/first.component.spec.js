"use strict";
var testing_1 = require("@angular/core/testing");
var first_component_1 = require("../app/ondemand/first.component");
var product_model_1 = require("../app/model/product.model");
var repository_model_1 = require("../app/model/repository.model");
var platform_browser_1 = require("@angular/platform-browser");
describe("FirstComponent", function () {
    var fixture;
    var component;
    var debugElement;
    var spanElement;
    var divElement;
    var mockRepository = {
        getProducts: function () {
            return [
                new product_model_1.Product(1, "test1", "Soccer", 100),
                new product_model_1.Product(2, "test2", "Chess", 100),
                new product_model_1.Product(3, "test3", "Soccer", 100),
            ];
        }
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first_component_1.FirstComponent],
            providers: [
                { provide: repository_model_1.Model, useValue: mockRepository }
            ]
        });
        testing_1.TestBed.compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(first_component_1.FirstComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            spanElement = debugElement.query(platform_browser_1.By.css("span")).nativeElement;
            divElement = debugElement.children[0].nativeElement;
        });
    }));
    it("is defined", function () {
        expect(component).toBeDefined();
    });
    it("filters categories", function () {
        component.category = "Chess";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(1);
        expect(spanElement.textContent).toContain("1");
        component.category = "Soccer";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(2);
        expect(spanElement.textContent).toContain("2");
        component.category = "Running";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(0);
        expect(spanElement.textContent).toContain("0");
    });
    it("handles mouse events", function () {
        expect(component.highlighted).toBe(false);
        expect(divElement.classList.contains("bg-success")).toBe(false);
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        fixture.detectChanges();
        expect(component.highlighted).toBe(true);
        expect(divElement.classList.contains("bg-success")).toBe(true);
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        fixture.detectChanges();
        expect(component.highlighted).toBe(false);
        expect(divElement.classList.contains("bg-success")).toBe(false);
    });
    it("implements output property", function () {
        var highlighted;
        component.change.subscribe(function (value) { return highlighted = value; });
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        expect(highlighted).toBe(true);
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        expect(highlighted).toBe(false);
    });
});
//# sourceMappingURL=first.component.spec.js.map