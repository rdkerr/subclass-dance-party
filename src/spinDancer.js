var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css('border-top-color', 'yellow').addClass('rotating');
  this.$node.css('border-bottom-color', 'lime').addClass('rotating');
  var bezierValue1 = this.timeBetweenSteps / 1000;
  var bezierValue2 = 1 - bezierValue1;
  this.$node.css('animation-timing-function', `cubic-bezier(${bezierValue1}, ${bezierValue2}, ${bezierValue2}, ${bezierValue1})`);
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);

makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //var size = this.$node.css('border-width') === '10px' ? '20px' : '10px';
  //this.$node.animate({'border-width': size}, this.timeBetweenSteps);
};

makeSpinDancer.prototype.dance = function(xMeet, yMeet) {
  this.$node.removeClass('rotating');
  makeDancer.prototype.dance.call(this, xMeet, yMeet);
  setTimeout($().addClass.bind(this.$node), 10000, 'rotating');
};