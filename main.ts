function enemigo_3 () {
    enemigo_2 = game.createSprite(randint(0, 3), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemigo_2.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    personaje.move(-1)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("A G F G E A F G ", 120)
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("A G F G E A F G ", 120)
    music.playMelody("A F E F D G E F ", 120)
})
input.onButtonPressed(Button.B, function () {
    personaje.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    }
})
function enemigos () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
}
let enemigo: game.LedSprite = null
let enemigo_2: game.LedSprite = null
let personaje: game.LedSprite = null
game.setScore(0)
personaje = game.createSprite(2, 4)
enemigos()
enemigo_3()
basic.forever(function () {
    if (enemigo.isTouching(personaje)) {
        music.setVolume(0)
        basic.showIcon(IconNames.Sad)
        game.gameOver()
    }
    if (enemigo.isTouchingEdge()) {
        game.addScore(1)
        enemigo.delete()
        enemigos()
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (enemigo_2.isTouching(personaje)) {
        music.setVolume(0)
        basic.showIcon(IconNames.Sad)
        game.gameOver()
    }
    if (enemigo_2.isTouchingEdge()) {
        game.addScore(1)
        enemigo_2.delete()
        enemigo_3()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        game.pause()
        music.setVolume(0)
    } else {
        game.resume()
        music.setVolume(255)
    }
})
