// Type definitions for Timeline v2.2.2
// Project: https://github.com/yotamberk/timeline-plus
// Definitions by: Antoine Boisadam <https://github.com/Antoine38660>
//                 Michaël Bitard <https://github.com/MichaelBitard>
//                 MacLeod Broad <https://github.com/macleodbroad-wf>
//                 Adrian Caballero <https://github.com/adripanico>
//                 Severin <https://github.com/seveves>
//                 kaktus40 <https://github.com/kaktus40>
//                 Matthieu Maitre <https://github.com/mmaitre314>
//                 Adam Lewis <https://github.com/supercargo>
//                 Alex Soh <https://github.com/takato1314>
//                 Oleksii Kachura <https://github.com/alex-kachura>
//                 dcop <https://github.com/dcop>
//                 Avraham Essoudry <https://github.com/avrahamcool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MomentInput, MomentFormatSpecification, Moment } from 'moment';
export type MomentConstructor1 =
  (inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean) => Moment;
export type MomentConstructor2 =
  (inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean) => Moment;

export type MomentConstructor = MomentConstructor1 | MomentConstructor2;

export type IdType = string | number;
export type SubgroupType = IdType;
export type DateType = Date | number | string;
export type HeightWidthType = IdType;
export type TimelineItemType = 'box' | 'point' | 'range' | 'background';
export type TimelineAlignType = 'auto' | 'center' | 'left' | 'right';
export type TimelineTimeAxisScaleType = 'millisecond' | 'second' | 'minute' | 'hour' |
  'weekday' | 'day' | 'month' | 'year';
export type TimelineEventPropertiesResultWhatType = 'item' | 'background' | 'axis' |
  'group-label' | 'custom-time' | 'current-time';
export type TimelineEvents =
  'currentTimeTick' |
  'click' |
  'contextmenu' |
  'doubleClick' |
  'drop' |
  'mouseOver' |
  'mouseDown' |
  'mouseUp' |
  'mouseMove' |
  'groupDragged' |
  'changed' |
  'rangechange' |
  'rangechanged' |
  'select' |
  'itemover' |
  'itemout' |
  'timechange' |
  'timechanged';

export interface DataItem {
  className?: string;
  content: string;
  end?: DateType;
  group?: any;
  id?: IdType;
  start: DateType;
  style?: string;
  subgroup?: SubgroupType;
  title?: string;
  type?: string;
  editable?: boolean;
}

export interface PointItem extends DataItem {
  x: string;
  y: number;
}

export interface SubGroupStackOptions {
  [name: string]: boolean;
}

export interface DataGroup {
  className?: string;
  content: string;
  id: IdType;
  options?: DataGroupOptions;
  style?: string;
  subgroupOrder?: string | (() => void);
  title?: string;
  nestedGroups?: number[];
  subgroupStack?: SubGroupStackOptions | boolean;
}

export interface DataGroupOptions {
  excludeFromLegend?: boolean;
  interpolation?: boolean;
  style?: string;
}

export interface TimelineEditableOption {
  add?: boolean;
  remove?: boolean;
  updateGroup?: boolean;
  updateTime?: boolean;
  overrideItems?: boolean;
}

export type TimelineFormatLabelsFunction = (date: Date, scale: string, step: number) => string;

export interface TimelineFormatLabelsOption {
  millisecond?: string;
  second?: string;
  minute?: string;
  hour?: string;
  weekday?: string;
  day?: string;
  week?: string;
  month?: string;
  year?: string;
}

export interface TimelineFormatOption {
  minorLabels?: TimelineFormatLabelsOption | TimelineFormatLabelsFunction;
  majorLabels?: TimelineFormatLabelsOption | TimelineFormatLabelsFunction;
}

export interface TimelineGroupEditableOption {
  add?: boolean;
  remove?: boolean;
  order?: boolean;
}

