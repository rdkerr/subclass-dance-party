// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  var node = this;
  $(this.$node).mouseover(function() {
    $(this).addClass('shaking');
    $(this).removeClass('rotating');
  }).mouseout(function() {
    $(this).removeClass('shaking');
    if (node instanceof makeSpinDancer) {
      $(this).addClass('rotating');
    }
  });
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(xOffset, yOffset) {
  this.$node.animate({
    'top': yOffset,
    'left': xOffset
  }, 2000);
};

makeDancer.prototype.dance = function(xMeet, yMeet) {
  this.$node.animate({
    'top': yMeet,
    'left': xMeet
  }, 2000);
  setTimeout($().addClass.bind(this.$node), Math.random() * 1000, 'shaking');
};