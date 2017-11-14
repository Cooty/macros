class $COMPONENT$ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        foo: 'bar',
        baz: 2
    };
    // Bind methodes passed to child components to this
    this.handleClick = this.handleClick.bind(this);
  }

  // Example for lifting state up
  handleClick(e) {
    console.log(e.target);
  }

  render() {
    // Deconstruction
    // const {foo, bar, baz} = this.props;

    return (
      <div>
        {/*Some JSX or Component goes here
        <button onClick={this.handleClick}>*/}
      </div>
    );
  };
}