export interface TimelineHiddenDateOption {
  start: DateType;
  end: DateType;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface TimelineItemsAlwaysDraggableOption {
  item?: boolean;
  range?: boolean;
}

export interface TimelineMarginItem {
  horizontal?: number;
  vertical?: number;
}

export type TimelineMarginItemType = number | TimelineMarginItem;

export interface TimelineMarginOption {
  axis?: number;
  item?: TimelineMarginItemType;
}

export interface TimelineOrientationOption {
  axis?: string;
  item?: string;
}

export interface TimelineTimeAxisOption {
  scale?: TimelineTimeAxisScaleType;
  step?: number;
}

export interface TimelineRollingModeOption {
  follow?: boolean;
  offset?: number;
}

export interface TimelineTooltipOption {
  followMouse: boolean;
  overflowMethod: 'cap' | 'flip';
}

export type TimelineOptionsConfigureFunction = (option: string, path: string[]) => boolean;
export type TimelineOptionsConfigureType = boolean | TimelineOptionsConfigureFunction;
export type TimelineOptionsDataAttributesType = boolean | string | string[];
export type TimelineOptionsEditableType = boolean | TimelineEditableOption;
export type TimelineOptionsItemCallbackFunction = (item: TimelineItem, callback: (item: TimelineItem | null) => void) => void;
export type TimelineOptionsGroupCallbackFunction = (group: TimelineGroup, callback: (group: TimelineGroup | null) => void) => void;
export type TimelineOptionsGroupEditableType = boolean | TimelineGroupEditableOption;
export type TimelineOptionsGroupOrderType = string | TimelineOptionsComparisonFunction;
export type TimelineOptionsGroupOrderSwapFunction = (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
export type TimelineOptionsHiddenDatesType = TimelineHiddenDateOption | TimelineHiddenDateOption[];
export type TimelineOptionsItemsAlwaysDraggableType = boolean | TimelineItemsAlwaysDraggableOption;
export type TimelineOptionsMarginType = number | TimelineMarginOption;
export type TimelineOptionsOrientationType = string | TimelineOrientationOption;
export type TimelineOptionsSnapFunction = (date: Date, scale: string, step: number) => Date | number;
export type TimelineOptionsTemplateFunction = (item?: any, element?: any, data?: any) => string;
export type TimelineOptionsComparisonFunction = (a: any, b: any) => number;

export interface TimelineOptions {
  align?: TimelineAlignType;
  autoResize?: boolean;
  clickToUse?: boolean;
  configure?: TimelineOptionsConfigureType;
  dataAttributes?: TimelineOptionsDataAttributesType;
  editable?: TimelineOptionsEditableType;
  end?: DateType;
  format?: TimelineFormatOption;
  groupEditable?: TimelineOptionsGroupEditableType;
  groupOrder?: TimelineOptionsGroupOrderType;
  groupOrderSwap?: TimelineOptionsGroupOrderSwapFunction;
  groupTemplate?: TimelineOptionsTemplateFunction;
  height?: HeightWidthType;
  hiddenDates?: TimelineOptionsHiddenDatesType;
  horizontalScroll?: boolean;
  itemsAlwaysDraggable?: TimelineOptionsItemsAlwaysDraggableType;
  locale?: string;
  locales?: any; // TODO
  moment?: MomentConstructor;
  margin?: TimelineOptionsMarginType;
  max?: DateType;
  maxHeight?: HeightWidthType;
  maxMinorChars?: number;
  min?: DateType;
  minHeight?: HeightWidthType;
  moveable?: boolean;
  multiselect?: boolean;
  multiselectPerGroup?: boolean;
  onAdd?: TimelineOptionsItemCallbackFunction;
  onAddGroup?: TimelineOptionsGroupCallbackFunction;
  onUpdate?: TimelineOptionsItemCallbackFunction;
  onMove?: TimelineOptionsItemCallbackFunction;
  onMoveGroup?: TimelineOptionsGroupCallbackFunction;
  onMoving?: TimelineOptionsItemCallbackFunction;
  onRemove?: TimelineOptionsItemCallbackFunction;
  onRemoveGroup?: TimelineOptionsGroupCallbackFunction;
  order?: TimelineOptionsComparisonFunction;
  orientation?: TimelineOptionsOrientationType;
  rollingMode?: TimelineRollingModeOption;
  rtl?: boolean;
  selectable?: boolean;
  showCurrentTime?: boolean;
  showMajorLabels?: boolean;
  showMinorLabels?: boolean;
  showTooltips?: boolean;
  stack?: boolean;
  stackSubgroups?: boolean;
  snap?: TimelineOptionsSnapFunction;
  start?: DateType;
  template?: TimelineOptionsTemplateFunction;
  visibleFrameTemplate?: TimelineOptionsTemplateFunction;
  throttleRedraw?: number;
  timeAxis?: TimelineTimeAxisOption;
  type?: string;
  tooltip?: TimelineTooltipOption;
  tooltipOnItemUpdateTime?: boolean | { template(item: any): any };
  verticalScroll?: boolean;
  width?: HeightWidthType;
  zoomable?: boolean;
  zoomKey?: string;
  zoomMax?: number;
  zoomMin?: number;
}

/**
 * If true (default) or an Object, the range is animated smoothly to the new window.
 * An object can be provided to specify duration and easing function.
 * Default duration is 500 ms, and default easing function is 'easeInOutQuad'.
 */
export type TimelineAnimationType = boolean;

export interface TimelineAnimationOptions {
  animation?: TimelineAnimationType;
}

export interface TimelineEventPropertiesResult {
  /**
   *  The id of the clicked group
   */
  group?: number | null;

  /**
   * The id of the clicked item.
   */
  item?: IdType | null;

  /**
   * Absolute horizontal position of the click event.
   */
  pageX: number;

  /**
   * Absolute vertical position of the click event.
   */
  pageY: number;

  /**
   * Relative horizontal position of the click event.
   */
  x: number;

  /**
   * Relative vertical position of the click event.
   */
  y: number;

  /**
   *  Date of the clicked event.
   */
  time: Date;

  /**
   * Date of the clicked event, snapped to a nice value.
   */
  snappedTime: Date;

  /**
   * Name of the clicked thing.
   */
  what?: TimelineEventPropertiesResultWhatType;

  /**
   * The original click event.
   */
  event: Event;
}

/**
 * Options that can be passed to a DataSet.
 */
export interface DataSetOptions extends DataSetQueueOptions {
  /**
   * The name of the field containing the id of the items.
   * When data is fetched from a server which uses some specific field to identify items,
   * this field name can be specified in the DataSet using the option fieldId.
   * For example CouchDB uses the field "_id" to identify documents.
   */
  fieldId?: string;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of items are left unchanged.
   * Item properties can be normalized by specifying a field type.
   * This is useful for example to automatically convert stringified dates coming
   * from a server into JavaScript Date objects.
   * The available data types are listed in section Data Types.
   */
  type?: any;
}

export interface DataSetQueueOptions {
  /**
   * Queue data changes ('add', 'update', 'remove') and flush them at once.
   * The queue can be flushed manually by calling DataSet.flush(),
   * or can be flushed after a configured delay or maximum number of entries.
   * When queue is true, a queue is created with default options.
   * Options can be specified by providing an object:
   * delay: number - The queue will be flushed automatically after an inactivity of this delay in milliseconds. Default value is null.
   * Default value is null.
   * max: number - When the queue exceeds the given maximum number of entries, the queue is flushed automatically. Default value is Infinity.
   * Default value is Infinity.
   */
  queue?: any | boolean;
}

export class DataSet<T extends DataItem | DataGroup> {
  /**
   * Creates an instance of DataSet.
   *
   * @param [options] DataSet options.
   */
  constructor(options: DataSetOptions);

  /**
   * Creates an instance of DataSet.
   *
   * @param [data] An Array with items.
   * @param [options] DataSet options.
   */
  constructor(data?: T[], options?: DataSetOptions);

  /**
   * The number of items in the DataSet.
   */
  length: number;

  /**
   * Add one or multiple items to the DataSet.
   * Adding an item will fail when there already is an item with the same id.
   *
   * @param data data can be a single item or an array with items.
   * @param [senderId] Optional sender id.
   * @returns The function returns an array with the ids of the added items.
   */
  add(data: T | T[], senderId?: IdType): IdType[];

  /**
   * Clear all data from the DataSet.
   *
   * @param [senderId] Optional sender id.
   * @returns The function returns an array with the ids of the removed items.
   */
  clear(senderId?: IdType): IdType[];

  /**
   * Find all distinct values of a specified field.
   * If data items do not contain the specified field are ignored.
   *
   * @param field The search term.
   * @returns Returns an unordered array containing all distinct values.
   */
  distinct(field: string): any[];

  /**
   * Flush queued changes.
   * Only available when the DataSet is configured with the option queue.
   */
  flush(): void;

  /**
   * Execute a callback function for every item in the dataset.
   *
   * @param callback The item callback.
   * @param [options] Optional options
   */
  forEach(callback: (item: T, id: IdType) => void, options?: DataSelectionOptions<T>): void;

  /**
   * Get all items from the DataSet.
   *
   * @param [options] Optional options.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(options?: DataSelectionOptions<T>): T[];

  /**
   * Get a single item from the DataSet.
   *
   * @param id The item id.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(id: IdType, options?: DataSelectionOptions<T>): T;

  /**
   * Get multiple items from the DataSet.
   *
   * @param ids Array of item ids.
   * @param [options] Optional options.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(ids: IdType[], options?: DataSelectionOptions<T>): T[];

  /**
   * Get the DataSet itself.
   * In case of a DataView, this function does not return the DataSet
   * to which the DataView is connected.
   *
   * @returns The DataSet itself.
   */
  getDataSet(): DataSet<T>;

  /**
   * Get ids of all items or of a filtered set of items.
   *
   * @returns ids of all items or of a filtered set of items.
   */
  getIds(options?: DataSelectionOptions<T>): IdType[];

  /**
   * Map every item in the DataSet.
   *
   * @param callback The mapping callback.
   * @param [options] Optional options.
   * @returns The mapped items.
   */
  map(callback: (item: T, id: IdType) => any, options?: DataSelectionOptions<T>): any[];

  /**
   * Find the item with maximum value of specified field.
   *
   * @returns Returns null if no item is found.
   */
  max(field: string): T;

  /**
   * Find the item with minimum value of specified field.
   *
   * @returns Returns null if no item is found.
   */
  min(field: string): T;

  /**
   * Subscribe from an event.
   *
   * @param event The event name.
   * @param callback
   * a callback function which will be called each time the event occurs.
   */
  on(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Unsubscribe to an event.
   *
   * @param event The event name.
   * @param callback
   * The exact same callback that was used when calling 'on'.
   */
  off(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Remove one or more items by id.
   *
   * @param id The item id.
   * @param [senderId] The sender id.
   * @returns Returns an array with the ids of the removed items.
   */
  remove(id: IdType | IdType[], senderId?: IdType): IdType[];

  /**
   * Set options for the DataSet.
   */
  setOptions(options?: DataSetQueueOptions): void;

  /**
   * Update one or multiple existing items.
   * When an item doesn't exist, it will be created.
   *
   * @param data a single item or an array with items.
   * @returns Returns an array with the ids of the updated items.
   */
  update(data: T | T[], senderId?: IdType): IdType[];
}

/**
 * The DataSet contains functionality to format, filter, and sort data retrieved
 * via the methods get, getIds, forEach, and map.
 * These methods can have these options as a parameter.
 */
export interface DataSelectionOptions<T> {
  /**
   * An array with field names, or an object with current field name
   * and new field name that the field is returned as.
   * By default, all properties of the items are emitted.
   * When fields is defined, only the properties whose name is specified
   * in fields will be included in the returned items.
   */
  fields?: string[] | any;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of an item are left unchanged.
   * When a field type is specified, this field in the items will be converted to the specified type.
   * This can be used for example to convert ISO strings containing a date to a JavaScript Date object,
   * or convert strings to numbers or vice versa. The available data types are listed in section Data Types.
   */
  type?: any;

  /**
   * Items can be filtered on specific properties by providing a filter function.
   * A filter function is executed for each of the items in the DataSet,
   * and is called with the item as parameter.
   * The function must return a boolean.
   * All items for which the filter function returns true will be emitted.
   * See section Data Filtering.
   */
  filter?(item: T): boolean;

  /**
   * Order the items by a field name or custom sort function.
   */
  order?: string | any;

  /**
   * Determine the type of output of the get function.
   * Allowed values are 'Array' | 'Object'.
   * The default returnType is an Array.
   * The Object type will return a JSON object with the ID's as keys.
   */
  returnType?: string;
}

export class DataView<T extends DataItem | DataGroup> {
  length: number;
  constructor(items: T[]);
}

export type DataItemCollectionType = DataItem[] | DataSet<DataItem> | DataView<DataItem>;
export type DataGroupCollectionType = DataGroup[] | DataSet<DataGroup> | DataView<DataGroup>;

export interface TitleOption {
  text?: string;
  style?: string;
}

export interface RangeType {
  min: IdType;
  max: IdType;
}

export interface DataAxisSideOption {
  range?: RangeType;
  format?(): string;
  title?: TitleOption;
}

export class Timeline {
  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    groups: DataGroupCollectionType,
    options?: TimelineOptions
  );

  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    options?: TimelineOptions
  );

  /**
   * Add new vertical bar representing a custom time that can be dragged by the user. Parameter time can be a Date, Number, or String, and is new Date() by default.
   * Parameter id can be Number or String and is undefined by default. The id is added as CSS class name of the custom time bar, allowing to style multiple time bars differently.
   * The method returns id of the created bar.
   */
  addCustomTime(time: DateType, id?: IdType): IdType;

  /**
   * Destroy the Timeline. The timeline is removed from memory. all DOM elements and event listeners are cleaned up.
   */
  destroy(): void;

  /**
   * Adjust the visible window such that it fits all items. See also focus(id).
   */
  fit(options?: TimelineAnimationOptions): void;

  /**
   * Adjust the visible window such that the selected item (or multiple items) are centered on screen. See also function fit()
   */
  focus(ids: IdType | IdType[], options?: TimelineAnimationOptions): void;

  /**
   * Get the current time. Only applicable when option showCurrentTime is true.
   */
  getCurrentTime(): Date;

  /**
   * Retrieve the custom time from the custom time bar with given id.
   * @param id Id is undefined by default.
   */
  getCustomTime(id?: IdType): Date;

  getEventProperties(event: Event): TimelineEventPropertiesResult;

  /**
   * Get the range of all the items as an object containing min date and max date
   */
  getItemRange(): { min: Date, max: Date };

  /**
   * Get an array with the ids of the currently selected items
   */
  getSelection(): IdType[];

  /**
   * Get an array with the ids of the currently visible items.
   */
  getVisibleItems(): IdType[];

  /**
   * Get the current visible window.
   */
  getWindow(): TimelineWindow;

  /**
   * Move the window such that given time is centered on screen.
   */
  moveTo(time: DateType, options?: TimelineAnimationOptions, callback?: (properties?: any) => void): void;

  /**
   * Create an event listener. The callback function is invoked every time the event is triggered.
   */
  on(event: TimelineEvents, callback?: (properties?: any) => void): void;

  /**
   * Remove an event listener created before via function on(event[, callback]).
   */
  off(event: TimelineEvents, callback?: (properties?: any) => void): void;

  /**
   * Force a redraw of the Timeline. The size of all items will be recalculated.
   * Can be useful to manually redraw when option autoResize=false and the window has been resized, or when the items CSS has been changed.
   */
  redraw(): void;

  /**
   * Remove vertical bars previously added to the timeline via addCustomTime method.
   * @param id ID of the custom vertical bar returned by addCustomTime method.
   */
  removeCustomTime(id: IdType): void;

  /**
   * Set a current time. This can be used for example to ensure that a client's time is synchronized with a shared server time. Only applicable when option showCurrentTime is true.
   */
  setCurrentTime(time: DateType): void;

  /**
   * Adjust the time of a custom time bar.
   * @param time The time the custom time bar should point to
   * @param id Id of the custom time bar, and is undefined by default.
   */
  setCustomTime(time: DateType, id?: IdType): void;

  /**
   * Adjust the title attribute of a custom time bar.
   * @param title The title shown when hover over time bar
   * @param id Id of the custom time bar, and is undefined by default.
   */
  setCustomTimeTitle(title: string, id?: IdType): void;

  /**
   * Set both groups and items at once. Both properties are optional.
   * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
   * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
   */
  setData(data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void;

  /**
   * Set a data set with groups for the Timeline.
   */
  setGroups(groups?: DataGroupCollectionType): void;

  /**
   * Set a data set with items for the Timeline.
   */
  setItems(items: DataItemCollectionType): void;

  /**
   * Set or update options. It is possible to change any option of the timeline at any time. You can for example switch orientation on the fly.
   */
  setOptions(options: TimelineOptions): void;

  /**
   * Select one or multiple items by their id. The currently selected items will be unselected. To unselect all selected items, call `setSelection([])`.
   */
  setSelection(ids: IdType | IdType[], options?: { focus: boolean, animation: TimelineAnimationOptions }): void;

  /**
   * Set the current visible window.
   * @param start If the parameter value of start is null, the parameter will be left unchanged.
   * @param end If the parameter value of end is null, the parameter will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  setWindow(start: DateType, end: DateType, options?: TimelineAnimationOptions, callback?: () => void): void;

  /**
   * Toggle rollingMode.
   */
  toggleRollingMode(): void;

  /**
   * Zoom in the current visible window.
   * @param percentage A number and must be between 0 and 1. If null, the window will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  zoomIn(percentage: number, options?: TimelineAnimationOptions, callback?: () => void): void;

  /**
   * Zoom out the current visible window.
   * @param percentage A number and must be between 0 and 1. If null, the window will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  zoomOut(percentage: number, options?: TimelineAnimationOptions, callback?: () => void): void;
}

export interface TimelineStatic {
  new(id: HTMLElement, data: any, options?: any): timelineplus.Timeline;
}

export interface Timeline {
  setGroups(groups?: TimelineGroup[]): void;
  setItems(items?: TimelineItem[]): void;
  getWindow(): TimelineWindow;
  setWindow(start: any, date: any): void;
  focus(selection: any): void;
  on(event?: string, callback?: (properties: any) => void): void;
  off(event: string, callback?: (properties?: any) => void): void;
}

export interface TimelineWindow {
  start: Date;
  end: Date;
}

export interface TimelineItemEditableOption {
  remove?: boolean;
  updateGroup?: boolean;
  updateTime?: boolean;
}

export type TimelineItemEditableType = boolean | TimelineItemEditableOption;

export interface TimelineItem {
  className?: string;
  align?: TimelineAlignType;
  content: string;
  end?: DateType;
  group?: IdType;
  id: IdType;
  start: DateType;
  style?: string;
  subgroup?: IdType;
  title?: string;
  type?: TimelineItemType;
  editable?: TimelineItemEditableType;
}

export interface TimelineGroup {
  className?: string;
  content: string | HTMLElement;
  id: IdType;
  style?: string;
  order?: number;
  subgroupOrder?: TimelineOptionsGroupOrderType;
  title?: string;
  visible?: boolean;
  nestedGroups?: IdType[];
  showNested?: boolean;
}

export interface VisSelectProperties {
  items: number[];
}

export as namespace timelineplus;
