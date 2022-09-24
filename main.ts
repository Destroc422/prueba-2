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
input.onButtonPressed(Button.B, function () {
    personaje.move(1)
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
music.setBuiltInSpeakerEnabled(true)
game.setScore(0)
personaje = game.createSprite(2, 4)
enemigos()
enemigo_3()
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
basic.forever(function () {
    if (enemigo_2.isTouching(personaje)) {
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
    if (enemigo.isTouching(personaje)) {
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
