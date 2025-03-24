function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * Check if an object is 'empty'.
 *
 * @param object $o The object to check.o
 * @return bool True if the object is empty.
 */
var isEmpty = function isEmpty(o) {
  return o === null || o === undefined || o === '' || o === 'null' || Array.isArray(o) && o.length === 0 || _typeof(o) === 'object' && o.constructor.name === 'Object' && Object.getOwnPropertyNames(o).length === 0;
};

/**
 * Generate a random UUID.
 *
 * @return string A random UUID.
 */
var uuidv4 = function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (c) {
    return (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16);
  });
};

/**
 * Merge multiple typed arrays into a single typed array.
 * Assumes that all the arrays are of the same type.
 *
 * @param {Array<TypedArray>} arrays - The arrays to merge. Any kind of typed array is allowed.
 * @returns {TypedArray} - The merged typed array.
 */
var mergeTypedArrays = function mergeTypedArrays(arrays) {
  var totalLength = arrays.reduce(function (acc, array) {
    return acc + array.length;
  }, 0);
  var result = new arrays[0].constructor(totalLength);
  var offset = 0;
  arrays.forEach(function (array) {
    result.set(array, offset);
    offset += array.length;
  });
  return result;
};

/** @module NDArray */
/**
 * A class representing a multi-dimensional array.
 * Provides basic operations for manipulating the array,
 * made to mirror numpy's NDArray in feel (but not overall functionality.)
 *
 * @class
 */
var NDArray = /*#__PURE__*/function () {
  /**
   * Create a new NDArray
   *
   * @param {number[]} data - The data of the array
   * @param {number[]} shape - The shape of the array
   * @constructor
   */
  function NDArray(data) {
    var shape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dtype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, NDArray);
    if (data instanceof NDArray) {
      this.data = data.data;
      this.shape = data.shape;
      this.dtype = data.dtype;
    } else if (NDArray.isTypedArray(data)) {
      var currentDataType = NDArray.getDataTypeFromTypedArray(data);
      if (dtype !== null && currentDataType !== dtype) {
        this.data = new (NDArray.getArrayConstructorFromDataType(dtype))(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
        this.dtype = dtype;
      } else {
        this.data = data;
        this.dtype = currentDataType;
      }
      if (shape === null) {
        shape = [data.length];
      }
      this.shape = shape;
    } else if (dtype !== null) {
      this.data = new (NDArray.getArrayConstructorFromDataType(dtype))(data);
      if (shape === null) {
        shape = [data.length];
      }
      this.shape = shape;
      this.dtype = dtype;
    } else if (Array.isArray(data)) {
      // Guess int32
      this.data = new Int32Array(data);
      this.shape = [data.length];
      this.dtype = 'int32';
    } else {
      throw new Error("Invalid data type ".concat(_typeof(data), " (").concat(data.constructor.name, ")"));
    }
  }

  /**
   * Gets a singular item from the array using one or more indexes.
   *
   * @param {number[]} indexes - The indexes to get the value at
   * @returns {number} The value at the given indexes
   * @throws {Error} If the number of indexes is incorrect
   */
  return _createClass(NDArray, [{
    key: "get",
    value: function get() {
      var indexes = Array.from(arguments);
      if (indexes.length !== this.shape.length) {
        throw new Error('Incorrect number of indexes');
      }
      var index = 0;
      for (var i = 0; i < indexes.length; i++) {
        index += indexes[i] * this.strides[i];
      }
      return this.data[index];
    }

    /**
     * Sets a singular item in the array using one or more indexes.
     *
     * @param {number} value - The value to set
     * @param {number[]} indexes - The indexes to set the value at
     * @returns {void}
     * @throws {Error} If the number of indexes is incorrect
     */
  }, {
    key: "set",
    value: function set() {
      var indexes = Array.from(arguments);
      var value = indexes.pop();
      if (indexes.length !== this.shape.length) {
        throw new Error('Incorrect number of indexes');
      }
      var index = 0;
      for (var i = 0; i < indexes.length; i++) {
        index += indexes[i] * this.strides[i];
      }
      this.data[index] = value;
    }

    /**
     * Gets the data packed for sending over the network.
     *
     * @returns {Object} The packed data
     */
  }, {
    key: "packed",
    get: function get() {
      return {
        "type": "ndarray",
        "shape": this.shape,
        "dtype": this.dtype,
        "data": this.data
      };
    }

    /**
     * Gets the data in an ImageData object.
     *
     * @returns {ImageData} The image data
     * @throws {Error} If the array is not 3D
     */
  }, {
    key: "imageData",
    get: function get() {
      if (this.shape.length !== 3) {
        throw new Error('Can only get ImageData from 3D array (height, width, channels)');
      }
      // We need four channel input - check if it's three. If so, interleave with 255
      var _this$shape = _slicedToArray(this.shape, 3),
        height = _this$shape[0],
        width = _this$shape[1],
        channels = _this$shape[2];
      if (channels === 3) {
        var data = new Uint8ClampedArray(width * height * 4);
        for (var i = 0; i < width * height; i++) {
          data[i * 4] = this.data[i * 3];
          data[i * 4 + 1] = this.data[i * 3 + 1];
          data[i * 4 + 2] = this.data[i * 3 + 2];
          data[i * 4 + 3] = 255;
        }
        return new ImageData(data, width, height);
      }
      return new ImageData(new Uint8ClampedArray(this.data.buffer.slice(this.data.byteOffset, this.data.byteOffset + this.data.byteLength)), width, height);
    }

    /**
     * Gets the data type from a typed array
     *
     * @param {TypedArray} typedArray - The typed array to get the data type from
     * @returns {string} The data type of the typed array
     * @throws {Error} If the input is not a typed array
     */
  }, {
    key: "toString",
    value:
    /**
     * Gets a string representation of the array
     *
     * @returns {string} The string representation of the array
     */
    function toString() {
      return "NDArray(".concat(this.data, ", ").concat(this.shape, ", ").concat(this.dtype, ")");
    }
  }], [{
    key: "getDataTypeFromTypedArray",
    value: function getDataTypeFromTypedArray(typedArray) {
      if (NDArray.isTypedArray(typedArray)) {
        return typedArray.constructor.name.replace('Array', '').toLowerCase();
      }
      throw new Error("Not a typed array: ".concat(typedArray.constructor.name));
    }

    /**
     * Gets the constructor for a typed array from a data type
     *
     * @param {string} dataType - The data type to get the constructor for
     * @returns {TypedArray} The constructor for the typed array
     * @throws {Error} If the data type is not recognized
     */
  }, {
    key: "getArrayConstructorFromDataType",
    value: function getArrayConstructorFromDataType(dataType) {
      switch (dataType) {
        case 'float32':
          return Float32Array;
        case 'float64':
          return Float64Array;
        case 'int8':
          return Int8Array;
        case 'int16':
          return Int16Array;
        case 'int32':
          return Int32Array;
        case 'uint8':
          return Uint8Array;
        case 'uint16':
          return Uint16Array;
        case 'uint32':
          return Uint32Array;
        default:
          throw new Error("Unknown data type: ".concat(dataType));
      }
    }

    /**
     * Checks if an object is a typed array
     *
     * @param {Object} obj - The object to check
     * @returns {boolean} Whether the object is a typed array
     */
  }, {
    key: "isTypedArray",
    value: function isTypedArray(obj) {
      return obj instanceof Float32Array || obj instanceof Float64Array || obj instanceof Int8Array || obj instanceof Int16Array || obj instanceof Int32Array || obj instanceof Uint8Array || obj instanceof Uint16Array || obj instanceof Uint32Array;
    }
  }]);
}();

function utf8Count(str) {
    const strLength = str.length;
    let byteLength = 0;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                byteLength += 3;
            }
            else {
                // 4-byte
                byteLength += 4;
            }
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    const strLength = str.length;
    let offset = outputOffset;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = ((value >> 6) & 0x1f) | 0xc0;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = ((value >> 12) & 0x0f) | 0xe0;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else {
                // 4-byte
                output[offset++] = ((value >> 18) & 0x07) | 0xf0;
                output[offset++] = ((value >> 12) & 0x3f) | 0x80;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
        }
        output[offset++] = (value & 0x3f) | 0x80;
    }
}
// TextEncoder and TextDecoder are standardized in whatwg encoding:
// https://encoding.spec.whatwg.org/
// and available in all the modern browsers:
// https://caniuse.com/textencoder
// They are available in Node.js since v12 LTS as well:
// https://nodejs.org/api/globals.html#textencoder
const sharedTextEncoder = new TextEncoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/encode-string.ts` for details.
const TEXT_ENCODER_THRESHOLD = 50;
function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
        utf8EncodeTE(str, output, outputOffset);
    }
    else {
        utf8EncodeJs(str, output, outputOffset);
    }
}
const CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    let offset = inputOffset;
    const end = offset + byteLength;
    const units = [];
    let result = "";
    while (offset < end) {
        const byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
        }
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            const byte2 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 6) | byte2);
        }
        else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
        }
        else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            const byte4 = bytes[offset++] & 0x3f;
            let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(((unit >>> 10) & 0x3ff) | 0xd800);
                unit = 0xdc00 | (unit & 0x3ff);
            }
            units.push(unit);
        }
        else {
            units.push(byte1);
        }
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode(...units);
            units.length = 0;
        }
    }
    if (units.length > 0) {
        result += String.fromCharCode(...units);
    }
    return result;
}
const sharedTextDecoder = new TextDecoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/decode-string.ts` for details.
const TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
    if (byteLength > TEXT_DECODER_THRESHOLD) {
        return utf8DecodeTD(bytes, inputOffset, byteLength);
    }
    else {
        return utf8DecodeJs(bytes, inputOffset, byteLength);
    }
}

/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */
class ExtData {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}

class DecodeError extends Error {
    constructor(message) {
        super(message);
        // fix the prototype chain in a cross-platform way
        const proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(this, proto);
        Object.defineProperty(this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name,
        });
    }
}

// Integer Utility
const UINT32_MAX = 4294967295;
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
function setUint64(view, offset, value) {
    const high = value / 4294967296;
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    const high = Math.floor(value / 4294967296);
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    const high = view.getInt32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    const high = view.getUint32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}

// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
const EXT_TIMESTAMP = -1;
const TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
const TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int
function encodeTimeSpecToTimestamp({ sec, nsec }) {
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            const rv = new Uint8Array(4);
            const view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        }
        else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            const secHigh = sec / 0x100000000;
            const secLow = sec & 0xffffffff;
            const rv = new Uint8Array(8);
            const view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, (nsec << 2) | (secHigh & 0x3));
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    }
    else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        const rv = new Uint8Array(12);
        const view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        setInt64(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    const msec = date.getTime();
    const sec = Math.floor(msec / 1e3);
    const nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    const nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9,
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        const timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    }
    else {
        return null;
    }
}
function decodeTimestampToTimeSpec(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch (data.byteLength) {
        case 4: {
            // timestamp 32 = { sec32 }
            const sec = view.getUint32(0);
            const nsec = 0;
            return { sec, nsec };
        }
        case 8: {
            // timestamp 64 = { nsec30, sec34 }
            const nsec30AndSecHigh2 = view.getUint32(0);
            const secLow32 = view.getUint32(4);
            const sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
            const nsec = nsec30AndSecHigh2 >>> 2;
            return { sec, nsec };
        }
        case 12: {
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            const sec = getInt64(view, 4);
            const nsec = view.getUint32(0);
            return { sec, nsec };
        }
        default:
            throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
    }
}
function decodeTimestampExtension(data) {
    const timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
const timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension,
};

// ExtensionCodec to handle MessagePack extensions
class ExtensionCodec {
    constructor() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(timestampExtension);
    }
    register({ type, encode, decode, }) {
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        }
        else {
            // built-in extensions
            const index = -1 - type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    }
    tryToEncode(object, context) {
        // built-in extensions
        for (let i = 0; i < this.builtInEncoders.length; i++) {
            const encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = -1 - i;
                    return new ExtData(type, data);
                }
            }
        }
        // custom extensions
        for (let i = 0; i < this.encoders.length; i++) {
            const encodeExt = this.encoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = i;
                    return new ExtData(type, data);
                }
            }
        }
        if (object instanceof ExtData) {
            // to keep ExtData as is
            return object;
        }
        return null;
    }
    decode(data, type, context) {
        const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
            return decodeExt(data, type, context);
        }
        else {
            // decode() does not fail, returns ExtData instead.
            return new ExtData(type, data);
        }
    }
}
ExtensionCodec.defaultCodec = new ExtensionCodec();

function isArrayBufferLike(buffer) {
    return (buffer instanceof ArrayBuffer || (typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer));
}
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    }
    else if (ArrayBuffer.isView(buffer)) {
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    else if (isArrayBufferLike(buffer)) {
        return new Uint8Array(buffer);
    }
    else {
        // ArrayLike<number>
        return Uint8Array.from(buffer);
    }
}

const DEFAULT_MAX_DEPTH = 100;
const DEFAULT_INITIAL_BUFFER_SIZE = 2048;
class Encoder$1 {
    constructor(options) {
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.maxDepth = options?.maxDepth ?? DEFAULT_MAX_DEPTH;
        this.initialBufferSize = options?.initialBufferSize ?? DEFAULT_INITIAL_BUFFER_SIZE;
        this.sortKeys = options?.sortKeys ?? false;
        this.forceFloat32 = options?.forceFloat32 ?? false;
        this.ignoreUndefined = options?.ignoreUndefined ?? false;
        this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
        // Because of slightly special argument `context`,
        // type assertion is needed.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Encoder$1({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            maxDepth: this.maxDepth,
            initialBufferSize: this.initialBufferSize,
            sortKeys: this.sortKeys,
            forceFloat32: this.forceFloat32,
            ignoreUndefined: this.ignoreUndefined,
            forceIntegerToFloat: this.forceIntegerToFloat,
        });
    }
    reinitializeState() {
        this.pos = 0;
    }
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */
    encodeSharedRef(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encodeSharedRef(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.subarray(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */
    encode(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encode(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.slice(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    doEncode(object, depth) {
        if (depth > this.maxDepth) {
            throw new Error(`Too deep objects in depth ${depth}`);
        }
        if (object == null) {
            this.encodeNil();
        }
        else if (typeof object === "boolean") {
            this.encodeBoolean(object);
        }
        else if (typeof object === "number") {
            if (!this.forceIntegerToFloat) {
                this.encodeNumber(object);
            }
            else {
                this.encodeNumberAsFloat(object);
            }
        }
        else if (typeof object === "string") {
            this.encodeString(object);
        }
        else if (this.useBigInt64 && typeof object === "bigint") {
            this.encodeBigInt64(object);
        }
        else {
            this.encodeObject(object, depth);
        }
    }
    ensureBufferSizeToWrite(sizeToWrite) {
        const requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
        }
    }
    resizeBuffer(newSize) {
        const newBuffer = new ArrayBuffer(newSize);
        const newBytes = new Uint8Array(newBuffer);
        const newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    }
    encodeNil() {
        this.writeU8(0xc0);
    }
    encodeBoolean(object) {
        if (object === false) {
            this.writeU8(0xc2);
        }
        else {
            this.writeU8(0xc3);
        }
    }
    encodeNumber(object) {
        if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
            if (object >= 0) {
                if (object < 0x80) {
                    // positive fixint
                    this.writeU8(object);
                }
                else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                }
                else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                }
                else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                }
                else if (!this.useBigInt64) {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
            else {
                if (object >= -0x20) {
                    // negative fixint
                    this.writeU8(0xe0 | (object + 0x20));
                }
                else if (object >= -0x80) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                }
                else if (object >= -0x8000) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                }
                else if (object >= -0x80000000) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                }
                else if (!this.useBigInt64) {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
        }
        else {
            this.encodeNumberAsFloat(object);
        }
    }
    encodeNumberAsFloat(object) {
        if (this.forceFloat32) {
            // float 32
            this.writeU8(0xca);
            this.writeF32(object);
        }
        else {
            // float 64
            this.writeU8(0xcb);
            this.writeF64(object);
        }
    }
    encodeBigInt64(object) {
        if (object >= BigInt(0)) {
            // uint 64
            this.writeU8(0xcf);
            this.writeBigUint64(object);
        }
        else {
            // int 64
            this.writeU8(0xd3);
            this.writeBigInt64(object);
        }
    }
    writeStringHeader(byteLength) {
        if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
        }
        else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        }
        else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        }
        else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        }
        else {
            throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
        }
    }
    encodeString(object) {
        const maxHeaderSize = 1 + 4;
        const byteLength = utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        utf8Encode(object, this.bytes, this.pos);
        this.pos += byteLength;
    }
    encodeObject(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        const ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
            this.encodeExtension(ext);
        }
        else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
        }
        else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
        }
        else if (typeof object === "object") {
            this.encodeMap(object, depth);
        }
        else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
        }
    }
    encodeBinary(object) {
        const size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large binary: ${size}`);
        }
        const bytes = ensureUint8Array(object);
        this.writeU8a(bytes);
    }
    encodeArray(object, depth) {
        const size = object.length;
        if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
        }
        else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large array: ${size}`);
        }
        for (const item of object) {
            this.doEncode(item, depth + 1);
        }
    }
    countWithoutUndefined(object, keys) {
        let count = 0;
        for (const key of keys) {
            if (object[key] !== undefined) {
                count++;
            }
        }
        return count;
    }
    encodeMap(object, depth) {
        const keys = Object.keys(object);
        if (this.sortKeys) {
            keys.sort();
        }
        const size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
        }
        else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large map object: ${size}`);
        }
        for (const key of keys) {
            const value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    }
    encodeExtension(ext) {
        if (typeof ext.data === "function") {
            const data = ext.data(this.pos + 6);
            const size = data.length;
            if (size >= 0x100000000) {
                throw new Error(`Too large extension object: ${size}`);
            }
            this.writeU8(0xc9);
            this.writeU32(size);
            this.writeI8(ext.type);
            this.writeU8a(data);
            return;
        }
        const size = ext.data.length;
        if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
        }
        else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
        }
        else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
        }
        else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
        }
        else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
        }
        else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large extension object: ${size}`);
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    }
    writeU8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    }
    writeU8a(values) {
        const size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    }
    writeI8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    }
    writeU16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    }
    writeI16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    }
    writeU32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    }
    writeI32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    }
    writeF32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    }
    writeF64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    }
    writeU64(value) {
        this.ensureBufferSizeToWrite(8);
        setUint64(this.view, this.pos, value);
        this.pos += 8;
    }
    writeI64(value) {
        this.ensureBufferSizeToWrite(8);
        setInt64(this.view, this.pos, value);
        this.pos += 8;
    }
    writeBigUint64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigUint64(this.pos, value);
        this.pos += 8;
    }
    writeBigInt64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigInt64(this.pos, value);
        this.pos += 8;
    }
}

/**
 * It encodes `value` in the MessagePack format and
 * returns a byte buffer.
 *
 * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
 */
function encode(value, options) {
    const encoder = new Encoder$1(options);
    return encoder.encodeSharedRef(value);
}

function prettyByte(byte) {
    return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}

const DEFAULT_MAX_KEY_LENGTH = 16;
const DEFAULT_MAX_LENGTH_PER_KEY = 16;
class CachedKeyDecoder {
    constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
        this.hit = 0;
        this.miss = 0;
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for (let i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
        }
    }
    canBeCached(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    }
    find(bytes, inputOffset, byteLength) {
        const records = this.caches[byteLength - 1];
        FIND_CHUNK: for (const record of records) {
            const recordBytes = record.bytes;
            for (let j = 0; j < byteLength; j++) {
                if (recordBytes[j] !== bytes[inputOffset + j]) {
                    continue FIND_CHUNK;
                }
            }
            return record.str;
        }
        return null;
    }
    store(bytes, value) {
        const records = this.caches[bytes.length - 1];
        const record = { bytes, str: value };
        if (records.length >= this.maxLengthPerKey) {
            // `records` are full!
            // Set `record` to an arbitrary position.
            records[(Math.random() * records.length) | 0] = record;
        }
        else {
            records.push(record);
        }
    }
    decode(bytes, inputOffset, byteLength) {
        const cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        const str = utf8DecodeJs(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the bytes may be a NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    }
}

