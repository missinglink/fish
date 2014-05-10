
var Fish,
    fishScale = 0.5;

var material = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('img/fish2.png'),
  transparent: true
  // opacity: 0.9
});

//var material = new THREE.MeshBasicMaterial( { color: 0xF0FC00, wireframe: false } );


Fish = function(){

  this.actionFrame = Math.round( Math.random() * maxFrames );

  THREE.Mesh.call( this,
    new THREE.PlaneGeometry( 147 * fishScale, 179 * fishScale ),
    material
  );

}

Fish.prototype = new THREE.Mesh();

Fish.prototype.update = function( currentFrame ){
  this.move();
  // this.jitter();
  this.rotate();
}

Fish.prototype.jitter = function(){
  this.position.x += Math.round( Math.random() * 10 - 5 );
  this.position.y += Math.round( Math.random() * 10 - 5 );
  this.position.z += Math.round( Math.random() * 10 - 5 );
  
  // mesh.position.set( center.x, center.y, center.z );
}

Fish.prototype.move = function(){
  this.translateX( 1 );
}

Fish.prototype.rotate = function (){
  
  if( currentFrame == this.actionFrame ){

    var yRot = this.rotation.y;
    yRot += Math.round( Math.random() * 2 - 1 );

    new TWEEN.Tween( this.rotation )
      .to({ y:yRot }, 1000 )
      .easing( TWEEN.Easing.Elastic.InOut )
      .start();

    // var xRot = this.rotation.y;
    // xRot += Math.round( Math.random() * 2 - 1 );

    // new TWEEN.Tween( this.rotation )
    //   .to({ x:xRot }, 1000 )
    //   .easing( TWEEN.Easing.Elastic.InOut )
    //   .start();

    var zRot = this.rotation.z;
    zRot += Math.round( Math.random() * 2 - 1 );

    // console.log( this.rotation.z, this.rotation.z + zRot );

    if( this.rotation.z + zRot > -3 &&
        this.rotation.z + zRot < 3 ) {
      new TWEEN.Tween( this.rotation )
        .to({ z:zRot }, 1000 )
        .easing( TWEEN.Easing.Elastic.InOut )
        .start();
    }

  }

}