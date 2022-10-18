import Stack from "./stack";

function init() {
    const stack = new Stack()

    // Adding items to the stack
    stack.push(10);
    stack.push(11);
    stack.push(25);

    // get the length of the stack and the last item
    console.log({ length: stack.length, peek: stack.peek() });

    // Removing stack item and check the last item
    stack.pop()
    console.log({ length: stack.length, peek: stack.peek() });
}

init();