const STATE_ARRAY = "array";
const STATE_MAP_KEY = "map_key";
const STATE_MAP_VALUE = "map_value";
const mapKeyConverter = (key) => {
    if (typeof key === "string" || typeof key === "number") {
        return key;
    }
    throw new DecodeError("The type of key must be string or number but " + typeof key);
};
class StackPool {
    constructor() {
        this.stack = [];
        this.stackHeadPosition = -1;
    }
    get length() {
        return this.stackHeadPosition + 1;
    }
    top() {
        return this.stack[this.stackHeadPosition];
    }
    pushArrayState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_ARRAY;
        state.position = 0;
        state.size = size;
        state.array = new Array(size);
    }
    pushMapState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_MAP_KEY;
        state.readCount = 0;
        state.size = size;
        state.map = {};
    }
    getUninitializedStateFromPool() {
        this.stackHeadPosition++;
        if (this.stackHeadPosition === this.stack.length) {
            const partialState = {
                type: undefined,
                size: 0,
                array: undefined,
                position: 0,
                readCount: 0,
                map: undefined,
                key: null,
            };
            this.stack.push(partialState);
        }
        return this.stack[this.stackHeadPosition];
    }
    release(state) {
        const topStackState = this.stack[this.stackHeadPosition];
        if (topStackState !== state) {
            throw new Error("Invalid stack state. Released state is not on top of the stack.");
        }
        if (state.type === STATE_ARRAY) {
            const partialState = state;
            partialState.size = 0;
            partialState.array = undefined;
            partialState.position = 0;
            partialState.type = undefined;
        }
        if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
            const partialState = state;
            partialState.size = 0;
            partialState.map = undefined;
            partialState.readCount = 0;
            partialState.type = undefined;
        }
        this.stackHeadPosition--;
    }
    reset() {
        this.stack.length = 0;
        this.stackHeadPosition = -1;
    }
}
const HEAD_BYTE_REQUIRED = -1;
const EMPTY_VIEW = new DataView(new ArrayBuffer(0));
const EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
    // IE11: The spec says it should throw RangeError,
    // IE11: but in IE11 it throws TypeError.
    EMPTY_VIEW.getInt8(0);
}
catch (e) {
    if (!(e instanceof RangeError)) {
        throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
}
const MORE_DATA = new RangeError("Insufficient data");
const sharedCachedKeyDecoder = new CachedKeyDecoder();
class Decoder {
    constructor(options) {
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = new StackPool();
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.rawStrings = options?.rawStrings ?? false;
        this.maxStrLength = options?.maxStrLength ?? UINT32_MAX;
        this.maxBinLength = options?.maxBinLength ?? UINT32_MAX;
        this.maxArrayLength = options?.maxArrayLength ?? UINT32_MAX;
        this.maxMapLength = options?.maxMapLength ?? UINT32_MAX;
        this.maxExtLength = options?.maxExtLength ?? UINT32_MAX;
        this.keyDecoder = options?.keyDecoder !== undefined ? options.keyDecoder : sharedCachedKeyDecoder;
        this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
    }
    clone() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Decoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            rawStrings: this.rawStrings,
            maxStrLength: this.maxStrLength,
            maxBinLength: this.maxBinLength,
            maxArrayLength: this.maxArrayLength,
            maxMapLength: this.maxMapLength,
            maxExtLength: this.maxExtLength,
            keyDecoder: this.keyDecoder,
        });
    }
    reinitializeState() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.reset();
        // view, bytes, and pos will be re-initialized in setBuffer()
    }
    setBuffer(buffer) {
        const bytes = ensureUint8Array(buffer);
        this.bytes = bytes;
        this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        this.pos = 0;
    }
    appendBuffer(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
        }
        else {
            const remainingData = this.bytes.subarray(this.pos);
            const newData = ensureUint8Array(buffer);
            // concat remainingData + newData
            const newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    }
    hasRemaining(size) {
        return this.view.byteLength - this.pos >= size;
    }
    createExtraByteError(posToShow) {
        const { view, pos } = this;
        return new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
    }
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */
    decode(buffer) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decode(buffer);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            const object = this.doDecodeSync();
            if (this.hasRemaining(1)) {
                throw this.createExtraByteError(this.pos);
            }
            return object;
        }
        finally {
            this.entered = false;
        }
    }
    *decodeMulti(buffer) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMulti(buffer);
            return;
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            while (this.hasRemaining(1)) {
                yield this.doDecodeSync();
            }
        }
        finally {
            this.entered = false;
        }
    }
    async decodeAsync(stream) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decodeAsync(stream);
        }
        try {
            this.entered = true;
            let decoded = false;
            let object;
            for await (const buffer of stream) {
                if (decoded) {
                    this.entered = false;
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                try {
                    object = this.doDecodeSync();
                    decoded = true;
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
            if (decoded) {
                if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                }
                return object;
            }
            const { headByte, pos, totalPos } = this;
            throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
        }
        finally {
            this.entered = false;
        }
    }
    decodeArrayStream(stream) {
        return this.decodeMultiAsync(stream, true);
    }
    decodeStream(stream) {
        return this.decodeMultiAsync(stream, false);
    }
    async *decodeMultiAsync(stream, isArray) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMultiAsync(stream, isArray);
            return;
        }
        try {
            this.entered = true;
            let isArrayHeaderRequired = isArray;
            let arrayItemsLeft = -1;
            for await (const buffer of stream) {
                if (isArray && arrayItemsLeft === 0) {
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                if (isArrayHeaderRequired) {
                    arrayItemsLeft = this.readArraySize();
                    isArrayHeaderRequired = false;
                    this.complete();
                }
                try {
                    while (true) {
                        yield this.doDecodeSync();
                        if (--arrayItemsLeft === 0) {
                            break;
                        }
                    }
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
        }
        finally {
            this.entered = false;
        }
    }
    doDecodeSync() {
        DECODE: while (true) {
            const headByte = this.readHeadByte();
            let object;
            if (headByte >= 0xe0) {
                // negative fixint (111x xxxx) 0xe0 - 0xff
                object = headByte - 0x100;
            }
            else if (headByte < 0xc0) {
                if (headByte < 0x80) {
                    // positive fixint (0xxx xxxx) 0x00 - 0x7f
                    object = headByte;
                }
                else if (headByte < 0x90) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    const size = headByte - 0x80;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = {};
                    }
                }
                else if (headByte < 0xa0) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    const size = headByte - 0x90;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = [];
                    }
                }
                else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    const byteLength = headByte - 0xa0;
                    object = this.decodeString(byteLength, 0);
                }
            }
            else if (headByte === 0xc0) {
                // nil
                object = null;
            }
            else if (headByte === 0xc2) {
                // false
                object = false;
            }
            else if (headByte === 0xc3) {
                // true
                object = true;
            }
            else if (headByte === 0xca) {
                // float 32
                object = this.readF32();
            }
            else if (headByte === 0xcb) {
                // float 64
                object = this.readF64();
            }
            else if (headByte === 0xcc) {
                // uint 8
                object = this.readU8();
            }
            else if (headByte === 0xcd) {
                // uint 16
                object = this.readU16();
            }
            else if (headByte === 0xce) {
                // uint 32
                object = this.readU32();
            }
            else if (headByte === 0xcf) {
                // uint 64
                if (this.useBigInt64) {
                    object = this.readU64AsBigInt();
                }
                else {
                    object = this.readU64();
                }
            }
            else if (headByte === 0xd0) {
                // int 8
                object = this.readI8();
            }
            else if (headByte === 0xd1) {
                // int 16
                object = this.readI16();
            }
            else if (headByte === 0xd2) {
                // int 32
                object = this.readI32();
            }
            else if (headByte === 0xd3) {
                // int 64
                if (this.useBigInt64) {
                    object = this.readI64AsBigInt();
                }
                else {
                    object = this.readI64();
                }
            }
            else if (headByte === 0xd9) {
                // str 8
                const byteLength = this.lookU8();
                object = this.decodeString(byteLength, 1);
            }
            else if (headByte === 0xda) {
                // str 16
                const byteLength = this.lookU16();
                object = this.decodeString(byteLength, 2);
            }
            else if (headByte === 0xdb) {
                // str 32
                const byteLength = this.lookU32();
                object = this.decodeString(byteLength, 4);
            }
            else if (headByte === 0xdc) {
                // array 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xdd) {
                // array 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xde) {
                // map 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xdf) {
                // map 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xc4) {
                // bin 8
                const size = this.lookU8();
                object = this.decodeBinary(size, 1);
            }
            else if (headByte === 0xc5) {
                // bin 16
                const size = this.lookU16();
                object = this.decodeBinary(size, 2);
            }
            else if (headByte === 0xc6) {
                // bin 32
                const size = this.lookU32();
                object = this.decodeBinary(size, 4);
            }
            else if (headByte === 0xd4) {
                // fixext 1
                object = this.decodeExtension(1, 0);
            }
            else if (headByte === 0xd5) {
                // fixext 2
                object = this.decodeExtension(2, 0);
            }
            else if (headByte === 0xd6) {
                // fixext 4
                object = this.decodeExtension(4, 0);
            }
            else if (headByte === 0xd7) {
                // fixext 8
                object = this.decodeExtension(8, 0);
            }
            else if (headByte === 0xd8) {
                // fixext 16
                object = this.decodeExtension(16, 0);
            }
            else if (headByte === 0xc7) {
                // ext 8
                const size = this.lookU8();
                object = this.decodeExtension(size, 1);
            }
            else if (headByte === 0xc8) {
                // ext 16
                const size = this.lookU16();
                object = this.decodeExtension(size, 2);
            }
            else if (headByte === 0xc9) {
                // ext 32
                const size = this.lookU32();
                object = this.decodeExtension(size, 4);
            }
            else {
                throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
            }
            this.complete();
            const stack = this.stack;
            while (stack.length > 0) {
                // arrays and maps
                const state = stack.top();
                if (state.type === STATE_ARRAY) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        object = state.array;
                        stack.release(state);
                    }
                    else {
                        continue DECODE;
                    }
                }
                else if (state.type === STATE_MAP_KEY) {
                    if (object === "__proto__") {
                        throw new DecodeError("The key __proto__ is not allowed");
                    }
                    state.key = this.mapKeyConverter(object);
                    state.type = STATE_MAP_VALUE;
                    continue DECODE;
                }
                else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        object = state.map;
                        stack.release(state);
                    }
                    else {
                        state.key = null;
                        state.type = STATE_MAP_KEY;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    }
    readHeadByte() {
        if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
            // console.log("headByte", prettyByte(this.headByte));
        }
        return this.headByte;
    }
    complete() {
        this.headByte = HEAD_BYTE_REQUIRED;
    }
    readArraySize() {
        const headByte = this.readHeadByte();
        switch (headByte) {
            case 0xdc:
                return this.readU16();
            case 0xdd:
                return this.readU32();
            default: {
                if (headByte < 0xa0) {
                    return headByte - 0x90;
                }
                else {
                    throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
                }
            }
        }
    }
    pushMapState(size) {
        if (size > this.maxMapLength) {
            throw new DecodeError(`Max length exceeded: map length (${size}) > maxMapLengthLength (${this.maxMapLength})`);
        }
        this.stack.pushMapState(size);
    }
    pushArrayState(size) {
        if (size > this.maxArrayLength) {
            throw new DecodeError(`Max length exceeded: array length (${size}) > maxArrayLength (${this.maxArrayLength})`);
        }
        this.stack.pushArrayState(size);
    }
    decodeString(byteLength, headerOffset) {
        if (!this.rawStrings || this.stateIsMapKey()) {
            return this.decodeUtf8String(byteLength, headerOffset);
        }
        return this.decodeBinary(byteLength, headerOffset);
    }
    /**
     * @throws {@link RangeError}
     */
    decodeUtf8String(byteLength, headerOffset) {
        if (byteLength > this.maxStrLength) {
            throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
        }
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
        }
        const offset = this.pos + headerOffset;
        let object;
        if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        }
        else {
            object = utf8Decode(this.bytes, offset, byteLength);
        }
        this.pos += headerOffset + byteLength;
        return object;
    }
    stateIsMapKey() {
        if (this.stack.length > 0) {
            const state = this.stack.top();
            return state.type === STATE_MAP_KEY;
        }
        return false;
    }
    /**
     * @throws {@link RangeError}
     */
    decodeBinary(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) {
            throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
        }
        if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
        }
        const offset = this.pos + headOffset;
        const object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    }
    decodeExtension(size, headOffset) {
        if (size > this.maxExtLength) {
            throw new DecodeError(`Max length exceeded: ext length (${size}) > maxExtLength (${this.maxExtLength})`);
        }
        const extType = this.view.getInt8(this.pos + headOffset);
        const data = this.decodeBinary(size, headOffset + 1 /* extType */);
        return this.extensionCodec.decode(data, extType, this.context);
    }
    lookU8() {
        return this.view.getUint8(this.pos);
    }
    lookU16() {
        return this.view.getUint16(this.pos);
    }
    lookU32() {
        return this.view.getUint32(this.pos);
    }
    readU8() {
        const value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    }
    readI8() {
        const value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    }
    readU16() {
        const value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    }
    readI16() {
        const value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    }
    readU32() {
        const value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    }
    readI32() {
        const value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    }
    readU64() {
        const value = getUint64(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readI64() {
        const value = getInt64(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readU64AsBigInt() {
        const value = this.view.getBigUint64(this.pos);
        this.pos += 8;
        return value;
    }
    readI64AsBigInt() {
        const value = this.view.getBigInt64(this.pos);
        this.pos += 8;
        return value;
    }
    readF32() {
        const value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    }
    readF64() {
        const value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    }
}

/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync}, {@link decodeStream}, or {@link decodeArrayStream}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */
function decode(buffer, options) {
    const decoder = new Decoder(options);
    return decoder.decode(buffer);
}

/**
 * Gets the python type name for a given javascript type.
 *
 * @param {string} type - The javascript type.
 * @returns {string} The python type name.
 */
function getPythonTypeForJavascriptType(type) {
  switch (type) {
    case "Number":
      return "int";
    case "Boolean":
      return "bool";
    case "String":
      return "str";
    case "Array":
      return "list";
    case "Object":
      return "dict";
    case "ArrayBuffer":
    case "Blob":
      return "bytes";
    case "t":
      // This occurs after minification; we only have one
      // constructor that should ever come through here
      // that we care about so we default to it.
      return "ndarray";
    default:
      return type;
  }
}

/**
 * Gets the data from a blob.
 * @param {Blob} blob - The blob to get the data from.
 * @returns {Promise<Uint8Array>} The data from the blob.
 */
function getDataFromBlob(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(new Uint8Array(reader.result));
      reader.close();
    };
    reader.onerror = function () {
      reject(reader.error);
      reader.close();
    };
    reader.readAsArrayBuffer(blob);
  });
}

