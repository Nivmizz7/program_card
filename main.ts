let chf_1 = 0
let chf_2 = 0
input.onButtonPressed(Button.A, function () {
    chf_1 = randint(1, 6)
    basic.showString("" + (chf_1))
})
input.onButtonPressed(Button.B, function () {
    chf_2 = randint(2, 12)
    basic.showNumber(chf_2)
})
basic.forever(function () {
	
})
