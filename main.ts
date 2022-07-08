input.onButtonPressed(Button.A, function () {
    basic.showNumber(max_temp)
    basic.clearScreen()
})
let max_temp = 0
let current_temp = input.temperature()
let min_temp = current_temp
min_temp = current_temp
basic.forever(function () {
    current_temp = 0
    if (current_temp < min_temp) {
        min_temp = current_temp
    }
    if (max_temp > current_temp) {
        max_temp = current_temp
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
