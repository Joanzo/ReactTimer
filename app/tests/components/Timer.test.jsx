var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', function() {
    it('should exist', function() {
        expect(Timer).toExist();
    });
    describe('handleStatusChange', function() {
        it('should start timer on started status', function(done) {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });

        it('should pause timer on pause status', function(done) {
            var timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.setState({count:10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');
            expect(timer.state.count).toBe(10);

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(10);
                done();
            }, 2001);
        });

        it('should stop timer on stop status', function(done) {
            var timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.setState({count:10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');
            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            }, 1001);
        });
    });
});