var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);

makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css('border-color', this.$node.css('border-color') === 'rgb(0, 0, 255)' ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)');
  //this.$node.animate({'color': 'red'}, 'slow');
};
