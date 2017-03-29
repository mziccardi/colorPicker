const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = require('chai').expect;
const assert = require('chai').assert;
const path = require('path');

const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
const appPath = path.join(__dirname, '..');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});

describe('App starts and has correct title and buttons', function () {
  let app;

  before(function () {
      app = new Application({
        path: electronPath,
        args: [appPath]
      });
      return app.start();
  });

  after(function (done) {
      done();
      return app.stop();
  });


  it.skip('opens a window', function () {
    return app.client.waitUntilWindowLoaded().getWindowCount()
            .should.eventually.equal(1);
  });

  it('should have an open file function', ()=>{
    expect(openFile).to.exist;
  })

  it.skip('tests the title', function () {
    return app.client.waitUntilWindowLoaded().getTitle()
            .should.eventually.equal('');
  });

  it.skip('tests the Open File button text exists', function() {
    return app.client.getText('#open-file')
            .should.eventually.equal('Open File');
  });

  it.skip('tests the Save button text exists', function () {
    return app.client.getText('#save-markdown')
            .should.eventually.equal('Save Markdown');
  });
});
