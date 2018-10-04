// Test DataSet constructor
new timelineplus.DataSet();
new timelineplus.DataSet({});
new timelineplus.DataSet([]);
new timelineplus.DataSet([], {});

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Example
//

interface TestData {
  id: number;
  content: string;
  date?: any;
  group?: number;
  balance?: number;
  first?: boolean;
}

// create a DataSet
let options = {};
let data = new timelineplus.DataSet<TestData>(options);

// add items
// note that the data items can contain different properties and data formats
data.add([
  { id: 1, content: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true },
  { id: 2, content: 'item 2', date: '2013-06-23', group: 2 },
  { id: 3, content: 'item 3', date: '2013-06-25', group: 2 },
  { id: 4, content: 'item 4' }
]);

// subscribe to any change in the DataSet
data.on('*', (event, properties, senderId) => {
  console.log('event', event, properties);
});

// update an existing item
data.update({ id: 2, group: 1 });

// remove an item
data.remove(4);

// get all ids
const ids = data.getIds();
console.log('ids', ids);

// get a specific item
const item1 = data.get(1);
console.log('item1', item1);

// retrieve a filtered subset of the data
let items = data.get({
  filter: (item) => {
    return item.group === 1;
  }
});
console.log('filtered items', items);

// retrieve formatted items
items = data.get({
  fields: ['id', 'date'],
  type: {
    date: 'ISODate'
  }
});
console.log('formatted items', items);

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Subscriptions
//

// create a DataSet
data = new timelineplus.DataSet<TestData>();

// subscribe to any change in the DataSet
data.on('*', (event, properties, senderId) => {
  console.log('event:', event, 'properties:', properties, 'senderId:', senderId);
});

// add an item
data.add({ id: 1, text: 'item 1' });              // triggers an 'add' event
data.update({ id: 1, text: 'item 1 (updated)' }); // triggers an 'update' event
data.remove(1);                                 // triggers an 'remove' event

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Data_Manipulation
//

// create a DataSet
data = new timelineplus.DataSet<TestData>();

// add items
data.add([
  { id: 1, text: 'item 1' },
  { id: 2, text: 'item 2' },
  { id: 3, text: 'item 3' }
]);

// update an item
data.update({ id: 2, text: 'item 2 (updated)' });

// remove an item
data.remove(3);

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Data_Selection
//

// create a DataSet
data = new timelineplus.DataSet<TestData>();
data.add([
  { id: 1, text: 'item 1', date: '2013-06-20', group: 1, first: true },
  { id: 2, text: 'item 2', date: '2013-06-23', group: 2 },
  { id: 3, text: 'item 3', date: '2013-06-25', group: 2 },
  { id: 4, text: 'item 4' }
]);

// retrieve formatted items
items = data.get({
  fields: ['id', 'date', 'group'],    // output the specified fields only
  type: {
    date: 'Date',                   // convert the date fields to Date objects
    group: 'String'                 // convert the group fields to Strings
  }
});

const dataset = new timelineplus.DataSet<TestData>();

// retrieve all items having a property group with value 2
const group2 = dataset.get({
  filter: (item) => {
    return (item.group === 2);
  }
});

// retrieve all items having a property balance with a value above zero
const positiveBalance = dataset.get({
  filter: (item) => {
    return item.balance !== undefined && item.balance > 0;
  }
});
