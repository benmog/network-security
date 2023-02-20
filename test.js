const func = (str) => {
    const stack = new Stack();

    str.split().forEach(letter => {
        if (letter === '(') stack.push('(');
        else if (!letter === ')' || stack.isEmpty() || !stack.pop() === ')') return false;
    });

    return stack.isEmpty();

}