/**
 * Gets the type of an image.
 * @param {Image} image - The image to get the type of.
 * @returns {string} The type of the image.
 */
function getTypeFromImage(image) {
  var imageSource = image.src;
  if (imageSource) {
    if (imageSource.startsWith("data")) {
      return imageSource.split(";")[0].split(":")[1];
    } else if (imageSource.endsWith(".png")) {
      return "image/png";
    } else if (imageSource.endsWith(".jpg") || imageSource.endsWith(".jpeg")) {
      return "image/jpeg";
    } else if (imageSource.endsWith(".gif")) {
      return "image/gif";
    } else if (imageSource.endsWith(".bmp")) {
      return "image/bmp";
    } else {
      return "image/png";
    }
  }
}

/**
 * Packs a blob into an object.
 * @param {Blob} blob - The blob to pack.
 * @param {string} dataType - The type of the blob.
 * @returns {Object} The packed object.
 */
function packBlob(_x) {
  return _packBlob.apply(this, arguments);
}
/**
 * Packs an image into an object.
 * @param {Image} image - The image to pack.
 * @returns {Object} The packed object.
 */
function _packBlob() {
  _packBlob = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(blob) {
    var blobData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 3;
          return getDataFromBlob(blob);
        case 3:
          blobData = _context5.sent;
          return _context5.abrupt("return", {
            "type": "bytes",
            "data": blobData,
            "dtype": blob.type
          });
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _packBlob.apply(this, arguments);
}
function packImage(image) {
  return new Promise(function (resolve, reject) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imageType = getTypeFromImage(image);
    canvas.width = datum.width;
    canvas.height = datum.height;
    ctx.drawImage(datum, 0, 0);
    canvas.toBlob(function (blob) {
      packBlob(blob, imageType).then(resolve)["catch"](reject);
    }, imageType);
  });
}

/**
 * A class for encoding and decoding data.
 *
 * @class
 */
var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
  }
  return _createClass(Encoder, null, [{
    key: "pack",
    value: (
    /**
     * Packs data of a supported type into an object.
     * Matches the schema of the python client, so it uses some python typenames.
     *
     * @param {any} data - The data to pack.
     * @returns {Object} The packed object.
     */
    function () {
      var _pack = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(datum) {
        var utf8encoder, keys, promises, key, values, props, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(datum === null || datum === undefined)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", {
                "type": "null"
              });
            case 4:
              if (!(datum instanceof ArrayBuffer)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", {
                "type": "bytes",
                "data": new Uint8Array(datum)
              });
            case 8:
              if (!(datum instanceof Blob)) {
                _context.next = 14;
                break;
              }
              _context.next = 11;
              return packBlob(datum);
            case 11:
              return _context.abrupt("return", _context.sent);
            case 14:
              if (!(datum instanceof NDArray)) {
                _context.next = 18;
                break;
              }
              return _context.abrupt("return", datum.packed);
            case 18:
              if (!NDArray.isTypedArray(datum)) {
                _context.next = 22;
                break;
              }
              return _context.abrupt("return", new NDArray(datum).packed);
            case 22:
              if (!(typeof Image !== "undefined" && datum instanceof Image)) {
                _context.next = 28;
                break;
              }
              _context.next = 25;
              return packImage(datum);
            case 25:
              return _context.abrupt("return", _context.sent);
            case 28:
              if (!(typeof datum === "function")) {
                _context.next = 32;
                break;
              }
              return _context.abrupt("return", {
                "type": "type",
                "dtype": getPythonTypeForJavascriptType(datum.name)
              });
            case 32:
              if (!(typeof datum === "number")) {
                _context.next = 36;
                break;
              }
              return _context.abrupt("return", {
                "type": datum % 1 === 0 ? "int" : "float",
                "data": datum
              });
            case 36:
              if (!(typeof datum === "boolean")) {
                _context.next = 40;
                break;
              }
              return _context.abrupt("return", {
                "type": "bool",
                "data": datum
              });
            case 40:
              if (!(typeof datum === "string")) {
                _context.next = 45;
                break;
              }
              utf8encoder = new TextEncoder("utf-8");
              return _context.abrupt("return", {
                "type": "str",
                "data": utf8encoder.encode(datum)
              });
            case 45:
              if (!Array.isArray(datum)) {
                _context.next = 52;
                break;
              }
              _context.next = 48;
              return Promise.all(datum.map(Encoder.pack));
            case 48:
              _context.t0 = _context.sent;
              return _context.abrupt("return", {
                "type": "list",
                "items": _context.t0
              });
            case 52:
              if (!(_typeof(datum) === "object")) {
                _context.next = 64;
                break;
              }
              keys = Object.keys(datum);
              promises = [];
              for (key in datum) {
                promises.push(Encoder.pack(datum[key]));
              }
              _context.next = 58;
              return Promise.all(promises);
            case 58:
              values = _context.sent;
              props = {};
              for (i = 0; i < keys.length; i++) {
                props[keys[i]] = values[i];
              }
              return _context.abrupt("return", {
                "type": "dict",
                "props": props
              });
            case 64:
              throw new Error('Unsupported datum type: ${typeof datum} (${datum.constructor.name})');
            case 65:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function pack(_x2) {
        return _pack.apply(this, arguments);
      }
      return pack;
    }()
    /**
     * Unpack the packed data into the appropriate object.
     * Matches the schema of the python client.
     *
     * @param {Object} packed - The packed object to deserialize.
     * @returns {any} The deserialized data.
     * @throws {Error} If the data type is not supported.
     */
    )
  }, {
    key: "unpack",
    value: (function () {
      var _unpack = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(packed) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                switch (packed.type) {
                  case "null":
                    return resolve(null);
                  case "int":
                  case "float":
                  case "bool":
                    return resolve(packed.data);
                  case "bytes":
                    return resolve(packed.data.buffer);
                  case "str":
                    var utf8decoder = new TextDecoder("utf-8");
                    return resolve(utf8decoder.decode(packed.data));
                  case "list":
                    return Promise.all(packed.items.map(Encoder.unpack)).then(resolve)["catch"](reject);
                  case "dict":
                    var keys = [];
                    var promises = [];
                    for (var key in packed.props) {
                      keys.push(key);
                      promises.push(Encoder.unpack(packed.props[key]));
                    }
                    return Promise.all(promises).then(function (values) {
                      var obj = {};
                      for (var i = 0; i < keys.length; i++) {
                        obj[keys[i]] = values[i];
                      }
                      resolve(obj);
                    })["catch"](reject);
                  case "ndarray":
                  case "tensor":
                    return resolve(new NDArray(packed.data, packed.shape, packed.dtype));
                  case "image":
                    if (typeof Image === "undefined") {
                      return reject(new Error("Image is not supported in this environment."));
                    }
                    var imageBlob = new Blob([packed.data], {
                      type: "image/".concat(packed.dtype)
                    });
                    var imageUrl = URL.createObjectURL(imageBlob);
                    var image = new Image();
                    image.addEventListener("load", function () {
                      resolve(image);
                    });
                    image.src = imageUrl;
                    return image;
                  case "audio":
                    var audioBlob = new Blob([packed.data], {
                      type: "audio/".concat(packed.dtype)
                    });
                    var audioUrl = URL.createObjectURL(audioBlob);
                    var audio = new Audio();
                    audio.addEventListener("loadeddata", function () {
                      resolve(audio);
                    });
                    audio.src = audioUrl;
                    return audio;
                  case "exception":
                    var exceptionUtf8Decoder = new TextDecoder("utf-8");
                    var exceptionMessage = exceptionUtf8Decoder.decode(packed.data);
                    return resolve(new Error("".concat(packed.dtype, ": ").concat(exceptionMessage)));
                  default:
                    console.error("Unhandled response type", packed);
                    reject(new Error("Unsupported packed type: ".concat(packed.type)));
                }
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function unpack(_x3) {
        return _unpack.apply(this, arguments);
      }
      return unpack;
    }()
    /**
     * Packs the data, then encodes it into a Uint8Array using MessagePack.
     * Requires the MessagePack library to be available.
     *
     * @param {any} data - The data to serialize.
     * @returns {Uint8Array} The packed and encoded data.
     */
    )
  }, {
    key: "encode",
    value: (function () {
      var _encode2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
        var packed;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Encoder.pack(data);
            case 2:
              packed = _context3.sent;
              return _context3.abrupt("return", encode(packed));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function encode$1(_x4) {
        return _encode2.apply(this, arguments);
      }
      return encode$1;
    }()
    /**
     * Decodes the packed data, then unpacks it.
     * Requires the MessagePack library to be available.
     *
     * @param {Uint8Array} packed - The packed and encoded data to deserialize.
     * @returns {any} The deserialized data.
     */
    )
  }, {
    key: "decode",
    value: (function () {
      var _decode2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(packed) {
        var message;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              message = decode(packed);
              _context4.next = 3;
              return Encoder.unpack(message);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function decode$1(_x5) {
        return _decode2.apply(this, arguments);
      }
      return decode$1;
    }())
  }]);
}();

