import { NgOption } from './ng-select.types';
import { NgSelectComponent } from './ng-select.component';
export declare class ItemsList {
    private _ngSelect;
    private _items;
    private _filteredItems;
    private _groups;
    private _markedIndex;
    private _selectionModel;
    constructor(_ngSelect: NgSelectComponent);
    readonly items: NgOption[];
    readonly filteredItems: NgOption[];
    readonly selectedItems: NgOption[];
    readonly markedItem: NgOption;
    readonly markedIndex: number;
    readonly noItemsToSelect: boolean;
    readonly maxItemsSelected: boolean;
    readonly lastSelectedItem: NgOption;
    setItems(items: any[]): void;
    select(item: NgOption): void;
    unselect(item: NgOption): void;
    findItem(value: any): NgOption;
    addItem(item: any): NgOption;
    clearSelected(): void;
    findByLabel(term: string): NgOption;
    filter(term: string): void;
    resetFilteredItems(): void;
    unmarkItem(): void;
    markNextItem(): void;
    markPreviousItem(): void;
    markItem(item: NgOption): void;
    markSelectedOrDefault(markDefault?: boolean): void;
    resolveNested(option: any, key: string): any;
    mapItem(item: any, index: number): NgOption;
    mapSelectedItems(): void;
    private _showSelected(item);
    private _hideSelected(item);
    private _defaultSearchFn(search, opt);
    private _getNextItemIndex(steps);
    private _stepToItem(steps);
    private _groupBy(items, prop);
    private _flatten(groups);
}