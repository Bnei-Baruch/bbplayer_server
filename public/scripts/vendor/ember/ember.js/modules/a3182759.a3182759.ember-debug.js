(function() {
/*global __fail__*/

/**
Ember Debug

@module ember
@submodule ember-debug
*/

/**
@class Ember
*/

if ('undefined' === typeof Ember) {
  Ember = {};

  if ('undefined' !== typeof window) {
    window.Em = window.Ember = Em = Ember;
  }
}

Ember.ENV = 'undefined' === typeof ENV ? {} : ENV;

if (!('MANDATORY_SETTER' in Ember.ENV)) {
  Ember.ENV.MANDATORY_SETTER = true; // default to true for debug dist
}

/**
  Define an assertion that will throw an exception if the condition is not
  met. Ember build tools will remove any calls to `Ember.assert()` when
  doing a production build. Example:

  ```javascript
  // Test for truthiness
  Ember.assert('Must pass a valid object', obj);
  // Fail unconditionally
  Ember.assert('This code path should never be run')
  ```

  @method assert
  @param {String} desc A description of the assertion. This will become
    the text of the Error thrown if the assertion fails.
  @param {Boolean} test Must be truthy for the assertion to pass. If
    falsy, an exception will be thrown.
*/
Ember.assert = function(desc, test) {
  if (!test) throw new Error("assertion failed: "+desc);
};


/**
  Display a warning with the provided message. Ember build tools will
  remove any calls to `Ember.warn()` when doing a production build.

  @method warn
  @param {String} message A warning to display.
  @param {Boolean} test An optional boolean. If falsy, the warning
    will be displayed.
*/
Ember.warn = function(message, test) {
  if (!test) {
    Ember.Logger.warn("WARNING: "+message);
    if ('trace' in Ember.Logger) Ember.Logger.trace();
  }
};

/**
  Display a deprecation warning with the provided message and a stack trace
  (Chrome and Firefox only). Ember build tools will remove any calls to
  `Ember.deprecate()` when doing a production build.

  @method deprecate
  @param {String} message A description of the deprecation.
  @param {Boolean} test An optional boolean. If falsy, the deprecation
    will be displayed.
*/
Ember.deprecate = function(message, test) {
  if (Ember && Ember.TESTING_DEPRECATION) { return; }

  if (arguments.length === 1) { test = false; }
  if (test) { return; }

  if (Ember && Ember.ENV.RAISE_ON_DEPRECATION) { throw new Error(message); }

  var error;

  // When using new Error, we can't do the arguments check for Chrome. Alternatives are welcome
  try { __fail__.fail(); } catch (e) { error = e; }

  if (Ember.LOG_STACKTRACE_ON_DEPRECATION && error.stack) {
    var stack, stackStr = '';
    if (error['arguments']) {
      // Chrome
      stack = error.stack.replace(/^\s+at\s+/gm, '').
                          replace(/^([^\(]+?)([\n$])/gm, '{anonymous}($1)$2').
                          replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}($1)').split('\n');
      stack.shift();
    } else {
      // Firefox
      stack = error.stack.replace(/(?:\n@:0)?\s+$/m, '').
                          replace(/^\(/gm, '{anonymous}(').split('\n');
    }

    stackStr = "\n    " + stack.slice(2).join("\n    ");
    message = message + stackStr;
  }

  Ember.Logger.warn("DEPRECATION: "+message);
};



/**
  Display a deprecation warning with the provided message and a stack trace
  (Chrome and Firefox only) when the wrapped method is called.

  Ember build tools will not remove calls to `Ember.deprecateFunc()`, though
  no warnings will be shown in production.

  @method deprecateFunc
  @param {String} message A description of the deprecation.
  @param {Function} func The function to be deprecated.
*/
Ember.deprecateFunc = function(message, func) {
  return function() {
    Ember.deprecate(message);
    return func.apply(this, arguments);
  };
};

if ('undefined' !== typeof window) {
  window.ember_assert         = Ember.deprecateFunc("ember_assert is deprecated. Please use Ember.assert instead.",               Ember.assert);
  window.ember_warn           = Ember.deprecateFunc("ember_warn is deprecated. Please use Ember.warn instead.",                   Ember.warn);
  window.ember_deprecate      = Ember.deprecateFunc("ember_deprecate is deprecated. Please use Ember.deprecate instead.",         Ember.deprecate);
  window.ember_deprecateFunc  = Ember.deprecateFunc("ember_deprecateFunc is deprecated. Please use Ember.deprecateFunc instead.", Ember.deprecateFunc);
}

})();