/** @module mutex */
/**
 * A mutex (mutual exclusion) lock.
 *
 * @class
 */
var MutexLock = /*#__PURE__*/function () {
  /**
   * Creates a new MutexLock.
   *
   * @constructor
   */
  function MutexLock() {
    _classCallCheck(this, MutexLock);
    this.holder = Promise.resolve();
  }

  /**
   * Acquires the lock.
   *
   * @returns {Promise<Callable>} A promise that resolves when the lock is acquired.
   * Responds with a callable that releases the lock.
   */
  return _createClass(MutexLock, [{
    key: "acquire",
    value: function acquire() {
      var awaitResolve,
        temporaryPromise = new Promise(function (resolve) {
          awaitResolve = function awaitResolve() {
            return resolve();
          };
        }),
        returnValue = this.holder.then(function () {
          return awaitResolve;
        });
      this.holder = temporaryPromise;
      return returnValue;
    }
  }]);
}();

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(chunkArray);

/**
 * Split a typed array into multiple typed arrays of a fixed size.
 *
 * @param {TypedArray} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array<TypedArray>} - An array of typed arrays.
 */
function chunkArray(array, size) {
  var i;
  return _regeneratorRuntime().wrap(function chunkArray$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        i = 0;
      case 1:
        if (!(i < array.length)) {
          _context.next = 7;
          break;
        }
        _context.next = 4;
        return array.slice(i, i + size);
      case 4:
        i += size;
        _context.next = 1;
        break;
      case 7:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
var maximumMessageSize = 1024 * 1024; // 1 MB

/** 
 * Class representing a client connection to a server using WebSockets.
 *
 * @class
 */
var Client = /*#__PURE__*/function () {
  /**
   * Create a client.
   *
   * @param {string} address - The address of the server to connect to.
   */
  function Client(address) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, Client);
    this.socket = null;
    this.address = address;
    this.lock = new MutexLock();
    this.debug = debug;
    this.messageLength = null;
    this.messageBuffer = [];
    this.messageListeners = [];
    this.errorListeners = [];
  }

  /**
   * @returns {boolean} - Whether the client is websockets or http.
   */
  return _createClass(Client, [{
    key: "isWebsocket",
    get: function get() {
      return this.address.startsWith("ws://") || this.address.startsWith("wss://");
    }

    /**
     * @returns {boolean} - Whether the client is secure or not.
     */
  }, {
    key: "isSecure",
    get: function get() {
      return this.address.startsWith("wss://") || this.address.startsWith("https://") || !this.hasProtocol && window !== undefined && window.location.protocol === "https:";
    }

    /**
     * Determines if an address has a protocol or not.
     */
  }, {
    key: "hasProtocol",
    get: function get() {
      return this.addressHasProtocol(this.address);
    }

    /**
     * Gets the host from the address, when possible, otherwise
     * gets the host from the window location, and when that is not
     * available, returns null.
     */
  }, {
    key: "host",
    get: function get() {
      if (this.hasProtocol) {
        return new URL(this.address).host;
      } else if (window !== undefined && window.location !== undefined) {
        return window.location.host;
      }
      return null;
    }

    /**
     * Get the address of the server.
     * An alias for the 'url' property.
     */
  }, {
    key: "address",
    get: function get() {
      return this.url;
    }

    /**
     * Set the address of the server.
     *
     * @param {string} newAddress - The new address of the server to connect to.
     * If the address is the same as the current address, the function will return early.
     * If the address is different from the current address, the function will close the current
     * connection and open a new connection to the new address. Will NOT wait for that connection to open.
     */,
    set: function set(newAddress) {
      this.url = newAddress;
      if (this.socket && this.socket.url === newAddress) {
        return;
      } else {
        this.close();
      }
    }

    /**
     * A helper to determines if an address has a protocol or not.
     */
  }, {
    key: "addressHasProtocol",
    value: function addressHasProtocol(address) {
      var protocolRegex = /^[a-z]+:\/\//;
      return protocolRegex.test(address);
    }

    /**
     * Get the WebSocket connection once it is open.
     *
     * @returns {Promise<WebSocket>} - A promise that resolves to the WebSocket connection.
     */
  }, {
    key: "getWebsocket",
    value: function getWebsocket() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.lock.acquire().then(function (release) {
          try {
            if (_this.socket !== null && _this.socket !== undefined) {
              if (_this.socket.readyState === WebSocket.OPEN) {
                resolve(_this.socket);
                return;
              } else if (_this.socket.readyState !== WebSocket.CONNECTING) {
                _this.close();
              }
            }
            if (_this.socket === null || _this.socket === undefined) {
              _this.socket = new WebSocket(_this.address);
              _this.socket.binaryType = "arraybuffer";
              _this.socket.addEventListener("open", function () {
                resolve(_this.socket);
              });
              _this.socket.addEventListener("message", /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
                  return _regeneratorRuntime().wrap(function _callee$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this.pushMessageChunk(event.data);
                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              _this.socket.addEventListener("error", function (error) {
                _this.dispatchError(error);
              });
            } else {
              throw new Error("WebSocket connection is in state ".concat(_this.socket.readyState, "."));
            }
          } catch (error) {
            console.error("Error getting WebSocket connection:", error);
            if (_this.socket !== null && _this.socket !== undefined) {
              try {
                _this.socket.close();
              } catch (error) {}
              delete _this.socket;
            }
            _this.dispatchError(error);
            reject(error);
          } finally {
            release();
          }
        });
      });
    }

    /**
     * Close the WebSocket connection to the server if it is open.
     */
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.lock.acquire().then(function (release) {
          _this2.socket.close();
          delete _this2.socket;
          release();
        });
      }
    }

    /**
     * Push a message chunk to the message buffer.
     * If the message buffer is complete, decode the message and dispatch it.
     *
     * @param {ArrayBuffer} chunk - The chunk of the message to push.
     */
  }, {
    key: "pushMessageChunk",
    value: (function () {
      var _pushMessageChunk = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(chunk) {
        var totalSize;
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.messageLength === null && chunk.byteLength >= 4) {
                this.messageLength = new DataView(chunk).getUint32(0);
                chunk = chunk.slice(4);
              }
              this.messageBuffer.push(new Uint8Array(chunk));
              totalSize = this.messageBuffer.reduce(function (acc, chunk) {
                return acc + chunk.byteLength;
              }, 0);
              if (!(this.messageLength !== null && totalSize >= this.messageLength)) {
                _context3.next = 19;
                break;
              }
              if (!(this.messageBuffer.length === 1)) {
                _context3.next = 12;
                break;
              }
              _context3.t0 = this;
              _context3.next = 8;
              return Encoder.decode(this.messageBuffer[0]);
            case 8:
              _context3.t1 = _context3.sent;
              _context3.t0.dispatchMessage.call(_context3.t0, _context3.t1);
              _context3.next = 17;
              break;
            case 12:
              _context3.t2 = this;
              _context3.next = 15;
              return Encoder.decode(mergeTypedArrays(this.messageBuffer));
            case 15:
              _context3.t3 = _context3.sent;
              _context3.t2.dispatchMessage.call(_context3.t2, _context3.t3);
            case 17:
              this.messageLength = null;
              this.messageBuffer = [];
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee2, this);
      }));
      function pushMessageChunk(_x2) {
        return _pushMessageChunk.apply(this, arguments);
      }
      return pushMessageChunk;
    }()
    /**
     * Add a message listener to the client.
     *
     * @param {Function} callback - The callback function to add.
     * The callback function should take a single argument, the decoded message data.
     */
    )
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      this.messageListeners.push(callback);
    }

    /**
     * Add an error listener to the client.
     *
     * @param {Function} callback - The callback function to add.
     * The callback function should take a single argument, the error data.
     */
  }, {
    key: "onError",
    value: function onError(callback) {
      this.errorListeners.push(callback);
    }

    /**
     * Remove a message listener from the client.
     *
     * @param {Function} callback - The callback function to remove.
     * The callback function should be the same function that was added with onMessage.
     */
  }, {
    key: "offMessage",
    value: function offMessage(callback) {
      this.messageListeners = this.messageListeners.filter(function (listener) {
        return listener !== callback;
      });
    }

    /**
     * Remove an error listener from the client.
     *
     * @param {Function} callback - The callback function to remove.
     * The callback function should be the same function that was added with onError.
     */
  }, {
    key: "offError",
    value: function offError(callback) {
      this.errorListeners = this.errorListeners.filter(function (listener) {
        return listener !== callback;
      });
    }

    /**
     * Dispatch a message to all message listeners.
     *
     * @param {Object} data - The message data to dispatch.
     */
  }, {
    key: "dispatchMessage",
    value: function dispatchMessage(data) {
      if (this.debug) {
        console.log("Received message:", data);
      }
      this.messageListeners.forEach(function (listener) {
        return listener(data);
      });
    }

    /**
     * Dispatch an error to all error listeners.
     *
     * @param {Object} error - The error data to dispatch.
     */
  }, {
    key: "dispatchError",
    value: function dispatchError(error) {
      if (this.debug) {
        console.error("Received error:", error);
      }
      this.errorListeners.forEach(function (listener) {
        return listener(error);
      });
    }

    /**
     * Send a message to the server.
     * Pack the message using the Encoder.encode function before sending,
     * and unpack the message using the Encoder.decode function when receiving.
     *
     * @param {Object} message - The message to send to the server.
     * @returns {Promise<Object>} - A promise that resolves the decoded response.
     */
  }, {
    key: "send",
    value: function send(message) {
      var _this3 = this;
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (this.debug) {
        console.log("Sending message:", message, "to", this.address);
      }
      return new Promise(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
          var _yield$Promise$all, _yield$Promise$all2, websocket, encodedMessage, _onMessage, _onError, messageLength, sentMessageLength, _iterator, _step, chunk, _encodedMessage, response, data, decoded, error;
          return _regeneratorRuntime().wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (!_this3.isWebsocket) {
                  _context4.next = 37;
                  break;
                }
                _context4.next = 4;
                return Promise.all([_this3.getWebsocket(), Encoder.encode(message)]);
              case 4:
                _yield$Promise$all = _context4.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                websocket = _yield$Promise$all2[0];
                encodedMessage = _yield$Promise$all2[1];
                if (wait) {
                  _onMessage = function onMessage(data) {
                    resolve(data);
                    _this3.offMessage(_onMessage);
                  };
                  _onError = function onError(error) {
                    reject(error);
                    _this3.offError(_onError);
                  };
                  _this3.onMessage(_onMessage);
                  _this3.onError(_onError);
                }
                messageLength = new Uint8Array(new ArrayBuffer(4)), sentMessageLength = false;
                new DataView(messageLength.buffer).setUint32(0, encodedMessage.length);
                _iterator = _createForOfIteratorHelper(chunkArray(encodedMessage, maximumMessageSize));
                _context4.prev = 12;
                _iterator.s();
              case 14:
                if ((_step = _iterator.n()).done) {
                  _context4.next = 26;
                  break;
                }
                chunk = _step.value;
                if (sentMessageLength) {
                  _context4.next = 22;
                  break;
                }
                _context4.next = 19;
                return websocket.send(mergeTypedArrays([messageLength, chunk]));
              case 19:
                sentMessageLength = true;
                _context4.next = 24;
                break;
              case 22:
                _context4.next = 24;
                return websocket.send(chunk);
              case 24:
                _context4.next = 14;
                break;
              case 26:
                _context4.next = 31;
                break;
              case 28:
                _context4.prev = 28;
                _context4.t0 = _context4["catch"](12);
                _iterator.e(_context4.t0);
              case 31:
                _context4.prev = 31;
                _iterator.f();
                return _context4.finish(31);
              case 34:
                if (!wait) {
                  resolve();
                }
                _context4.next = 57;
                break;
              case 37:
                _context4.next = 39;
                return Encoder.encode(message);
              case 39:
                _encodedMessage = _context4.sent;
                _context4.next = 42;
                return fetch(_this3.address, {
                  method: "POST",
                  body: _encodedMessage,
                  headers: {
                    "Content-Type": "application/octet-stream"
                  }
                });
              case 42:
                response = _context4.sent;
                if (!response.ok) {
                  _context4.next = 54;
                  break;
                }
                _context4.next = 46;
                return response.arrayBuffer();
              case 46:
                data = _context4.sent;
                _context4.next = 49;
                return Encoder.decode(new Uint8Array(data));
              case 49:
                decoded = _context4.sent;
                _this3.dispatchMessage(decoded);
                resolve(decoded);
                _context4.next = 57;
                break;
              case 54:
                error = new Error("Error sending message: ".concat(response.statusText));
                _this3.dispatchError(error);
                reject(error);
              case 57:
                _context4.next = 62;
                break;
              case 59:
                _context4.prev = 59;
                _context4.t1 = _context4["catch"](0);
                reject(_context4.t1);
              case 62:
              case "end":
                return _context4.stop();
            }
          }, _callee3, null, [[0, 59], [12, 28, 31, 34]]);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
}();

