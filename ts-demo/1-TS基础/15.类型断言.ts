{
  // 页面上有一个 id 为 link 的 a 标签
  // 我们知道它是a标签
  // 但是 TS 不知道
  // document.getElementById 的返回值是 HTMLElement
  // 而 HTMLElement 身上没有 href
  // 类型断言：强行指定获取到的结果类型
  const a = document.getElementById('link') as HTMLAnchorElement
  const box = document.getElementById('box') as HTMLDivElement
  const pp = document.getElementById('pp') as HTMLParagraphElement
  const img = document.getElementById('avatar') as HTMLImageElement

  const p = document.createElement('div')

//   console.log(a.href)
//   if (a) {
//     console.log(a.href)
//   }
//   a && a.href
//   总结：当函数获取到的结果类型较为宽泛时，我们又知道具体类型，就可以使用断言强行指定类型
  
}