import React from "react";
import "../style/items.css";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      items: props.items,
      placeholder: props.placeholder,
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
  componentDidMount() {
    if (this.state.items.length === 0) this.addNewItem();
  }
  addNewItem() {
    this.setState({
      items: this.state.items.concat(this.props.factory()),
    });
  }
  updateById(id, key, value) {
    let length = this.state.items.length;
    for (let i = 0; i < length; i++) {
      if (this.state.items[i].id === id) {
        // 1. Make a shallow copy of the educations
        let items = [...this.state.items];
        // 2. Make a shallow copy of the education we want to mutate
        let item = { ...items[i] };
        // 3. Replace the property we're interested in
        item[key] = value;
        // 4. Put it back into our array. N.B. we *are* mutating the array here,
        //    but that's why we made a copy first
        items[i] = item;
        // 5. Set the state to our new copy
        this.setState({ items });
      }
    }
  }
  deleteById(id) {
    const filter = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filter });
  }
  render() {
    const add = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus-thick</title>
        <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
      </svg>
    );
    return (
      <div className="items">
        <h3>{this.state.title}</h3>
        <div className="itemList">
          {this.state.items.map((item) => {
            return (
              <Item
                className="item"
                key={item.id}
                item={item}
                placeholder={this.state.placeholder}
                updateById={this.updateById}
                deleteById={this.deleteById}
              />
            );
          })}
        </div>
        <div className="add" onClick={this.addNewItem}>{add}</div>
      </div>
    );
  }
}

function Item(props) {
  const { item } = props;
  const { placeholder } = props;
  const { updateById } = props;
  const { deleteById } = props;

  const onChangeInput = (key, e) => {
    if (key === "task") {
      const node = e.target;
      node.style.height = "auto";
      node.style.height = node.scrollHeight + "px";
    }
    updateById(item.id, key, e.target.value);
  };
  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-circle</title>
      <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
    </svg>
  );

  return (
    <form>
      <div id="item">
        {Object.entries(item).map(([key, value]) => {
          if (key === "id") return null;
          if (key === "task") {
            return (
              <textarea
                key={key}
                placeholder={placeholder[key]}
                value={value}
                onChange={(e) => onChangeInput(key, e)}
              ></textarea>
            );
          }
          return (
            <input
              key={key}
              type="text"
              placeholder={placeholder[key]}
              value={value}
              onChange={(e) => onChangeInput(key, e)}
            ></input>
          );
        })}
      </div>
      <button type="button" onClick={(e) => deleteById(item.id, e)}>
        {svg}
      </button>
    </form>
  );
}
