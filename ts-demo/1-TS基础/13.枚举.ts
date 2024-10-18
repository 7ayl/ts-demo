{
  // 枚举
  // type Direction = '上' | '下' | '左' | '右'
  // 
//   enum Direction {
//     Up = 'Up',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right'
//   }

  enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  // 枚举内部还做了一个事情：可以通过键找值，也可以通过值找键
  // console.log(Direction)
  function changeDirection(direction: Direction) {
    console.log(direction);
  }
  changeDirection(Direction.Up)
  changeDirection(Direction.Down)
  changeDirection(Direction.Left)
  changeDirection(Direction.Right)

  // 后端给前端的一些属性都是0 1 2 3 这样的数字，例如：性别
  // 如果后端给的是 100 上 101 下 102 左 103 右

}