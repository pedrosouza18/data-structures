export default class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    this.stack.pop()
  }

  peek() {
    return this.stack.at(-1)
  }

  isEmpty() {
    return this.stack.length === 0
  }

  get length() {
    return this.stack.length
  }
}
