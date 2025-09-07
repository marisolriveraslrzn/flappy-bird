function verplaats_kolum () {
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        for (let obstakel2 of obstacle2) {
            obstakel2.change(LedSpriteProperty.X, -1)
        }
        basic.pause(500)
    }
}
function kolum3 () {
    emptykolumy1 = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != emptykolumy1) {
            obstacle2.push(game.createSprite(4, index))
        }
    }
}
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
function kolumweg () {
    while (obstacle2.length > 0 && obstacle2[0].get(LedSpriteProperty.X) == 0) {
        obstacle2.removeAt(0).delete()
    }
    score += 1
}
let emptykolumy1 = 0
let bird: game.LedSprite = null
let obstacle2: game.LedSprite[] = []
obstacle2 = []
bird = game.createSprite(0, 2)
let score = 0
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    kolum3()
    verplaats_kolum()
    kolumweg()
})
basic.forever(function () {
    for (let obstakel2 of obstacle2) {
        if (obstakel2.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstakel2.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(score)
            control.reset()
        }
    }
})
