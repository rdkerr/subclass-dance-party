$(document).ready(function() {
  window.dancers = {};
  window.dancersArray = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() - 110) * Math.random() + 65,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    var dancerType = dancer.constructor.name;
    if (!window.dancers[dancerType]) {
      window.dancers[dancerType] = [];
    }
    window.dancers[dancerType].push(dancer);
    window.dancersArray.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var array = window.dancers[dancerMakerFunctionName];
    var yOffset = window.innerHeight / Object.keys(window.dancers).length * Object.keys(window.dancers).indexOf(dancerMakerFunctionName) + 68;
    for (var i = 0; i < array.length; i++) {
      var position = i / array.length;
      var xOffset = window.innerWidth * (position + 0.5 / array.length);
      array[i].lineUp(xOffset, yOffset);
    }
  });

  $('.danceButton').on('click', function(event) {
    $('body').css('background-image', 'url(\'http://images.rapgenius.com/2f3f5a8e53f22a2ec3725da90ccb3e6a.640x360x16.gif\')');
    var copy = Array.from(window.dancersArray);
    while (copy.length >= 2) {
      var first = copy.shift();
      var index;
      var min = Infinity;
      for (var i = 0; i < copy.length; i++) {
        var current = copy[i];
        var distance = Math.pow((copy[i].$node[0].offsetTop - first.$node[0].offsetTop), 2) + Math.pow((copy[i].$node[0].offsetLeft - first.$node[0].offsetLeft), 2);
        if (distance < min) {
          min = distance;
          index = i;
        }
      }
      var second = copy[index];
      copy.splice(index, 1);
      var xMeet = (first.$node[0].offsetLeft + second.$node[0].offsetLeft) / 2;
      var yMeet = (first.$node[0].offsetTop + second.$node[0].offsetTop) / 2;
      var xDirection = first.$node[0].offsetLeft > xMeet ? xMeet + 10 : xMeet - 10;
      var yDirection = first.$node[0].offsetTop > yMeet ? yMeet + 10 : yMeet - 10;
      first.dance(xDirection, yDirection);
      xDirection = second.$node[0].offsetLeft > xMeet ? xMeet + 10 : xMeet - 10;
      yDirection = second.$node[0].offsetTop > yMeet ? yMeet + 10 : yMeet - 10;
      second.dance(xDirection, yDirection);
    }
  });


});

