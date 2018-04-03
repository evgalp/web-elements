const renderer = new PIXI.autoDetectRenderer();
const stage = new PIXI.Container();
const slidesContainer = new PIXI.Container();
const displacementSprite = new PIXI.Sprite.fromImage( displacementImage );
const displacementFilter = new PIXI.filters.DisplacementFilter( displacementImage )
