enum RadioMessage {
    message1 = 49434,
    Hei = 61145
}
let Ristes = 0
led.setBrightness(255)
let Av_på = "På"
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # # # # #
    # # # # #
    `)
Av_på = "Av"
for (let index = 0; index < 100500; index++) {
    if (Av_på == "Av") {
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
            basic.showIcon(IconNames.Yes)
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . .
                # # # # #
                # # # # #
                `)
            music.playMelody("C D E D E F G F ", 600)
            Av_på = "På"
            basic.clearScreen()
            basic.showIcon(IconNames.Happy)
        }
        if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A)) || input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Skull)
            Av_på = "EROR"
        }
    }
}
if (Av_på == "Av") {
    basic.showIcon(IconNames.Skull)
    Av_på = "EROR"
}
basic.forever(function () {
    led.setBrightness(input.lightLevel() + 20)
})
basic.forever(function () {
    while (Av_på == "EROR") {
        basic.showIcon(IconNames.Skull)
    }
})
// Risting
basic.forever(function () {
    // Måler om er av eller på
    while (Av_på == "På") {
        if (Ristes == 0) {
            basic.showIcon(IconNames.Happy)
        }
        while (input.isGesture(Gesture.Shake)) {
            if (2300 < input.acceleration(Dimension.Strength)) {
                music.playMelody("B - - - - E - - ", 500)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # # # # #
                    . . . # #
                    `)
                Ristes += 0.2
                if (1 < Ristes) {
                    while (!(input.logoIsPressed())) {
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . . . .
                            # # # # #
                            . . . # #
                            `)
                        music.playMelody("B C5 B C5 B C5 B C5 ", 700)
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . . . .
                            # # # # #
                            # # . . .
                            `)
                        music.playMelody("B C5 B C5 B C5 B C5 ", 700)
                    }
                }
                if (Ristes > 0.5) {
                    music.playMelody("C D C D C D C D ", 700)
                    basic.showLeds(`
                        . . . . .
                        # # . # #
                        . . . . .
                        # # # # #
                        . . . # #
                        `)
                }
            }
        }
        if (Ristes < 0) {
            Ristes = 0
        }
        if (!(Ristes == 0) && (input.logoIsPressed() && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)))) {
            Ristes += -0.1
            basic.pause(100)
        }
    }
})
