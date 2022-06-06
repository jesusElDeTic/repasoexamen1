input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
})
let cuentaAtras = 3
for (let index = 0; index < 3; index++) {
    basic.showNumber(cuentaAtras)
    cuentaAtras += -1
}
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.forever(function () {
	
})