/**
 * Class representing a client connection to a server using WebSockets.
 * This client will automatically track message IDs and wait for responses,
 * assuming that the server will respond with the same ID.
 */
var IDTrackingClient = /*#__PURE__*/function (_Client) {
  function IDTrackingClient() {
    _classCallCheck(this, IDTrackingClient);
    return _callSuper(this, IDTrackingClient, arguments);
  }
  _inherits(IDTrackingClient, _Client);
  return _createClass(IDTrackingClient, [{
    key: "send",
    value:
    /**
     * Send a message to the server.
     * Pack the message using the Encoder.encode function before sending,
     * and unpack the message using the Encoder.decode function when receiving.
     * This waits for a response with the same ID as the message.
     *
     * @param {Object} message - The message to send to the server.
     * @returns {Promise<Object>} - A promise that resolves the decoded response.
     */
    function send(message) {
      var _this4 = this;
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof message === "string") {
        return _superPropGet(IDTrackingClient, "send", this, 3)([message, wait]);
      } else if (!message instanceof Object) {
        throw new Error("Message must be an object.");
      }
      var messageId;
      if (message.request !== undefined && message.request !== null && message.request.id !== undefined) {
        messageId = message.request.id;
      } else if (message.id !== undefined) {
        messageId = message.id;
      } else {
        throw new Error("Message must have an ID.");
      }
      if (wait) {
        return new Promise(function (resolve, reject) {
          var _onMessage2 = function onMessage(data) {
            if (data instanceof Error) {
              reject(data);
            } else if (data.id === messageId) {
              resolve(data);
              _this4.offMessage(_onMessage2);
            }
          };
          var _onError2 = function onError(error) {
            reject(error);
            _this4.offError(_onError2);
            _this4.offMessage(_onMessage2);
          };
          _this4.onMessage(_onMessage2);
          _this4.onError(_onError2);
          _superPropGet(IDTrackingClient, "send", _this4, 3)([message, false]);
        });
      }
      return _superPropGet(IDTrackingClient, "send", this, 3)([message, false]);
    }
  }]);
}(Client);

/**
 * A wrapper for the browser's local storage, session storage, and cookies.
 *
 * @class
 */
