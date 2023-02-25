import React from "react";

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
    return (
      <div>
        <h3>{this.state.title}</h3>
        {this.state.items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              placeholder={this.state.placeholder}
              updateById={this.updateById}
              deleteById={this.deleteById}
            />
          );
        })}
        <button type="button" onClick={this.addNewItem}>
          Add
        </button>
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
    updateById(item.id, key, e.target.value);
  };

  return (
    <form>
      {Object.entries(item).map(([key, value]) => {
        if (key === "id") return null;
        return (
          <div key={key}>
            <label>{key} : </label>
            <input
              type="text"
              placeholder={placeholder[key]}
              value={value}
              onChange={(e) => onChangeInput(key, e)}
            ></input>
          </div>
        );
      })}
      <button type="button" onClick={(e) => deleteById(item.id, e)}>
        delete
      </button>
    </form>
  );
}
