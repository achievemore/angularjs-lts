'use strict';

describe('unsupported browser guard', function() {
  it('refuses to initialize in Internet Explorer', function(done) {
    var iframe = window.document.createElement('iframe');
    window.document.body.appendChild(iframe);

    var iframeWindow = iframe.contentWindow;
    Object.defineProperty(iframeWindow.document, 'documentMode', {
      configurable: true,
      value: 11
    });

    iframeWindow.onerror = function(message) {
      expect(message).toContain('Internet Explorer is not supported');
      window.document.body.removeChild(iframe);
      done();
      return true;
    };

    var script = iframeWindow.document.createElement('script');
    script.onload = function() {
      window.document.body.removeChild(iframe);
      done.fail('AngularJS initialized in an unsupported Internet Explorer environment');
    };
    script.src = '/base/dist/angular.js?unsupported-ie-test';
    iframeWindow.document.head.appendChild(script);
  });
});
