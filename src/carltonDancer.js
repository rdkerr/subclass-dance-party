var makeCarltonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src=\'http://mrwgifs.com/wp-content/uploads/2014/11/HQ-Carlton-Dance-With-a-Transparent-Background-Gif-From-The-Fresh-Prince-Of-Bel-Air.gif\'>');
  this.setPosition(top, left);
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);

makeCarltonDancer.prototype.constructor = makeCarltonDancer;

makeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

