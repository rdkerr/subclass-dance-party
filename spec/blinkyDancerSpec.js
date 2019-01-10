describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'css');
    blinkyDancer.step();
    expect(blinkyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('constructors', function() {
    it('should inherit all methods from superclass', function() {
      expect(blinkyDancer.dance).to.be.a('function');
      expect(blinkyDancer.step).to.be.a('function');
      expect(blinkyDancer.setPosition).to.be.a('function');
      expect(blinkyDancer.lineUp).to.be.a('function');
    });

    it('should be the constructor of its prototype object', function() {
      expect(makeBlinkyDancer.prototype.constructor).to.be.equal(makeBlinkyDancer);
    });
  });
});