var SessionStorage = /*#__PURE__*/function () {
  /**
   * @param {Storage} driver - The storage driver to use.
   * @constructor
   */
  function SessionStorage(driver) {
    _classCallCheck(this, SessionStorage);
    this.driver = driver;
    this.scopes = {};
  }

  /**
   * Get a scoped storage object.
   *
   * @param {string} key - The key to use for the scope.
   * @param {number} ttl - The time-to-live for the scope.
   * @returns {ScopedStorage} The scoped storage object.
   */
  return _createClass(SessionStorage, [{
    key: "getScope",
    value: function getScope(key, ttl) {
      if (!this.scopes.hasOwnProperty(key)) {
        this.scopes[key] = new ScopedStorage(key, this.driver, ttl);
      }
      return this.scopes[key];
    }

    /**
     * Gets all items from all scopes.
     *
     * @returns {Object} An object containing all items from all scopes.
     */
  }, {
    key: "getAll",
    value: function getAll() {
      return Object.getOwnPropertyNames(this.scopes).reduce(function (acc, item) {
        acc[item] = storage.getScope(item).getAll();
        return acc;
      }, {});
    }

    /**
     * Clears all items from all scopes.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var scope in this.scopes) {
        this.getScope(scope).clear();
      }
    }
  }]);
}();
/**
 * A scoped storage object.
 *
 * @class
 */
var ScopedStorage = /*#__PURE__*/function () {
  /**
   * @param {string} scope - The scope to use.
   * @param {Storage} driver - The storage driver to use.
   * @param {number} ttl - The time-to-live for the scope.
   * @constructor
   */
  function ScopedStorage(scope, driver, ttl) {
    _classCallCheck(this, ScopedStorage);
    this.scope = scope;
    this.driver = driver;
    this.ttl = ttl;
    if (this.ttl === undefined) this.ttl = 60 * 60 * 1000; // 1 hour
  }

  /**
   * Gets all items from the scope.
   *
   * @returns {Object} An object containing all items from the scope.
   */
  return _createClass(ScopedStorage, [{
    key: "getAll",
    value: function getAll() {
      return this.keys().reduce(function (acc, item) {
        acc[item] = storage.getItem(item);
        return acc;
      }, {});
    }

    /**
     * Sets an item in the scope.
     *
     * @param {string} key - The key to use.
     * @param {any} value - The value to set.
     */
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      var scopedKey = "".concat(this.scope, "-").concat(key),
        scopedExpirationKey = "".concat(this.scope, "-").concat(key, "-expiration");
      this.driver.setItem(scopedKey, JSON.stringify(value));
      this.driver.setItem(scopedExpirationKey, new Date().getTime() + this.ttl);
    }

    /**
     * Gets an item from the scope.
     *
     * @param {string} key - The key to get.
     * @returns {any} The value of the key.
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      var scopedKey = "".concat(this.scope, "-").concat(key),
        scopedExpirationKey = "".concat(this.scope, "-").concat(key, "-expiration"),
        response = this.driver.getItem(scopedKey),
        expirationResponse = this.driver.getItem(scopedExpirationKey);
      if (response === undefined || response === 'undefined') return undefined;
      if (response === null || response === 'null') return null;
      response = JSON.parse(response);
      if (!isEmpty(expirationResponse) && expirationResponse <= new Date().getTime()) {
        this.removeItem(scopedKey);
        return null;
      }
      return response;
    }

    /**
     * Gets all keys from the scope.
     *
     * @returns {Array} An array containing all keys from the scope.
     */
  }, {
    key: "keys",
    value: function keys() {
      var scope = "".concat(this.scope, "-"),
        theseKeys;
      if (this.driver.keys !== undefined) {
        theseKeys = this.driver.keys();
      } else {
        theseKeys = Object.getOwnPropertyNames(this.driver);
      }
      return theseKeys.filter(function (key) {
        return key.startsWith(scope);
      }).map(function (key) {
        return key.substring(scope.length);
      }).filter(function (key) {
        return key != 'expiration';
      });
    }

    /**
     * Removes an item from the scope.
     *
     * @param {string} key - The key to remove
     */
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      var scopedKey = "".concat(this.scope, "-").concat(key);
      return this.driver.removeItem(scopedKey);
    }

    /**
     * Removes all items from the scope beginning with a prefix.
     *
     * @param {string} prefix - The prefix to remove.
     */
  }, {
    key: "removePrefix",
    value: function removePrefix(prefix) {
      var _iterator = _createForOfIteratorHelper(this.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          if (key.startsWith(prefix)) {
            this.removeItem(key);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Clears all items from the scope.
     */
  }, {
    key: "clear",
    value: function clear() {
      var _iterator2 = _createForOfIteratorHelper(this.keys()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          this.removeItem(key);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.setItem('expiration', {});
      return this.driver.clear();
    }

    /**
     * Gets the key at an index.
     * @param {number} index - The index to get.
     * @returns {string} The key at the index.
     */
  }, {
    key: "key",
    value: function key(index) {
      return this.keys()[index];
    }
  }]);
}();
/**
 * A storage object using a cookie backend.
 *
 * @class
 */
var CookieStorage = /*#__PURE__*/function () {
  /**
   * @constructor
   */
  function CookieStorage() {
    _classCallCheck(this, CookieStorage);
    this.expiration = new Date();
    this.expiration.setTime(this.expiration.getTime() + 30 * 24 * 60 * 60 * 1000);
  }

  /**
   * Gets all keys from the cookie storage.
   *
   * @returns {Array} An array containing all keys from the cookie storage.
   */
  return _createClass(CookieStorage, [{
    key: "keys",
    value: function keys() {
      var cookies = decodeURIComponent(document.cookie).split(';'),
        cookieName,
        cookieNames = [];
      var _iterator3 = _createForOfIteratorHelper(cookies),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var cookie = _step3.value;
          cookieName = cookie.split('=')[0];
          while (cookieName.charAt(0) == ' ') {
            cookieName = cookieName.substring(1);
          }
          cookieNames.push(cookieName);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return cookieNames;
    }

    /**
     * Gets an item from the cookie storage.
     *
     * @param {string} key - The key to get.
     * @returns {any} The value of the key. Null if the key doesn't exist.
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      var cookies = decodeURIComponent(document.cookie).split(';');
      var _iterator4 = _createForOfIteratorHelper(cookies),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var cookie = _step4.value;
          while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.startsWith("".concat(key, "="))) {
            return JSON.parse(cookie.substring(key.length + 1));
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return null;
    }

    /**
     * Sets an item in the cookie storage.
     *
     * @param {string} key - The key to set.
     * @param {any} value - The value to set.
     * @param {Date} expiration - The expiration date of the cookie.
     */
  }, {
    key: "setItem",
    value: function setItem(key, value, expiration) {
      if (expiration === undefined) {
        expiration = this.expiration;
      }
      document.cookie = ["".concat(key, "=").concat(JSON.stringify(value)), "expires=".concat(expiration.toUTCString()), "path=/", ""].join(";");
    }

    /**
     * Removes an item from the cookie storage.
     *
     * @param {string} key - The key to remove.
     */
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      var expiration = new Date();
      expiration.setTime(0);
      this.setItem(key, '', expiration);
    }

    /**
     * Removes all items from the cookie storage.
     */
  }, {
    key: "clear",
    value: function clear() {
      var _iterator5 = _createForOfIteratorHelper(this.keys()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var cookieName = _step5.value;
          this.removeItem(cookieName);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    /**
     * Gets the key at an index.
     * @param {number} index - The index to get.
     * @returns {string} The key at the index.
     */
  }, {
    key: "key",
    value: function key(index) {
      return this.keys()[index];
    }
  }]);
}();
/**
 * A storage object using a memory backend.
 * Essentially a wrapper for an object, only used for compatibility.
 * @class
 */
var MemoryStorage = /*#__PURE__*/function () {
  /**
   * @constructor
   */
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);
    this.storage = {};
  }

  /**
   * Gets all keys from the memory storage.
   *
   * @returns {Array} An array containing all keys from the memory storage.
   */
  return _createClass(MemoryStorage, [{
    key: "keys",
    value: function keys() {
      return Object.getOwnPropertyNames(this.storage);
    }

    /**
     * Sets an item in the memory storage.
     *
     * @param {string} key - The key to set.
     * @param {any} value - The value to set.
     */
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.storage[key] = value;
    }

    /**
     * Gets an item from the memory storage.
     *
     * @param {string} key - The key to get.
     * @returns {any} The value of the key. Null if the key doesn't exist.
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      if (this.storage.hasOwnProperty(key)) {
        return this.storage[key];
      }
      return null;
    }

    /**
     * Removes an item from the memory storage.
     *
     * @param {string} key - The key to remove.
     */
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this.storage[key];
    }

    /**
     * Removes all items from the memory storage beginning with a prefix.
     *
     * @param {string} prefix - The prefix to remove.
     */
  }, {
    key: "removePrefix",
    value: function removePrefix(prefix) {
      var _iterator6 = _createForOfIteratorHelper(this.keys()),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var key = _step6.value;
          if (key.startsWith(prefix)) {
            this.removeItem(key);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    /**
     * Clears all items from the memory storage.
     */
  }, {
    key: "clear",
    value: function clear() {
      var _iterator7 = _createForOfIteratorHelper(this.keys),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var key = _step7.value;
          delete this.storage[key];
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }

    /**
     * Gets the key at an index.
     *
     * @param {number} index - The index to get.
     * @returns {string} The key at the index.
     */
  }, {
    key: "key",
    value: function key(index) {
      return this.keys()[index];
    }
  }]);
}();
/**
 * Gets the best storage driver available.
 * @returns {Storage} The storage driver.
 */
var getDriver = function getDriver() {
  try {
    if (typeof localStorage !== "undefined") {
      return localStorage;
    } else if (typeof window !== "undefined") {
      return new CookieStorage();
    } else {
      return new MemoryStorage();
    }
  } catch (e) {
    console.error("Couldn't get local storage, defaulting to cookies.", e);
    return new CookieStorage();
  }
};
var Session = new SessionStorage(getDriver()); // Export one instance of the session storage.

var session = Session.getScope("taproot");

/**
 * Gets the metadata for a single datum.
 *
 * @param {any} datum - The datum to get metadata for.
 * @returns {Object} The metadata for the datum.
 */
function getMetadatum() {
  var datum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (datum === null || datum === undefined) {
    return {
      "type": "NoneType"
    };
  }
  var metadata = {
    "parameter_type": datum.constructor,
    "parameter_size": 1
  };
  if (typeof Blob !== "undefined" && datum instanceof Blob) {
    metadata.parameter_type = "bytes";
    metadata.parameter_size = datum.size;
  } else if (datum instanceof NDArray) {
    metadata["parameter_size"] = datum.shape;
    //metadata["parameter_sub_metadata"] = getMetadatum(datum.data[0]);
  } else if (NDArray.isTypedArray(datum)) {
    datum = new NDArray(datum);
    metadata["parameter_type"] = NDArray;
    metadata["parameter_size"] = datum.shape;
    //metadata["parameter_sub_metadata"] = getMetadatum(datum.data[0]);
  } else if (typeof Image !== "undefined" && datum instanceof Image) {
    metadata["parameter_size"] = [datum.width, datum.height];
  } else if (Array.isArray(datum)) {
    metadata["parameter_size"] = [datum.length];
    metadata["parameter_sub_metadata"] = getMetadatum(datum[0]);
  } else if (metadata["parameter_type"] === Object) {
    metadata["parameter_size"] = Object.keys(datum).length;
    metadata["parameter_sub_metadata"] = {};
    for (var key in datum) {
      metadata["parameter_sub_metadata"][key] = getMetadatum(datum[key]);
    }
  } else if (datum.length !== undefined) {
    metadata["parameter_size"] = datum.length;
  }
  return metadata;
}

/**
 * Gets the metadata for a dictionary of data.
 *
 * @param {Object} data - The data to get metadata for.
 * @returns {Object} The metadata for the data.
 */
function getMetadata(data) {
  var metadata = {};
  for (var key in data) {
    metadata[key] = getMetadatum(data[key]);
  }
  return metadata;
}

/**
 * A client for the Taproot backend.
 *
 * @class
 */
var Taproot = /*#__PURE__*/function (_IDTrackingClient) {
  function Taproot() {
    _classCallCheck(this, Taproot);
    return _callSuper(this, Taproot, arguments);
  }
  _inherits(Taproot, _IDTrackingClient);
  return _createClass(Taproot, [{
    key: "completeAddress",
    get:
    /**
     * Gets the address of the overseer with the protocol and port.
     *
     * @returns {string} The address of the overseer.
     */
    function get() {
      if (this.hasProtocol) {
        return this.address;
      }

      // Using relative address, so we need to determine the protocol and port from the current page.
      if (typeof window !== "undefined" && window.location !== undefined) {
        var targetAddress = window.location.href;
        if (this.isWebsocket) {
          targetAddress = targetAddress.replace("http://", "ws://").replace("https://", "wss://");
        }
        if (!targetAddress.endsWith("/")) {
          if (window.location.href === window.location.origin) {
            // Add a slash
            targetAddress += "/";
          } else {
            // If the target address is not a directory, we want to trim to the directory.
            // e.g. ws://example.com/file/index.html -> ws://example.com/file/
            var lastSlash = targetAddress.lastIndexOf("/");
            targetAddress = targetAddress.substring(0, lastSlash + 1);
          }
        }
        if (this.address.startsWith("/")) {
          return "".concat(targetAddress).concat(this.address.substring(1));
        }
        return "".concat(targetAddress).concat(this.address);
      }
      return this.address; // Final fallback in non-browser environments.
    }

    /**
     * Gets the client ID, will be set once per session.
     *
     * @returns {string} The client ID.
     */
  }, {
    key: "clientId",
    get: function get() {
      var sessionClientId = session.getItem("clientId");
      if (sessionClientId) {
        return sessionClientId;
      }
      var newClientId = uuidv4();
      session.setItem("clientId", newClientId);
      return newClientId;
    }

    /**
     * Creates a new Taproot client.
     *
     * @param {string} address - The address of the Taproot server. Either ws://, wss://, http://, or https://.
     * @returns {Tap} The Taproot client.
     */
  }, {
    key: "getClient",
    value: function getClient(address) {
      if (this.executors === null || this.executors === undefined) {
        this.executors = {};
      }
      if (this.isWebsocket && !this.addressHasProtocol(address)) {
        if (address.startsWith("/")) {
          address = address.substring(1);
        }
        if (this.host !== null) {
          if (this.isSecure) {
            address = "wss://".concat(this.host, "/").concat(address);
          } else {
            address = "ws://".concat(this.host, "/").concat(address);
          }
        } else {
          if (this.isSecure) {
            address = "wss://".concat(address);
          } else {
            address = "ws://".concat(address);
          }
        }
      }
      if (this.executors[address] === null || this.executors[address] === undefined) {
        if (this.debug) {
          console.log("Creating new client for ".concat(address));
        }
        this.executors[address] = new IDTrackingClient(address, this.debug);
      }
      return this.executors[address];
    }

    /**
     * Removes a client from the client cache.
     *
     * @param {string} task - The task to remove the client for.
     * @param {string} model - The model to remove the client for.
     */
  }, {
    key: "clearClientForTask",
    value: function clearClientForTask(task) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.tasks === null || this.tasks === undefined) {
        this.tasks = {};
      }
      if (this.tasks[task] === null || this.tasks[task] === undefined) {
        this.tasks[task] = {};
      }
      if (model === null || model === undefined) {
        model = "default";
      }
      if (this.tasks[task][model] !== null && this.tasks[task][model] !== undefined) {
        this.tasks[task][model].close();
      }
      this.tasks[task][model] = null;
    }

    /**
     * Sets a client for a task.
     *
     * @param {IDTrackingClient} client - The client to set.
     * @param {string} task - The task to set the client for.
     * @param {string} model - The model to set the client for.
     */
  }, {
    key: "setClientForTask",
    value: function setClientForTask(client, task) {
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (this.tasks === null || this.tasks === undefined) {
        this.tasks = {};
      }
      if (this.tasks[task] === null || this.tasks[task] === undefined) {
        this.tasks[task] = {};
      }
      if (model === null || model === undefined) {
        model = "default";
      }
      this.tasks[task][model] = client;
    }

    /**
     * Gets a client for a task.
     * 
     * @param {string} task - The task to get the client for.
     * @param {string} model - The model to get the client for.
     * @returns {IDTrackingClient} The client for the task. Null if not found.
     */
  }, {
    key: "getClientForTask",
    value: function getClientForTask(task) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.tasks === null || this.tasks === undefined) {
        this.tasks = {};
      }
      if (this.tasks[task] === null || this.tasks[task] === undefined) {
        this.tasks[task] = {};
      }
      if (model === null || model === undefined) {
        model = "default";
      }
      if (this.tasks[task][model] !== null && this.tasks[task][model] !== undefined) {
        return this.tasks[task][model];
      }
      return null;
    }

    /**
     * Gets a lock for a task.
     *
     * @param {string} task - The task to get the lock for.
     * @param {string} model - The model to get the lock for.
     * @returns {MutexLock} The lock for the task.
     */
  }, {
    key: "getLockForTask",
    value: function getLockForTask(task) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.locks === null || this.locks === undefined) {
        this.locks = {};
      }
      if (this.locks[task] === null || this.locks[task] === undefined) {
        this.locks[task] = {};
      }
      if (model === null || model === undefined) {
        model = "default";
      }
      if (this.locks[task][model] === null || this.locks[task][model] === undefined) {
        this.locks[task][model] = new MutexLock();
      }
      return this.locks[task][model];
    }

    /**
     * Sends a task invocation to the server.
     *
     * @param {object} Payload - the payload to the server.
     * @returns {Promise} The promise that resolves when the task is complete.
     */
  }, {
    key: "sendInvocation",
    value: function sendInvocation(payload, options) {
      var _this = this;
      options = options || {};
      var task = payload.task;
      var model = payload.model || null;
      var continuation = payload.continuation;
      var sequenceNumber = 0;
      var fetchIntermediates = options.fetchIntermediates;
      var pollingInterval = options.pollingInterval || 1000;
      var retryDelay = options.retryDelay || 20;
      var onIntermediateResult = options.onIntermediateResult || function (result, sequence) {
        return console.log("Ignored intermediate result", sequence, result);
      };
      var onInterimResult = options.onInterimResult || function (result, sequence) {
        return console.log("Ignored interim result", sequence, result);
      };
      if (isEmpty(task)) {
        throw new Error("Task is required.");
      }
      return new Promise(function (resolve, reject) {
        // Set payload overrides
        payload.id = uuidv4();
        payload.client_id = _this.clientId;
        payload.overseer = _this.completeAddress;
        payload.return_metadata = true;
        payload.wait_for_result = !fetchIntermediates;

        // Either get the client for the task or create a new one.
        var client = _this.getClientForTask(task, model);
        // Define the method for following a continuation. This will switch from one executor to another,
        // then recursively follow from there if necessary.
        var _followContinuation = function followContinuation(continuation) {
          var retries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
          return new Promise(function (resolve, reject) {
            var continuationId = continuation.id;
            var continuationAddress = continuation.address;
            var continuationClient = _this.getClient(continuationAddress);
            // Method to request updates from the continuation.
            // Either needs to be called only once (if we're waiting for the final result,
            // i.e., not fetching intermediates) or called repeatedly (if we're fetching intermediates).
            var sendContinuationUpdateRequest = function sendContinuationUpdateRequest() {
              return continuationClient.send({
                "id": continuationId,
                "client_id": _this.clientId,
                "return_metadata": true,
                "wait_for_result": !fetchIntermediates
              });
            };
            // Error and message handlers for the continuation client.
            var _onContinuationError = function onContinuationError(error) {
              continuationClient.offError(_onContinuationError);
              continuationClient.offMessage(_onContinuationMessage);
              if (retry) {
                _followContinuation(continuation, false).then(resolve)["catch"](reject);
              } else {
                console.error("Error with continuation", continuationId, "from", continuationAddress, error);
                reject(error);
              }
            };
            var _onContinuationMessage = function onContinuationMessage(message) {
              if (message instanceof Error) {
                continuationClient.offMessage(_onContinuationMessage);
                continuationClient.offError(_onContinuationError);
                if (retries > 0) {
                  // It's possible that the executor hasn't received the full payload yet from the previous executor.
                  setTimeout(function () {
                    _followContinuation(continuation, retries - 1).then(resolve)["catch"](reject);
                  }, retryDelay);
                } else {
                  console.error("Error with continuation", continuationId, "from", continuationAddress, message);
                  reject(message);
                }
              } else if (message.id == continuationId) {
                if (["error", "complete"].includes(message.status)) {
                  // Continuation is complete, so we can resolve with the result.
                  continuationClient.offMessage(_onContinuationMessage);
                  continuationClient.offError(_onContinuationError);
                  if (message.status === "error") {
                    reject(message.result);
                  } else if (!!message.continuation) {
                    // One or more continuations requested - follow them.
                    onInterimResult(message.result, sequenceNumber);
                    sequenceNumber++;
                    var continuations = message.continuation;
                    var returnFirst = false;
                    if (!Array.isArray(continuations)) {
                      continuations = [continuations];
                      returnFirst = true;
                    }
                    var continuationPromises = [];
                    var _iterator = _createForOfIteratorHelper(continuations),
                      _step;
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var _continuation = _step.value;
                        continuationPromises.push(_followContinuation(_continuation));
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    Promise.all(continuationPromises).then(function (results) {
                      if (returnFirst) {
                        resolve(results[0]);
                      } else {
                        resolve(results);
                      }
                    })["catch"](reject);
                  } else {
                    resolve(message.result);
                  }
                } else {
                  if (!isEmpty(message.intermediate)) {
                    onIntermediateResult(message.intermediate, sequenceNumber);
                  }
                  // Trigger the next update request.
                  setTimeout(sendContinuationUpdateRequest, pollingInterval);
                }
              }
            };
            continuationClient.onMessage(_onContinuationMessage);
            continuationClient.onError(_onContinuationError);
            sendContinuationUpdateRequest();
          });
        };
        // Define an update request for easy usage.
        var sendUpdateRequest = function sendUpdateRequest() {
          return client.send({
            "id": payload.id,
            "client_id": _this.clientId,
            "return_metadata": true,
            "wait_for_result": !fetchIntermediates
          });
        };
        // This handler fires when a response is received, either an intermediate status, error or result.
        var _onMessage = function onMessage(message) {
          if (message.id === payload.id) {
            if (["error", "complete"].includes(message.status)) {
              // Execution is complete.
              client.offMessage(_onMessage);
              client.offError(_onError);
              if (!!continuation) {
                onInterimResult(message.result, sequenceNumber);
                sequenceNumber++;
                if (!message.continuation || !message.continuation.id) {
                  reject("Continuation request but not found in message");
                } else {
                  var continuations = message.continuation;
                  var returnFirst = false;
                  if (!Array.isArray(continuations)) {
                    continuations = [continuations];
                    returnFirst = true;
                  }
                  var continuationPromises = [];
                  var _iterator2 = _createForOfIteratorHelper(continuations),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _continuation2 = _step2.value;
                      continuationPromises.push(_followContinuation(_continuation2));
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  Promise.all(continuationPromises).then(function (results) {
                    if (returnFirst) {
                      resolve(results[0]);
                    } else {
                      resolve(results);
                    }
                  })["catch"](reject);
                }
              } else {
                resolve(message.result);
              }
            } else {
              // Execution still in progress.
              if (!isEmpty(message.intermediate)) {
                onIntermediateResult(message.intermediate, sequenceNumber);
              }
              // Trigger the next update request.
              setTimeout(sendUpdateRequest, pollingInterval);
            }
          }
        };
        var _onError = function onError(error) {
          client.offMessage(_onMessage);
          client.offError(_onError);
          reject(error);
        };
        var data = payload.parameters;
        if (client === null) {
          // If the client is null, we need to get a new address for this task. Ask the overseer where it is.
          // We only send metadata to the overseer, not the actual data.
          payload.parameters = getMetadata(data);
          _this.send(payload).then(function (executor) {
            if (!executor.address) {
              reject("No address found for executor.");
              return;
            } else if (executor.address.startsWith("tcp://") || executor.address.startsWith("tcps://") || executor.address.startsWith("unix://")) {
              reject("Executor is not configured for websocket or HTTP communication, received: ".concat(executor.address));
              return;
            }
            payload.parameters = data;
            client = _this.getClient(executor.address);
            client.onMessage(_onMessage);
            client.onError(_onError);
            client.send(payload, false);
            _this.setClientForTask(client, task, model);
          })["catch"](reject);
        } else {
          // We've already received an address for this task, so we try to re-use it.
          if (_this.debug) {
            console.log("Reusing client for task", task);
          }
          // On error with this client, we retry the task with a new client. This only happens once.
          var _onErrorRetry = function onErrorRetry(error) {
            client.offMessage(_onMessage);
            client.offError(_onErrorRetry);
            _this.clearClientForTask(task, model);
            _this.sendInvocation(payload, options).then(function (result) {
              resolve(result);
            })["catch"](function (newError) {
              reject(newError);
            });
          };
          // Send the actual data to the client.
          payload.parameters = data;
          client.onMessage(_onMessage);
          client.onError(_onErrorRetry);
          client.send(payload, false);
        }
      });
    }

    /**
     * Sends a task invocation to the server.
     *
     * @param {object} Payload - the payload to the server.
     * @returns {Promise} The promise that resolves when the task is complete.
     */
  }, {
    key: "invoke",
    value: function invoke(payload, options) {
      var _this2 = this;
      var task = payload.task;
      var model = payload.model || null;
      if (isEmpty(task)) {
        throw new Error("Task is required.");
      }
      return new Promise(function (resolve, reject) {
        _this2.getLockForTask(task, model).acquire().then(function (release) {
          return _this2.sendInvocation(payload, options).then(function (result) {
            release();
            resolve(result);
          })["catch"](function (error) {
            release();
            reject(error);
          });
        });
      });
    }

    /**
     * Extend the close method to close all clients.
     */
  }, {
    key: "close",
    value: function close() {
      for (var task in this.tasks) {
        for (var model in this.tasks[task]) {
          this.clearClientForTask(task, model);
        }
      }
      _superPropGet(Taproot, "close", this, 3)([]);
    }
  }]);
}(IDTrackingClient);
if (typeof window !== "undefined") {
  window.Taproot = Taproot;
}

export { Taproot };
