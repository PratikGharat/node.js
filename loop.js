const bar = () => console.log('hello')

const baz = () => console.log('everyone')

const foo = () => {
  console.log('foo')
  //bar()
  setTimeout(bar, 0)
  baz()
}

foo()