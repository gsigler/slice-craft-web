/* PostHog browser SDK bootstrap. Project tokens are public browser credentials.
 * https://posthog.com/docs/libraries/js
 */
(function () {
  'use strict';

  // Keep local previews out of production analytics, and initialize only once.
  if (!/^(www\.)?slicecraft\.co$/.test(window.location.hostname) || window.posthog) return;

  !function (document, posthog) {
    var script, firstScript, methods, i;
    window.posthog = posthog;
    posthog._i = [];
    posthog.init = function (token, config, name) {
      function stub(target, method) {
        var parts = method.split('.');
        if (parts.length === 2) { target = target[parts[0]]; method = parts[1]; }
        target[method] = function () { target.push([method].concat(Array.prototype.slice.call(arguments, 0))); };
      }
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.crossOrigin = 'anonymous';
      script.async = true;
      script.src = config.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
      firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
      var instance = posthog;
      if (name !== undefined) { instance = posthog[name] = []; } else { name = 'posthog'; }
      instance.people = instance.people || [];
      instance.toString = function (stubOnly) { return name + (stubOnly ? '' : ' (stub)'); };
      instance.people.toString = function () { return instance.toString(1) + '.people (stub)'; };
      methods = 'init capture register register_once unregister identify setPersonProperties reset get_distinct_id get_session_id set_config opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug'.split(' ');
      for (i = 0; i < methods.length; i++) stub(instance, methods[i]);
      posthog._i.push([token, config, name]);
    };
    posthog.__SV = 1;
  }(document, []);

  window.posthog.init('phc_niFcTxXo8QqsRRycZQ6H4nCQMNPRn9646DLvff3QWZk9', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026-08-30',
    capture_pageview: 'history_change',
    capture_pageleave: true,
    autocapture: true,
    person_profiles: 'identified_only',
    disable_session_recording: true
  });

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-analytics="shop"]');
    if (!link) return;
    window.posthog.capture('shop_clicked', {
      location: link.getAttribute('data-location'),
      destination: link.href
    });
  });
}());
