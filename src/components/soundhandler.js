AFRAME.registerComponent("soundhandler", {
  init: function () {
    this.soundEl = document.querySelector("[sound]");
    this.marker = document.querySelector("a-marker");
    this.visible = false;
  },
  tick: function () {
    if (this.marker.object3D.visible && !this.visible) {
      this.soundEl.components.sound.stopSound();
      this.soundEl.components.sound.playSound();
      this.visible = true;
    } else if (!this.marker.object3D.visible) {
      this.visible = false;
    }
  },
});
