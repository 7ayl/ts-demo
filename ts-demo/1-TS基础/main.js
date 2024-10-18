{
    // 枚举
    // type Direction = '上' | '下' | '左' | '右'
    // 
    var Direction = void 0;
    (function (Direction) {
        Direction["Up"] = "\u4E0A";
        Direction["Down"] = "\u4E0B";
        Direction["Left"] = "\u5DE6";
        Direction["Right"] = "\u53F3";
    })(Direction || (Direction = {}));
    function changeDirection(direction) {
        console.log(direction);
    }
    changeDirection(Direction.Up);
    changeDirection(Direction.Down);
    changeDirection(Direction.Left);
    changeDirection(Direction.Right);
    // 后端给前端的一些属性都是0 1 2 3 这样的数字，例如：性别
    // 如果后端给的是 100 上 101 下 102 左 103 右
}
