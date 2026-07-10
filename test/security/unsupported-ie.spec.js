'use strict';

describe('unsupported browser guard', function() {
  it('refuses to initialize in Internet Explorer', function(done) {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    var iframeWindow = iframe.contentWindow;
    Object.defineProperty(iframeWindow.document, 'documentMode', {
      configurable: true,
      value: 11
    });

    iframeWindow.onerror = function(message) {
      expect(message).toContain('Internet Explorer is not supported');
      document.body.removeChild(iframe);
      done();
      return true;
    };

    var script = iframeWindow.document.createElement('script');
    script.onload = function() {
      document.body.removeChild(iframe);
      done.fail('AngularJS initialized in an unsupported Internet Explorer environment');
    };
    script.src = '/base/build/angular.js?unsupported-ie-test';
    iframeWindow.document.head.appendChild(script);
  });
});
