tiles.setCurrentTilemap(tilemap`Level 1`)
let jag1 = sprites.create(Jag1, SpriteKind.Player)
tiles.placeOnTile(jag1, tiles.getTileLocation(2, 2))
scene.cameraFollowSprite(jag1)
game.onUpdate(function () {
    controller.moveSprite(jag1)
})
