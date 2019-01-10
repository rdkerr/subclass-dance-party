var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css('border-top-color', 'yellow').addClass('rotating');
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);

makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //var size = this.$node.css('border-width') === '10px' ? '20px' : '10px';
  //this.$node.animate({'border-width': size}, this.timeBetweenSteps);
  // this.$node.css('transform', 'rotate(20deg)');
};
