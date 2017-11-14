{
  this.props.$ITEM$s.map(($ITEM$, index) => {
    const {foo, bar, baz} = $ITEM$;

    return (
      <div key={index}>
        {foo, bar, baz}
      </div>
    );
  })
}
