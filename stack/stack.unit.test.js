import Stack from './stack'

describe('Stack', () => {
  it('should add two numbers and check the length', () => {
    const stack = new Stack()

    stack.push(10)
    stack.push(20)

    expect(stack.length).toBe(2)
  })

  it('should add number 10 and check if it is the last number on the stack', () => {
    const stack = new Stack()

    stack.push(10)

    expect(stack.peek()).toBe(10)
  })

  it('should add two numbers, remove the last and check the length', () => {
    const stack = new Stack()

    stack.push(10)
    stack.push(20)

    expect(stack.length).toBe(2)

    stack.pop()

    expect(stack.length).toBe(1)
  })

  it('should add one number, remove and then check if the stack is empty', () => {
    const stack = new Stack()

    stack.push(10)
    stack.pop()

    expect(stack.isEmpty()).toBe(true)
  })
})
