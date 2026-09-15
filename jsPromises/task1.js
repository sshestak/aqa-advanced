function test (text, milliseconds) {
    setTimeout(() => {
        console.log(text)
    }, milliseconds)
}

test ("This test is passed!", 3000)