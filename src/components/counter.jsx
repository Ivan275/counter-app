import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/100",
    tags: ["tag1"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };
  render() {
    // let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: 23 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 ? "Please create a new tag" : "non"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  handleIncrement = product => {
    // this.state.count++;
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> NO tags </p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
