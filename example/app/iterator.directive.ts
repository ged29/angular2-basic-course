import {
    Directive, ViewContainerRef, TemplateRef, Input, SimpleChange,
    IterableDiffer, IterableDiffers,
    ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, EmbeddedViewRef
} from "@angular/core";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    private differ: IterableDiffer;
    private viewsMap: Map<any, EmbeddedViewRef<PaIteratorContext>> = new Map<any, EmbeddedViewRef<PaIteratorContext>>();
    private shouldReindexCtx: boolean = false;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<PaIteratorContext>,
        private differs: IterableDiffers,
        private changeDetector: ChangeDetectorRef) { }

    @Input("paForOf") dataSource: any[];

    ngOnInit() {
        this.differ = this.differs.find(this.dataSource).create(this.changeDetector);
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource) as DefaultIterableDiffer;
        if (changes !== null) {
            changes.forEachAddedItem(item => this.addItem(item));
            changes.forEachRemovedItem(item => this.removeItem(item));
            if (this.shouldReindexCtx) {
                this.reIndexCtx();
            }
        }
    }

    private addItem(addition: CollectionChangeRecord) {
        let ctx = new PaIteratorContext(addition.item, addition.currentIndex, this.dataSource.length),
            view = this.viewContainer.createEmbeddedView(this.template, ctx);

        this.viewsMap.set(addition.trackById, view);
    }

    private removeItem(removal: CollectionChangeRecord) {
        let id = removal.trackById;
        if (!this.viewsMap.has(id)) return;

        let view = this.viewsMap.get(id),
            viewIndexToRemove = this.viewContainer.indexOf(view);

        this.viewContainer.remove(viewIndexToRemove);
        this.viewsMap.delete(id);
        this.shouldReindexCtx = true;
    }

    private reIndexCtx() {
        let index = 0,
            total = this.viewsMap.size;

        this.viewsMap.forEach(view => view.context.setData(index++, total));
        this.shouldReindexCtx = false;
    }
}

class PaIteratorContext {
    index: number;
    odd: boolean;
    even: boolean;
    first: boolean;
    last: boolean;

    constructor(public $implicit: any, index: number, total: number) {
        this.setData(index, total);
    }

    setData(index: number, total: number) {
        this.index = index;
        this.even = index % 2 === 0;
        this.odd = !this.even;
        this.first = index === 0;
        this.last = index === total - 1;
    }
}