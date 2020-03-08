// pages/home/home.js
Page({
  data: {
    name: 'ilovecoding',
    age: 18,
    students: [
      { id: 100, name: 'kobe', age: 30 },
      { id: 101, name: 'james', age: 28 },
      { id: 102, name: 'curry', age: 32 },
      { id: 103, name: 'ilovecoding', age: 21 }
    ],
    counter: 0
  },
  // 点击按钮：counter+1
  increment() {
    // 1.错误的做法
    // this.data.counter++;
    // 2.正确的做法
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // 点击按钮：counter-1
  decrement() {
    // 1.错误的做法
    // this.data.counter--;
    // 2.正确的做法
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
