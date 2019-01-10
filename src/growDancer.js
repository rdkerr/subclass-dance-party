var makeGrowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);

makeGrowDancer.prototype.constructor = makeGrowDancer;

makeGrowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var size = this.$node.css('border-width') === '10px' ? '20px' : '10px';
  this.$node.animate({'border-width': size}, this.timeBetweenSteps);
};
