let chf_2 = 0
let chf_1 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    chf_2 = randint(2, 12)
    if (chf_2 == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (chf_2 == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (chf_2 == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (chf_2 == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (chf_2 == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (chf_2 == 7) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    }
    if (chf_2 == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (chf_2 == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (chf_2 == 10) {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # # . #
            . # # . #
            . # . # .
            `)
    }
    if (chf_2 == 11) {
        basic.showLeds(`
            . # . . #
            # # . # #
            . # . . #
            . # . . #
            . # . . #
            `)
    }
    if (chf_2 == 12) {
        basic.showLeds(`
            . # . # #
            # # # . #
            . # . # .
            . # # . .
            . # # # #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    chf_1 = randint(1, 6)
    if (chf_1 == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (chf_1 == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (chf_1 == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (chf_1 == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (chf_1 == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (chf_1 == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
