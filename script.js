function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var Sortable = SortableHOC;
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;
var arrayMove = Sortable.arrayMove;

const SortableItem = SortableElement(({ value }) => /*#__PURE__*/React.createElement("li", null, value));

const SortableList = SortableContainer(({ items }) => {
  return /*#__PURE__*/(
    React.createElement("ul", null,
    items.map((value, index) => /*#__PURE__*/
    React.createElement(SortableItem, { key: `item-${index}`, index: index, value: value }))));



});

class SortableComponent extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'] });_defineProperty(this, "onSortEnd",

    ({ oldIndex, newIndex }) => {
      this.setState(({ items }) => ({
        items: arrayMove(items, oldIndex, newIndex) }));

    });}
  render() {
    return /*#__PURE__*/React.createElement(SortableList, { items: this.state.items, onSortEnd: this.onSortEnd });
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(SortableComponent, null), document.getElementById('list'));