import { importShared } from './__federation_fn_import-D40pEQjo.js';
import { r as requireReact, g as getDefaultExportFromCjs } from './index-DKl3hPDx.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names

  let out = "";

  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k;
    }
  }

  return out
}

var withSelector = {exports: {}};

var withSelector_production = {};

var shim = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	var React = requireReact();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;
	{
	  shim.exports = requireUseSyncExternalStoreShim_production();
	}
	return shim.exports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production;

function requireWithSelector_production () {
	if (hasRequiredWithSelector_production) return withSelector_production;
	hasRequiredWithSelector_production = 1;
	var React = requireReact(),
	  shim = requireShim();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = shim.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	withSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return withSelector_production;
}

var hasRequiredWithSelector;

function requireWithSelector () {
	if (hasRequiredWithSelector) return withSelector.exports;
	hasRequiredWithSelector = 1;
	{
	  withSelector.exports = requireWithSelector_production();
	}
	return withSelector.exports;
}

var withSelectorExports = requireWithSelector();
const useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

const __vite_import_meta_env__ = {};
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

const ReactExports = await importShared('react');

const { useDebugValue } = ReactExports;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
const identity$2 = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity$2, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
  const api = createStore(createState);
  const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
  Object.assign(useBoundStoreWithEqualityFn, api);
  return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;

function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}

var noop$2 = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$2, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";

const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector$h(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector$h(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}

function selection_selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection$1(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter$1 = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter$1.call(this.children, match);
  };
}

function selection_selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant$3(x) {
  return function() {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$3(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection$1(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection$1(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  return Array.from(this);
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove$1 : typeof value === "function"
            ? styleFunction$1
            : styleConstant$1)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction$1
          : textConstant$1)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector$h(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

var root = [null];

function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection$1([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
      : new Selection$1([[selector]], root);
}

function sourceEvent(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

function pointer(event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation$1(event) {
  event.stopImmediatePropagation();
}

function noevent$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function dragDisable(view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent$1, nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent$1, nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

const constant$2 = x => () => x;

function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// Ignore right-click, since that should open the context menu.
function defaultFilter$1(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable$1() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function drag$1() {
  var filter = defaultFilter$1,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable$1,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, nonpassive)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select(event.view)
      .on("mousemove.drag", mousemoved, nonpassivecapture)
      .on("mouseup.drag", mouseupped, nonpassivecapture);
    dragDisable(event.view);
    nopropagation$1(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    noevent$1(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent$1(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation$1(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent$1(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation$1(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = pointer(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // falls through
        case "drag": p = pointer(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color$1, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color$1(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba$1(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba$1((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba$1(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba$1(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color$1(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}${hex$1((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex$1(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla$1(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color$1(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

const constant$1 = x => () => x;

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}

const interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

var degrees$1 = 180 / Math.PI;

var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees$1,
    skewX: Math.atan(skewX) * degrees$1,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

const interpolateZoom = (function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4);

var frame$1 = 0, // is an animation frame pending?
    timeout$1 = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now$1() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now$1(); // Get the current time, if not already set.
  ++frame$1; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame$1;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame$1 = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame$1 = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame$1) return; // Soonest alarm already set, or will be.
  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame$1 = 1, setFrame(wake);
  }
}

function timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

function interpolate$1(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color$1 ? interpolateRgb
      : (c = color$1(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set(this, id).ease = v;
  };
}

function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector$h(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = selection.prototype.constructor;

function transition_selection() {
  return new Selection(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

var id$2 = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function newId() {
  return ++id$2;
}

var selection_prototype = selection.prototype;

Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now$1(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

const constant = x => () => x;

function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

Transform.prototype;

function nopropagation(event) {
  event.stopImmediatePropagation();
}

function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

function zoom() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

const React$9 = await importShared('react');
const {createContext: createContext$7,useContext: useContext$9,useMemo: useMemo$8,memo: memo$3,useRef: useRef$9,useState: useState$6,useEffect: useEffect$7,forwardRef: forwardRef$3,useCallback: useCallback$5} = React$9;
const {createPortal} = await importShared('react-dom');

const StoreContext = createContext$7(null);
const Provider$1 = StoreContext.Provider;
const errorMessages = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (id) => `The old edge with id=${id} does not exist.`,
  error009: (type) => `Marker type "${type}" doesn't exist.`,
  error008: (sourceHandle, edge) => `Couldn't create edge for ${!sourceHandle ? "source" : "target"} handle id: "${!sourceHandle ? edge.sourceHandle : edge.targetHandle}", edge id: ${edge.id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
  error012: (id) => `Node with id "${id}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
};
const zustandErrorMessage = errorMessages["error001"]();
function useStore(selector2, equalityFn) {
  const store = useContext$9(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return useStoreWithEqualityFn(store, selector2, equalityFn);
}
const useStoreApi = () => {
  const store = useContext$9(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return useMemo$8(() => ({
    getState: store.getState,
    setState: store.setState,
    subscribe: store.subscribe,
    destroy: store.destroy
  }), [store]);
};
const selector$g = (s) => s.userSelectionActive ? "none" : "all";
function Panel({ position, children, className, style: style2, ...rest }) {
  const pointerEvents = useStore(selector$g);
  const positionClasses = `${position}`.split("-");
  return React$9.createElement("div", { className: cc(["react-flow__panel", className, ...positionClasses]), style: { ...style2, pointerEvents }, ...rest }, children);
}
function Attribution({ proOptions, position = "bottom-right" }) {
  if (proOptions?.hideAttribution) {
    return null;
  }
  return React$9.createElement(
    Panel,
    { position, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro" },
    React$9.createElement("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution" }, "React Flow")
  );
}
const EdgeText = ({ x, y, label, labelStyle = {}, labelShowBg = true, labelBgStyle = {}, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children, className, ...rest }) => {
  const edgeRef = useRef$9(null);
  const [edgeTextBbox, setEdgeTextBbox] = useState$6({ x: 0, y: 0, width: 0, height: 0 });
  const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
  useEffect$7(() => {
    if (edgeRef.current) {
      const textBbox = edgeRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);
  if (typeof label === "undefined" || !label) {
    return null;
  }
  return React$9.createElement(
    "g",
    { transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`, className: edgeTextClasses, visibility: edgeTextBbox.width ? "visible" : "hidden", ...rest },
    labelShowBg && React$9.createElement("rect", { width: edgeTextBbox.width + 2 * labelBgPadding[0], x: -labelBgPadding[0], y: -labelBgPadding[1], height: edgeTextBbox.height + 2 * labelBgPadding[1], className: "react-flow__edge-textbg", style: labelBgStyle, rx: labelBgBorderRadius, ry: labelBgBorderRadius }),
    React$9.createElement("text", { className: "react-flow__edge-text", y: edgeTextBbox.height / 2, dy: "0.3em", ref: edgeRef, style: labelStyle }, label),
    children
  );
};
var EdgeText$1 = memo$3(EdgeText);
const getDimensions = (node) => ({
  width: node.offsetWidth,
  height: node.offsetHeight
});
const clamp$1 = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
const clampPosition = (position = { x: 0, y: 0 }, extent) => ({
  x: clamp$1(position.x, extent[0][0], extent[1][0]),
  y: clamp$1(position.y, extent[0][1], extent[1][1])
});
const calcAutoPanVelocity = (value, min, max) => {
  if (value < min) {
    return clamp$1(Math.abs(value - min), 1, 50) / 50;
  } else if (value > max) {
    return -clamp$1(Math.abs(value - max), 1, 50) / 50;
  }
  return 0;
};
const calcAutoPan = (pos, bounds) => {
  const xMovement = calcAutoPanVelocity(pos.x, 35, bounds.width - 35) * 20;
  const yMovement = calcAutoPanVelocity(pos.y, 35, bounds.height - 35) * 20;
  return [xMovement, yMovement];
};
const getHostForElement = (element) => element.getRootNode?.() || window?.document;
const getBoundsOfBoxes = (box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2)
});
const rectToBox = ({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height
});
const boxToRect = ({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y
});
const nodeToRect = (node) => ({
  ...node.positionAbsolute || { x: 0, y: 0 },
  width: node.width || 0,
  height: node.height || 0
});
const getOverlappingArea = (rectA, rectB) => {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
};
const isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
const isNumeric = (n) => !isNaN(n) && isFinite(n);
const internalsSymbol = Symbol.for("internals");
const elementSelectionKeys = ["Enter", " ", "Escape"];
const devWarn = (id, message) => {
};
const isReactKeyboardEvent = (event) => "nativeEvent" in event;
function isInputDOMNode(event) {
  const kbEvent = isReactKeyboardEvent(event) ? event.nativeEvent : event;
  const target = kbEvent.composedPath?.()?.[0] || event.target;
  const isInput = ["INPUT", "SELECT", "TEXTAREA"].includes(target?.nodeName) || target?.hasAttribute("contenteditable");
  return isInput || !!target?.closest(".nokey");
}
const isMouseEvent = (event) => "clientX" in event;
const getEventPosition = (event, bounds) => {
  const isMouseTriggered = isMouseEvent(event);
  const evtX = isMouseTriggered ? event.clientX : event.touches?.[0].clientX;
  const evtY = isMouseTriggered ? event.clientY : event.touches?.[0].clientY;
  return {
    x: evtX - (bounds?.left ?? 0),
    y: evtY - (bounds?.top ?? 0)
  };
};
const isMacOs = () => typeof navigator !== "undefined" && navigator?.userAgent?.indexOf("Mac") >= 0;
const BaseEdge = ({ id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth = 20 }) => {
  return React$9.createElement(
    React$9.Fragment,
    null,
    React$9.createElement("path", { id, style: style2, d: path, fill: "none", className: "react-flow__edge-path", markerEnd, markerStart }),
    interactionWidth && React$9.createElement("path", { d: path, fill: "none", strokeOpacity: 0, strokeWidth: interactionWidth, className: "react-flow__edge-interaction" }),
    label && isNumeric(labelX) && isNumeric(labelY) ? React$9.createElement(EdgeText$1, { x: labelX, y: labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius }) : null
  );
};
BaseEdge.displayName = "BaseEdge";
function getMouseHandler$1(id, getState, handler) {
  return handler === void 0 ? handler : (event) => {
    const edge = getState().edges.find((e) => e.id === id);
    if (edge) {
      handler(event, { ...edge });
    }
  };
}
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
var ConnectionMode;
(function(ConnectionMode2) {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode2) {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
var ConnectionLineType;
(function(ConnectionLineType2) {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  ConnectionLineType2["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType2) {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position2) {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
})(Position || (Position = {}));
function getControl({ pos, x1, y1, x2, y2 }) {
  if (pos === Position.Left || pos === Position.Right) {
    return [0.5 * (x1 + x2), y1];
  }
  return [x1, 0.5 * (y1 + y2)];
}
function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
const SimpleBezierEdge = memo$3(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
  const [path, labelX, labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  return React$9.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
SimpleBezierEdge.displayName = "SimpleBezierEdge";
const handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
const getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
};
const distance$1 = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset }) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points = [];
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = center.x ?? defaultCenterX;
    centerY = center.y ?? defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance$1(a, b) / 2, distance$1(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20 }) {
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset
  });
  const path = points.reduce((res, p, i) => {
    let segment = "";
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
const SmoothStepEdge = memo$3(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: pathOptions?.borderRadius,
    offset: pathOptions?.offset
  });
  return React$9.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
SmoothStepEdge.displayName = "SmoothStepEdge";
const StepEdge = memo$3((props) => React$9.createElement(SmoothStepEdge, { ...props, pathOptions: useMemo$8(() => ({ borderRadius: 0, offset: props.pathOptions?.offset }), [props.pathOptions?.offset]) }));
StepEdge.displayName = "StepEdge";
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
  const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
}
const StraightEdge = memo$3(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
  const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
  return React$9.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
StraightEdge.displayName = "StraightEdge";
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  }
  return curvature * 25 * Math.sqrt(-distance2);
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
const BezierEdge = memo$3(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, pathOptions, interactionWidth }) => {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: pathOptions?.curvature
  });
  return React$9.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
BezierEdge.displayName = "BezierEdge";
const NodeIdContext = createContext$7(null);
const Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
const useNodeId = () => {
  const nodeId = useContext$9(NodeIdContext);
  return nodeId;
};
const isEdge = (element) => "id" in element && "source" in element && "target" in element;
const getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `reactflow__edge-${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
const getMarkerId = (marker, rfId) => {
  if (typeof marker === "undefined") {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = rfId ? `${rfId}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
};
const connectionExists = (edge, edges) => {
  return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
};
const addEdge = (edgeParams, edges) => {
  if (!edgeParams.source || !edgeParams.target) {
    return edges;
  }
  let edge;
  if (isEdge(edgeParams)) {
    edge = { ...edgeParams };
  } else {
    edge = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  if (connectionExists(edge, edges)) {
    return edges;
  }
  return edges.concat(edge);
};
const pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid, [snapX, snapY]) => {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  if (snapToGrid) {
    return {
      x: snapX * Math.round(position.x / snapX),
      y: snapY * Math.round(position.y / snapY)
    };
  }
  return position;
};
const rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
};
const getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
  if (!node) {
    return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
  }
  const offsetX = (node.width ?? 0) * nodeOrigin[0];
  const offsetY = (node.height ?? 0) * nodeOrigin[1];
  const position = {
    x: node.position.x - offsetX,
    y: node.position.y - offsetY
  };
  return {
    ...position,
    positionAbsolute: node.positionAbsolute ? {
      x: node.positionAbsolute.x - offsetX,
      y: node.positionAbsolute.y - offsetY
    } : position
  };
};
const getNodesBounds = (nodes, nodeOrigin = [0, 0]) => {
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const box = nodes.reduce((currBox, node) => {
    const { x, y } = getNodePositionWithOrigin(node, nodeOrigin).positionAbsolute;
    return getBoundsOfBoxes(currBox, rectToBox({
      x,
      y,
      width: node.width || 0,
      height: node.height || 0
    }));
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return boxToRect(box);
};
const getNodesInside = (nodeInternals, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false, nodeOrigin = [0, 0]) => {
  const paneRect = {
    x: (rect.x - tx) / tScale,
    y: (rect.y - ty) / tScale,
    width: rect.width / tScale,
    height: rect.height / tScale
  };
  const visibleNodes = [];
  nodeInternals.forEach((node) => {
    const { width, height, selectable = true, hidden = false } = node;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      return false;
    }
    const { positionAbsolute } = getNodePositionWithOrigin(node, nodeOrigin);
    const nodeRect = {
      x: positionAbsolute.x,
      y: positionAbsolute.y,
      width: width || 0,
      height: height || 0
    };
    const overlappingArea = getOverlappingArea(paneRect, nodeRect);
    const notInitialized = typeof width === "undefined" || typeof height === "undefined" || width === null || height === null;
    const partiallyVisible = partially && overlappingArea > 0;
    const area = (width || 0) * (height || 0);
    const isVisible = notInitialized || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  });
  return visibleNodes;
};
const getConnectedEdges = (nodes, edges) => {
  const nodeIds = nodes.map((node) => node.id);
  return edges.filter((edge) => nodeIds.includes(edge.source) || nodeIds.includes(edge.target));
};
const getViewportForBounds = (bounds, width, height, minZoom, maxZoom, padding = 0.1) => {
  const xZoom = width / (bounds.width * (1 + padding));
  const yZoom = height / (bounds.height * (1 + padding));
  const zoom2 = Math.min(xZoom, yZoom);
  const clampedZoom = clamp$1(zoom2, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  return { x, y, zoom: clampedZoom };
};
const getD3Transition = (selection, duration = 0) => {
  return selection.transition().duration(duration);
};
function getHandles(node, handleBounds, type, currentHandle) {
  return (handleBounds[type] || []).reduce((res, h) => {
    if (`${node.id}-${h.id}-${type}` !== currentHandle) {
      res.push({
        id: h.id || null,
        type,
        nodeId: node.id,
        x: (node.positionAbsolute?.x ?? 0) + h.x + h.width / 2,
        y: (node.positionAbsolute?.y ?? 0) + h.y + h.height / 2
      });
    }
    return res;
  }, []);
}
function getClosestHandle(event, doc, pos, connectionRadius, handles, validator) {
  const { x, y } = getEventPosition(event);
  const domNodes = doc.elementsFromPoint(x, y);
  const handleBelow = domNodes.find((el) => el.classList.contains("react-flow__handle"));
  if (handleBelow) {
    const handleNodeId = handleBelow.getAttribute("data-nodeid");
    if (handleNodeId) {
      const handleType = getHandleType(void 0, handleBelow);
      const handleId = handleBelow.getAttribute("data-handleid");
      const validHandleResult = validator({ nodeId: handleNodeId, id: handleId, type: handleType });
      if (validHandleResult) {
        const handle = handles.find((h) => h.nodeId === handleNodeId && h.type === handleType && h.id === handleId);
        return {
          handle: {
            id: handleId,
            type: handleType,
            nodeId: handleNodeId,
            x: handle?.x || pos.x,
            y: handle?.y || pos.y
          },
          validHandleResult
        };
      }
    }
  }
  let closestHandles = [];
  let minDistance = Infinity;
  handles.forEach((handle) => {
    const distance2 = Math.sqrt((handle.x - pos.x) ** 2 + (handle.y - pos.y) ** 2);
    if (distance2 <= connectionRadius) {
      const validHandleResult = validator(handle);
      if (distance2 <= minDistance) {
        if (distance2 < minDistance) {
          closestHandles = [{ handle, validHandleResult }];
        } else if (distance2 === minDistance) {
          closestHandles.push({
            handle,
            validHandleResult
          });
        }
        minDistance = distance2;
      }
    }
  });
  if (!closestHandles.length) {
    return { handle: null, validHandleResult: defaultResult() };
  }
  if (closestHandles.length === 1) {
    return closestHandles[0];
  }
  const hasValidHandle = closestHandles.some(({ validHandleResult }) => validHandleResult.isValid);
  const hasTargetHandle = closestHandles.some(({ handle }) => handle.type === "target");
  return closestHandles.find(({ handle, validHandleResult }) => hasTargetHandle ? handle.type === "target" : hasValidHandle ? validHandleResult.isValid : true) || closestHandles[0];
}
const nullConnection = { source: null, target: null, sourceHandle: null, targetHandle: null };
const defaultResult = () => ({
  handleDomNode: null,
  isValid: false,
  connection: nullConnection,
  endHandle: null
});
function isValidHandle(handle, connectionMode, fromNodeId, fromHandleId, fromType, isValidConnection, doc) {
  const isTarget = fromType === "target";
  const handleToCheck = doc.querySelector(`.react-flow__handle[data-id="${handle?.nodeId}-${handle?.id}-${handle?.type}"]`);
  const result = {
    ...defaultResult(),
    handleDomNode: handleToCheck
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    if (isValid) {
      result.endHandle = {
        nodeId: handleNodeId,
        handleId,
        type: handleType
      };
      result.isValid = isValidConnection(connection);
    }
  }
  return result;
}
function getHandleLookup({ nodes, nodeId, handleId, handleType }) {
  return nodes.reduce((res, node) => {
    if (node[internalsSymbol]) {
      const { handleBounds } = node[internalsSymbol];
      let sourceHandles = [];
      let targetHandles = [];
      if (handleBounds) {
        sourceHandles = getHandles(node, handleBounds, "source", `${nodeId}-${handleId}-${handleType}`);
        targetHandles = getHandles(node, handleBounds, "target", `${nodeId}-${handleId}-${handleType}`);
      }
      res.push(...sourceHandles, ...targetHandles);
    }
    return res;
  }, []);
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode?.classList.contains("target")) {
    return "target";
  } else if (handleDomNode?.classList.contains("source")) {
    return "source";
  }
  return null;
}
function resetRecentHandle(handleDomNode) {
  handleDomNode?.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
  let connectionStatus = null;
  if (isHandleValid) {
    connectionStatus = "valid";
  } else if (isInsideConnectionRadius && !isHandleValid) {
    connectionStatus = "invalid";
  }
  return connectionStatus;
}
function handlePointerDown({ event, handleId, nodeId, onConnect, isTarget, getState, setState, isValidConnection, edgeUpdaterType, onReconnectEnd }) {
  const doc = getHostForElement(event.target);
  const { connectionMode, domNode, autoPanOnConnect, connectionRadius, onConnectStart, panBy, getNodes, cancelConnection } = getState();
  let autoPanId = 0;
  let closestHandle;
  const { x, y } = getEventPosition(event);
  const clickedHandle = doc?.elementFromPoint(x, y);
  const handleType = getHandleType(edgeUpdaterType, clickedHandle);
  const containerBounds = domNode?.getBoundingClientRect();
  if (!containerBounds || !handleType) {
    return;
  }
  let prevActiveHandle;
  let connectionPosition = getEventPosition(event, containerBounds);
  let autoPanStarted = false;
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  const handleLookup = getHandleLookup({
    nodes: getNodes(),
    nodeId,
    handleId,
    handleType
  });
  const autoPan = () => {
    if (!autoPanOnConnect) {
      return;
    }
    const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds);
    panBy({ x: xMovement, y: yMovement });
    autoPanId = requestAnimationFrame(autoPan);
  };
  setState({
    connectionPosition,
    connectionStatus: null,
    // connectionNodeId etc will be removed in the next major in favor of connectionStartHandle
    connectionNodeId: nodeId,
    connectionHandleId: handleId,
    connectionHandleType: handleType,
    connectionStartHandle: {
      nodeId,
      handleId,
      type: handleType
    },
    connectionEndHandle: null
  });
  onConnectStart?.(event, { nodeId, handleId, handleType });
  function onPointerMove(event2) {
    const { transform } = getState();
    connectionPosition = getEventPosition(event2, containerBounds);
    const { handle, validHandleResult } = getClosestHandle(event2, doc, pointToRendererPoint(connectionPosition, transform, false, [1, 1]), connectionRadius, handleLookup, (handle2) => isValidHandle(handle2, connectionMode, nodeId, handleId, isTarget ? "target" : "source", isValidConnection, doc));
    closestHandle = handle;
    if (!autoPanStarted) {
      autoPan();
      autoPanStarted = true;
    }
    handleDomNode = validHandleResult.handleDomNode;
    connection = validHandleResult.connection;
    isValid = validHandleResult.isValid;
    setState({
      connectionPosition: closestHandle && isValid ? rendererPointToPoint({
        x: closestHandle.x,
        y: closestHandle.y
      }, transform) : connectionPosition,
      connectionStatus: getConnectionStatus(!!closestHandle, isValid),
      connectionEndHandle: validHandleResult.endHandle
    });
    if (!closestHandle && !isValid && !handleDomNode) {
      return resetRecentHandle(prevActiveHandle);
    }
    if (connection.source !== connection.target && handleDomNode) {
      resetRecentHandle(prevActiveHandle);
      prevActiveHandle = handleDomNode;
      handleDomNode.classList.add("connecting", "react-flow__handle-connecting");
      handleDomNode.classList.toggle("valid", isValid);
      handleDomNode.classList.toggle("react-flow__handle-valid", isValid);
    }
  }
  function onPointerUp(event2) {
    if ((closestHandle || handleDomNode) && connection && isValid) {
      onConnect?.(connection);
    }
    getState().onConnectEnd?.(event2);
    if (edgeUpdaterType) {
      onReconnectEnd?.(event2);
    }
    resetRecentHandle(prevActiveHandle);
    cancelConnection();
    cancelAnimationFrame(autoPanId);
    autoPanStarted = false;
    isValid = false;
    connection = null;
    handleDomNode = null;
    doc.removeEventListener("mousemove", onPointerMove);
    doc.removeEventListener("mouseup", onPointerUp);
    doc.removeEventListener("touchmove", onPointerMove);
    doc.removeEventListener("touchend", onPointerUp);
  }
  doc.addEventListener("mousemove", onPointerMove);
  doc.addEventListener("mouseup", onPointerUp);
  doc.addEventListener("touchmove", onPointerMove);
  doc.addEventListener("touchend", onPointerUp);
}
const alwaysValid = () => true;
const selector$f = (s) => ({
  connectionStartHandle: s.connectionStartHandle,
  connectOnClick: s.connectOnClick,
  noPanClassName: s.noPanClassName
});
const connectingSelector = (nodeId, handleId, type) => (state) => {
  const { connectionStartHandle: startHandle, connectionEndHandle: endHandle, connectionClickStartHandle: clickHandle } = state;
  return {
    connecting: startHandle?.nodeId === nodeId && startHandle?.handleId === handleId && startHandle?.type === type || endHandle?.nodeId === nodeId && endHandle?.handleId === handleId && endHandle?.type === type,
    clickConnecting: clickHandle?.nodeId === nodeId && clickHandle?.handleId === handleId && clickHandle?.type === type
  };
};
const Handle = forwardRef$3(({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id, onConnect, children, className, onMouseDown, onTouchStart, ...rest }, ref) => {
  const handleId = id || null;
  const isTarget = type === "target";
  const store = useStoreApi();
  const nodeId = useNodeId();
  const { connectOnClick, noPanClassName } = useStore(selector$f, shallow$1);
  const { connecting, clickConnecting } = useStore(connectingSelector(nodeId, handleId, type), shallow$1);
  if (!nodeId) {
    store.getState().onError?.("010", errorMessages["error010"]());
  }
  const onConnectExtended = (params) => {
    const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
    const edgeParams = {
      ...defaultEdgeOptions,
      ...params
    };
    if (hasDefaultEdges) {
      const { edges, setEdges } = store.getState();
      setEdges(addEdge(edgeParams, edges));
    }
    onConnectAction?.(edgeParams);
    onConnect?.(edgeParams);
  };
  const onPointerDown = (event) => {
    if (!nodeId) {
      return;
    }
    const isMouseTriggered = isMouseEvent(event);
    if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
      handlePointerDown({
        event,
        handleId,
        nodeId,
        onConnect: onConnectExtended,
        isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection: isValidConnection || store.getState().isValidConnection || alwaysValid
      });
    }
    if (isMouseTriggered) {
      onMouseDown?.(event);
    } else {
      onTouchStart?.(event);
    }
  };
  const onClick = (event) => {
    const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore } = store.getState();
    if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
      return;
    }
    if (!connectionClickStartHandle) {
      onClickConnectStart?.(event, { nodeId, handleId, handleType: type });
      store.setState({ connectionClickStartHandle: { nodeId, type, handleId } });
      return;
    }
    const doc = getHostForElement(event.target);
    const isValidConnectionHandler = isValidConnection || isValidConnectionStore || alwaysValid;
    const { connection, isValid } = isValidHandle({
      nodeId,
      id: handleId,
      type
    }, connectionMode, connectionClickStartHandle.nodeId, connectionClickStartHandle.handleId || null, connectionClickStartHandle.type, isValidConnectionHandler, doc);
    if (isValid) {
      onConnectExtended(connection);
    }
    onClickConnectEnd?.(event);
    store.setState({ connectionClickStartHandle: null });
  };
  return React$9.createElement("div", { "data-handleid": handleId, "data-nodeid": nodeId, "data-handlepos": position, "data-id": `${nodeId}-${handleId}-${type}`, className: cc([
    "react-flow__handle",
    `react-flow__handle-${position}`,
    "nodrag",
    noPanClassName,
    className,
    {
      source: !isTarget,
      target: isTarget,
      connectable: isConnectable,
      connectablestart: isConnectableStart,
      connectableend: isConnectableEnd,
      connecting: clickConnecting,
      // this class is used to style the handle when the user is connecting
      connectionindicator: isConnectable && (isConnectableStart && !connecting || isConnectableEnd && connecting)
    }
  ]), onMouseDown: onPointerDown, onTouchStart: onPointerDown, onClick: connectOnClick ? onClick : void 0, ref, ...rest }, children);
});
Handle.displayName = "Handle";
var Handle$1 = memo$3(Handle);
const DefaultNode = ({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) => {
  return React$9.createElement(
    React$9.Fragment,
    null,
    React$9.createElement(Handle$1, { type: "target", position: targetPosition, isConnectable }),
    data?.label,
    React$9.createElement(Handle$1, { type: "source", position: sourcePosition, isConnectable })
  );
};
DefaultNode.displayName = "DefaultNode";
var DefaultNode$1 = memo$3(DefaultNode);
const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }) => React$9.createElement(
  React$9.Fragment,
  null,
  data?.label,
  React$9.createElement(Handle$1, { type: "source", position: sourcePosition, isConnectable })
);
InputNode.displayName = "InputNode";
var InputNode$1 = memo$3(InputNode);
const OutputNode = ({ data, isConnectable, targetPosition = Position.Top }) => React$9.createElement(
  React$9.Fragment,
  null,
  React$9.createElement(Handle$1, { type: "target", position: targetPosition, isConnectable }),
  data?.label
);
OutputNode.displayName = "OutputNode";
var OutputNode$1 = memo$3(OutputNode);
const GroupNode = () => null;
GroupNode.displayName = "GroupNode";
const selector$e = (s) => ({
  selectedNodes: s.getNodes().filter((n) => n.selected),
  selectedEdges: s.edges.filter((e) => e.selected).map((e) => ({ ...e }))
});
const selectId = (obj) => obj.id;
function areEqual(a, b) {
  return shallow$1(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
const SelectionListener = memo$3(({ onSelectionChange }) => {
  const store = useStoreApi();
  const { selectedNodes, selectedEdges } = useStore(selector$e, areEqual);
  useEffect$7(() => {
    const params = { nodes: selectedNodes, edges: selectedEdges };
    onSelectionChange?.(params);
    store.getState().onSelectionChange.forEach((fn) => fn(params));
  }, [selectedNodes, selectedEdges, onSelectionChange]);
  return null;
});
SelectionListener.displayName = "SelectionListener";
const changeSelector = (s) => !!s.onSelectionChange;
function Wrapper$1({ onSelectionChange }) {
  const storeHasSelectionChange = useStore(changeSelector);
  if (onSelectionChange || storeHasSelectionChange) {
    return React$9.createElement(SelectionListener, { onSelectionChange });
  }
  return null;
}
const selector$d = (s) => ({
  setNodes: s.setNodes,
  setEdges: s.setEdges,
  setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
  setMinZoom: s.setMinZoom,
  setMaxZoom: s.setMaxZoom,
  setTranslateExtent: s.setTranslateExtent,
  setNodeExtent: s.setNodeExtent,
  reset: s.reset
});
function useStoreUpdater(value, setStoreState) {
  useEffect$7(() => {
    if (typeof value !== "undefined") {
      setStoreState(value);
    }
  }, [value]);
}
function useDirectStoreUpdater(key, value, setState) {
  useEffect$7(() => {
    if (typeof value !== "undefined") {
      setState({ [key]: value });
    }
  }, [value]);
}
const StoreUpdater = ({ nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, elementsSelectable, connectionMode, snapGrid, snapToGrid, translateExtent, connectOnClick, defaultEdgeOptions, fitView: fitView2, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDrag, onNodeDragStart, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, nodeDragThreshold }) => {
  const { setNodes, setEdges, setDefaultNodesAndEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset } = useStore(selector$d, shallow$1);
  const store = useStoreApi();
  useEffect$7(() => {
    const edgesWithDefaults = defaultEdges?.map((e) => ({ ...e, ...defaultEdgeOptions }));
    setDefaultNodesAndEdges(defaultNodes, edgesWithDefaults);
    return () => {
      reset();
    };
  }, []);
  useDirectStoreUpdater("defaultEdgeOptions", defaultEdgeOptions, store.setState);
  useDirectStoreUpdater("connectionMode", connectionMode, store.setState);
  useDirectStoreUpdater("onConnect", onConnect, store.setState);
  useDirectStoreUpdater("onConnectStart", onConnectStart, store.setState);
  useDirectStoreUpdater("onConnectEnd", onConnectEnd, store.setState);
  useDirectStoreUpdater("onClickConnectStart", onClickConnectStart, store.setState);
  useDirectStoreUpdater("onClickConnectEnd", onClickConnectEnd, store.setState);
  useDirectStoreUpdater("nodesDraggable", nodesDraggable, store.setState);
  useDirectStoreUpdater("nodesConnectable", nodesConnectable, store.setState);
  useDirectStoreUpdater("nodesFocusable", nodesFocusable, store.setState);
  useDirectStoreUpdater("edgesFocusable", edgesFocusable, store.setState);
  useDirectStoreUpdater("edgesUpdatable", edgesUpdatable, store.setState);
  useDirectStoreUpdater("elementsSelectable", elementsSelectable, store.setState);
  useDirectStoreUpdater("elevateNodesOnSelect", elevateNodesOnSelect, store.setState);
  useDirectStoreUpdater("snapToGrid", snapToGrid, store.setState);
  useDirectStoreUpdater("snapGrid", snapGrid, store.setState);
  useDirectStoreUpdater("onNodesChange", onNodesChange, store.setState);
  useDirectStoreUpdater("onEdgesChange", onEdgesChange, store.setState);
  useDirectStoreUpdater("connectOnClick", connectOnClick, store.setState);
  useDirectStoreUpdater("fitViewOnInit", fitView2, store.setState);
  useDirectStoreUpdater("fitViewOnInitOptions", fitViewOptions, store.setState);
  useDirectStoreUpdater("onNodesDelete", onNodesDelete, store.setState);
  useDirectStoreUpdater("onEdgesDelete", onEdgesDelete, store.setState);
  useDirectStoreUpdater("onNodeDrag", onNodeDrag, store.setState);
  useDirectStoreUpdater("onNodeDragStart", onNodeDragStart, store.setState);
  useDirectStoreUpdater("onNodeDragStop", onNodeDragStop, store.setState);
  useDirectStoreUpdater("onSelectionDrag", onSelectionDrag, store.setState);
  useDirectStoreUpdater("onSelectionDragStart", onSelectionDragStart, store.setState);
  useDirectStoreUpdater("onSelectionDragStop", onSelectionDragStop, store.setState);
  useDirectStoreUpdater("noPanClassName", noPanClassName, store.setState);
  useDirectStoreUpdater("nodeOrigin", nodeOrigin, store.setState);
  useDirectStoreUpdater("rfId", rfId, store.setState);
  useDirectStoreUpdater("autoPanOnConnect", autoPanOnConnect, store.setState);
  useDirectStoreUpdater("autoPanOnNodeDrag", autoPanOnNodeDrag, store.setState);
  useDirectStoreUpdater("onError", onError, store.setState);
  useDirectStoreUpdater("connectionRadius", connectionRadius, store.setState);
  useDirectStoreUpdater("isValidConnection", isValidConnection, store.setState);
  useDirectStoreUpdater("nodeDragThreshold", nodeDragThreshold, store.setState);
  useStoreUpdater(nodes, setNodes);
  useStoreUpdater(edges, setEdges);
  useStoreUpdater(minZoom, setMinZoom);
  useStoreUpdater(maxZoom, setMaxZoom);
  useStoreUpdater(translateExtent, setTranslateExtent);
  useStoreUpdater(nodeExtent, setNodeExtent);
  return null;
};
const style = { display: "none" };
const ariaLiveStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
};
const ARIA_NODE_DESC_KEY = "react-flow__node-desc";
const ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
const ARIA_LIVE_MESSAGE = "react-flow__aria-live";
const selector$c = (s) => s.ariaLiveMessage;
function AriaLiveMessage({ rfId }) {
  const ariaLiveMessage = useStore(selector$c);
  return React$9.createElement("div", { id: `${ARIA_LIVE_MESSAGE}-${rfId}`, "aria-live": "assertive", "aria-atomic": "true", style: ariaLiveStyle }, ariaLiveMessage);
}
function A11yDescriptions({ rfId, disableKeyboardA11y }) {
  return React$9.createElement(
    React$9.Fragment,
    null,
    React$9.createElement(
      "div",
      { id: `${ARIA_NODE_DESC_KEY}-${rfId}`, style },
      "Press enter or space to select a node.",
      !disableKeyboardA11y && "You can then use the arrow keys to move the node around.",
      " Press delete to remove it and escape to cancel.",
      " "
    ),
    React$9.createElement("div", { id: `${ARIA_EDGE_DESC_KEY}-${rfId}`, style }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),
    !disableKeyboardA11y && React$9.createElement(AriaLiveMessage, { rfId })
  );
}
var useKeyPress = (keyCode = null, options = { actInsideInputWithModifier: true }) => {
  const [keyPressed, setKeyPressed] = useState$6(false);
  const modifierPressed = useRef$9(false);
  const pressedKeys = useRef$9(/* @__PURE__ */ new Set([]));
  const [keyCodes, keysToWatch] = useMemo$8(() => {
    if (keyCode !== null) {
      const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      const keys = keyCodeArr.filter((kc) => typeof kc === "string").map((kc) => kc.split("+"));
      const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
      return [keys, keysFlat];
    }
    return [[], []];
  }, [keyCode]);
  useEffect$7(() => {
    const doc = typeof document !== "undefined" ? document : null;
    const target = options?.target || doc;
    if (keyCode !== null) {
      const downHandler = (event) => {
        modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey;
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);
        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          event.preventDefault();
          setKeyPressed(true);
        }
      };
      const upHandler = (event) => {
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current.delete(event[keyOrCode]);
        }
        if (event.key === "Meta") {
          pressedKeys.current.clear();
        }
        modifierPressed.current = false;
      };
      const resetHandler = () => {
        pressedKeys.current.clear();
        setKeyPressed(false);
      };
      target?.addEventListener("keydown", downHandler);
      target?.addEventListener("keyup", upHandler);
      window.addEventListener("blur", resetHandler);
      return () => {
        target?.removeEventListener("keydown", downHandler);
        target?.removeEventListener("keyup", upHandler);
        window.removeEventListener("blur", resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
};
function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
}
function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? "code" : "key";
}
function calculateXYZPosition(node, nodeInternals, result, nodeOrigin) {
  const parentId = node.parentNode || node.parentId;
  if (!parentId) {
    return result;
  }
  const parentNode = nodeInternals.get(parentId);
  const parentNodePosition = getNodePositionWithOrigin(parentNode, nodeOrigin);
  return calculateXYZPosition(parentNode, nodeInternals, {
    x: (result.x ?? 0) + parentNodePosition.x,
    y: (result.y ?? 0) + parentNodePosition.y,
    z: (parentNode[internalsSymbol]?.z ?? 0) > (result.z ?? 0) ? parentNode[internalsSymbol]?.z ?? 0 : result.z ?? 0
  }, nodeOrigin);
}
function updateAbsoluteNodePositions(nodeInternals, nodeOrigin, parentNodes) {
  nodeInternals.forEach((node) => {
    const parentId = node.parentNode || node.parentId;
    if (parentId && !nodeInternals.has(parentId)) {
      throw new Error(`Parent node ${parentId} not found`);
    }
    if (parentId || parentNodes?.[node.id]) {
      const { x, y, z } = calculateXYZPosition(node, nodeInternals, {
        ...node.position,
        z: node[internalsSymbol]?.z ?? 0
      }, nodeOrigin);
      node.positionAbsolute = {
        x,
        y
      };
      node[internalsSymbol].z = z;
      if (parentNodes?.[node.id]) {
        node[internalsSymbol].isParent = true;
      }
    }
  });
}
function createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) {
  const nextNodeInternals = /* @__PURE__ */ new Map();
  const parentNodes = {};
  const selectedNodeZ = elevateNodesOnSelect ? 1e3 : 0;
  nodes.forEach((node) => {
    const z = (isNumeric(node.zIndex) ? node.zIndex : 0) + (node.selected ? selectedNodeZ : 0);
    const currInternals = nodeInternals.get(node.id);
    const internals = {
      ...node,
      positionAbsolute: {
        x: node.position.x,
        y: node.position.y
      }
    };
    const parentId = node.parentNode || node.parentId;
    if (parentId) {
      parentNodes[parentId] = true;
    }
    const resetHandleBounds = currInternals?.type && currInternals?.type !== node.type;
    Object.defineProperty(internals, internalsSymbol, {
      enumerable: false,
      value: {
        handleBounds: resetHandleBounds ? void 0 : currInternals?.[internalsSymbol]?.handleBounds,
        z
      }
    });
    nextNodeInternals.set(node.id, internals);
  });
  updateAbsoluteNodePositions(nextNodeInternals, nodeOrigin, parentNodes);
  return nextNodeInternals;
}
function fitView(get, options = {}) {
  const { getNodes, width, height, minZoom, maxZoom, d3Zoom, d3Selection, fitViewOnInitDone, fitViewOnInit, nodeOrigin } = get();
  const isInitialFitView = options.initial && !fitViewOnInitDone && fitViewOnInit;
  const d3initialized = d3Zoom && d3Selection;
  if (d3initialized && (isInitialFitView || !options.initial)) {
    const nodes = getNodes().filter((n) => {
      const isVisible = options.includeHiddenNodes ? n.width && n.height : !n.hidden;
      if (options.nodes?.length) {
        return isVisible && options.nodes.some((optionNode) => optionNode.id === n.id);
      }
      return isVisible;
    });
    const nodesInitialized = nodes.every((n) => n.width && n.height);
    if (nodes.length > 0 && nodesInitialized) {
      const bounds = getNodesBounds(nodes, nodeOrigin);
      const { x, y, zoom: zoom2 } = getViewportForBounds(bounds, width, height, options.minZoom ?? minZoom, options.maxZoom ?? maxZoom, options.padding ?? 0.1);
      const nextTransform = identity.translate(x, y).scale(zoom2);
      if (typeof options.duration === "number" && options.duration > 0) {
        d3Zoom.transform(getD3Transition(d3Selection, options.duration), nextTransform);
      } else {
        d3Zoom.transform(d3Selection, nextTransform);
      }
      return true;
    }
  }
  return false;
}
function handleControlledNodeSelectionChange(nodeChanges, nodeInternals) {
  nodeChanges.forEach((change) => {
    const node = nodeInternals.get(change.id);
    if (node) {
      nodeInternals.set(node.id, {
        ...node,
        [internalsSymbol]: node[internalsSymbol],
        selected: change.selected
      });
    }
  });
  return new Map(nodeInternals);
}
function handleControlledEdgeSelectionChange(edgeChanges, edges) {
  return edges.map((e) => {
    const change = edgeChanges.find((change2) => change2.id === e.id);
    if (change) {
      e.selected = change.selected;
    }
    return e;
  });
}
function updateNodesAndEdgesSelections({ changedNodes, changedEdges, get, set }) {
  const { nodeInternals, edges, onNodesChange, onEdgesChange, hasDefaultNodes, hasDefaultEdges } = get();
  if (changedNodes?.length) {
    if (hasDefaultNodes) {
      set({ nodeInternals: handleControlledNodeSelectionChange(changedNodes, nodeInternals) });
    }
    onNodesChange?.(changedNodes);
  }
  if (changedEdges?.length) {
    if (hasDefaultEdges) {
      set({ edges: handleControlledEdgeSelectionChange(changedEdges, edges) });
    }
    onEdgesChange?.(changedEdges);
  }
}
const noop$1 = () => {
};
const initialViewportHelper = {
  zoomIn: noop$1,
  zoomOut: noop$1,
  zoomTo: noop$1,
  getZoom: () => 1,
  setViewport: noop$1,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  fitView: () => false,
  setCenter: noop$1,
  fitBounds: noop$1,
  project: (position) => position,
  screenToFlowPosition: (position) => position,
  flowToScreenPosition: (position) => position,
  viewportInitialized: false
};
const selector$b = (s) => ({
  d3Zoom: s.d3Zoom,
  d3Selection: s.d3Selection
});
const useViewportHelper = () => {
  const store = useStoreApi();
  const { d3Zoom, d3Selection } = useStore(selector$b, shallow$1);
  const viewportHelperFunctions = useMemo$8(() => {
    if (d3Selection && d3Zoom) {
      return {
        zoomIn: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1.2),
        zoomOut: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1 / 1.2),
        zoomTo: (zoomLevel, options) => d3Zoom.scaleTo(getD3Transition(d3Selection, options?.duration), zoomLevel),
        getZoom: () => store.getState().transform[2],
        setViewport: (transform, options) => {
          const [x, y, zoom2] = store.getState().transform;
          const nextTransform = identity.translate(transform.x ?? x, transform.y ?? y).scale(transform.zoom ?? zoom2);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), nextTransform);
        },
        getViewport: () => {
          const [x, y, zoom2] = store.getState().transform;
          return { x, y, zoom: zoom2 };
        },
        fitView: (options) => fitView(store.getState, options),
        setCenter: (x, y, options) => {
          const { width, height, maxZoom } = store.getState();
          const nextZoom = typeof options?.zoom !== "undefined" ? options.zoom : maxZoom;
          const centerX = width / 2 - x * nextZoom;
          const centerY = height / 2 - y * nextZoom;
          const transform = identity.translate(centerX, centerY).scale(nextZoom);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform);
        },
        fitBounds: (bounds, options) => {
          const { width, height, minZoom, maxZoom } = store.getState();
          const { x, y, zoom: zoom2 } = getViewportForBounds(bounds, width, height, minZoom, maxZoom, options?.padding ?? 0.1);
          const transform = identity.translate(x, y).scale(zoom2);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform);
        },
        // @deprecated Use `screenToFlowPosition`.
        project: (position) => {
          const { transform, snapToGrid, snapGrid } = store.getState();
          console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position");
          return pointToRendererPoint(position, transform, snapToGrid, snapGrid);
        },
        screenToFlowPosition: (position) => {
          const { transform, snapToGrid, snapGrid, domNode } = store.getState();
          if (!domNode) {
            return position;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const relativePosition = {
            x: position.x - domX,
            y: position.y - domY
          };
          return pointToRendererPoint(relativePosition, transform, snapToGrid, snapGrid);
        },
        flowToScreenPosition: (position) => {
          const { transform, domNode } = store.getState();
          if (!domNode) {
            return position;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const rendererPosition = rendererPointToPoint(position, transform);
          return {
            x: rendererPosition.x + domX,
            y: rendererPosition.y + domY
          };
        },
        viewportInitialized: true
      };
    }
    return initialViewportHelper;
  }, [d3Zoom, d3Selection]);
  return viewportHelperFunctions;
};
function useReactFlow() {
  const viewportHelper = useViewportHelper();
  const store = useStoreApi();
  const getNodes = useCallback$5(() => {
    return store.getState().getNodes().map((n) => ({ ...n }));
  }, []);
  const getNode = useCallback$5((id) => {
    return store.getState().nodeInternals.get(id);
  }, []);
  const getEdges = useCallback$5(() => {
    const { edges = [] } = store.getState();
    return edges.map((e) => ({ ...e }));
  }, []);
  const getEdge = useCallback$5((id) => {
    const { edges = [] } = store.getState();
    return edges.find((e) => e.id === id);
  }, []);
  const setNodes = useCallback$5((payload) => {
    const { getNodes: getNodes2, setNodes: setNodes2, hasDefaultNodes, onNodesChange } = store.getState();
    const nodes = getNodes2();
    const nextNodes = typeof payload === "function" ? payload(nodes) : payload;
    if (hasDefaultNodes) {
      setNodes2(nextNodes);
    } else if (onNodesChange) {
      const changes = nextNodes.length === 0 ? nodes.map((node) => ({ type: "remove", id: node.id })) : nextNodes.map((node) => ({ item: node, type: "reset" }));
      onNodesChange(changes);
    }
  }, []);
  const setEdges = useCallback$5((payload) => {
    const { edges = [], setEdges: setEdges2, hasDefaultEdges, onEdgesChange } = store.getState();
    const nextEdges = typeof payload === "function" ? payload(edges) : payload;
    if (hasDefaultEdges) {
      setEdges2(nextEdges);
    } else if (onEdgesChange) {
      const changes = nextEdges.length === 0 ? edges.map((edge) => ({ type: "remove", id: edge.id })) : nextEdges.map((edge) => ({ item: edge, type: "reset" }));
      onEdgesChange(changes);
    }
  }, []);
  const addNodes = useCallback$5((payload) => {
    const nodes = Array.isArray(payload) ? payload : [payload];
    const { getNodes: getNodes2, setNodes: setNodes2, hasDefaultNodes, onNodesChange } = store.getState();
    if (hasDefaultNodes) {
      const currentNodes = getNodes2();
      const nextNodes = [...currentNodes, ...nodes];
      setNodes2(nextNodes);
    } else if (onNodesChange) {
      const changes = nodes.map((node) => ({ item: node, type: "add" }));
      onNodesChange(changes);
    }
  }, []);
  const addEdges = useCallback$5((payload) => {
    const nextEdges = Array.isArray(payload) ? payload : [payload];
    const { edges = [], setEdges: setEdges2, hasDefaultEdges, onEdgesChange } = store.getState();
    if (hasDefaultEdges) {
      setEdges2([...edges, ...nextEdges]);
    } else if (onEdgesChange) {
      const changes = nextEdges.map((edge) => ({ item: edge, type: "add" }));
      onEdgesChange(changes);
    }
  }, []);
  const toObject = useCallback$5(() => {
    const { getNodes: getNodes2, edges = [], transform } = store.getState();
    const [x, y, zoom2] = transform;
    return {
      nodes: getNodes2().map((n) => ({ ...n })),
      edges: edges.map((e) => ({ ...e })),
      viewport: {
        x,
        y,
        zoom: zoom2
      }
    };
  }, []);
  const deleteElements = useCallback$5(({ nodes: nodesDeleted, edges: edgesDeleted }) => {
    const { nodeInternals, getNodes: getNodes2, edges, hasDefaultNodes, hasDefaultEdges, onNodesDelete, onEdgesDelete, onNodesChange, onEdgesChange } = store.getState();
    const nodeIds = (nodesDeleted || []).map((node) => node.id);
    const edgeIds = (edgesDeleted || []).map((edge) => edge.id);
    const nodesToRemove = getNodes2().reduce((res, node) => {
      const parentId = node.parentNode || node.parentId;
      const parentHit = !nodeIds.includes(node.id) && parentId && res.find((n) => n.id === parentId);
      const deletable = typeof node.deletable === "boolean" ? node.deletable : true;
      if (deletable && (nodeIds.includes(node.id) || parentHit)) {
        res.push(node);
      }
      return res;
    }, []);
    const deletableEdges = edges.filter((e) => typeof e.deletable === "boolean" ? e.deletable : true);
    const initialHitEdges = deletableEdges.filter((e) => edgeIds.includes(e.id));
    if (nodesToRemove || initialHitEdges) {
      const connectedEdges = getConnectedEdges(nodesToRemove, deletableEdges);
      const edgesToRemove = [...initialHitEdges, ...connectedEdges];
      const edgeIdsToRemove = edgesToRemove.reduce((res, edge) => {
        if (!res.includes(edge.id)) {
          res.push(edge.id);
        }
        return res;
      }, []);
      if (hasDefaultEdges || hasDefaultNodes) {
        if (hasDefaultEdges) {
          store.setState({
            edges: edges.filter((e) => !edgeIdsToRemove.includes(e.id))
          });
        }
        if (hasDefaultNodes) {
          nodesToRemove.forEach((node) => {
            nodeInternals.delete(node.id);
          });
          store.setState({
            nodeInternals: new Map(nodeInternals)
          });
        }
      }
      if (edgeIdsToRemove.length > 0) {
        onEdgesDelete?.(edgesToRemove);
        if (onEdgesChange) {
          onEdgesChange(edgeIdsToRemove.map((id) => ({
            id,
            type: "remove"
          })));
        }
      }
      if (nodesToRemove.length > 0) {
        onNodesDelete?.(nodesToRemove);
        if (onNodesChange) {
          const nodeChanges = nodesToRemove.map((n) => ({ id: n.id, type: "remove" }));
          onNodesChange(nodeChanges);
        }
      }
    }
  }, []);
  const getNodeRect = useCallback$5((nodeOrRect) => {
    const isRect = isRectObject(nodeOrRect);
    const node = isRect ? null : store.getState().nodeInternals.get(nodeOrRect.id);
    if (!isRect && !node) {
      return [null, null, isRect];
    }
    const nodeRect = isRect ? nodeOrRect : nodeToRect(node);
    return [nodeRect, node, isRect];
  }, []);
  const getIntersectingNodes = useCallback$5((nodeOrRect, partially = true, nodes) => {
    const [nodeRect, node, isRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return [];
    }
    return (nodes || store.getState().getNodes()).filter((n) => {
      if (!isRect && (n.id === node.id || !n.positionAbsolute)) {
        return false;
      }
      const currNodeRect = nodeToRect(n);
      const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
      const partiallyVisible = partially && overlappingArea > 0;
      return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
    });
  }, []);
  const isNodeIntersecting = useCallback$5((nodeOrRect, area, partially = true) => {
    const [nodeRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return false;
    }
    const overlappingArea = getOverlappingArea(nodeRect, area);
    const partiallyVisible = partially && overlappingArea > 0;
    return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
  }, []);
  return useMemo$8(() => {
    return {
      ...viewportHelper,
      getNodes,
      getNode,
      getEdges,
      getEdge,
      setNodes,
      setEdges,
      addNodes,
      addEdges,
      toObject,
      deleteElements,
      getIntersectingNodes,
      isNodeIntersecting
    };
  }, [
    viewportHelper,
    getNodes,
    getNode,
    getEdges,
    getEdge,
    setNodes,
    setEdges,
    addNodes,
    addEdges,
    toObject,
    deleteElements,
    getIntersectingNodes,
    isNodeIntersecting
  ]);
}
const deleteKeyOptions = { actInsideInputWithModifier: false };
var useGlobalKeyHandler = ({ deleteKeyCode, multiSelectionKeyCode }) => {
  const store = useStoreApi();
  const { deleteElements } = useReactFlow();
  const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
  const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);
  useEffect$7(() => {
    if (deleteKeyPressed) {
      const { edges, getNodes } = store.getState();
      const selectedNodes = getNodes().filter((node) => node.selected);
      const selectedEdges = edges.filter((edge) => edge.selected);
      deleteElements({ nodes: selectedNodes, edges: selectedEdges });
      store.setState({ nodesSelectionActive: false });
    }
  }, [deleteKeyPressed]);
  useEffect$7(() => {
    store.setState({ multiSelectionActive: multiSelectionKeyPressed });
  }, [multiSelectionKeyPressed]);
};
function useResizeHandler(rendererNode) {
  const store = useStoreApi();
  useEffect$7(() => {
    let resizeObserver;
    const updateDimensions = () => {
      if (!rendererNode.current) {
        return;
      }
      const size = getDimensions(rendererNode.current);
      if (size.height === 0 || size.width === 0) {
        store.getState().onError?.("004", errorMessages["error004"]());
      }
      store.setState({ width: size.width || 500, height: size.height || 500 });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (rendererNode.current) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(rendererNode.current);
    }
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (resizeObserver && rendererNode.current) {
        resizeObserver.unobserve(rendererNode.current);
      }
    };
  }, []);
}
const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};
const viewChanged = (prevViewport, eventTransform) => prevViewport.x !== eventTransform.x || prevViewport.y !== eventTransform.y || prevViewport.zoom !== eventTransform.k;
const eventToFlowTransform = (eventTransform) => ({
  x: eventTransform.x,
  y: eventTransform.y,
  zoom: eventTransform.k
});
const isWrappedWithClass = (event, className) => event.target.closest(`.${className}`);
const isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
const wheelDelta = (event) => {
  const factor = event.ctrlKey && isMacOs() ? 10 : 1;
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
};
const selector$a = (s) => ({
  d3Zoom: s.d3Zoom,
  d3Selection: s.d3Selection,
  d3ZoomHandler: s.d3ZoomHandler,
  userSelectionActive: s.userSelectionActive
});
const ZoomPane = ({ onMove, onMoveStart, onMoveEnd, onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, elementsSelectable, panOnDrag = true, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children, noWheelClassName, noPanClassName }) => {
  const timerId = useRef$9();
  const store = useStoreApi();
  const isZoomingOrPanning = useRef$9(false);
  const zoomedWithRightMouseButton = useRef$9(false);
  const zoomPane = useRef$9(null);
  const prevTransform = useRef$9({ x: 0, y: 0, zoom: 0 });
  const { d3Zoom, d3Selection, d3ZoomHandler, userSelectionActive } = useStore(selector$a, shallow$1);
  const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  const mouseButton = useRef$9(0);
  const isPanScrolling = useRef$9(false);
  const panScrollTimeout = useRef$9();
  useResizeHandler(zoomPane);
  useEffect$7(() => {
    if (zoomPane.current) {
      const bbox = zoomPane.current.getBoundingClientRect();
      const d3ZoomInstance = zoom().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
      const selection = select(zoomPane.current).call(d3ZoomInstance);
      const updatedTransform = identity.translate(defaultViewport.x, defaultViewport.y).scale(clamp$1(defaultViewport.zoom, minZoom, maxZoom));
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = d3ZoomInstance.constrain()(updatedTransform, extent, translateExtent);
      d3ZoomInstance.transform(selection, constrainedTransform);
      d3ZoomInstance.wheelDelta(wheelDelta);
      store.setState({
        d3Zoom: d3ZoomInstance,
        d3Selection: selection,
        d3ZoomHandler: selection.on("wheel.zoom"),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [constrainedTransform.x, constrainedTransform.y, constrainedTransform.k],
        domNode: zoomPane.current.closest(".react-flow")
      });
    }
  }, []);
  useEffect$7(() => {
    if (d3Selection && d3Zoom) {
      if (panOnScroll && !zoomActivationKeyPressed && !userSelectionActive) {
        d3Selection.on("wheel.zoom", (event) => {
          if (isWrappedWithClass(event, noWheelClassName)) {
            return false;
          }
          event.preventDefault();
          event.stopImmediatePropagation();
          const currentZoom = d3Selection.property("__zoom").k || 1;
          if (event.ctrlKey && zoomOnPinch) {
            const point = pointer(event);
            const pinchDelta = wheelDelta(event);
            const zoom2 = currentZoom * Math.pow(2, pinchDelta);
            d3Zoom.scaleTo(d3Selection, zoom2, point, event);
            return;
          }
          const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
          let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
          let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
          if (!isMacOs() && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
            deltaX = event.deltaY * deltaNormalize;
            deltaY = 0;
          }
          d3Zoom.translateBy(
            d3Selection,
            -(deltaX / currentZoom) * panOnScrollSpeed,
            -(deltaY / currentZoom) * panOnScrollSpeed,
            // @ts-ignore
            { internal: true }
          );
          const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
          const { onViewportChangeStart, onViewportChange, onViewportChangeEnd } = store.getState();
          clearTimeout(panScrollTimeout.current);
          if (!isPanScrolling.current) {
            isPanScrolling.current = true;
            onMoveStart?.(event, nextViewport);
            onViewportChangeStart?.(nextViewport);
          }
          if (isPanScrolling.current) {
            onMove?.(event, nextViewport);
            onViewportChange?.(nextViewport);
            panScrollTimeout.current = setTimeout(() => {
              onMoveEnd?.(event, nextViewport);
              onViewportChangeEnd?.(nextViewport);
              isPanScrolling.current = false;
            }, 150);
          }
        }, { passive: false });
      } else if (typeof d3ZoomHandler !== "undefined") {
        d3Selection.on("wheel.zoom", function(event, d) {
          const invalidEvent = !preventScrolling && event.type === "wheel" && !event.ctrlKey;
          if (invalidEvent || isWrappedWithClass(event, noWheelClassName)) {
            return null;
          }
          event.preventDefault();
          d3ZoomHandler.call(this, event, d);
        }, { passive: false });
      }
    }
  }, [
    userSelectionActive,
    panOnScroll,
    panOnScrollMode,
    d3Selection,
    d3Zoom,
    d3ZoomHandler,
    zoomActivationKeyPressed,
    zoomOnPinch,
    preventScrolling,
    noWheelClassName,
    onMoveStart,
    onMove,
    onMoveEnd
  ]);
  useEffect$7(() => {
    if (d3Zoom) {
      d3Zoom.on("start", (event) => {
        if (!event.sourceEvent || event.sourceEvent.internal) {
          return null;
        }
        mouseButton.current = event.sourceEvent?.button;
        const { onViewportChangeStart } = store.getState();
        const flowTransform = eventToFlowTransform(event.transform);
        isZoomingOrPanning.current = true;
        prevTransform.current = flowTransform;
        if (event.sourceEvent?.type === "mousedown") {
          store.setState({ paneDragging: true });
        }
        onViewportChangeStart?.(flowTransform);
        onMoveStart?.(event.sourceEvent, flowTransform);
      });
    }
  }, [d3Zoom, onMoveStart]);
  useEffect$7(() => {
    if (d3Zoom) {
      if (userSelectionActive && !isZoomingOrPanning.current) {
        d3Zoom.on("zoom", null);
      } else if (!userSelectionActive) {
        d3Zoom.on("zoom", (event) => {
          const { onViewportChange } = store.getState();
          store.setState({ transform: [event.transform.x, event.transform.y, event.transform.k] });
          zoomedWithRightMouseButton.current = !!(onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0));
          if ((onMove || onViewportChange) && !event.sourceEvent?.internal) {
            const flowTransform = eventToFlowTransform(event.transform);
            onViewportChange?.(flowTransform);
            onMove?.(event.sourceEvent, flowTransform);
          }
        });
      }
    }
  }, [userSelectionActive, d3Zoom, onMove, panOnDrag, onPaneContextMenu]);
  useEffect$7(() => {
    if (d3Zoom) {
      d3Zoom.on("end", (event) => {
        if (!event.sourceEvent || event.sourceEvent.internal) {
          return null;
        }
        const { onViewportChangeEnd } = store.getState();
        isZoomingOrPanning.current = false;
        store.setState({ paneDragging: false });
        if (onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0) && !zoomedWithRightMouseButton.current) {
          onPaneContextMenu(event.sourceEvent);
        }
        zoomedWithRightMouseButton.current = false;
        if ((onMoveEnd || onViewportChangeEnd) && viewChanged(prevTransform.current, event.transform)) {
          const flowTransform = eventToFlowTransform(event.transform);
          prevTransform.current = flowTransform;
          clearTimeout(timerId.current);
          timerId.current = setTimeout(() => {
            onViewportChangeEnd?.(flowTransform);
            onMoveEnd?.(event.sourceEvent, flowTransform);
          }, panOnScroll ? 150 : 0);
        }
      });
    }
  }, [d3Zoom, panOnScroll, panOnDrag, onMoveEnd, onPaneContextMenu]);
  useEffect$7(() => {
    if (d3Zoom) {
      d3Zoom.filter((event) => {
        const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
        const pinchZoom = zoomOnPinch && event.ctrlKey;
        if ((panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(1)) && event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, "react-flow__node") || isWrappedWithClass(event, "react-flow__edge"))) {
          return true;
        }
        if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
          return false;
        }
        if (userSelectionActive) {
          return false;
        }
        if (!zoomOnDoubleClick && event.type === "dblclick") {
          return false;
        }
        if (isWrappedWithClass(event, noWheelClassName) && event.type === "wheel") {
          return false;
        }
        if (isWrappedWithClass(event, noPanClassName) && (event.type !== "wheel" || panOnScroll && event.type === "wheel" && !zoomActivationKeyPressed)) {
          return false;
        }
        if (!zoomOnPinch && event.ctrlKey && event.type === "wheel") {
          return false;
        }
        if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === "wheel") {
          return false;
        }
        if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && event.type === "mousedown") {
          return false;
        }
        const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
        return (!event.ctrlKey || event.type === "wheel") && buttonAllowed;
      });
    }
  }, [
    userSelectionActive,
    d3Zoom,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll,
    zoomOnDoubleClick,
    panOnDrag,
    elementsSelectable,
    zoomActivationKeyPressed
  ]);
  return React$9.createElement("div", { className: "react-flow__renderer", ref: zoomPane, style: containerStyle }, children);
};
const selector$9 = (s) => ({
  userSelectionActive: s.userSelectionActive,
  userSelectionRect: s.userSelectionRect
});
function UserSelection() {
  const { userSelectionActive, userSelectionRect } = useStore(selector$9, shallow$1);
  const isActive = userSelectionActive && userSelectionRect;
  if (!isActive) {
    return null;
  }
  return React$9.createElement("div", { className: "react-flow__selection react-flow__container", style: {
    width: userSelectionRect.width,
    height: userSelectionRect.height,
    transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
  } });
}
function handleParentExpand(res, updateItem) {
  const parentId = updateItem.parentNode || updateItem.parentId;
  const parent = res.find((e) => e.id === parentId);
  if (parent) {
    const extendWidth = updateItem.position.x + updateItem.width - parent.width;
    const extendHeight = updateItem.position.y + updateItem.height - parent.height;
    if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
      parent.style = { ...parent.style };
      parent.style.width = parent.style.width ?? parent.width;
      parent.style.height = parent.style.height ?? parent.height;
      if (extendWidth > 0) {
        parent.style.width += extendWidth;
      }
      if (extendHeight > 0) {
        parent.style.height += extendHeight;
      }
      if (updateItem.position.x < 0) {
        const xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        parent.style.width += xDiff;
        updateItem.position.x = 0;
      }
      if (updateItem.position.y < 0) {
        const yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        parent.style.height += yDiff;
        updateItem.position.y = 0;
      }
      parent.width = parent.style.width;
      parent.height = parent.style.height;
    }
  }
}
function applyChanges(changes, elements) {
  if (changes.some((c) => c.type === "reset")) {
    return changes.filter((c) => c.type === "reset").map((c) => c.item);
  }
  const initElements = changes.filter((c) => c.type === "add").map((c) => c.item);
  return elements.reduce((res, item) => {
    const currentChanges = changes.filter((c) => c.id === item.id);
    if (currentChanges.length === 0) {
      res.push(item);
      return res;
    }
    const updateItem = { ...item };
    for (const currentChange of currentChanges) {
      if (currentChange) {
        switch (currentChange.type) {
          case "select": {
            updateItem.selected = currentChange.selected;
            break;
          }
          case "position": {
            if (typeof currentChange.position !== "undefined") {
              updateItem.position = currentChange.position;
            }
            if (typeof currentChange.positionAbsolute !== "undefined") {
              updateItem.positionAbsolute = currentChange.positionAbsolute;
            }
            if (typeof currentChange.dragging !== "undefined") {
              updateItem.dragging = currentChange.dragging;
            }
            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "dimensions": {
            if (typeof currentChange.dimensions !== "undefined") {
              updateItem.width = currentChange.dimensions.width;
              updateItem.height = currentChange.dimensions.height;
            }
            if (typeof currentChange.updateStyle !== "undefined") {
              updateItem.style = { ...updateItem.style || {}, ...currentChange.dimensions };
            }
            if (typeof currentChange.resizing === "boolean") {
              updateItem.resizing = currentChange.resizing;
            }
            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "remove": {
            return res;
          }
        }
      }
    }
    res.push(updateItem);
    return res;
  }, initElements);
}
function applyNodeChanges(changes, nodes) {
  return applyChanges(changes, nodes);
}
function applyEdgeChanges(changes, edges) {
  return applyChanges(changes, edges);
}
const createSelectionChange = (id, selected) => ({
  id,
  type: "select",
  selected
});
function getSelectionChanges(items, selectedIds) {
  return items.reduce((res, item) => {
    const willBeSelected = selectedIds.includes(item.id);
    if (!item.selected && willBeSelected) {
      item.selected = true;
      res.push(createSelectionChange(item.id, true));
    } else if (item.selected && !willBeSelected) {
      item.selected = false;
      res.push(createSelectionChange(item.id, false));
    }
    return res;
  }, []);
}
const wrapHandler = (handler, containerRef) => {
  return (event) => {
    if (event.target !== containerRef.current) {
      return;
    }
    handler?.(event);
  };
};
const selector$8 = (s) => ({
  userSelectionActive: s.userSelectionActive,
  elementsSelectable: s.elementsSelectable,
  dragging: s.paneDragging
});
const Pane = memo$3(({ isSelecting, selectionMode = SelectionMode.Full, panOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children }) => {
  const container = useRef$9(null);
  const store = useStoreApi();
  const prevSelectedNodesCount = useRef$9(0);
  const prevSelectedEdgesCount = useRef$9(0);
  const containerBounds = useRef$9();
  const { userSelectionActive, elementsSelectable, dragging } = useStore(selector$8, shallow$1);
  const resetUserSelection = () => {
    store.setState({ userSelectionActive: false, userSelectionRect: null });
    prevSelectedNodesCount.current = 0;
    prevSelectedEdgesCount.current = 0;
  };
  const onClick = (event) => {
    onPaneClick?.(event);
    store.getState().resetSelectedElements();
    store.setState({ nodesSelectionActive: false });
  };
  const onContextMenu = (event) => {
    if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
      event.preventDefault();
      return;
    }
    onPaneContextMenu?.(event);
  };
  const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
  const onMouseDown = (event) => {
    const { resetSelectedElements, domNode } = store.getState();
    containerBounds.current = domNode?.getBoundingClientRect();
    if (!elementsSelectable || !isSelecting || event.button !== 0 || event.target !== container.current || !containerBounds.current) {
      return;
    }
    const { x, y } = getEventPosition(event, containerBounds.current);
    resetSelectedElements();
    store.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: x,
        startY: y,
        x,
        y
      }
    });
    onSelectionStart?.(event);
  };
  const onMouseMove = (event) => {
    const { userSelectionRect, nodeInternals, edges, transform, onNodesChange, onEdgesChange, nodeOrigin, getNodes } = store.getState();
    if (!isSelecting || !containerBounds.current || !userSelectionRect) {
      return;
    }
    store.setState({ userSelectionActive: true, nodesSelectionActive: false });
    const mousePos = getEventPosition(event, containerBounds.current);
    const startX = userSelectionRect.startX ?? 0;
    const startY = userSelectionRect.startY ?? 0;
    const nextUserSelectRect = {
      ...userSelectionRect,
      x: mousePos.x < startX ? mousePos.x : startX,
      y: mousePos.y < startY ? mousePos.y : startY,
      width: Math.abs(mousePos.x - startX),
      height: Math.abs(mousePos.y - startY)
    };
    const nodes = getNodes();
    const selectedNodes = getNodesInside(nodeInternals, nextUserSelectRect, transform, selectionMode === SelectionMode.Partial, true, nodeOrigin);
    const selectedEdgeIds = getConnectedEdges(selectedNodes, edges).map((e) => e.id);
    const selectedNodeIds = selectedNodes.map((n) => n.id);
    if (prevSelectedNodesCount.current !== selectedNodeIds.length) {
      prevSelectedNodesCount.current = selectedNodeIds.length;
      const changes = getSelectionChanges(nodes, selectedNodeIds);
      if (changes.length) {
        onNodesChange?.(changes);
      }
    }
    if (prevSelectedEdgesCount.current !== selectedEdgeIds.length) {
      prevSelectedEdgesCount.current = selectedEdgeIds.length;
      const changes = getSelectionChanges(edges, selectedEdgeIds);
      if (changes.length) {
        onEdgesChange?.(changes);
      }
    }
    store.setState({
      userSelectionRect: nextUserSelectRect
    });
  };
  const onMouseUp = (event) => {
    if (event.button !== 0) {
      return;
    }
    const { userSelectionRect } = store.getState();
    if (!userSelectionActive && userSelectionRect && event.target === container.current) {
      onClick?.(event);
    }
    store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
    resetUserSelection();
    onSelectionEnd?.(event);
  };
  const onMouseLeave = (event) => {
    if (userSelectionActive) {
      store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
      onSelectionEnd?.(event);
    }
    resetUserSelection();
  };
  const hasActiveSelection = elementsSelectable && (isSelecting || userSelectionActive);
  return React$9.createElement(
    "div",
    { className: cc(["react-flow__pane", { dragging, selection: isSelecting }]), onClick: hasActiveSelection ? void 0 : wrapHandler(onClick, container), onContextMenu: wrapHandler(onContextMenu, container), onWheel: wrapHandler(onWheel, container), onMouseEnter: hasActiveSelection ? void 0 : onPaneMouseEnter, onMouseDown: hasActiveSelection ? onMouseDown : void 0, onMouseMove: hasActiveSelection ? onMouseMove : onPaneMouseMove, onMouseUp: hasActiveSelection ? onMouseUp : void 0, onMouseLeave: hasActiveSelection ? onMouseLeave : onPaneMouseLeave, ref: container, style: containerStyle },
    children,
    React$9.createElement(UserSelection, null)
  );
});
Pane.displayName = "Pane";
function isParentSelected(node, nodeInternals) {
  const parentId = node.parentNode || node.parentId;
  if (!parentId) {
    return false;
  }
  const parentNode = nodeInternals.get(parentId);
  if (!parentNode) {
    return false;
  }
  if (parentNode.selected) {
    return true;
  }
  return isParentSelected(parentNode, nodeInternals);
}
function hasSelector(target, selector2, nodeRef) {
  let current = target;
  do {
    if (current?.matches(selector2))
      return true;
    if (current === nodeRef.current)
      return false;
    current = current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodeInternals, nodesDraggable, mousePos, nodeId) {
  return Array.from(nodeInternals.values()).filter((n) => (n.selected || n.id === nodeId) && (!n.parentNode || n.parentId || !isParentSelected(n, nodeInternals)) && (n.draggable || nodesDraggable && typeof n.draggable === "undefined")).map((n) => ({
    id: n.id,
    position: n.position || { x: 0, y: 0 },
    positionAbsolute: n.positionAbsolute || { x: 0, y: 0 },
    distance: {
      x: mousePos.x - (n.positionAbsolute?.x ?? 0),
      y: mousePos.y - (n.positionAbsolute?.y ?? 0)
    },
    delta: {
      x: 0,
      y: 0
    },
    extent: n.extent,
    parentNode: n.parentNode || n.parentId,
    parentId: n.parentNode || n.parentId,
    width: n.width,
    height: n.height,
    expandParent: n.expandParent
  }));
}
function clampNodeExtent(node, extent) {
  if (!extent || extent === "parent") {
    return extent;
  }
  return [extent[0], [extent[1][0] - (node.width || 0), extent[1][1] - (node.height || 0)]];
}
function calcNextPosition(node, nextPosition, nodeInternals, nodeExtent, nodeOrigin = [0, 0], onError) {
  const clampedNodeExtent = clampNodeExtent(node, node.extent || nodeExtent);
  let currentExtent = clampedNodeExtent;
  const parentId = node.parentNode || node.parentId;
  if (node.extent === "parent" && !node.expandParent) {
    if (parentId && node.width && node.height) {
      const parent = nodeInternals.get(parentId);
      const { x: parentX, y: parentY } = getNodePositionWithOrigin(parent, nodeOrigin).positionAbsolute;
      currentExtent = parent && isNumeric(parentX) && isNumeric(parentY) && isNumeric(parent.width) && isNumeric(parent.height) ? [
        [parentX + node.width * nodeOrigin[0], parentY + node.height * nodeOrigin[1]],
        [
          parentX + parent.width - node.width + node.width * nodeOrigin[0],
          parentY + parent.height - node.height + node.height * nodeOrigin[1]
        ]
      ] : currentExtent;
    } else {
      onError?.("005", errorMessages["error005"]());
      currentExtent = clampedNodeExtent;
    }
  } else if (node.extent && parentId && node.extent !== "parent") {
    const parent = nodeInternals.get(parentId);
    const { x: parentX, y: parentY } = getNodePositionWithOrigin(parent, nodeOrigin).positionAbsolute;
    currentExtent = [
      [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
      [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
    ];
  }
  let parentPosition = { x: 0, y: 0 };
  if (parentId) {
    const parentNode = nodeInternals.get(parentId);
    parentPosition = getNodePositionWithOrigin(parentNode, nodeOrigin).positionAbsolute;
  }
  const positionAbsolute = currentExtent && currentExtent !== "parent" ? clampPosition(nextPosition, currentExtent) : nextPosition;
  return {
    position: {
      x: positionAbsolute.x - parentPosition.x,
      y: positionAbsolute.y - parentPosition.y
    },
    positionAbsolute
  };
}
function getEventHandlerParams({ nodeId, dragItems, nodeInternals }) {
  const extentedDragItems = dragItems.map((n) => {
    const node = nodeInternals.get(n.id);
    return {
      ...node,
      position: n.position,
      positionAbsolute: n.positionAbsolute
    };
  });
  return [nodeId ? extentedDragItems.find((n) => n.id === nodeId) : extentedDragItems[0], extentedDragItems];
}
const getHandleBounds = (selector2, nodeElement, zoom2, nodeOrigin) => {
  const handles = nodeElement.querySelectorAll(selector2);
  if (!handles || !handles.length) {
    return null;
  }
  const handlesArray = Array.from(handles);
  const nodeBounds = nodeElement.getBoundingClientRect();
  const nodeOffset = {
    x: nodeBounds.width * nodeOrigin[0],
    y: nodeBounds.height * nodeOrigin[1]
  };
  return handlesArray.map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left - nodeOffset.x) / zoom2,
      y: (handleBounds.top - nodeBounds.top - nodeOffset.y) / zoom2,
      ...getDimensions(handle)
    };
  });
};
function getMouseHandler(id, getState, handler) {
  return handler === void 0 ? handler : (event) => {
    const node = getState().nodeInternals.get(id);
    if (node) {
      handler(event, { ...node });
    }
  };
}
function handleNodeClick({ id, store, unselect = false, nodeRef }) {
  const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeInternals, onError } = store.getState();
  const node = nodeInternals.get(id);
  if (!node) {
    onError?.("012", errorMessages["error012"](id));
    return;
  }
  store.setState({ nodesSelectionActive: false });
  if (!node.selected) {
    addSelectedNodes([id]);
  } else if (unselect || node.selected && multiSelectionActive) {
    unselectNodesAndEdges({ nodes: [node], edges: [] });
    requestAnimationFrame(() => nodeRef?.current?.blur());
  }
}
function useGetPointerPosition() {
  const store = useStoreApi();
  const getPointerPosition = useCallback$5(({ sourceEvent }) => {
    const { transform, snapGrid, snapToGrid } = store.getState();
    const x = sourceEvent.touches ? sourceEvent.touches[0].clientX : sourceEvent.clientX;
    const y = sourceEvent.touches ? sourceEvent.touches[0].clientY : sourceEvent.clientY;
    const pointerPos = {
      x: (x - transform[0]) / transform[2],
      y: (y - transform[1]) / transform[2]
    };
    return {
      xSnapped: snapToGrid ? snapGrid[0] * Math.round(pointerPos.x / snapGrid[0]) : pointerPos.x,
      ySnapped: snapToGrid ? snapGrid[1] * Math.round(pointerPos.y / snapGrid[1]) : pointerPos.y,
      ...pointerPos
    };
  }, []);
  return getPointerPosition;
}
function wrapSelectionDragFunc(selectionFunc) {
  return (event, _, nodes) => selectionFunc?.(event, nodes);
}
function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, selectNodesOnDrag }) {
  const store = useStoreApi();
  const [dragging, setDragging] = useState$6(false);
  const dragItems = useRef$9([]);
  const lastPos = useRef$9({ x: null, y: null });
  const autoPanId = useRef$9(0);
  const containerBounds = useRef$9(null);
  const mousePosition = useRef$9({ x: 0, y: 0 });
  const dragEvent = useRef$9(null);
  const autoPanStarted = useRef$9(false);
  const dragStarted = useRef$9(false);
  const abortDrag = useRef$9(false);
  const getPointerPosition = useGetPointerPosition();
  useEffect$7(() => {
    if (nodeRef?.current) {
      const selection = select(nodeRef.current);
      const updateNodes = ({ x, y }) => {
        const { nodeInternals, onNodeDrag, onSelectionDrag, updateNodePositions, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onError } = store.getState();
        lastPos.current = { x, y };
        let hasChange = false;
        let nodesBox = { x: 0, y: 0, x2: 0, y2: 0 };
        if (dragItems.current.length > 1 && nodeExtent) {
          const rect = getNodesBounds(dragItems.current, nodeOrigin);
          nodesBox = rectToBox(rect);
        }
        dragItems.current = dragItems.current.map((n) => {
          const nextPosition = { x: x - n.distance.x, y: y - n.distance.y };
          if (snapToGrid) {
            nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
            nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
          }
          const adjustedNodeExtent = [
            [nodeExtent[0][0], nodeExtent[0][1]],
            [nodeExtent[1][0], nodeExtent[1][1]]
          ];
          if (dragItems.current.length > 1 && nodeExtent && !n.extent) {
            adjustedNodeExtent[0][0] = n.positionAbsolute.x - nodesBox.x + nodeExtent[0][0];
            adjustedNodeExtent[1][0] = n.positionAbsolute.x + (n.width ?? 0) - nodesBox.x2 + nodeExtent[1][0];
            adjustedNodeExtent[0][1] = n.positionAbsolute.y - nodesBox.y + nodeExtent[0][1];
            adjustedNodeExtent[1][1] = n.positionAbsolute.y + (n.height ?? 0) - nodesBox.y2 + nodeExtent[1][1];
          }
          const updatedPos = calcNextPosition(n, nextPosition, nodeInternals, adjustedNodeExtent, nodeOrigin, onError);
          hasChange = hasChange || n.position.x !== updatedPos.position.x || n.position.y !== updatedPos.position.y;
          n.position = updatedPos.position;
          n.positionAbsolute = updatedPos.positionAbsolute;
          return n;
        });
        if (!hasChange) {
          return;
        }
        updateNodePositions(dragItems.current, true, true);
        setDragging(true);
        const onDrag = nodeId ? onNodeDrag : wrapSelectionDragFunc(onSelectionDrag);
        if (onDrag && dragEvent.current) {
          const [currentNode, nodes] = getEventHandlerParams({
            nodeId,
            dragItems: dragItems.current,
            nodeInternals
          });
          onDrag(dragEvent.current, currentNode, nodes);
        }
      };
      const autoPan = () => {
        if (!containerBounds.current) {
          return;
        }
        const [xMovement, yMovement] = calcAutoPan(mousePosition.current, containerBounds.current);
        if (xMovement !== 0 || yMovement !== 0) {
          const { transform, panBy } = store.getState();
          lastPos.current.x = (lastPos.current.x ?? 0) - xMovement / transform[2];
          lastPos.current.y = (lastPos.current.y ?? 0) - yMovement / transform[2];
          if (panBy({ x: xMovement, y: yMovement })) {
            updateNodes(lastPos.current);
          }
        }
        autoPanId.current = requestAnimationFrame(autoPan);
      };
      const startDrag = (event) => {
        const { nodeInternals, multiSelectionActive, nodesDraggable, unselectNodesAndEdges, onNodeDragStart, onSelectionDragStart } = store.getState();
        dragStarted.current = true;
        const onStart = nodeId ? onNodeDragStart : wrapSelectionDragFunc(onSelectionDragStart);
        if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
          if (!nodeInternals.get(nodeId)?.selected) {
            unselectNodesAndEdges();
          }
        }
        if (nodeId && isSelectable && selectNodesOnDrag) {
          handleNodeClick({
            id: nodeId,
            store,
            nodeRef
          });
        }
        const pointerPos = getPointerPosition(event);
        lastPos.current = pointerPos;
        dragItems.current = getDragItems(nodeInternals, nodesDraggable, pointerPos, nodeId);
        if (onStart && dragItems.current) {
          const [currentNode, nodes] = getEventHandlerParams({
            nodeId,
            dragItems: dragItems.current,
            nodeInternals
          });
          onStart(event.sourceEvent, currentNode, nodes);
        }
      };
      if (disabled) {
        selection.on(".drag", null);
      } else {
        const dragHandler = drag$1().on("start", (event) => {
          const { domNode, nodeDragThreshold } = store.getState();
          if (nodeDragThreshold === 0) {
            startDrag(event);
          }
          abortDrag.current = false;
          const pointerPos = getPointerPosition(event);
          lastPos.current = pointerPos;
          containerBounds.current = domNode?.getBoundingClientRect() || null;
          mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
        }).on("drag", (event) => {
          const pointerPos = getPointerPosition(event);
          const { autoPanOnNodeDrag, nodeDragThreshold } = store.getState();
          if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1) {
            abortDrag.current = true;
          }
          if (abortDrag.current) {
            return;
          }
          if (!autoPanStarted.current && dragStarted.current && autoPanOnNodeDrag) {
            autoPanStarted.current = true;
            autoPan();
          }
          if (!dragStarted.current) {
            const x = pointerPos.xSnapped - (lastPos?.current?.x ?? 0);
            const y = pointerPos.ySnapped - (lastPos?.current?.y ?? 0);
            const distance2 = Math.sqrt(x * x + y * y);
            if (distance2 > nodeDragThreshold) {
              startDrag(event);
            }
          }
          if ((lastPos.current.x !== pointerPos.xSnapped || lastPos.current.y !== pointerPos.ySnapped) && dragItems.current && dragStarted.current) {
            dragEvent.current = event.sourceEvent;
            mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
            updateNodes(pointerPos);
          }
        }).on("end", (event) => {
          if (!dragStarted.current || abortDrag.current) {
            return;
          }
          setDragging(false);
          autoPanStarted.current = false;
          dragStarted.current = false;
          cancelAnimationFrame(autoPanId.current);
          if (dragItems.current) {
            const { updateNodePositions, nodeInternals, onNodeDragStop, onSelectionDragStop } = store.getState();
            const onStop = nodeId ? onNodeDragStop : wrapSelectionDragFunc(onSelectionDragStop);
            updateNodePositions(dragItems.current, false, false);
            if (onStop) {
              const [currentNode, nodes] = getEventHandlerParams({
                nodeId,
                dragItems: dragItems.current,
                nodeInternals
              });
              onStop(event.sourceEvent, currentNode, nodes);
            }
          }
        }).filter((event) => {
          const target = event.target;
          const isDraggable = !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, nodeRef)) && (!handleSelector || hasSelector(target, handleSelector, nodeRef));
          return isDraggable;
        });
        selection.call(dragHandler);
        return () => {
          selection.on(".drag", null);
        };
      }
    }
  }, [
    nodeRef,
    disabled,
    noDragClassName,
    handleSelector,
    isSelectable,
    store,
    nodeId,
    selectNodesOnDrag,
    getPointerPosition
  ]);
  return dragging;
}
function useUpdateNodePositions() {
  const store = useStoreApi();
  const updatePositions = useCallback$5((params) => {
    const { nodeInternals, nodeExtent, updateNodePositions, getNodes, snapToGrid, snapGrid, onError, nodesDraggable } = store.getState();
    const selectedNodes = getNodes().filter((n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined"));
    const xVelo = snapToGrid ? snapGrid[0] : 5;
    const yVelo = snapToGrid ? snapGrid[1] : 5;
    const factor = params.isShiftPressed ? 4 : 1;
    const positionDiffX = params.x * xVelo * factor;
    const positionDiffY = params.y * yVelo * factor;
    const nodeUpdates = selectedNodes.map((n) => {
      if (n.positionAbsolute) {
        const nextPosition = { x: n.positionAbsolute.x + positionDiffX, y: n.positionAbsolute.y + positionDiffY };
        if (snapToGrid) {
          nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
          nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
        }
        const { positionAbsolute, position } = calcNextPosition(n, nextPosition, nodeInternals, nodeExtent, void 0, onError);
        n.position = position;
        n.positionAbsolute = positionAbsolute;
      }
      return n;
    });
    updateNodePositions(nodeUpdates, true, false);
  }, []);
  return updatePositions;
}
const arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var wrapNode = (NodeComponent) => {
  const NodeWrapper = ({ id, type, data, xPos, yPos, xPosOrigin, yPosOrigin, selected, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, style: style2, className, isDraggable, isSelectable, isConnectable, isFocusable, selectNodesOnDrag, sourcePosition, targetPosition, hidden, resizeObserver, dragHandle, zIndex, isParent, noDragClassName, noPanClassName, initialized, disableKeyboardA11y, ariaLabel, rfId, hasHandleBounds }) => {
    const store = useStoreApi();
    const nodeRef = useRef$9(null);
    const prevNodeRef = useRef$9(null);
    const prevSourcePosition = useRef$9(sourcePosition);
    const prevTargetPosition = useRef$9(targetPosition);
    const prevType = useRef$9(type);
    const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    const updatePositions = useUpdateNodePositions();
    const onMouseEnterHandler = getMouseHandler(id, store.getState, onMouseEnter);
    const onMouseMoveHandler = getMouseHandler(id, store.getState, onMouseMove);
    const onMouseLeaveHandler = getMouseHandler(id, store.getState, onMouseLeave);
    const onContextMenuHandler = getMouseHandler(id, store.getState, onContextMenu);
    const onDoubleClickHandler = getMouseHandler(id, store.getState, onDoubleClick);
    const onSelectNodeHandler = (event) => {
      const { nodeDragThreshold } = store.getState();
      if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
        handleNodeClick({
          id,
          store,
          nodeRef
        });
      }
      if (onClick) {
        const node = store.getState().nodeInternals.get(id);
        if (node) {
          onClick(event, { ...node });
        }
      }
    };
    const onKeyDown = (event) => {
      if (isInputDOMNode(event)) {
        return;
      }
      if (disableKeyboardA11y) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable) {
        const unselect = event.key === "Escape";
        handleNodeClick({
          id,
          store,
          unselect,
          nodeRef
        });
      } else if (isDraggable && selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
        store.setState({
          ariaLiveMessage: `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~xPos}, y: ${~~yPos}`
        });
        updatePositions({
          x: arrowKeyDiffs[event.key].x,
          y: arrowKeyDiffs[event.key].y,
          isShiftPressed: event.shiftKey
        });
      }
    };
    useEffect$7(() => {
      return () => {
        if (prevNodeRef.current) {
          resizeObserver?.unobserve(prevNodeRef.current);
          prevNodeRef.current = null;
        }
      };
    }, []);
    useEffect$7(() => {
      if (nodeRef.current && !hidden) {
        const currNode = nodeRef.current;
        if (!initialized || !hasHandleBounds || prevNodeRef.current !== currNode) {
          if (prevNodeRef.current) {
            resizeObserver?.unobserve(prevNodeRef.current);
          }
          resizeObserver?.observe(currNode);
          prevNodeRef.current = currNode;
        }
      }
    }, [hidden, initialized, hasHandleBounds]);
    useEffect$7(() => {
      const typeChanged = prevType.current !== type;
      const sourcePosChanged = prevSourcePosition.current !== sourcePosition;
      const targetPosChanged = prevTargetPosition.current !== targetPosition;
      if (nodeRef.current && (typeChanged || sourcePosChanged || targetPosChanged)) {
        if (typeChanged) {
          prevType.current = type;
        }
        if (sourcePosChanged) {
          prevSourcePosition.current = sourcePosition;
        }
        if (targetPosChanged) {
          prevTargetPosition.current = targetPosition;
        }
        store.getState().updateNodeDimensions([{ id, nodeElement: nodeRef.current, forceUpdate: true }]);
      }
    }, [id, type, sourcePosition, targetPosition]);
    const dragging = useDrag({
      nodeRef,
      disabled: hidden || !isDraggable,
      noDragClassName,
      handleSelector: dragHandle,
      nodeId: id,
      isSelectable,
      selectNodesOnDrag
    });
    if (hidden) {
      return null;
    }
    return React$9.createElement(
      "div",
      { className: cc([
        "react-flow__node",
        `react-flow__node-${type}`,
        {
          // this is overwritable by passing `nopan` as a class name
          [noPanClassName]: isDraggable
        },
        className,
        {
          selected,
          selectable: isSelectable,
          parent: isParent,
          dragging
        }
      ]), ref: nodeRef, style: {
        zIndex,
        transform: `translate(${xPosOrigin}px,${yPosOrigin}px)`,
        pointerEvents: hasPointerEvents ? "all" : "none",
        visibility: initialized ? "visible" : "hidden",
        ...style2
      }, "data-id": id, "data-testid": `rf__node-${id}`, onMouseEnter: onMouseEnterHandler, onMouseMove: onMouseMoveHandler, onMouseLeave: onMouseLeaveHandler, onContextMenu: onContextMenuHandler, onClick: onSelectNodeHandler, onDoubleClick: onDoubleClickHandler, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : void 0, "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`, "aria-label": ariaLabel },
      React$9.createElement(
        Provider,
        { value: id },
        React$9.createElement(NodeComponent, { id, data, type, xPos, yPos, selected, isConnectable, sourcePosition, targetPosition, dragging, dragHandle, zIndex })
      )
    );
  };
  NodeWrapper.displayName = "NodeWrapper";
  return memo$3(NodeWrapper);
};
const selector$7 = (s) => {
  const selectedNodes = s.getNodes().filter((n) => n.selected);
  return {
    ...getNodesBounds(selectedNodes, s.nodeOrigin),
    transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`,
    userSelectionActive: s.userSelectionActive
  };
};
function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
  const store = useStoreApi();
  const { width, height, x: left, y: top, transformString, userSelectionActive } = useStore(selector$7, shallow$1);
  const updatePositions = useUpdateNodePositions();
  const nodeRef = useRef$9(null);
  useEffect$7(() => {
    if (!disableKeyboardA11y) {
      nodeRef.current?.focus({
        preventScroll: true
      });
    }
  }, [disableKeyboardA11y]);
  useDrag({
    nodeRef
  });
  if (userSelectionActive || !width || !height) {
    return null;
  }
  const onContextMenu = onSelectionContextMenu ? (event) => {
    const selectedNodes = store.getState().getNodes().filter((n) => n.selected);
    onSelectionContextMenu(event, selectedNodes);
  } : void 0;
  const onKeyDown = (event) => {
    if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      updatePositions({
        x: arrowKeyDiffs[event.key].x,
        y: arrowKeyDiffs[event.key].y,
        isShiftPressed: event.shiftKey
      });
    }
  };
  return React$9.createElement(
    "div",
    { className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]), style: {
      transform: transformString
    } },
    React$9.createElement("div", { ref: nodeRef, className: "react-flow__nodesselection-rect", onContextMenu, tabIndex: disableKeyboardA11y ? void 0 : -1, onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown, style: {
      width,
      height,
      top,
      left
    } })
  );
}
var NodesSelection$1 = memo$3(NodesSelection);
const selector$6 = (s) => s.nodesSelectionActive;
const FlowRenderer = ({ children, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, onMove, onMoveStart, onMoveEnd, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y }) => {
  const nodesSelectionActive = useStore(selector$6);
  const selectionKeyPressed = useKeyPress(selectionKeyCode);
  const panActivationKeyPressed = useKeyPress(panActivationKeyCode);
  const panOnDrag = panActivationKeyPressed || _panOnDrag;
  const panOnScroll = panActivationKeyPressed || _panOnScroll;
  const isSelecting = selectionKeyPressed || selectionOnDrag && panOnDrag !== true;
  useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
  return React$9.createElement(
    ZoomPane,
    { onMove, onMoveStart, onMoveEnd, onPaneContextMenu, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: !selectionKeyPressed && panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, noWheelClassName, noPanClassName },
    React$9.createElement(
      Pane,
      { onSelectionStart, onSelectionEnd, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, panOnDrag, isSelecting: !!isSelecting, selectionMode },
      children,
      nodesSelectionActive && React$9.createElement(NodesSelection$1, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y })
    )
  );
};
FlowRenderer.displayName = "FlowRenderer";
var FlowRenderer$1 = memo$3(FlowRenderer);
function useVisibleNodes(onlyRenderVisible) {
  const nodes = useStore(useCallback$5((s) => onlyRenderVisible ? getNodesInside(s.nodeInternals, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true) : s.getNodes(), [onlyRenderVisible]));
  return nodes;
}
function createNodeTypes(nodeTypes) {
  const standardTypes = {
    input: wrapNode(nodeTypes.input || InputNode$1),
    default: wrapNode(nodeTypes.default || DefaultNode$1),
    output: wrapNode(nodeTypes.output || OutputNode$1),
    group: wrapNode(nodeTypes.group || GroupNode)
  };
  const wrappedTypes = {};
  const specialTypes = Object.keys(nodeTypes).filter((k) => !["input", "default", "output", "group"].includes(k)).reduce((res, key) => {
    res[key] = wrapNode(nodeTypes[key] || DefaultNode$1);
    return res;
  }, wrappedTypes);
  return {
    ...standardTypes,
    ...specialTypes
  };
}
const getPositionWithOrigin = ({ x, y, width, height, origin }) => {
  if (!width || !height) {
    return { x, y };
  }
  if (origin[0] < 0 || origin[1] < 0 || origin[0] > 1 || origin[1] > 1) {
    return { x, y };
  }
  return {
    x: x - width * origin[0],
    y: y - height * origin[1]
  };
};
const selector$5 = (s) => ({
  nodesDraggable: s.nodesDraggable,
  nodesConnectable: s.nodesConnectable,
  nodesFocusable: s.nodesFocusable,
  elementsSelectable: s.elementsSelectable,
  updateNodeDimensions: s.updateNodeDimensions,
  onError: s.onError
});
const NodeRenderer = (props) => {
  const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, updateNodeDimensions, onError } = useStore(selector$5, shallow$1);
  const nodes = useVisibleNodes(props.onlyRenderVisibleElements);
  const resizeObserverRef = useRef$9();
  const resizeObserver = useMemo$8(() => {
    if (typeof ResizeObserver === "undefined") {
      return null;
    }
    const observer = new ResizeObserver((entries) => {
      const updates = entries.map((entry) => ({
        id: entry.target.getAttribute("data-id"),
        nodeElement: entry.target,
        forceUpdate: true
      }));
      updateNodeDimensions(updates);
    });
    resizeObserverRef.current = observer;
    return observer;
  }, []);
  useEffect$7(() => {
    return () => {
      resizeObserverRef?.current?.disconnect();
    };
  }, []);
  return React$9.createElement("div", { className: "react-flow__nodes", style: containerStyle }, nodes.map((node) => {
    let nodeType = node.type || "default";
    if (!props.nodeTypes[nodeType]) {
      onError?.("003", errorMessages["error003"](nodeType));
      nodeType = "default";
    }
    const NodeComponent = props.nodeTypes[nodeType] || props.nodeTypes.default;
    const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
    const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
    const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
    const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
    const clampedPosition = props.nodeExtent ? clampPosition(node.positionAbsolute, props.nodeExtent) : node.positionAbsolute;
    const posX = clampedPosition?.x ?? 0;
    const posY = clampedPosition?.y ?? 0;
    const posOrigin = getPositionWithOrigin({
      x: posX,
      y: posY,
      width: node.width ?? 0,
      height: node.height ?? 0,
      origin: props.nodeOrigin
    });
    return React$9.createElement(NodeComponent, { key: node.id, id: node.id, className: node.className, style: node.style, type: nodeType, data: node.data, sourcePosition: node.sourcePosition || Position.Bottom, targetPosition: node.targetPosition || Position.Top, hidden: node.hidden, xPos: posX, yPos: posY, xPosOrigin: posOrigin.x, yPosOrigin: posOrigin.y, selectNodesOnDrag: props.selectNodesOnDrag, onClick: props.onNodeClick, onMouseEnter: props.onNodeMouseEnter, onMouseMove: props.onNodeMouseMove, onMouseLeave: props.onNodeMouseLeave, onContextMenu: props.onNodeContextMenu, onDoubleClick: props.onNodeDoubleClick, selected: !!node.selected, isDraggable, isSelectable, isConnectable, isFocusable, resizeObserver, dragHandle: node.dragHandle, zIndex: node[internalsSymbol]?.z ?? 0, isParent: !!node[internalsSymbol]?.isParent, noDragClassName: props.noDragClassName, noPanClassName: props.noPanClassName, initialized: !!node.width && !!node.height, rfId: props.rfId, disableKeyboardA11y: props.disableKeyboardA11y, ariaLabel: node.ariaLabel, hasHandleBounds: !!node[internalsSymbol]?.handleBounds });
  }));
};
NodeRenderer.displayName = "NodeRenderer";
var NodeRenderer$1 = memo$3(NodeRenderer);
const shiftX = (x, shift, position) => {
  if (position === Position.Left)
    return x - shift;
  if (position === Position.Right)
    return x + shift;
  return x;
};
const shiftY = (y, shift, position) => {
  if (position === Position.Top)
    return y - shift;
  if (position === Position.Bottom)
    return y + shift;
  return y;
};
const EdgeUpdaterClassName = "react-flow__edgeupdater";
const EdgeAnchor = ({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) => React$9.createElement("circle", { onMouseDown, onMouseEnter, onMouseOut, className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]), cx: shiftX(centerX, radius, position), cy: shiftY(centerY, radius, position), r: radius, stroke: "transparent", fill: "transparent" });
const alwaysValidConnection = () => true;
var wrapEdge = (EdgeComponent) => {
  const EdgeWrapper = ({ id, className, type, data, onClick, onEdgeDoubleClick, selected, animated, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, source, target, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, elementsSelectable, hidden, sourceHandleId, targetHandleId, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, markerEnd, markerStart, rfId, ariaLabel, isFocusable, isReconnectable, pathOptions, interactionWidth, disableKeyboardA11y }) => {
    const edgeRef = useRef$9(null);
    const [updateHover, setUpdateHover] = useState$6(false);
    const [updating, setUpdating] = useState$6(false);
    const store = useStoreApi();
    const markerStartUrl = useMemo$8(() => `url('#${getMarkerId(markerStart, rfId)}')`, [markerStart, rfId]);
    const markerEndUrl = useMemo$8(() => `url('#${getMarkerId(markerEnd, rfId)}')`, [markerEnd, rfId]);
    if (hidden) {
      return null;
    }
    const onEdgeClick = (event) => {
      const { edges, addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
      const edge = edges.find((e) => e.id === id);
      if (!edge) {
        return;
      }
      if (elementsSelectable) {
        store.setState({ nodesSelectionActive: false });
        if (edge.selected && multiSelectionActive) {
          unselectNodesAndEdges({ nodes: [], edges: [edge] });
          edgeRef.current?.blur();
        } else {
          addSelectedEdges([id]);
        }
      }
      if (onClick) {
        onClick(event, edge);
      }
    };
    const onEdgeDoubleClickHandler = getMouseHandler$1(id, store.getState, onEdgeDoubleClick);
    const onEdgeContextMenu = getMouseHandler$1(id, store.getState, onContextMenu);
    const onEdgeMouseEnter = getMouseHandler$1(id, store.getState, onMouseEnter);
    const onEdgeMouseMove = getMouseHandler$1(id, store.getState, onMouseMove);
    const onEdgeMouseLeave = getMouseHandler$1(id, store.getState, onMouseLeave);
    const handleEdgeUpdater = (event, isSourceHandle) => {
      if (event.button !== 0) {
        return;
      }
      const { edges, isValidConnection: isValidConnectionStore } = store.getState();
      const nodeId = isSourceHandle ? target : source;
      const handleId = (isSourceHandle ? targetHandleId : sourceHandleId) || null;
      const handleType = isSourceHandle ? "target" : "source";
      const isValidConnection = isValidConnectionStore || alwaysValidConnection;
      const isTarget = isSourceHandle;
      const edge = edges.find((e) => e.id === id);
      setUpdating(true);
      onReconnectStart?.(event, edge, handleType);
      const _onReconnectEnd = (evt) => {
        setUpdating(false);
        onReconnectEnd?.(evt, edge, handleType);
      };
      const onConnectEdge = (connection) => onReconnect?.(edge, connection);
      handlePointerDown({
        event,
        handleId,
        nodeId,
        onConnect: onConnectEdge,
        isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection,
        edgeUpdaterType: handleType,
        onReconnectEnd: _onReconnectEnd
      });
    };
    const onEdgeUpdaterSourceMouseDown = (event) => handleEdgeUpdater(event, true);
    const onEdgeUpdaterTargetMouseDown = (event) => handleEdgeUpdater(event, false);
    const onEdgeUpdaterMouseEnter = () => setUpdateHover(true);
    const onEdgeUpdaterMouseOut = () => setUpdateHover(false);
    const inactive = !elementsSelectable && !onClick;
    const onKeyDown = (event) => {
      if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && elementsSelectable) {
        const { unselectNodesAndEdges, addSelectedEdges, edges } = store.getState();
        const unselect = event.key === "Escape";
        if (unselect) {
          edgeRef.current?.blur();
          unselectNodesAndEdges({ edges: [edges.find((e) => e.id === id)] });
        } else {
          addSelectedEdges([id]);
        }
      }
    };
    return React$9.createElement(
      "g",
      { className: cc([
        "react-flow__edge",
        `react-flow__edge-${type}`,
        className,
        { selected, animated, inactive, updating: updateHover }
      ]), onClick: onEdgeClick, onDoubleClick: onEdgeDoubleClickHandler, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : "img", "data-testid": `rf__edge-${id}`, "aria-label": ariaLabel === null ? void 0 : ariaLabel ? ariaLabel : `Edge from ${source} to ${target}`, "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0, ref: edgeRef },
      !updating && React$9.createElement(EdgeComponent, { id, source, target, selected, animated, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, data, style: style2, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, sourceHandleId, targetHandleId, markerStart: markerStartUrl, markerEnd: markerEndUrl, pathOptions, interactionWidth }),
      isReconnectable && React$9.createElement(
        React$9.Fragment,
        null,
        (isReconnectable === "source" || isReconnectable === true) && React$9.createElement(EdgeAnchor, { position: sourcePosition, centerX: sourceX, centerY: sourceY, radius: reconnectRadius, onMouseDown: onEdgeUpdaterSourceMouseDown, onMouseEnter: onEdgeUpdaterMouseEnter, onMouseOut: onEdgeUpdaterMouseOut, type: "source" }),
        (isReconnectable === "target" || isReconnectable === true) && React$9.createElement(EdgeAnchor, { position: targetPosition, centerX: targetX, centerY: targetY, radius: reconnectRadius, onMouseDown: onEdgeUpdaterTargetMouseDown, onMouseEnter: onEdgeUpdaterMouseEnter, onMouseOut: onEdgeUpdaterMouseOut, type: "target" })
      )
    );
  };
  EdgeWrapper.displayName = "EdgeWrapper";
  return memo$3(EdgeWrapper);
};
function createEdgeTypes(edgeTypes) {
  const standardTypes = {
    default: wrapEdge(edgeTypes.default || BezierEdge),
    straight: wrapEdge(edgeTypes.bezier || StraightEdge),
    step: wrapEdge(edgeTypes.step || StepEdge),
    smoothstep: wrapEdge(edgeTypes.step || SmoothStepEdge),
    simplebezier: wrapEdge(edgeTypes.simplebezier || SimpleBezierEdge)
  };
  const wrappedTypes = {};
  const specialTypes = Object.keys(edgeTypes).filter((k) => !["default", "bezier"].includes(k)).reduce((res, key) => {
    res[key] = wrapEdge(edgeTypes[key] || BezierEdge);
    return res;
  }, wrappedTypes);
  return {
    ...standardTypes,
    ...specialTypes
  };
}
function getHandlePosition(position, nodeRect, handle = null) {
  const x = (handle?.x || 0) + nodeRect.x;
  const y = (handle?.y || 0) + nodeRect.y;
  const width = handle?.width || nodeRect.width;
  const height = handle?.height || nodeRect.height;
  switch (position) {
    case Position.Top:
      return {
        x: x + width / 2,
        y
      };
    case Position.Right:
      return {
        x: x + width,
        y: y + height / 2
      };
    case Position.Bottom:
      return {
        x: x + width / 2,
        y: y + height
      };
    case Position.Left:
      return {
        x,
        y: y + height / 2
      };
  }
}
function getHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  if (bounds.length === 1 || !handleId) {
    return bounds[0];
  } else if (handleId) {
    return bounds.find((d) => d.id === handleId) || null;
  }
  return null;
}
const getEdgePositions = (sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition) => {
  const sourceHandlePos = getHandlePosition(sourcePosition, sourceNodeRect, sourceHandle);
  const targetHandlePos = getHandlePosition(targetPosition, targetNodeRect, targetHandle);
  return {
    sourceX: sourceHandlePos.x,
    sourceY: sourceHandlePos.y,
    targetX: targetHandlePos.x,
    targetY: targetHandlePos.y
  };
};
function isEdgeVisible({ sourcePos, targetPos, sourceWidth, sourceHeight, targetWidth, targetHeight, width, height, transform }) {
  const edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewBox = rectToBox({
    x: (0 - transform[0]) / transform[2],
    y: (0 - transform[1]) / transform[2],
    width: width / transform[2],
    height: height / transform[2]
  });
  const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  const overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getNodeData(node) {
  const handleBounds = node?.[internalsSymbol]?.handleBounds || null;
  const isValid = handleBounds && node?.width && node?.height && typeof node?.positionAbsolute?.x !== "undefined" && typeof node?.positionAbsolute?.y !== "undefined";
  return [
    {
      x: node?.positionAbsolute?.x || 0,
      y: node?.positionAbsolute?.y || 0,
      width: node?.width || 0,
      height: node?.height || 0
    },
    handleBounds,
    !!isValid
  ];
}
const defaultEdgeTree = [{ level: 0, isMaxLevel: true, edges: [] }];
function groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect = false) {
  let maxLevel = -1;
  const levelLookup = edges.reduce((tree, edge) => {
    const hasZIndex = isNumeric(edge.zIndex);
    let z = hasZIndex ? edge.zIndex : 0;
    if (elevateEdgesOnSelect) {
      const targetNode = nodeInternals.get(edge.target);
      const sourceNode = nodeInternals.get(edge.source);
      const edgeOrConnectedNodeSelected = edge.selected || targetNode?.selected || sourceNode?.selected;
      const selectedZIndex = Math.max(sourceNode?.[internalsSymbol]?.z || 0, targetNode?.[internalsSymbol]?.z || 0, 1e3);
      z = (hasZIndex ? edge.zIndex : 0) + (edgeOrConnectedNodeSelected ? selectedZIndex : 0);
    }
    if (tree[z]) {
      tree[z].push(edge);
    } else {
      tree[z] = [edge];
    }
    maxLevel = z > maxLevel ? z : maxLevel;
    return tree;
  }, {});
  const edgeTree = Object.entries(levelLookup).map(([key, edges2]) => {
    const level = +key;
    return {
      edges: edges2,
      level,
      isMaxLevel: level === maxLevel
    };
  });
  if (edgeTree.length === 0) {
    return defaultEdgeTree;
  }
  return edgeTree;
}
function useVisibleEdges(onlyRenderVisible, nodeInternals, elevateEdgesOnSelect) {
  const edges = useStore(useCallback$5((s) => {
    if (!onlyRenderVisible) {
      return s.edges;
    }
    return s.edges.filter((e) => {
      const sourceNode = nodeInternals.get(e.source);
      const targetNode = nodeInternals.get(e.target);
      return sourceNode?.width && sourceNode?.height && targetNode?.width && targetNode?.height && isEdgeVisible({
        sourcePos: sourceNode.positionAbsolute || { x: 0, y: 0 },
        targetPos: targetNode.positionAbsolute || { x: 0, y: 0 },
        sourceWidth: sourceNode.width,
        sourceHeight: sourceNode.height,
        targetWidth: targetNode.width,
        targetHeight: targetNode.height,
        width: s.width,
        height: s.height,
        transform: s.transform
      });
    });
  }, [onlyRenderVisible, nodeInternals]));
  return groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect);
}
const ArrowSymbol = ({ color = "none", strokeWidth = 1 }) => {
  return React$9.createElement("polyline", { style: {
    stroke: color,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" });
};
const ArrowClosedSymbol = ({ color = "none", strokeWidth = 1 }) => {
  return React$9.createElement("polyline", { style: {
    stroke: color,
    fill: color,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
};
const MarkerSymbols = {
  [MarkerType.Arrow]: ArrowSymbol,
  [MarkerType.ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
  const store = useStoreApi();
  const symbol = useMemo$8(() => {
    const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
    if (!symbolExists) {
      store.getState().onError?.("009", errorMessages["error009"](type));
      return null;
    }
    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}
const Marker = ({ id, type, color, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
  const Symbol2 = useMarkerSymbol(type);
  if (!Symbol2) {
    return null;
  }
  return React$9.createElement(
    "marker",
    { className: "react-flow__arrowhead", id, markerWidth: `${width}`, markerHeight: `${height}`, viewBox: "-10 -10 20 20", markerUnits, orient, refX: "0", refY: "0" },
    React$9.createElement(Symbol2, { color, strokeWidth })
  );
};
const markerSelector = ({ defaultColor, rfId }) => (s) => {
  const ids = [];
  return s.edges.reduce((markers, edge) => {
    [edge.markerStart, edge.markerEnd].forEach((marker) => {
      if (marker && typeof marker === "object") {
        const markerId = getMarkerId(marker, rfId);
        if (!ids.includes(markerId)) {
          markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
          ids.push(markerId);
        }
      }
    });
    return markers;
  }, []).sort((a, b) => a.id.localeCompare(b.id));
};
const MarkerDefinitions = ({ defaultColor, rfId }) => {
  const markers = useStore(
    useCallback$5(markerSelector({ defaultColor, rfId }), [defaultColor, rfId]),
    // the id includes all marker options, so we just need to look at that part of the marker
    (a, b) => !(a.length !== b.length || a.some((m, i) => m.id !== b[i].id))
  );
  return React$9.createElement("defs", null, markers.map((marker) => React$9.createElement(Marker, { id: marker.id, key: marker.id, type: marker.type, color: marker.color, width: marker.width, height: marker.height, markerUnits: marker.markerUnits, strokeWidth: marker.strokeWidth, orient: marker.orient })));
};
MarkerDefinitions.displayName = "MarkerDefinitions";
var MarkerDefinitions$1 = memo$3(MarkerDefinitions);
const selector$4 = (s) => ({
  nodesConnectable: s.nodesConnectable,
  edgesFocusable: s.edgesFocusable,
  edgesUpdatable: s.edgesUpdatable,
  elementsSelectable: s.elementsSelectable,
  width: s.width,
  height: s.height,
  connectionMode: s.connectionMode,
  nodeInternals: s.nodeInternals,
  onError: s.onError
});
const EdgeRenderer = ({ defaultMarkerColor, onlyRenderVisibleElements, elevateEdgesOnSelect, rfId, edgeTypes, noPanClassName, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, children, disableKeyboardA11y }) => {
  const { edgesFocusable, edgesUpdatable, elementsSelectable, width, height, connectionMode, nodeInternals, onError } = useStore(selector$4, shallow$1);
  const edgeTree = useVisibleEdges(onlyRenderVisibleElements, nodeInternals, elevateEdgesOnSelect);
  if (!width) {
    return null;
  }
  return React$9.createElement(
    React$9.Fragment,
    null,
    edgeTree.map(({ level, edges, isMaxLevel }) => React$9.createElement(
      "svg",
      { key: level, style: { zIndex: level }, width, height, className: "react-flow__edges react-flow__container" },
      isMaxLevel && React$9.createElement(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }),
      React$9.createElement("g", null, edges.map((edge) => {
        const [sourceNodeRect, sourceHandleBounds, sourceIsValid] = getNodeData(nodeInternals.get(edge.source));
        const [targetNodeRect, targetHandleBounds, targetIsValid] = getNodeData(nodeInternals.get(edge.target));
        if (!sourceIsValid || !targetIsValid) {
          return null;
        }
        let edgeType = edge.type || "default";
        if (!edgeTypes[edgeType]) {
          onError?.("011", errorMessages["error011"](edgeType));
          edgeType = "default";
        }
        const EdgeComponent = edgeTypes[edgeType] || edgeTypes.default;
        const targetNodeHandles = connectionMode === ConnectionMode.Strict ? targetHandleBounds.target : (targetHandleBounds.target ?? []).concat(targetHandleBounds.source ?? []);
        const sourceHandle = getHandle(sourceHandleBounds.source, edge.sourceHandle);
        const targetHandle = getHandle(targetNodeHandles, edge.targetHandle);
        const sourcePosition = sourceHandle?.position || Position.Bottom;
        const targetPosition = targetHandle?.position || Position.Top;
        const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
        const edgeReconnectable = edge.reconnectable || edge.updatable;
        const isReconnectable = typeof onReconnect !== "undefined" && (edgeReconnectable || edgesUpdatable && typeof edgeReconnectable === "undefined");
        if (!sourceHandle || !targetHandle) {
          onError?.("008", errorMessages["error008"](sourceHandle, edge));
          return null;
        }
        const { sourceX, sourceY, targetX, targetY } = getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition);
        return React$9.createElement(EdgeComponent, { key: edge.id, id: edge.id, className: cc([edge.className, noPanClassName]), type: edgeType, data: edge.data, selected: !!edge.selected, animated: !!edge.animated, hidden: !!edge.hidden, label: edge.label, labelStyle: edge.labelStyle, labelShowBg: edge.labelShowBg, labelBgStyle: edge.labelBgStyle, labelBgPadding: edge.labelBgPadding, labelBgBorderRadius: edge.labelBgBorderRadius, style: edge.style, source: edge.source, target: edge.target, sourceHandleId: edge.sourceHandle, targetHandleId: edge.targetHandle, markerEnd: edge.markerEnd, markerStart: edge.markerStart, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, elementsSelectable, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onClick: onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, rfId, ariaLabel: edge.ariaLabel, isFocusable, isReconnectable, pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0, interactionWidth: edge.interactionWidth, disableKeyboardA11y });
      }))
    )),
    children
  );
};
EdgeRenderer.displayName = "EdgeRenderer";
var EdgeRenderer$1 = memo$3(EdgeRenderer);
const selector$3 = (s) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`;
function Viewport({ children }) {
  const transform = useStore(selector$3);
  return React$9.createElement("div", { className: "react-flow__viewport react-flow__container", style: { transform } }, children);
}
function useOnInitHandler(onInit) {
  const rfInstance = useReactFlow();
  const isInitialized = useRef$9(false);
  useEffect$7(() => {
    if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
      setTimeout(() => onInit(rfInstance), 1);
      isInitialized.current = true;
    }
  }, [onInit, rfInstance.viewportInitialized]);
}
const oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
const ConnectionLine = ({ nodeId, handleType, style: style2, type = ConnectionLineType.Bezier, CustomComponent, connectionStatus }) => {
  const { fromNode, handleId, toX, toY, connectionMode } = useStore(useCallback$5((s) => ({
    fromNode: s.nodeInternals.get(nodeId),
    handleId: s.connectionHandleId,
    toX: (s.connectionPosition.x - s.transform[0]) / s.transform[2],
    toY: (s.connectionPosition.y - s.transform[1]) / s.transform[2],
    connectionMode: s.connectionMode
  }), [nodeId]), shallow$1);
  const fromHandleBounds = fromNode?.[internalsSymbol]?.handleBounds;
  let handleBounds = fromHandleBounds?.[handleType];
  if (connectionMode === ConnectionMode.Loose) {
    handleBounds = handleBounds ? handleBounds : fromHandleBounds?.[handleType === "source" ? "target" : "source"];
  }
  if (!fromNode || !handleBounds) {
    return null;
  }
  const fromHandle = handleId ? handleBounds.find((d) => d.id === handleId) : handleBounds[0];
  const fromHandleX = fromHandle ? fromHandle.x + fromHandle.width / 2 : (fromNode.width ?? 0) / 2;
  const fromHandleY = fromHandle ? fromHandle.y + fromHandle.height / 2 : fromNode.height ?? 0;
  const fromX = (fromNode.positionAbsolute?.x ?? 0) + fromHandleX;
  const fromY = (fromNode.positionAbsolute?.y ?? 0) + fromHandleY;
  const fromPosition = fromHandle?.position;
  const toPosition = fromPosition ? oppositePosition[fromPosition] : null;
  if (!fromPosition || !toPosition) {
    return null;
  }
  if (CustomComponent) {
    return React$9.createElement(CustomComponent, { connectionLineType: type, connectionLineStyle: style2, fromNode, fromHandle, fromX, fromY, toX, toY, fromPosition, toPosition, connectionStatus });
  }
  let dAttr = "";
  const pathParams = {
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition
  };
  if (type === ConnectionLineType.Bezier) {
    [dAttr] = getBezierPath(pathParams);
  } else if (type === ConnectionLineType.Step) {
    [dAttr] = getSmoothStepPath({
      ...pathParams,
      borderRadius: 0
    });
  } else if (type === ConnectionLineType.SmoothStep) {
    [dAttr] = getSmoothStepPath(pathParams);
  } else if (type === ConnectionLineType.SimpleBezier) {
    [dAttr] = getSimpleBezierPath(pathParams);
  } else {
    dAttr = `M${fromX},${fromY} ${toX},${toY}`;
  }
  return React$9.createElement("path", { d: dAttr, fill: "none", className: "react-flow__connection-path", style: style2 });
};
ConnectionLine.displayName = "ConnectionLine";
const selector$2 = (s) => ({
  nodeId: s.connectionNodeId,
  handleType: s.connectionHandleType,
  nodesConnectable: s.nodesConnectable,
  connectionStatus: s.connectionStatus,
  width: s.width,
  height: s.height
});
function ConnectionLineWrapper({ containerStyle: containerStyle2, style: style2, type, component }) {
  const { nodeId, handleType, nodesConnectable, width, height, connectionStatus } = useStore(selector$2, shallow$1);
  const isValid = !!(nodeId && handleType && width && nodesConnectable);
  if (!isValid) {
    return null;
  }
  return React$9.createElement(
    "svg",
    { style: containerStyle2, width, height, className: "react-flow__edges react-flow__connectionline react-flow__container" },
    React$9.createElement(
      "g",
      { className: cc(["react-flow__connection", connectionStatus]) },
      React$9.createElement(ConnectionLine, { nodeId, handleType, style: style2, type, CustomComponent: component, connectionStatus })
    )
  );
}
function useNodeOrEdgeTypes(nodeOrEdgeTypes, createTypes) {
  useRef$9(null);
  useStoreApi();
  const typesParsed = useMemo$8(() => {
    return createTypes(nodeOrEdgeTypes);
  }, [nodeOrEdgeTypes]);
  return typesParsed;
}
const GraphView = ({ nodeTypes, edgeTypes, onMove, onMoveStart, onMoveEnd, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, selectNodesOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId }) => {
  const nodeTypesWrapped = useNodeOrEdgeTypes(nodeTypes, createNodeTypes);
  const edgeTypesWrapped = useNodeOrEdgeTypes(edgeTypes, createEdgeTypes);
  useOnInitHandler(onInit);
  return React$9.createElement(
    FlowRenderer$1,
    { onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, onMove, onMoveStart, onMoveEnd, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, onSelectionContextMenu, preventScrolling, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y },
    React$9.createElement(
      Viewport,
      null,
      React$9.createElement(
        EdgeRenderer$1,
        { edgeTypes: edgeTypesWrapped, onEdgeClick, onEdgeDoubleClick, onlyRenderVisibleElements, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, defaultMarkerColor, noPanClassName, elevateEdgesOnSelect: !!elevateEdgesOnSelect, disableKeyboardA11y, rfId },
        React$9.createElement(ConnectionLineWrapper, { style: connectionLineStyle, type: connectionLineType, component: connectionLineComponent, containerStyle: connectionLineContainerStyle })
      ),
      React$9.createElement("div", { className: "react-flow__edgelabel-renderer" }),
      React$9.createElement(NodeRenderer$1, { nodeTypes: nodeTypesWrapped, onNodeClick, onNodeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, selectNodesOnDrag, onlyRenderVisibleElements, noPanClassName, noDragClassName, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId })
    )
  );
};
GraphView.displayName = "GraphView";
var GraphView$1 = memo$3(GraphView);
const infiniteExtent = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
const initialState = {
  rfId: "1",
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: /* @__PURE__ */ new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: false,
  hasDefaultEdges: false,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: void 0,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: infiniteExtent,
  nodeExtent: infiniteExtent,
  nodesSelectionActive: false,
  userSelectionActive: false,
  userSelectionRect: null,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: "source",
  connectionPosition: { x: 0, y: 0 },
  connectionStatus: null,
  connectionMode: ConnectionMode.Strict,
  domNode: null,
  paneDragging: false,
  noPanClassName: "nopan",
  nodeOrigin: [0, 0],
  nodeDragThreshold: 0,
  snapGrid: [15, 15],
  snapToGrid: false,
  nodesDraggable: true,
  nodesConnectable: true,
  nodesFocusable: true,
  edgesFocusable: true,
  edgesUpdatable: true,
  elementsSelectable: true,
  elevateNodesOnSelect: true,
  fitViewOnInit: false,
  fitViewOnInitDone: false,
  fitViewOnInitOptions: void 0,
  onSelectionChange: [],
  multiSelectionActive: false,
  connectionStartHandle: null,
  connectionEndHandle: null,
  connectionClickStartHandle: null,
  connectOnClick: true,
  ariaLiveMessage: "",
  autoPanOnConnect: true,
  autoPanOnNodeDrag: true,
  connectionRadius: 20,
  onError: devWarn,
  isValidConnection: void 0
};
const createRFStore = () => createWithEqualityFn((set, get) => ({
  ...initialState,
  setNodes: (nodes) => {
    const { nodeInternals, nodeOrigin, elevateNodesOnSelect } = get();
    set({ nodeInternals: createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) });
  },
  getNodes: () => {
    return Array.from(get().nodeInternals.values());
  },
  setEdges: (edges) => {
    const { defaultEdgeOptions = {} } = get();
    set({ edges: edges.map((e) => ({ ...defaultEdgeOptions, ...e })) });
  },
  setDefaultNodesAndEdges: (nodes, edges) => {
    const hasDefaultNodes = typeof nodes !== "undefined";
    const hasDefaultEdges = typeof edges !== "undefined";
    const nodeInternals = hasDefaultNodes ? createNodeInternals(nodes, /* @__PURE__ */ new Map(), get().nodeOrigin, get().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
    const nextEdges = hasDefaultEdges ? edges : [];
    set({ nodeInternals, edges: nextEdges, hasDefaultNodes, hasDefaultEdges });
  },
  updateNodeDimensions: (updates) => {
    const { onNodesChange, nodeInternals, fitViewOnInit, fitViewOnInitDone, fitViewOnInitOptions, domNode, nodeOrigin } = get();
    const viewportNode = domNode?.querySelector(".react-flow__viewport");
    if (!viewportNode) {
      return;
    }
    const style2 = window.getComputedStyle(viewportNode);
    const { m22: zoom2 } = new window.DOMMatrixReadOnly(style2.transform);
    const changes = updates.reduce((res, update) => {
      const node = nodeInternals.get(update.id);
      if (node?.hidden) {
        nodeInternals.set(node.id, {
          ...node,
          [internalsSymbol]: {
            ...node[internalsSymbol],
            // we need to reset the handle bounds when the node is hidden
            // in order to force a new observation when the node is shown again
            handleBounds: void 0
          }
        });
      } else if (node) {
        const dimensions = getDimensions(update.nodeElement);
        const doUpdate = !!(dimensions.width && dimensions.height && (node.width !== dimensions.width || node.height !== dimensions.height || update.forceUpdate));
        if (doUpdate) {
          nodeInternals.set(node.id, {
            ...node,
            [internalsSymbol]: {
              ...node[internalsSymbol],
              handleBounds: {
                source: getHandleBounds(".source", update.nodeElement, zoom2, nodeOrigin),
                target: getHandleBounds(".target", update.nodeElement, zoom2, nodeOrigin)
              }
            },
            ...dimensions
          });
          res.push({
            id: node.id,
            type: "dimensions",
            dimensions
          });
        }
      }
      return res;
    }, []);
    updateAbsoluteNodePositions(nodeInternals, nodeOrigin);
    const nextFitViewOnInitDone = fitViewOnInitDone || fitViewOnInit && !fitViewOnInitDone && fitView(get, { initial: true, ...fitViewOnInitOptions });
    set({ nodeInternals: new Map(nodeInternals), fitViewOnInitDone: nextFitViewOnInitDone });
    if (changes?.length > 0) {
      onNodesChange?.(changes);
    }
  },
  updateNodePositions: (nodeDragItems, positionChanged = true, dragging = false) => {
    const { triggerNodeChanges } = get();
    const changes = nodeDragItems.map((node) => {
      const change = {
        id: node.id,
        type: "position",
        dragging
      };
      if (positionChanged) {
        change.positionAbsolute = node.positionAbsolute;
        change.position = node.position;
      }
      return change;
    });
    triggerNodeChanges(changes);
  },
  triggerNodeChanges: (changes) => {
    const { onNodesChange, nodeInternals, hasDefaultNodes, nodeOrigin, getNodes, elevateNodesOnSelect } = get();
    if (changes?.length) {
      if (hasDefaultNodes) {
        const nodes = applyNodeChanges(changes, getNodes());
        const nextNodeInternals = createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect);
        set({ nodeInternals: nextNodeInternals });
      }
      onNodesChange?.(changes);
    }
  },
  addSelectedNodes: (selectedNodeIds) => {
    const { multiSelectionActive, edges, getNodes } = get();
    let changedNodes;
    let changedEdges = null;
    if (multiSelectionActive) {
      changedNodes = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
    } else {
      changedNodes = getSelectionChanges(getNodes(), selectedNodeIds);
      changedEdges = getSelectionChanges(edges, []);
    }
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get,
      set
    });
  },
  addSelectedEdges: (selectedEdgeIds) => {
    const { multiSelectionActive, edges, getNodes } = get();
    let changedEdges;
    let changedNodes = null;
    if (multiSelectionActive) {
      changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
    } else {
      changedEdges = getSelectionChanges(edges, selectedEdgeIds);
      changedNodes = getSelectionChanges(getNodes(), []);
    }
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get,
      set
    });
  },
  unselectNodesAndEdges: ({ nodes, edges } = {}) => {
    const { edges: storeEdges, getNodes } = get();
    const nodesToUnselect = nodes ? nodes : getNodes();
    const edgesToUnselect = edges ? edges : storeEdges;
    const changedNodes = nodesToUnselect.map((n) => {
      n.selected = false;
      return createSelectionChange(n.id, false);
    });
    const changedEdges = edgesToUnselect.map((edge) => createSelectionChange(edge.id, false));
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get,
      set
    });
  },
  setMinZoom: (minZoom) => {
    const { d3Zoom, maxZoom } = get();
    d3Zoom?.scaleExtent([minZoom, maxZoom]);
    set({ minZoom });
  },
  setMaxZoom: (maxZoom) => {
    const { d3Zoom, minZoom } = get();
    d3Zoom?.scaleExtent([minZoom, maxZoom]);
    set({ maxZoom });
  },
  setTranslateExtent: (translateExtent) => {
    get().d3Zoom?.translateExtent(translateExtent);
    set({ translateExtent });
  },
  resetSelectedElements: () => {
    const { edges, getNodes } = get();
    const nodes = getNodes();
    const nodesToUnselect = nodes.filter((e) => e.selected).map((n) => createSelectionChange(n.id, false));
    const edgesToUnselect = edges.filter((e) => e.selected).map((e) => createSelectionChange(e.id, false));
    updateNodesAndEdgesSelections({
      changedNodes: nodesToUnselect,
      changedEdges: edgesToUnselect,
      get,
      set
    });
  },
  setNodeExtent: (nodeExtent) => {
    const { nodeInternals } = get();
    nodeInternals.forEach((node) => {
      node.positionAbsolute = clampPosition(node.position, nodeExtent);
    });
    set({
      nodeExtent,
      nodeInternals: new Map(nodeInternals)
    });
  },
  panBy: (delta) => {
    const { transform, width, height, d3Zoom, d3Selection, translateExtent } = get();
    if (!d3Zoom || !d3Selection || !delta.x && !delta.y) {
      return false;
    }
    const nextTransform = identity.translate(transform[0] + delta.x, transform[1] + delta.y).scale(transform[2]);
    const extent = [
      [0, 0],
      [width, height]
    ];
    const constrainedTransform = d3Zoom?.constrain()(nextTransform, extent, translateExtent);
    d3Zoom.transform(d3Selection, constrainedTransform);
    const transformChanged = transform[0] !== constrainedTransform.x || transform[1] !== constrainedTransform.y || transform[2] !== constrainedTransform.k;
    return transformChanged;
  },
  cancelConnection: () => set({
    connectionNodeId: initialState.connectionNodeId,
    connectionHandleId: initialState.connectionHandleId,
    connectionHandleType: initialState.connectionHandleType,
    connectionStatus: initialState.connectionStatus,
    connectionStartHandle: initialState.connectionStartHandle,
    connectionEndHandle: initialState.connectionEndHandle
  }),
  reset: () => set({ ...initialState })
}), Object.is);
const ReactFlowProvider = ({ children }) => {
  const storeRef = useRef$9(null);
  if (!storeRef.current) {
    storeRef.current = createRFStore();
  }
  return React$9.createElement(Provider$1, { value: storeRef.current }, children);
};
ReactFlowProvider.displayName = "ReactFlowProvider";
const Wrapper = ({ children }) => {
  const isWrapped = useContext$9(StoreContext);
  if (isWrapped) {
    return React$9.createElement(React$9.Fragment, null, children);
  }
  return React$9.createElement(ReactFlowProvider, null, children);
};
Wrapper.displayName = "ReactFlowWrapper";
const defaultNodeTypes = {
  input: InputNode$1,
  default: DefaultNode$1,
  output: OutputNode$1,
  group: GroupNode
};
const defaultEdgeTypes = {
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge,
  simplebezier: SimpleBezierEdge
};
const initNodeOrigin = [0, 0];
const initSnapGrid = [15, 15];
const initDefaultViewport = { x: 0, y: 0, zoom: 1 };
const wrapperStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
const ReactFlow = forwardRef$3(({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes = defaultNodeTypes, edgeTypes = defaultEdgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionMode = ConnectionMode.Strict, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid = false, snapGrid = initSnapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag = true, nodesDraggable, nodesConnectable, nodesFocusable, nodeOrigin = initNodeOrigin, edgesFocusable, edgesUpdatable, elementsSelectable, defaultViewport = initDefaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, children, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeUpdate, onEdgeUpdateStart, onEdgeUpdateEnd, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius = 10, edgeUpdaterRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView: fitView2 = false, fitViewOptions, connectOnClick = true, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect = true, elevateEdgesOnSelect = false, disableKeyboardA11y = false, autoPanOnConnect = true, autoPanOnNodeDrag = true, connectionRadius = 20, isValidConnection, onError, style: style2, id, nodeDragThreshold, ...rest }, ref) => {
  const rfId = id || "1";
  return React$9.createElement(
    "div",
    { ...rest, style: { ...style2, ...wrapperStyle }, ref, className: cc(["react-flow", className]), "data-testid": "rf__wrapper", id },
    React$9.createElement(
      Wrapper,
      null,
      React$9.createElement(GraphView$1, { onInit, onMove, onMoveStart, onMoveEnd, onNodeClick, onEdgeClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, nodeTypes, edgeTypes, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, deleteKeyCode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, onlyRenderVisibleElements, selectNodesOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onReconnect: onReconnect ?? onEdgeUpdate, onReconnectStart: onReconnectStart ?? onEdgeUpdateStart, onReconnectEnd: onReconnectEnd ?? onEdgeUpdateEnd, reconnectRadius: reconnectRadius ?? edgeUpdaterRadius, defaultMarkerColor, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, rfId, disableKeyboardA11y, nodeOrigin, nodeExtent }),
      React$9.createElement(StoreUpdater, { nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elementsSelectable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, snapToGrid, snapGrid, connectionMode, translateExtent, connectOnClick, defaultEdgeOptions, fitView: fitView2, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, nodeDragThreshold }),
      React$9.createElement(Wrapper$1, { onSelectionChange }),
      children,
      React$9.createElement(Attribution, { proOptions, position: attributionPosition }),
      React$9.createElement(A11yDescriptions, { rfId, disableKeyboardA11y })
    )
  );
});
ReactFlow.displayName = "ReactFlow";

const React$8 = await importShared('react');
const {memo: memo$2,useState: useState$5,useEffect: useEffect$6} = React$8;

function PlusIcon() {
    return (React$8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        React$8.createElement("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })));
}

function MinusIcon() {
    return (React$8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
        React$8.createElement("path", { d: "M0 0h32v4.2H0z" })));
}

function FitViewIcon() {
    return (React$8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
        React$8.createElement("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })));
}

function LockIcon() {
    return (React$8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
        React$8.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })));
}

function UnlockIcon() {
    return (React$8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
        React$8.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })));
}

const ControlButton = ({ children, className, ...rest }) => (React$8.createElement("button", { type: "button", className: cc(['react-flow__controls-button', className]), ...rest }, children));
ControlButton.displayName = 'ControlButton';

const selector$1 = (s) => ({
    isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
    minZoomReached: s.transform[2] <= s.minZoom,
    maxZoomReached: s.transform[2] >= s.maxZoom,
});
const Controls = ({ style, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position = 'bottom-left', }) => {
    const store = useStoreApi();
    const [isVisible, setIsVisible] = useState$5(false);
    const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector$1, shallow$1);
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    useEffect$6(() => {
        setIsVisible(true);
    }, []);
    if (!isVisible) {
        return null;
    }
    const onZoomInHandler = () => {
        zoomIn();
        onZoomIn?.();
    };
    const onZoomOutHandler = () => {
        zoomOut();
        onZoomOut?.();
    };
    const onFitViewHandler = () => {
        fitView(fitViewOptions);
        onFitView?.();
    };
    const onToggleInteractivity = () => {
        store.setState({
            nodesDraggable: !isInteractive,
            nodesConnectable: !isInteractive,
            elementsSelectable: !isInteractive,
        });
        onInteractiveChange?.(!isInteractive);
    };
    return (React$8.createElement(Panel, { className: cc(['react-flow__controls', className]), position: position, style: style, "data-testid": "rf__controls" },
        showZoom && (React$8.createElement(React$8.Fragment, null,
            React$8.createElement(ControlButton, { onClick: onZoomInHandler, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: maxZoomReached },
                React$8.createElement(PlusIcon, null)),
            React$8.createElement(ControlButton, { onClick: onZoomOutHandler, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: minZoomReached },
                React$8.createElement(MinusIcon, null)))),
        showFitView && (React$8.createElement(ControlButton, { className: "react-flow__controls-fitview", onClick: onFitViewHandler, title: "fit view", "aria-label": "fit view" },
            React$8.createElement(FitViewIcon, null))),
        showInteractive && (React$8.createElement(ControlButton, { className: "react-flow__controls-interactive", onClick: onToggleInteractivity, title: "toggle interactivity", "aria-label": "toggle interactivity" }, isInteractive ? React$8.createElement(UnlockIcon, null) : React$8.createElement(LockIcon, null))),
        children));
};
Controls.displayName = 'Controls';
var Controls$1 = memo$2(Controls);

const React$7 = await importShared('react');
const {memo: memo$1,useRef: useRef$8} = React$7;

var BackgroundVariant;
(function (BackgroundVariant) {
    BackgroundVariant["Lines"] = "lines";
    BackgroundVariant["Dots"] = "dots";
    BackgroundVariant["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));

function LinePattern({ color, dimensions, lineWidth }) {
    return (React$7.createElement("path", { stroke: color, strokeWidth: lineWidth, d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}` }));
}
function DotPattern({ color, radius }) {
    return React$7.createElement("circle", { cx: radius, cy: radius, r: radius, fill: color });
}

const defaultColor = {
    [BackgroundVariant.Dots]: '#91919a',
    [BackgroundVariant.Lines]: '#eee',
    [BackgroundVariant.Cross]: '#e2e2e2',
};
const defaultSize = {
    [BackgroundVariant.Dots]: 1,
    [BackgroundVariant.Lines]: 1,
    [BackgroundVariant.Cross]: 6,
};
const selector = (s) => ({ transform: s.transform, patternId: `pattern-${s.rfId}` });
function Background({ id, variant = BackgroundVariant.Dots, 
// only used for dots and cross
gap = 20, 
// only used for lines and cross
size, lineWidth = 1, offset = 2, color, style, className, }) {
    const ref = useRef$8(null);
    const { transform, patternId } = useStore(selector, shallow$1);
    const patternColor = color || defaultColor[variant];
    const patternSize = size || defaultSize[variant];
    const isDots = variant === BackgroundVariant.Dots;
    const isCross = variant === BackgroundVariant.Cross;
    const gapXY = Array.isArray(gap) ? gap : [gap, gap];
    const scaledGap = [gapXY[0] * transform[2] || 1, gapXY[1] * transform[2] || 1];
    const scaledSize = patternSize * transform[2];
    const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
    const patternOffset = isDots
        ? [scaledSize / offset, scaledSize / offset]
        : [patternDimensions[0] / offset, patternDimensions[1] / offset];
    return (React$7.createElement("svg", { className: cc(['react-flow__background', className]), style: {
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
        }, ref: ref, "data-testid": "rf__background" },
        React$7.createElement("pattern", { id: patternId + id, x: transform[0] % scaledGap[0], y: transform[1] % scaledGap[1], width: scaledGap[0], height: scaledGap[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${patternOffset[0]},-${patternOffset[1]})` }, isDots ? (React$7.createElement(DotPattern, { color: patternColor, radius: scaledSize / offset })) : (React$7.createElement(LinePattern, { dimensions: patternDimensions, color: patternColor, lineWidth: lineWidth }))),
        React$7.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${patternId + id})` })));
}
Background.displayName = 'Background';
var Background$1 = memo$1(Background);

const API_URL = "http://localhost:4000";
const API_QUESTION_URL = "/api/v1/questions";
const API_QUIZ_URL = "/api/v1/questionnaires";
const APP_ENV = typeof import.meta !== "undefined" && "dev" || "dev";
console.log(`[SharedData] Active Profile: ${APP_ENV}`);
const generateUuidV7 = () => {
  const timestamp = Date.now();
  const hex = timestamp.toString(16).padStart(12, "0");
  const ver = "7";
  const random1 = Math.floor(Math.random() * 4096).toString(16).padStart(3, "0");
  const var_ = (Math.floor(Math.random() * 4) + 8).toString(16);
  const random2 = Math.floor(Math.random() * 4096).toString(16).padStart(3, "0");
  const random3 = Math.floor(Math.random() * 281474976710656).toString(16).padStart(12, "0");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${ver}${random1}-${var_}${random2}-${random3}`;
};
const dataService = {
  getHeaders: function(flowId) {
    const headers = { "Content-Type": "application/json" };
    headers["x-correlation-id"] = generateUuidV7();
    if (flowId) headers["x-flow-id"] = flowId;
    return headers;
  },
  dialogHandler: null,
  setDialogHandler: function(handler) {
    this.dialogHandler = handler;
  },
  requestFallback: async function(operation) {
    if (this.isFallbackActive) return true;
    if (APP_ENV === "prd") return false;
    if (APP_ENV === "hom") {
      let approved = false;
      if (this.dialogHandler) {
        approved = await this.dialogHandler({
          title: "Backend Indisponível",
          message: `Falha ao executar: "${operation}".

Deseja ativar o modo de Fallback (Offline) para continuar?`,
          confirmText: "Ativar Fallback",
          cancelText: "Cancelar"
        });
      } else if (typeof window !== "undefined") {
        approved = window.confirm(
          `⚠️ BACKEND INDISPONÍVEL [PERFIL: HOM]

Falha ao executar: "${operation}".

Deseja ativar o modo de Fallback (Offline) para continuar?`
        );
      }
      if (approved) this.setFallbackActive(true);
      return approved;
    }
    this.setFallbackActive(true);
    return true;
  },
  isFallbackActive: false,
  fallbackListeners: [],
  setFallbackActive: function(isActive) {
    if (this.isFallbackActive !== isActive) {
      this.isFallbackActive = isActive;
      this.fallbackListeners.forEach((listener) => listener(isActive));
    }
  },
  subscribeToFallback: function(listener) {
    this.fallbackListeners.push(listener);
    listener(this.isFallbackActive);
    return () => {
      this.fallbackListeners = this.fallbackListeners.filter((l) => l !== listener);
    };
  },
  apiErrorListeners: [],
  subscribeToApiError: function(listener) {
    this.apiErrorListeners.push(listener);
    return () => {
      this.apiErrorListeners = this.apiErrorListeners.filter((l) => l !== listener);
    };
  },
  apiSuccessListeners: [],
  subscribeToApiSuccess: function(listener) {
    this.apiSuccessListeners.push(listener);
    return () => {
      this.apiSuccessListeners = this.apiSuccessListeners.filter((l) => l !== listener);
    };
  },
  notifyApiSuccess: function(message) {
    this.apiSuccessListeners.forEach((listener) => listener({ message }));
  },
  notifyApiError: async function(res) {
    let message = "Ocorreu um erro inesperado";
    let detail = "";
    let type = "SERVER_ERROR";
    let isRealBackendError = false;
    try {
      const errorData = await res.json();
      const body = errorData.body || errorData;
      isRealBackendError = !!(body.title || body.status || body.code);
      if (res.status >= 400 && res.status < 500) {
        type = "VALIDATION_ERROR";
        message = body.title || "Falha na validação dos dados";
        if (body.errors && Array.isArray(body.errors)) {
          detail = body.errors.map((e) => `${e.field || ""}: ${e.message}`).join(" | ");
        } else {
          detail = body.detail || body.message || "";
        }
      } else {
        type = "INTERNAL_ERROR";
        message = body.title || "Erro interno no servidor";
        detail = body.detail || "Nossa equipe técnica foi notificada. Por favor, tente novamente mais tarde.";
      }
    } catch (e) {
      detail = `Status ${res.status}: ${res.statusText}`;
      isRealBackendError = false;
    }
    if (!isRealBackendError && APP_ENV !== "prd") {
      return isRealBackendError;
    }
    this.apiErrorListeners.forEach((listener) => listener({
      status: res.status,
      message,
      detail,
      type,
      url: res.url
    }));
    return isRealBackendError;
  },
  getPerguntas: async function({ cursor = null, size = 10, filters = {}, sort = null, flowId = null } = {}) {
    try {
      const urlParams = new URLSearchParams();
      urlParams.append("mode", "CURSOR");
      urlParams.append("size", size);
      if (cursor) urlParams.append("cursor", cursor);
      if (filters.buscaValor) {
        if (filters.buscaTipo === "ID") urlParams.append("ids", filters.buscaValor);
        else urlParams.append("labelContains", filters.buscaValor);
      }
      if (filters.status && filters.status !== "ALL") urlParams.append("status", filters.status);
      if (sort) urlParams.append("sort", sort);
      const res = await fetch(`${API_QUESTION_URL}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Listar Perguntas")) throw new TypeError("OFFLINE");
        throw new Error("Falha na API principal");
      }
      const response = await res.json();
      response.data = response.data.map((q) => ({ ...q, type: "perguntaNode" }));
      this.setFallbackActive(false);
      return response;
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        console.warn("Fallback para json-server (db.json) em getPerguntas (Servidor Offline)");
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/perguntas`);
        const data = await res.json();
        const mappedData = data.map((q) => ({ ...q, type: "perguntaNode" }));
        return { data: mappedData, meta: { hasNext: false, nextCursor: null } };
      }
      throw err;
    }
  },
  getQuestionarios: async function({ cursor = null, size = 10, filters = {}, sort = null, flowId = null } = {}) {
    try {
      const urlParams = new URLSearchParams();
      urlParams.append("mode", "CURSOR");
      urlParams.append("size", size);
      if (cursor) urlParams.append("cursor", cursor);
      if (filters.buscaValor) {
        if (filters.buscaTipo === "ID") urlParams.append("ids", filters.buscaValor);
        else urlParams.append("descriptionContains", filters.buscaValor);
      }
      if (filters.status && filters.status !== "ALL") urlParams.append("status", filters.status);
      if (filters.channelId) urlParams.append("channelIds", filters.channelId);
      if (filters.journeyId) urlParams.append("journeyIds", filters.journeyId);
      if (sort) urlParams.append("sort", sort);
      const res = await fetch(`${API_QUIZ_URL}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Listar Questionários")) throw new TypeError("OFFLINE");
        throw new Error("Falha na API principal");
      }
      const response = await res.json();
      response.data = response.data.map((q) => ({ ...q, nome: q.description, type: "quizNode" }));
      this.setFallbackActive(false);
      return response;
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server (db.json) em getQuestionarios (Servidor Offline)");
        const res = await fetch(`${API_URL}/questionarios`);
        const data = await res.json();
        const mappedData = data.map((q) => ({ ...q, nome: q.description || q.nome, type: "quizNode" }));
        return { data: mappedData, meta: { hasNext: false, nextCursor: null } };
      }
      throw err;
    }
  },
  addPergunta: async function(p, flowId = null) {
    try {
      const res = await fetch(API_QUESTION_URL, {
        method: "POST",
        headers: this.getHeaders(flowId),
        body: JSON.stringify(p)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Adicionar Pergunta")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Questão adicionada com sucesso!");
      return await res.json();
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em addPergunta (Servidor Offline)");
        const res = await fetch(`${API_URL}/perguntas`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(p)
        });
        return { data: await res.json() };
      }
      throw err;
    }
  },
  deletePergunta: async function(id, flowId = null) {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, {
        method: "DELETE",
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Remover Pergunta")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Questão removida com sucesso!");
      return await res.json();
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em deletePergunta (Servidor Offline)");
        await fetch(`${API_URL}/perguntas/${id}`, { method: "DELETE" });
        return { data: { id, deleted: true } };
      }
      throw err;
    }
  },
  updatePergunta: async function(id, dados, flowId = null) {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, {
        method: "PUT",
        headers: this.getHeaders(flowId),
        body: JSON.stringify(dados)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Atualizar Pergunta")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Questão atualizada com sucesso!");
      return await res.json();
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em updatePergunta (Servidor Offline)");
        const res = await fetch(`${API_URL}/perguntas/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados)
        });
        return { data: await res.json() };
      }
      throw err;
    }
  },
  addQuiz: async function(q, flowId = null) {
    try {
      const payload2 = {
        id: q.id,
        description: q.nome,
        channelId: q.channel || q.channelDistributionId,
        journeyId: q.journey || q.journeyDistributionId,
        channelDistributionId: q.channel || q.channelDistributionId,
        journeyDistributionId: q.journey || q.journeyDistributionId,
        createdBy: q.createdBy || {
          id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
          referenceCode: "sys-admin",
          name: "Administrador",
          email: "admin@acme.com"
        }
      };
      const res = await fetch(API_QUIZ_URL, {
        method: "POST",
        headers: this.getHeaders(flowId),
        body: JSON.stringify(payload2)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Criar Questionário")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Questionário criado com sucesso!");
      this.setFallbackActive(false);
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: "quizNode" };
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em addQuiz (Servidor Offline)");
        const res = await fetch(`${API_URL}/questionarios`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        return { ...data, nome: data.description || data.nome, type: "quizNode" };
      }
      throw err;
    }
  },
  getQuestionarioById: async function(id, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append("channelId", channelId);
      if (journeyId) urlParams.append("journeyId", journeyId);
      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Buscar Questionário")) throw new TypeError("OFFLINE");
        return;
      }
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: "quizNode" };
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/questionarios/${id}`);
        if (!res.ok) throw new Error("Not found in fallback");
        const data = await res.json();
        return { ...data, nome: data.description || data.nome, type: "quizNode" };
      }
      throw err;
    }
  },
  updateQuiz: async function(id, q, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append("channelId", channelId);
      if (journeyId) urlParams.append("journeyId", journeyId);
      const payload2 = {
        description: q.nome,
        status: q.status || "ACTIVE",
        channelId,
        journeyId,
        channelDistributionId: channelId,
        journeyDistributionId: journeyId,
        questionsToUpsert: q.questionsToUpsert || [],
        questionIdsToRemove: q.questionIdsToRemove || [],
        updatedBy: q.updatedBy || {
          id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
          referenceCode: "sys-admin",
          name: "Administrador",
          email: "admin@acme.com"
        }
      };
      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        method: "PUT",
        headers: this.getHeaders(flowId),
        body: JSON.stringify(payload2)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Sincronizar Designer")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Designer sincronizado com sucesso!");
      this.setFallbackActive(false);
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: "quizNode" };
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        return { nome: q.nome, status: q.status };
      }
      throw err;
    }
  },
  deleteQuiz: async function(id, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append("channelId", channelId);
      if (journeyId) urlParams.append("journeyId", journeyId);
      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        method: "DELETE",
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (!isReal && await this.requestFallback("Remover Questionário")) throw new TypeError("OFFLINE");
        return;
      }
      this.notifyApiSuccess("Questionário removido com sucesso!");
      this.setFallbackActive(false);
      return res.json();
    } catch (err) {
      if (err instanceof TypeError && err.message === "OFFLINE") {
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/questionarios/${id}`, { method: "DELETE" });
        return res.json();
      }
      throw err;
    }
  },
  // VÍNCULOS E INTEGRIDADE (Legado para Fallback)
  isItemVinculado: async (id, type) => {
    try {
      const res = await fetch(`${API_URL}/questionarios`);
      if (!res.ok) return false;
      const todosQuizes = await res.json();
      return todosQuizes.some((q) => {
        if (type === "quizNode") return q.id === id;
        if (type === "perguntaNode") return q.configuredQuestions?.some((cq) => cq.questionId === id);
        return false;
      });
    } catch (e) {
      return false;
    }
  }
};

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {createContext: createContext$6,useContext: useContext$8,useMemo: useMemo$7,createElement: createElement$3} = await importShared('react');


const LucideContext = createContext$6({});
const useLucideContext = () => useContext$8(LucideContext);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$2,createElement: createElement$2} = await importShared('react');

const Icon = forwardRef$2(
  ({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return createElement$2(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement$2(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$1,createElement: createElement$1} = await importShared('react');

const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef$1(
    ({ className, ...props }, ref) => createElement$1(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$k = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$k);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$j = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$j);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$i = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode$i);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$h = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$h);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$g = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
];
const FileBraces = createLucideIcon("file-braces", __iconNode$g);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$f = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$f);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$e = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$e);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$d = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$d);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$c = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$c);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$b = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode$b);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
];
const ListOrdered = createLucideIcon("list-ordered", __iconNode$a);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
];
const Map$1 = createLucideIcon("map", __iconNode$9);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$8);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode$7);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$6);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$5);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$4);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode$3);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode$2);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X$1 = createLucideIcon("x", __iconNode$1);

/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);

await importShared('react');
function CustomNode({ data, selected }) {
  const isQuiz = !!data.nome;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `
      relative p-4 min-w-[200px] border transition-all duration-300
      ${selected ? "ring-2 ring-blue-500 border-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-zinc-800 shadow-xl"}
      ${isQuiz ? "bg-zinc-900" : "bg-zinc-950"}
    `, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-0 bottom-0 w-1 ${isQuiz ? data.status === "INACTIVE" ? "bg-rose-600" : "bg-blue-600" : data.status === "INACTIVE" ? "bg-rose-800" : "bg-zinc-700"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Handle$1, { type: "target", position: Position.Top, className: "!w-2 !h-2 !bg-zinc-700 !border-none !rounded-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 ${isQuiz ? "bg-blue-600/10 text-blue-500" : "bg-zinc-900 text-zinc-500"}`, children: isQuiz ? /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { size: 14 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none mb-1", children: isQuiz ? "Questionário Principal" : "Configuração de Pergunta" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-zinc-100 truncate", children: isQuiz ? data.nome : data.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] font-black px-1 py-0.5 rounded-none border shrink-0 ${data.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : data.status === "INACTIVE" ? "bg-rose-500/10   text-rose-500   border-rose-500/20" : "bg-zinc-800      text-zinc-500   border-zinc-700"}`, children: data.status || "DRAFT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono text-zinc-700 mt-1 uppercase tracking-tighter", children: data.id })
      ] })
    ] }),
    data.config && !isQuiz && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-zinc-900 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 bg-zinc-900 text-zinc-500 text-[8px] font-black border border-zinc-800", children: [
          "ORDEM: ",
          data.config.order || 0
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 bg-blue-900/20 text-blue-400 text-[8px] font-black border border-blue-900/30", children: data.config.answerConfig?.type || "TEXT" })
      ] }),
      data.config.rootCondition && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse", title: "Tem condições de visibilidade" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Handle$1, { type: "source", position: Position.Bottom, className: "!w-2 !h-2 !bg-zinc-700 !border-none !rounded-none" }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-500/5 pointer-events-none" })
  ] });
}

const {createContext: createContext$5} = await importShared('react');


const LayoutGroupContext = createContext$5({});

const {useRef: useRef$7} = await importShared('react');


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = useRef$7(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

const isBrowser$1 = typeof window !== "undefined";

const {useLayoutEffect,useEffect: useEffect$5} = await importShared('react');

const useIsomorphicLayoutEffect = isBrowser$1 ? useLayoutEffect : useEffect$5;

const {createContext: createContext$4} = await importShared('react');


/**
 * @public
 */
const PresenceContext = 
/* @__PURE__ */ createContext$4(null);

function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}

const clamp = (min, max, v) => {
    if (v > max)
        return max;
    if (v < min)
        return min;
    return v;
};

let invariant = () => {
};

const MotionGlobalConfig = {};

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

function isObject(value) {
    return typeof value === "object" && value !== null;
}

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}

/*#__NO_SIDE_EFFECTS__*/
const noop = (any) => any;

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
/*#__NO_SIDE_EFFECTS__*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        addUniqueItem(this.subscriptions, handler);
        return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
/*#__NO_SIDE_EFFECTS__*/
const secondsToMilliseconds = (seconds) => seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);

const backOut = /*@__PURE__*/ cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ reverseEasing(backOut);
const backInOut = /*@__PURE__*/ mirrorEasing(backIn);

const anticipate = (p) => p >= 1
    ? 1
    : (p *= 2) < 1
        ? 0.5 * backIn(p)
        : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);

const easeIn = /*@__PURE__*/ cubicBezier(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ cubicBezier(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ cubicBezier(0.42, 0, 0.58, 1);

const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

const easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
};
const isValidEasing = (easing) => {
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
        // If cubic bezier definition, create bezier curve
        invariant(definition.length === 4);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (isValidEasing(definition)) {
        return easingLookup[definition];
    }
    return definition;
};

const stepsOrder = [
    "setup", // Compute
    "read", // Read
    "resolveKeyframes", // Write/Read/Write/Read
    "preUpdate", // Compute
    "update", // Compute
    "preRender", // Compute
    "render", // Write
    "postRender", // Compute
];

function createRenderStep(runNextFrame, stepName) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            // Swap this frame and the next to avoid GC
            const prevFrame = thisFrame;
            thisFrame = nextFrame;
            nextFrame = prevFrame;
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}

const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    const flagRunNextFrame = () => (runNextFrame = true);
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(flagRunNextFrame);
        return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender, } = steps;
    const processBatch = () => {
        const useManualTiming = MotionGlobalConfig.useManualTiming;
        const timestamp = useManualTiming
            ? state.timestamp
            : performance.now();
        runNextFrame = false;
        if (!useManualTiming) {
            state.delta = useDefaultElapsed
                ? 1000 / 60
                : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        }
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        setup.process(state);
        read.process(state);
        resolveKeyframes.process(state);
        preUpdate.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => {
        for (let i = 0; i < stepsOrder.length; i++) {
            steps[stepsOrder[i]].cancel(process);
        }
    };
    return { schedule, cancel, state, steps };
}

const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps, } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
const time = {
    now: () => {
        if (now === undefined) {
            time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming
                ? frameData.timestamp
                : performance.now());
        }
        return now;
    },
    set: (newTime) => {
        now = newTime;
        queueMicrotask(clearTime);
    },
};

const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = 
/*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = 
/*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
        return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
 * Check if a value contains a CSS variable anywhere (e.g. inside calc()).
 * Unlike isCSSVariableToken which checks if the value IS a var() token,
 * this checks if the value CONTAINS var() somewhere in the string.
 */
function containsCSSVariable(value) {
    if (typeof value !== "string")
        return false;
    // Strip comments to avoid false positives
    return value.split("/*")[0].includes("var(--");
}

const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};

// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;

const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function isNullish(v) {
    return v == null;
}

const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((typeof v === "string" &&
        singleColorRegex.test(v) &&
        v.startsWith(type)) ||
        (testProp &&
            !isNullish(v) &&
            Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};

const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: /*@__PURE__*/ isColorString("rgb", "red"),
    parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        sanitize(alpha.transform(alpha$1)) +
        ")",
};

function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: /*@__PURE__*/ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform,
};

/*#__NO_SIDE_EFFECTS__*/
const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = /*@__PURE__*/ (() => ({
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
}))();

const hsla = {
    test: /*@__PURE__*/ isColorString("hsl", "hue"),
    parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            percent.transform(sanitize(saturation)) +
            ", " +
            percent.transform(sanitize(lightness)) +
            ", " +
            sanitize(alpha.transform(alpha$1)) +
            ")");
    },
};

const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return typeof v === "string"
            ? v
            : v.hasOwnProperty("red")
                ? rgba.transform(v)
                : hsla.transform(v);
    },
    getAnimatableNone: (v) => {
        const parsed = color.parse(v);
        parsed.alpha = 0;
        return color.transform(parsed);
    },
};

const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function test(v) {
    return (isNaN(v) &&
        typeof v === "string" &&
        (v.match(floatRegex)?.length || 0) +
            (v.match(colorRegex)?.length || 0) >
            0);
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: [],
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
        if (color.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(color.parse(parsedValue));
        }
        else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        }
        else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
    const numSections = split.length;
    return (v) => {
        let output = "";
        for (let i = 0; i < numSections; i++) {
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += sanitize(v[i]);
                }
                else if (type === COLOR_TOKEN) {
                    output += color.transform(v[i]);
                }
                else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
function createTransformer(source) {
    return buildTransformer(analyseComplexValue(source));
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
 * Convert a parsed value to its zero equivalent, but preserve numbers
 * that act as divisors in CSS calc() expressions.
 *
 * analyseComplexValue extracts numbers from CSS strings and puts the
 * surrounding text into a `split` template array. For example:
 *   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
 *                               split:  ["calc(", " / ", ")"]
 *
 * When building a zero-equivalent for animation, naively zeroing all
 * numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
 * We detect this by checking whether the text preceding a number
 * (split[i]) ends with "/" — the CSS calc division operator.
 */
const convertToZero = (value, splitBefore) => {
    if (typeof value === "number") {
        return splitBefore?.trim().endsWith("/") ? value : 0;
    }
    return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
    const info = analyseComplexValue(v);
    const transformer = buildTransformer(info);
    return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone: getAnimatableNone$1,
};

// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}

function mixImmediate(a, b) {
    return (p) => (p > 0 ? b : a);
}

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mixNumber$1 = (from, to, progress) => {
    return from + (to - from) * progress;
};

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    if (!Boolean(type))
        return false;
    let model = type.parse(color);
    if (type === hsla) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = hslaToRgba(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba.transform(blended);
    };
};

const invisibleValues = new Set(["none", "hidden"]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return (p) => (p <= 0 ? origin : target);
    }
    else {
        return (p) => (p >= 1 ? target : origin);
    }
}

function mixNumber(a, b) {
    return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    }
    else if (typeof a === "string") {
        return isCSSVariableToken(a)
            ? mixImmediate
            : color.test(a)
                ? mixColor
                : mixComplex;
    }
    else if (Array.isArray(a)) {
        return mixArray;
    }
    else if (typeof a === "object") {
        return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
}
function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = origin.values[originIndex] ?? 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length &&
        originStats.indexes.color.length === targetStats.indexes.color.length &&
        originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((invisibleValues.has(origin) &&
            !targetStats.values.length) ||
            (invisibleValues.has(target) &&
                !originStats.values.length)) {
            return mixVisibility(origin, target);
        }
        return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    }
    else {
        return mixImmediate(origin, target);
    }
};

function mix(from, to, p) {
    if (typeof from === "number" &&
        typeof to === "number" &&
        typeof p === "number") {
        return mixNumber$1(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
}

const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
        stop: () => cancelFrame(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => (frameData.isProcessing ? frameData.timestamp : time.now()),
    };
};

const generateLinearEasing = (easing, duration, // as milliseconds
resolution = 10 // as milliseconds
) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
        points += Math.round(easing(i / (numPoints - 1)) * 10000) / 10000 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};

/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

/**
 * Create a progress => progress easing function from a generator.
 */
function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale] });
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
        type: "keyframes",
        ease: (progress) => {
            return generator.next(duration * progress).value / scale;
        },
        duration: millisecondsToSeconds(duration),
    };
}

const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800, // in ms
    bounce: 0.3,
    visualDuration: 0.3, // in seconds
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2,
    },
    restDelta: {
        granular: 0.005,
        default: 0.5,
    },
    // Limits
    minDuration: 0.01, // in seconds
    maxDuration: 10.0, // in seconds
    minDamping: 0.05,
    maxDamping: 1,
};
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
/**
 * This is ported from the Framer implementation of duration-based spring resolution.
 */
const safeMin = 0.001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass, }) {
    let envelope;
    let derivative;
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: springDefaults.stiffness,
            damping: springDefaults.damping,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: springDefaults.velocity,
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        mass: springDefaults.mass,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        // Time-defined springs should ignore inherited velocity.
        // Velocity from interrupted animations can cause findSpring()
        // to compute wildly different spring parameters, leading to
        // massive oscillation on small-range animations.
        springOptions.velocity = 0;
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = (2 * Math.PI) / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 *
                clamp(0.05, 1, 1 - (options.bounce || 0)) *
                Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: springDefaults.mass,
                stiffness,
                damping,
            };
        }
        else {
            const derived = findSpring({ ...options, velocity: 0 });
            springOptions = {
                ...springOptions,
                ...derived,
                mass: springDefaults.mass,
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object"
        ? {
            visualDuration: optionsOrVisualDuration,
            keyframes: [0, 1],
            bounce,
        }
        : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -millisecondsToSeconds(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale
        ? springDefaults.restSpeed.granular
        : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale
        ? springDefaults.restDelta.granular
        : springDefaults.restDelta.default);
    let resolveSpring;
    let resolveVelocity;
    // Underdamped coefficients, hoisted for use in the inlined next() hot path
    let angularFreq;
    let A;
    let sinCoeff;
    let cosCoeff;
    if (dampingRatio < 1) {
        angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        A =
            (initialVelocity +
                dampingRatio * undampedAngularFreq * initialDelta) /
                angularFreq;
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (A * Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
        // Analytical derivative of underdamped spring (px/ms)
        sinCoeff =
            dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
        cosCoeff =
            dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
        resolveVelocity = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return envelope *
                (sinCoeff * Math.sin(angularFreq * t) +
                    cosCoeff * Math.cos(angularFreq * t));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
        // Analytical derivative of critically damped spring (px/ms)
        const C = initialVelocity + undampedAngularFreq * initialDelta;
        resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) *
            (undampedAngularFreq * C * t - initialVelocity);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
        // Analytical derivative of overdamped spring (px/ms)
        const P = (initialVelocity +
            dampingRatio * undampedAngularFreq * initialDelta) /
            dampedAngularFreq;
        const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
        const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
        resolveVelocity = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return envelope *
                (sinhCoeff * Math.sinh(freqForT) +
                    coshCoeff * Math.cosh(freqForT));
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        velocity: (t) => secondsToMilliseconds(resolveVelocity(t)),
        next: (t) => {
            /**
             * For underdamped physics springs we need both position and
             * velocity each tick. Compute shared trig values once to avoid
             * duplicate Math.exp/sin/cos calls on the hot path.
             */
            if (!isResolvedFromDuration && dampingRatio < 1) {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const sin = Math.sin(angularFreq * t);
                const cos = Math.cos(angularFreq * t);
                const current = target -
                    envelope *
                        (A * sin + initialDelta * cos);
                const currentVelocity = secondsToMilliseconds(envelope *
                    (sinCoeff * sin + cosCoeff * cos));
                state.done =
                    Math.abs(currentVelocity) <= restSpeed &&
                        Math.abs(target - current) <= restDelta;
                state.value = state.done ? target : current;
                return state;
            }
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = secondsToMilliseconds(resolveVelocity(t));
                state.done =
                    Math.abs(currentVelocity) <= restSpeed &&
                        Math.abs(target - current) <= restDelta;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: () => {
            const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
            const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
        toTransition: () => { },
    };
    return generator;
}
spring.applyToOptions = (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
};

const velocitySampleDuration = 5; // ms
function getGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: getGeneratorVelocity(calcLatest, t, state.value), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}

function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revisit this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length);
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
        return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        if (isZeroDeltaRange && v < input[0])
            return output[0];
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = progress(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
        : interpolator;
}

function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mixNumber$1(min, 1, offsetProgress));
    }
}

function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
}

function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}

function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = isEasingArray(ease)
        ? ease.map(easingDefinitionToFunction)
        : easingDefinitionToFunction(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : defaultOffset(keyframeValues), duration);
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}

const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || (repeat && repeatType !== "loop" && repeat % 2 === 1);
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}

const transitionTypeMap = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring,
};
function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
        transition.type = transitionTypeMap[transition.type];
    }
}

class WithPromise {
    constructor() {
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((resolve) => {
            this.resolve = resolve;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
        return this.finished.then(onResolve, onReject);
    }
}

const percentToProgress = (percent) => percent / 100;
class JSAnimation extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: void 0
    };
    this.stop = () => {
      const { motionValue } = this.options;
      if (motionValue && motionValue.updatedAt !== time.now()) {
        this.tick(time.now());
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
    if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = animationTime;
    }
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress);
      let iterationProgress = progress % 1;
      if (!iterationProgress && progress >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    let state;
    if (isInDelayPhase) {
      this.delayState.value = keyframes2[0];
      state = this.delayState;
    } else {
      state = frameGenerator.next(elapsed);
    }
    if (mixKeyframes && !isInDelayPhase) {
      state.value = mixKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.finished.then(resolve, reject);
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay = 0 } = this.options || {};
    return this.duration + millisecondsToSeconds(delay);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = newTime;
      this.tick(newTime);
    }
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity) {
      return this.generator.velocity(t);
    }
    const current = this.generator.next(t).value;
    return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    if (hasChanged && this.driver) {
      this.updateTime(time.now());
    }
    this.playbackSpeed = newSpeed;
    if (hasChanged && this.driver) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now;
    } else if (this.holdTime !== null) {
      this.startTime = now - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime ?? now;
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.startTime = this.holdTime = null;
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline.observe(this);
  }
}

function fillWildcards(keyframes) {
    for (let i = 1; i < keyframes.length; i++) {
        keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
    }
}

const radToDeg = (rad) => (rad * 180) / Math.PI;
const rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
};
const matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2,
};
const rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
        angle += 360;
    return angle;
};
const rotateZ = rotate;
const scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
const scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
const matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2,
};
function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
        return defaultTransformValue(name);
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
        parsers = matrix3dParsers;
        match = matrix3dMatch;
    }
    else {
        const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        parsers = matrix2dParsers;
        match = matrix2dMatch;
    }
    if (!match) {
        return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function"
        ? valueParser(values)
        : values[valueParser];
}
const readTransformValue = (instance, name) => {
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
    return parseFloat(value.trim());
}

/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = /*@__PURE__*/ (() => new Set(transformPropOrder))();

const isNumOrPxType = (v) => v === number || v === px;
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
        const width = x.max - x.min;
        return boxSizing === "border-box"
            ? width
            : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
        const height = y.max - y.min;
        return boxSizing === "border-box"
            ? height
            : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
    y: (_bbox, { transform }) => parseValueFromTransform(transform, "y"),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */
        elementsToMeasure.forEach((element) => {
            const removedTransforms = removeNonTranslationalTransform(element);
            if (!removedTransforms.length)
                return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element) => {
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(([key, value]) => {
                    element.getValue(key)?.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver) => {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete(isForced));
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver) => {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
        this.state = "pending";
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */
        this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */
        this.needsMeasurement = false;
        this.unresolvedKeyframes = [...unresolvedKeyframes];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.state = "scheduled";
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                frame.read(readAllKeyframes);
                frame.resolveKeyframes(measureAllKeyframes);
            }
        }
        else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        // If initial keyframe is null we need to read it from the DOM
        if (unresolvedKeyframes[0] === null) {
            const currentValue = motionValue?.get();
            // TODO: This doesn't work if the final keyframe is a wildcard
            const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== undefined) {
                unresolvedKeyframes[0] = currentValue;
            }
            else if (element && name) {
                const valueAsRead = element.readValue(name, finalKeyframe);
                if (valueAsRead !== undefined && valueAsRead !== null) {
                    unresolvedKeyframes[0] = valueAsRead;
                }
            }
            if (unresolvedKeyframes[0] === undefined) {
                unresolvedKeyframes[0] = finalKeyframe;
            }
            if (motionValue && currentValue === undefined) {
                motionValue.set(unresolvedKeyframes[0]);
            }
        }
        fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(isForcedComplete = false) {
        this.state = "complete";
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
        toResolve.delete(this);
    }
    cancel() {
        if (this.state === "scheduled") {
            toResolve.delete(this);
            this.state = "pending";
        }
    }
    resume() {
        if (this.state === "pending")
            this.scheduleResolve();
    }
}

const isCSSVar = (name) => name.startsWith("--");

function setStyle(element, name, value) {
    isCSSVar(name)
        ? element.style.setProperty(name, value)
        : (element.style[name] = value);
}

/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */
const supportsFlags = {};

function memoSupports(callback, supportsFlag) {
    const memoized = memo(callback);
    return () => supportsFlags[supportsFlag] ?? memoized();
}

const supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== undefined, "scrollTimeline");

const supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    }
    catch (e) {
        return false;
    }
    return true;
}, "linearEasing");

const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};

function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    }
    else if (typeof easing === "function") {
        return supportsLinearEasing()
            ? generateLinearEasing(easing, duration)
            : "ease-out";
    }
    else if (isBezierDefinition(easing)) {
        return cubicBezierAsString(easing);
    }
    else if (Array.isArray(easing)) {
        return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) ||
            supportedWaapiEasing.easeOut);
    }
    else {
        return supportedWaapiEasing[easing];
    }
}

function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times, } = {}, pseudoElement = undefined) {
    const keyframeOptions = {
        [valueName]: keyframes,
    };
    if (times)
        keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    const options = {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    };
    if (pseudoElement)
        options.pseudoElement = pseudoElement;
    const animation = element.animate(keyframeOptions, options);
    return animation;
}

function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
}

function applyGeneratorOptions({ type, ...options }) {
    if (isGenerator(type) && supportsLinearEasing()) {
        return type.applyToOptions(options);
    }
    else {
        options.duration ?? (options.duration = 300);
        options.ease ?? (options.ease = "easeOut");
    }
    return options;
}

/**
 * NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
 */
class NativeAnimation extends WithPromise {
    constructor(options) {
        super();
        this.finishedTime = null;
        this.isStopped = false;
        /**
         * Tracks a manually-set start time that takes precedence over WAAPI's
         * dynamic startTime. This is cleared when play() or time setter is called,
         * allowing WAAPI to take over timing.
         */
        this.manualStartTime = null;
        if (!options)
            return;
        const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete, } = options;
        this.isPseudoElement = Boolean(pseudoElement);
        this.allowFlatten = allowFlatten;
        this.options = options;
        invariant(typeof options.type !== "string");
        const transition = applyGeneratorOptions(options);
        this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
        if (transition.autoplay === false) {
            this.animation.pause();
        }
        this.animation.onfinish = () => {
            this.finishedTime = this.time;
            if (!pseudoElement) {
                const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
                if (this.updateMotionValue) {
                    this.updateMotionValue(keyframe);
                }
                /**
                 * If we can, we want to commit the final style as set by the user,
                 * rather than the computed keyframe value supplied by the animation.
                 * We always do this, even when a motion value is present, to prevent
                 * a visual flash in Firefox where the WAAPI animation's fill is removed
                 * during cancel() before the scheduled render can apply the correct value.
                 */
                setStyle(element, name, keyframe);
                this.animation.cancel();
            }
            onComplete?.();
            this.notifyFinished();
        };
    }
    play() {
        if (this.isStopped)
            return;
        this.manualStartTime = null;
        this.animation.play();
        if (this.state === "finished") {
            this.updateFinished();
        }
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish?.();
    }
    cancel() {
        try {
            this.animation.cancel();
        }
        catch (e) { }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = true;
        const { state } = this;
        if (state === "idle" || state === "finished") {
            return;
        }
        if (this.updateMotionValue) {
            this.updateMotionValue();
        }
        else {
            this.commitStyles();
        }
        if (!this.isPseudoElement)
            this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
        const element = this.options?.element;
        if (!this.isPseudoElement && element?.isConnected) {
            this.animation.commitStyles?.();
        }
    }
    get duration() {
        const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
        return millisecondsToSeconds(Number(duration));
    }
    get iterationDuration() {
        const { delay = 0 } = this.options || {};
        return this.duration + millisecondsToSeconds(delay);
    }
    get time() {
        return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
        const wasFinished = this.finishedTime !== null;
        this.manualStartTime = null;
        this.finishedTime = null;
        this.animation.currentTime = secondsToMilliseconds(newTime);
        if (wasFinished) {
            this.animation.pause();
        }
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(newSpeed) {
        // Allow backwards playback after finishing
        if (newSpeed < 0)
            this.finishedTime = null;
        this.animation.playbackRate = newSpeed;
    }
    get state() {
        return this.finishedTime !== null
            ? "finished"
            : this.animation.playState;
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
        this.manualStartTime = this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({ timeline, rangeStart, rangeEnd, observe, }) {
        if (this.allowFlatten) {
            this.animation.effect?.updateTiming({ easing: "linear" });
        }
        this.animation.onfinish = null;
        if (timeline && supportsScrollTimeline()) {
            this.animation.timeline = timeline;
            if (rangeStart)
                this.animation.rangeStart = rangeStart;
            if (rangeEnd)
                this.animation.rangeEnd = rangeEnd;
            return noop;
        }
        else {
            return observe(this);
        }
    }
}

const unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut,
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" &&
        isUnsupportedEase(transition.ease)) {
        transition.ease = unsupportedEasingFunctions[transition.ease];
    }
}

/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
class NativeAnimationExtended extends NativeAnimation {
    constructor(options) {
        /**
         * The base NativeAnimation function only supports a subset
         * of Motion easings, and WAAPI also only supports some
         * easing functions via string/cubic-bezier definitions.
         *
         * This function replaces those unsupported easing functions
         * with a JS easing function. This will later get compiled
         * to a linear() easing function.
         */
        replaceStringEasing(options);
        /**
         * Ensure we replace the transition type with a generator function
         * before passing to WAAPI.
         *
         * TODO: Does this have a better home? It could be shared with
         * JSAnimation.
         */
        replaceTransitionType(options);
        super(options);
        /**
         * Only set startTime when the animation should autoplay.
         * Setting startTime on a paused WAAPI animation unpauses it
         * (per the WAAPI spec), which breaks autoplay: false.
         */
        if (options.startTime !== undefined && options.autoplay !== false) {
            this.startTime = options.startTime;
        }
        this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read committed styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(value) {
        const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
        if (!motionValue)
            return;
        if (value !== undefined) {
            motionValue.set(value);
            return;
        }
        const sampleAnimation = new JSAnimation({
            ...options,
            autoplay: false,
        });
        /**
         * Use wall-clock elapsed time for sampling.
         * Under CPU load, WAAPI's currentTime may not reflect actual
         * elapsed time, causing incorrect sampling and visual jumps.
         */
        const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
        const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
        const current = sampleAnimation.sample(sampleTime).value;
        /**
         * Write the estimated value to inline style so it persists
         * after cancel(), covering the async gap before the next
         * animation starts.
         */
        const { name } = this.options;
        if (element && name)
            setStyle(element, name, current);
        motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
        sampleAnimation.stop();
    }
}

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (value, name) => {
    // If the list of keys that might be non-animatable grows, replace with Set
    if (name === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1)
        return true;
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] !== current)
            return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    if (originKeyframe === null) {
        return false;
    }
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */
    if (name === "display" || name === "visibility")
        return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return (hasKeyframesChanged(keyframes) ||
        ((type === "spring" || isGenerator(type)) && velocity));
}

function makeAnimationInstant(options) {
    options.duration = 0;
    options.type = "keyframes";
}

/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
]);

const browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
    for (let i = 0; i < keyframes.length; i++) {
        if (typeof keyframes[i] === "string" &&
            browserColorFunctions.test(keyframes[i])) {
            return true;
        }
    }
    return false;
}

const colorProperties = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
]);
const supportsWaapi = /*@__PURE__*/ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
    const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes, } = options;
    const subject = motionValue?.owner?.current;
    /**
     * We use this check instead of isHTMLElement() because we explicitly
     * **don't** want elements in different timing contexts (i.e. popups)
     * to be accelerated, as it's not possible to sync these animations
     * properly with those driven from the main window frameloop.
     */
    if (!(subject instanceof HTMLElement)) {
        return false;
    }
    const { onUpdate, transformTemplate } = motionValue.owner.getProps();
    return (supportsWaapi() &&
        name &&
        /**
         * Force WAAPI for color properties with browser-only color formats
         * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
         */
        (acceleratedValues.has(name) ||
            (colorProperties.has(name) &&
                hasBrowserOnlyColors(keyframes))) &&
        (name !== "transform" || !transformTemplate) &&
        /**
         * If we're outputting values to onUpdate then we can't use WAAPI as there's
         * no way to read the value from WAAPI every frame.
         */
        !onUpdate &&
        !repeatDelay &&
        repeatType !== "mirror" &&
        damping !== 0 &&
        type !== "inertia");
}

/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */
const MAX_RESOLVE_DELAY = 40;
class AsyncMotionValueAnimation extends WithPromise {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
        super();
        /**
         * Bound to support return animation.stop pattern
         */
        this.stop = () => {
            if (this._animation) {
                this._animation.stop();
                this.stopTimeline?.();
            }
            this.keyframeResolver?.cancel();
        };
        this.createdAt = time.now();
        const optionsWithDefaults = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            name,
            motionValue,
            element,
            ...options,
        };
        const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
        this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
        this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
        this.keyframeResolver = undefined;
        const { name, type, velocity, delay, isHandoff, onUpdate } = options;
        this.resolvedAt = time.now();
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */
        let canAnimateValue = true;
        if (!canAnimate(keyframes, name, type, velocity)) {
            canAnimateValue = false;
            if (MotionGlobalConfig.instantAnimations || !delay) {
                onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
            }
            keyframes[0] = keyframes[keyframes.length - 1];
            makeAnimationInstant(options);
            options.repeat = 0;
        }
        /**
         * Resolve startTime for the animation.
         *
         * This method uses the createdAt and resolvedAt to calculate the
         * animation startTime. *Ideally*, we would use the createdAt time as t=0
         * as the following frame would then be the first frame of the animation in
         * progress, which would feel snappier.
         *
         * However, if there's a delay (main thread work) between the creation of
         * the animation and the first committed frame, we prefer to use resolvedAt
         * to avoid a sudden jump into the animation.
         */
        const startTime = sync
            ? !this.resolvedAt
                ? this.createdAt
                : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
                    ? this.resolvedAt
                    : this.createdAt
            : undefined;
        const resolvedOptions = {
            startTime,
            finalKeyframe,
            ...options,
            keyframes,
        };
        /**
         * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         *
         * Also skip WAAPI when keyframes aren't animatable, as the resolved
         * values may not be valid CSS and would trigger browser warnings.
         */
        const useWaapi = canAnimateValue &&
            !isHandoff &&
            supportsBrowserAnimation(resolvedOptions);
        const element = resolvedOptions.motionValue?.owner?.current;
        let animation;
        if (useWaapi) {
            try {
                animation = new NativeAnimationExtended({
                    ...resolvedOptions,
                    element,
                });
            }
            catch {
                animation = new JSAnimation(resolvedOptions);
            }
        }
        else {
            animation = new JSAnimation(resolvedOptions);
        }
        animation.finished.then(() => {
            this.notifyFinished();
        }).catch(noop);
        if (this.pendingTimeline) {
            this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        this._animation = animation;
    }
    get finished() {
        if (!this._animation) {
            return this._finished;
        }
        else {
            return this.animation.finished;
        }
    }
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(() => { });
    }
    get animation() {
        if (!this._animation) {
            this.keyframeResolver?.resume();
            flushKeyframeResolvers();
        }
        return this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get iterationDuration() {
        return this.animation.iterationDuration;
    }
    get time() {
        return this.animation.time;
    }
    set time(newTime) {
        this.animation.time = newTime;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(newSpeed) {
        this.animation.speed = newSpeed;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(timeline) {
        if (this._animation) {
            this.stopTimeline = this.animation.attachTimeline(timeline);
        }
        else {
            this.pendingTimeline = timeline;
        }
        return () => this.stop();
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        if (this._animation) {
            this.animation.cancel();
        }
        this.keyframeResolver?.cancel();
    }
}

function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
    const index = Array.from(children)
        .sort((a, b) => a.sortNodePosition(b))
        .indexOf(child);
    const numChildren = children.size;
    const maxStaggerDuration = (numChildren - 1) * staggerChildren;
    const delayIsFunction = typeof delayChildren === "function";
    return delayIsFunction
        ? delayChildren(index, numChildren)
        : staggerDirection === 1
            ? index * staggerChildren
            : maxStaggerDuration - index * staggerChildren;
}

/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = 
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 ?? token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback)
        ? getVariableValue(fallback, element, depth + 1)
        : fallback;
}

const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};

/**
 * If `transition` has `inherit: true`, shallow-merge it with
 * `parentTransition` (child keys win) and strip the `inherit` key.
 * Otherwise return `transition` unchanged.
 */
function resolveTransition(transition, parentTransition) {
    if (transition?.inherit && parentTransition) {
        const { inherit: _, ...rest } = transition;
        return { ...parentTransition, ...rest };
    }
    return transition;
}

function getValueTransition(transition, key) {
    const valueTransition = transition?.[key] ??
        transition?.["default"] ??
        transition;
    if (valueTransition !== transition) {
        return resolveTransition(valueTransition, transition);
    }
    return valueTransition;
}

const orchestrationKeys = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
]);
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(transition) {
    for (const key in transition) {
        if (!orchestrationKeys.has(key))
            return true;
    }
    return false;
}

const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay);
    const options = {
        keyframes: Array.isArray(target) ? target : [null, target],
        ease: "easeOut",
        velocity: value.getVelocity(),
        ...valueTransition,
        delay: -elapsed,
        onUpdate: (v) => {
            value.set(v);
            valueTransition.onUpdate && valueTransition.onUpdate(v);
        },
        onComplete: () => {
            onComplete();
            valueTransition.onComplete && valueTransition.onComplete();
        },
        name,
        motionValue: value,
        element: isHandoff ? undefined : element,
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unique transition settings for this value.
     */
    if (!isTransitionDefined(valueTransition)) {
        Object.assign(options, getDefaultTransition(name, options));
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    options.duration && (options.duration = secondsToMilliseconds(options.duration));
    options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
    /**
     * Support deprecated way to set initial value. Prefer keyframe syntax.
     */
    if (options.from !== undefined) {
        options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false ||
        (options.duration === 0 && !options.repeatDelay)) {
        makeAnimationInstant(options);
        if (options.delay === 0) {
            shouldSkip = true;
        }
    }
    if (MotionGlobalConfig.instantAnimations ||
        MotionGlobalConfig.skipAnimations ||
        element?.shouldSkipAnimations) {
        shouldSkip = true;
        makeAnimationInstant(options);
        options.delay = 0;
    }
    /**
     * If the transition type or easing has been explicitly set by the user
     * then we don't want to allow flattening the animation.
     */
    options.allowFlatten = !valueTransition.type && !valueTransition.ease;
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
        const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
        if (finalKeyframe !== undefined) {
            frame.update(() => {
                options.onUpdate(finalKeyframe);
                options.onComplete();
            });
            return;
        }
    }
    return valueTransition.isSync
        ? new JSAnimation(options)
        : new AsyncMotionValueAnimation(options);
};

function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement?.values.forEach((value, key) => {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}

function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder,
]);

const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
class MotionValue {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(init, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev) {
        this.events.change?.notify(this.current);
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v) {
    if (!this.passiveEffect) {
      this.updateAndNotify(v);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(dependent) {
    if (!this.dependents) {
      this.dependents = /* @__PURE__ */ new Set();
    }
    this.dependents.add(dependent);
  }
  removeDependent(dependent) {
    if (this.dependents) {
      this.dependents.delete(dependent);
    }
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function motionValue(init, options) {
  return new MotionValue(init, options);
}

const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function resolveFinalValueInKeyframes(v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}

const isMotionValue = (value) => Boolean(value && value.getVelocity);

function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}

function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */
    if (isWillChangeMotionValue(willChange)) {
        return willChange.add(key);
    }
    else if (!willChange && MotionGlobalConfig.WillChange) {
        const newWillChange = new MotionGlobalConfig.WillChange("auto");
        visualElement.addValue("willChange", newWillChange);
        newWillChange.add(key);
    }
}

function camelToDash(str) {
    return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
}

/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    let { transition, transitionEnd, ...target } = targetAndTransition;
    const defaultTransition = visualElement.getDefaultTransition();
    transition = transition
        ? resolveTransition(transition, defaultTransition)
        : defaultTransition;
    const reduceMotion = transition?.reduceMotion;
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
        const valueTarget = target[key];
        if (valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            ...getValueTransition(transition || {}, key),
        };
        /**
         * If the value is already at the defined target, skip the animation.
         * We still re-assert the value via frame.update to take precedence
         * over any stale transitionEnd callbacks from previous animations.
         */
        const currentValue = value.get();
        if (currentValue !== undefined &&
            !value.isAnimating() &&
            !Array.isArray(valueTarget) &&
            valueTarget === currentValue &&
            !valueTransition.velocity) {
            frame.update(() => value.set(valueTarget));
            continue;
        }
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = getOptimisedAppearId(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, frame);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        addValueToWillChange(visualElement, key);
        const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
        value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key)
            ? { type: false }
            : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        const applyTransitionEnd = () => frame.update(() => {
            transitionEnd && setTarget(visualElement, transitionEnd);
        });
        if (animations.length) {
            Promise.all(animations).then(applyTransitionEnd);
        }
        else {
            applyTransitionEnd();
        }
    }
    return animations;
}

function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.type === "exit"
        ? visualElement.presenceContext?.custom
        : undefined);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all(animateTarget(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    for (const child of visualElement.variantChildren) {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delay +
                (typeof delayChildren === "function" ? 0 : delayChildren) +
                calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection),
        }).then(() => child.notify("AnimationComplete", variant)));
    }
    return Promise.all(animations);
}

function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
        visualElement.notify("AnimationComplete", definition);
    });
}

/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};

/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);

/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || isZeroValueString(value);
    }
    else {
        return true;
    }
}

/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};

const mask = {
    ...complex,
    getAnimatableNone: (v) => {
        const parsed = complex.parse(v);
        const transformer = complex.createTransformer(v);
        return transformer(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? { ...v, alpha: 1 } : v));
    },
};

const int = {
    ...number,
    transform: Math.round,
};

const transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
};

const numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    inset: px,
    insetBlock: px,
    insetBlockStart: px,
    insetBlockEnd: px,
    insetInline: px,
    insetInlineStart: px,
    insetInlineEnd: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    paddingBlock: px,
    paddingBlockStart: px,
    paddingBlockEnd: px,
    paddingInline: px,
    paddingInlineStart: px,
    paddingInlineEnd: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    marginBlock: px,
    marginBlockStart: px,
    marginBlockEnd: px,
    marginInline: px,
    marginInlineStart: px,
    marginInlineEnd: px,
    // Typography
    fontSize: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px,
    ...transformValueTypes,
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int,
};

/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
    mask,
    WebkitMask: mask,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];

const customTypes = /*@__PURE__*/ new Set([filter, mask]);
function getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (!customTypes.has(defaultValueType))
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}

/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" &&
            !invalidTemplates.has(keyframe) &&
            analyseComplexValue(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        for (const noneIndex of noneKeyframeIndexes) {
            unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
        }
    }
}

class DOMKeyframesResolver extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current)
            return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if (isCSSVariableToken(keyframe)) {
                    const resolved = getVariableValue(keyframe, element.current);
                    if (resolved !== undefined) {
                        unresolvedKeyframes[i] = resolved;
                    }
                    if (i === unresolvedKeyframes.length - 1) {
                        this.finalKeyframe = keyframe;
                    }
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */
        this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */
        if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [origin, target] = unresolvedKeyframes;
        const originType = findDimensionValueType(origin);
        const targetType = findDimensionValueType(target);
        /**
         * If one keyframe contains embedded CSS variables (e.g. in calc()) and the other
         * doesn't, we need to measure to convert to pixels. This handles GitHub issue #3410.
         */
        const originHasVar = containsCSSVariable(origin);
        const targetHasVar = containsCSSVariable(target);
        if (originHasVar !== targetHasVar && positionalValues[name]) {
            this.needsMeasurement = true;
            return;
        }
        /**
         * Either we don't recognise these value types or we can animate between them.
         */
        if (originType === targetType)
            return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */
        if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
            for (let i = 0; i < unresolvedKeyframes.length; i++) {
                const value = unresolvedKeyframes[i];
                if (typeof value === "string") {
                    unresolvedKeyframes[i] = parseFloat(value);
                }
            }
        }
        else if (positionalValues[name]) {
            /**
             * Else, the only way to resolve this is by measuring the element.
             */
            this.needsMeasurement = true;
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if (unresolvedKeyframes[i] === null ||
                isNone(unresolvedKeyframes[i])) {
                noneKeyframeIndexes.push(i);
            }
        }
        if (noneKeyframeIndexes.length) {
            makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current)
            return;
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) {
            element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
        }
    }
    measureEndState() {
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current)
            return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = finalKeyframe;
        }
        // If we removed transform values, reapply them before the next render
        if (this.removedTransforms?.length) {
            this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
                element
                    .getValue(unsetTransformName)
                    .set(unsetTransformValue);
            });
        }
        this.resolveNoneKeyframes();
    }
}

function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) {
        return [];
    }
    if (elementOrSelector instanceof EventTarget) {
        return [elementOrSelector];
    }
    else if (typeof elementOrSelector === "string") {
        let root = document;
        const elements = selectorCache?.[elementOrSelector] ??
            root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter((element) => element != null);
}

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

/**
 * Checks if an element is an HTML element in a way
 * that works across iframes
 */
function isHTMLElement(element) {
    return (isObject(element) &&
        "offsetHeight" in element &&
        !("ownerSVGElement" in element));
}

const { schedule: microtask} = 
/* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

const isDragging = {
    x: false,
    y: false,
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}

function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (isDragging[axis]) {
            return null;
        }
        else {
            isDragging[axis] = true;
            return () => {
                isDragging[axis] = false;
            };
        }
    }
    else {
        if (isDragging.x || isDragging.y) {
            return null;
        }
        else {
            isDragging.x = isDragging.y = true;
            return () => {
                isDragging.x = isDragging.y = false;
            };
        }
    }
}

function setupGesture(elementOrSelector, options) {
    const elements = resolveElements(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal,
    };
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
}

function isValidHover(event) {
    return !(event.pointerType === "touch" || isDragActive());
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */
function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
    elements.forEach((element) => {
        let isPressed = false;
        let deferredHoverEnd = false;
        let hoverEndCallback;
        const removePointerLeave = () => {
            element.removeEventListener("pointerleave", onPointerLeave);
        };
        const endHover = (event) => {
            if (hoverEndCallback) {
                hoverEndCallback(event);
                hoverEndCallback = undefined;
            }
            removePointerLeave();
        };
        const onPointerUp = (event) => {
            isPressed = false;
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            if (deferredHoverEnd) {
                deferredHoverEnd = false;
                endHover(event);
            }
        };
        const onPointerDown = () => {
            isPressed = true;
            window.addEventListener("pointerup", onPointerUp, eventOptions);
            window.addEventListener("pointercancel", onPointerUp, eventOptions);
        };
        const onPointerLeave = (leaveEvent) => {
            if (leaveEvent.pointerType === "touch")
                return;
            if (isPressed) {
                deferredHoverEnd = true;
                return;
            }
            endHover(leaveEvent);
        };
        const onPointerEnter = (enterEvent) => {
            if (!isValidHover(enterEvent))
                return;
            deferredHoverEnd = false;
            const onHoverEnd = onHoverStart(element, enterEvent);
            if (typeof onHoverEnd !== "function")
                return;
            hoverEndCallback = onHoverEnd;
            element.addEventListener("pointerleave", onPointerLeave, eventOptions);
        };
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
        element.addEventListener("pointerdown", onPointerDown, eventOptions);
    });
    return cancel;
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};

const keyboardAccessibleElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A",
]);
/**
 * Checks if an element is natively keyboard accessible (focusable).
 * Used by the press gesture to determine if we need to add tabIndex.
 */
function isElementKeyboardAccessible(element) {
    return (keyboardAccessibleElements.has(element.tagName) ||
        element.isContentEditable === true);
}
const textInputElements = new Set(["INPUT", "SELECT", "TEXTAREA"]);
/**
 * Checks if an element has text selection or direct interaction behavior
 * that should block drag gestures from starting.
 *
 * This specifically targets form controls where the user might want to select
 * text or interact with the control (e.g., sliders, dropdowns).
 *
 * Buttons and links are NOT included because they don't have click-and-move
 * actions of their own - they only respond to click events, so dragging
 * should still work when initiated from these elements.
 */
function isElementTextInput(element) {
    return (textInputElements.has(element.tagName) ||
        element.isContentEditable === true);
}

const isPressing = new WeakSet();

/**
 * Filter out events that are not "Enter" keys.
 */
function filterEvents(callback) {
    return (event) => {
        if (event.key !== "Enter")
            return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
const enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
        return;
    const handleKeydown = filterEvents(() => {
        if (isPressing.has(element))
            return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(() => {
            firePointerEvent(element, "up");
        });
        const handleBlur = () => firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};

/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */
function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
}
const claimedPointerDownEvents = new WeakSet();
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */
function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
    const startPress = (startEvent) => {
        const target = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent))
            return;
        if (claimedPointerDownEvents.has(startEvent))
            return;
        isPressing.add(target);
        if (options.stopPropagation) {
            claimedPointerDownEvents.add(startEvent);
        }
        const onPressEnd = onPressStart(target, startEvent);
        const onPointerEnd = (endEvent, success) => {
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (isPressing.has(target)) {
                isPressing.delete(target);
            }
            if (!isValidPressEvent(endEvent)) {
                return;
            }
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, { success });
            }
        };
        const onPointerUp = (upEvent) => {
            onPointerEnd(upEvent, target === window ||
                target === document ||
                options.useGlobalTarget ||
                isNodeOrChild(target, upEvent.target));
        };
        const onPointerCancel = (cancelEvent) => {
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach((target) => {
        const pointerDownTarget = options.useGlobalTarget ? window : target;
        pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
        if (isHTMLElement(target)) {
            target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
            if (!isElementKeyboardAccessible(target) &&
                !target.hasAttribute("tabindex")) {
                target.tabIndex = 0;
            }
        }
    });
    return cancelEvents;
}

/**
 * Checks if an element is an SVG element in a way
 * that works across iframes
 */
function isSVGElement(element) {
    return isObject(element) && "ownerSVGElement" in element;
}

const resizeHandlers = new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
    if (borderBoxSize && borderBoxSize[0]) {
        return borderBoxSize[0][(borderBoxAxis + "Size")];
    }
    else if (isSVGElement(target) && "getBBox" in target) {
        return target.getBBox()[svgAxis];
    }
    else {
        return target[htmlAxis];
    }
};
const getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
const getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler) => {
        handler(target, {
            get width() {
                return getWidth(target, borderBoxSize);
            },
            get height() {
                return getHeight(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = resolveElements(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer?.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers?.delete(handler);
            if (!elementHandlers?.size) {
                observer?.unobserve(element);
            }
        });
    };
}

const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const info = {
            get width() {
                return window.innerWidth;
            },
            get height() {
                return window.innerHeight;
            },
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size &&
            typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}

function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

/**
 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
 * in a way that works across iframes
 */
function isSVGSVGElement(element) {
    return isSVGElement(element) && element.tagName === "svg";
}

/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));

const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});

const visualElementStore = new WeakMap();

function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}

/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];

function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

/**
 * Updates motion values from props changes.
 * Uses `any` type for element to avoid circular dependencies with VisualElement.
 */
function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, motionValue(nextValue, { owner: element }));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                }
                else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}

// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };

const isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}

const propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let featureDefinitions = {};
function setFeatureDefinitions(definitions) {
  featureDefinitions = definitions;
}
function getFeatureDefinitions() {
  return featureDefinitions;
}
class VisualElement {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now = time.now();
      if (this.renderScheduledAt < now) {
        this.renderScheduledAt = now;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.skipAnimationsConfig = skipAnimations;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  mount(instance) {
    if (this.hasBeenMounted) {
      for (const key in this.initialValues) {
        this.values.get(key)?.jump(this.initialValues[key]);
        this.latestValues[key] = this.initialValues[key];
      }
    }
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = prefersReducedMotion.current;
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent?.removeChild(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(child) {
    this.children.add(child);
    this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
    this.enteringChildren.add(child);
  }
  removeChild(child) {
    this.children.delete(child);
    this.enteringChildren && this.enteringChildren.delete(child);
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
      const { factory, keyframes, times, ease, duration } = value.accelerate;
      const animation = new NativeAnimation({
        element: this.current,
        name: key,
        keyframes,
        times,
        ease,
        duration: secondsToMilliseconds(duration)
      });
      const cleanup = factory(animation);
      this.valueSubscriptions.set(key, () => {
        cleanup();
        animation.cancel();
      });
      return;
    }
    const valueIsTransform = transformProps.has(key);
    if (valueIsTransform && this.onBindTransform) {
      this.onBindTransform();
    }
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
      this.scheduleRender();
    });
    let removeSyncCheck;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      if (removeSyncCheck)
        removeSyncCheck();
      if (value.owner)
        value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    const { initial } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
  scheduleRenderMicrotask() {
    microtask.render(this.render);
  }
}

class DOMVisualElement extends VisualElement {
    constructor() {
        super(...arguments);
        this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        const style = props.style;
        return style ? style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (isMotionValue(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current) {
                    this.current.textContent = `${latest}`;
                }
            });
        }
    }
}

/**
 * Feature base class for extending VisualElement functionality.
 * Features are plugins that can be mounted/unmounted to add behavior
 * like gestures, animations, or layout tracking.
 */
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}

function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY ||
        values.skewX ||
        values.skewY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const { visualElement } = node.options;
        if (visualElement &&
            visualElement.props.style &&
            visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            translateAxis(box.x, -node.scroll.offset.x);
            translateAxis(box.y, -node.scroll.offset.y);
        }
        if (delta) {
            // Incoporate each ancestor's scale into a cumulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues, node.layout?.layoutBox);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    if (treeScale.x < TREE_SCALE_SNAP_MAX &&
        treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX &&
        treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min += distance;
    axis.max += distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = mixNumber$1(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
    if (typeof value === "string") {
        return (parseFloat(value) / 100) * (axis.max - axis.min);
    }
    return value;
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform, sourceBox) {
    const resolveBox = sourceBox ?? box;
    transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}

function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = transformPropOrder[i];
        const value = latestValues[key];
        if (value === undefined)
            continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        }
        else {
            const parsed = parseFloat(value);
            valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}

function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        }
        else if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
        }
        else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] =
                    valueAsType;
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = buildTransform(latestValues, state.transform, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

function renderHTML(element, { style, vars }, styleProp, projection) {
    const elementStyle = element.style;
    let key;
    for (key in style) {
        // CSSStyleDeclaration has [index: number]: string; in the types, so we use that as key type.
        elementStyle[key] = style[key];
    }
    // Write projection styles directly to element style
    projection?.applyProjectionStyles(elementStyle, styleProp);
    for (key in vars) {
        // Loop over any CSS variables and assign those.
        // They can only be assigned using `setProperty`.
        elementStyle.setProperty(key, vars[key]);
    }
}

function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};

const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = mixNumber$1(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};

const scaleCorrectors = {
    borderRadius: {
        ...correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow,
};

function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}

function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
    const style = props.style;
    const prevStyle = prevProps?.style;
    const newValues = {};
    if (!style)
        return newValues;
    for (const key in style) {
        if (isMotionValue(style[key]) ||
            (prevStyle && isMotionValue(prevStyle[key])) ||
            isForcedMotionValue(key, props) ||
            visualElement?.getValue(key)?.liveStyle !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}

function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
        this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            return this.projection?.isProjecting
                ? defaultTransformValue(key)
                : readTransformValue(instance, key);
        }
        else {
            const computedStyle = getComputedStyle$1(instance);
            const value = (isCSSVariableName(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
    }
}

const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 *
 * Note: We use unitless values for stroke-dasharray and stroke-dashoffset
 * because Safari incorrectly scales px values when the page is zoomed.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset (unitless to avoid Safari zoom bug)
    attrs[keys.offset] = `${-offset}`;
    // Build the dash array (unitless to avoid Safari zoom bug)
    attrs[keys.array] = `${length} ${spacing}`;
}

/**
 * CSS Motion Path properties that should remain as CSS styles on SVG elements.
 */
const cssMotionPathProperties = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor",
];
/**
 * Build SVG visual attributes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate, styleProp) {
    buildHTMLStyles(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    /**
     * However, we apply transforms as CSS transforms.
     * So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
     */
    if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
        style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
        delete attrs.transformOrigin;
    }
    if (style.transform) {
        /**
         * SVG's element transform-origin uses its own median as a reference.
         * Therefore, transformBox becomes a fill-box
         */
        style.transformBox = styleProp?.transformBox ?? "fill-box";
        delete attrs.transformBox;
    }
    for (const key of cssMotionPathProperties) {
        if (attrs[key] !== undefined) {
            style[key] = attrs[key];
            delete attrs[key];
        }
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);

const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}

function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
    for (const key in props) {
        if (isMotionValue(props[key]) ||
            isMotionValue(prevProps[key])) {
            const targetKey = transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}

class SVGVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = isSVGTag(instance.tagName);
        super.mount(instance);
    }
}

const numVariantProps = variantProps.length;
/**
 * Get variant context from a visual element's parent chain.
 * Uses `any` type for visualElement to avoid circular dependencies.
 */
function getVariantContext(visualElement) {
    if (!visualElement)
        return undefined;
    if (!visualElement.isControllingVariants) {
        const context = visualElement.parent
            ? getVariantContext(visualElement.parent) || {}
            : {};
        if (visualElement.props.initial !== undefined) {
            context.initial = visualElement.props.initial;
        }
        return context;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
        const name = variantProps[i];
        const prop = visualElement.props[name];
        if (isVariantLabel(prop) || prop === false) {
            context[name] = prop;
        }
    }
    return context;
}

function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(visualElement) {
    return (animations) => {
        return Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
    };
}
function createAnimationState(visualElement) {
    let animate = createAnimateFunction(visualElement);
    let state = createState();
    let isInitialRender = true;
    /**
     * Track whether the animation state has been reset (e.g. via StrictMode
     * double-invocation or Suspense unmount/remount). On the first
     * animateChanges() call after a reset we need to behave like the initial
     * render for variant-inheritance checks, even though isInitialRender is
     * already false.
     */
    let wasReset = false;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (type) => (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition, type === "exit"
            ? visualElement.presenceContext?.custom
            : undefined);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(changedActiveType) {
        const { props } = visualElement;
        const context = getVariantContext(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined
                ? props[type]
                : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] &&
                prop !== props[type] &&
                propIsVariant;
            if (isInherited &&
                (isInitialRender || wasReset) &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * If exit is already active and wasn't just activated, skip
             * re-processing to prevent interrupting running exit animations.
             * Re-resolving exit with a changed custom value can start new
             * value animations that stop the originals, leaving the exit
             * animation promise unresolved and the component stuck in the DOM.
             */
            if (type === "exit" && typeState.isActive && activeDelta !== true) {
                if (typeState.prevResolvedValues) {
                    encounteredKeys = {
                        ...encounteredKeys,
                        ...typeState.prevResolvedValues,
                    };
                }
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = false;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                let valueHasChanged = false;
                if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                    valueHasChanged = !shallowCompare(next, prev);
                }
                else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if ((isInitialRender || wasReset) &&
                visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */
            const willAnimateViaParent = isInherited && variantDidChange;
            const needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) {
                animations.push(...definitionList.map((animation) => {
                    const options = { type };
                    /**
                     * If we're performing the initial animation, but we're not
                     * rendering at the same time as the variant-controlling parent,
                     * we want to use the parent's transition to calculate the stagger.
                     */
                    if (typeof animation === "string" &&
                        (isInitialRender || wasReset) &&
                        !willAnimateViaParent &&
                        visualElement.manuallyAnimateOnMount &&
                        visualElement.parent) {
                        const { parent } = visualElement;
                        const parentVariant = resolveVariant(parent, animation);
                        if (parent.enteringChildren && parentVariant) {
                            const { delayChildren } = parentVariant.transition || {};
                            options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
                        }
                    }
                    return {
                        animation: animation,
                        options,
                    };
                }));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            /**
             * If the initial prop contains a transition we can use that, otherwise
             * allow the animation function to use the visual element's default.
             */
            if (typeof props.initial !== "boolean") {
                const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial)
                    ? props.initial[0]
                    : props.initial);
                if (initialTransition && initialTransition.transition) {
                    fallbackAnimation.transition = initialTransition.transition;
                }
            }
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget ?? null;
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            (props.initial === false || props.initial === props.animate) &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        wasReset = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive) {
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
        state[type].isActive = isActive;
        const animations = animateChanges(type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
        reset: () => {
            state = createState();
            wasReset = true;
        },
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}

const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate =
        mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
    if ((delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX) ||
        isNaN(delta.scale)) {
        delta.scale = 1.0;
    }
    if ((delta.translate >= TRANSLATE_MIN &&
        delta.translate <= TRANSLATE_MAX) ||
        isNaN(delta.translate)) {
        delta.translate = 0.0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
    const anchorPoint = anchor
        ? mixNumber$1(parent.min, parent.max, anchor)
        : parent.min;
    target.min = anchorPoint + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
    calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
    calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
    const anchorPoint = anchor
        ? mixNumber$1(parent.min, parent.max, anchor)
        : parent.min;
    target.min = layout.min - anchorPoint;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}

/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return (Math.round(a.min) === Math.round(b.min) &&
        Math.round(a.max) === Math.round(b.max));
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
    return (a.translate === b.translate &&
        a.scale === b.scale &&
        a.originPoint === b.originPoint);
}

function eachAxis(callback) {
    return [callback("x"), callback("y")];
}

function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective)
            transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
        if (skewX)
            transform += `skewX(${skewX}deg) `;
        if (skewY)
            transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}

const borderLabels = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
];
const numBorders = borderLabels.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
        target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = borderLabels[i];
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (percent.test(leadRadius) || percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, circOut);
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(progress(min, max, p));
    };
}

function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}

const compareByDepth = (a, b) => a.depth - b.depth;

class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        addUniqueItem(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        removeItem(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}

/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = time.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            cancelFrame(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frame.setup(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 */
function resolveMotionValue(value) {
    return isMotionValue(value) ? value.get() : value;
}

class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        addUniqueItem(this.members, node);
        for (let i = this.members.length - 1; i >= 0; i--) {
            const member = this.members[i];
            if (member === node || member === this.lead || member === this.prevLead)
                continue;
            const inst = member.instance;
            if ((!inst || inst.isConnected === false) && !member.snapshot) {
                removeItem(this.members, member);
                member.unmount();
            }
        }
        node.scheduleRender();
    }
    remove(node) {
        removeItem(this.members, node);
        if (node === this.prevLead)
            this.prevLead = undefined;
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead)
                this.promote(prevLead);
        }
    }
    relegate(node) {
        for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false && member.instance?.isConnected !== false) {
                this.promote(member);
                return true;
            }
        }
        return false;
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.updateSnapshot();
            node.scheduleRender();
            const { layoutDependency: prevDep } = prevLead.options;
            const { layoutDependency: nextDep } = node.options;
            if (prevDep === undefined || prevDep !== nextDep) {
                node.resumeFrom = prevLead;
                if (preserveFollowOpacity)
                    prevLead.preserveOpacity = true;
                if (prevLead.snapshot) {
                    node.snapshot = prevLead.snapshot;
                    node.snapshot.latestValues =
                        prevLead.animationValues || prevLead.latestValues;
                }
                if (node.root?.isUpdating)
                    node.isLayoutDirty = true;
            }
            if (node.options.crossfade === false)
                prevLead.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((member) => {
            member.options.onExitComplete?.();
            member.resumingFrom?.options.onExitComplete?.();
        });
    }
    scheduleRender() {
        this.members.forEach((member) => member.instance && member.scheduleRender(false));
    }
    removeLeadSnapshot() {
        if (this.lead?.snapshot)
            this.lead.snapshot = undefined;
    }
}

/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};

const transformAxes = ["", "X", "Y", "Z"];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
        return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
        return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent?.()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = id$1++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            this.animationCommitId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */
            this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            this.layoutVersion = 0;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = () => this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                this.projectionUpdateScheduled = false;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
            };
            /**
             * Frame calculations
             */
            this.resolvedRelativeTargetAt = 0.0;
            this.linkedParentVersion = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance) {
            if (this.instance)
                return;
            this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (this.root.hasTreeAnimated && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                let innerWidth = 0;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                // Set initial innerWidth in a frame.read callback to batch the read
                frame.read(() => {
                    innerWidth = window.innerWidth;
                });
                attachResizeListener(instance, () => {
                    const newInnerWidth = window.innerWidth;
                    if (newInnerWidth === innerWidth)
                        return;
                    innerWidth = newInnerWidth;
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = delay(resizeUnblockUpdate, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const hasTargetChanged = !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, newLayout);
                    /*
                     * Note: Disabled to fix relative animations always triggering new
                     * layout animations. If this causes further issues, we can try
                     * a different approach to detecting relative target changes.
                     */
                    // || hasRelativeLayoutChanged
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
                    if (this.options.layoutRoot ||
                        this.resumeFrom ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (hasTargetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        const animationOptions = {
                            ...getValueTransition(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                        /**
                         * Set animation origin after starting animation to avoid layout jump
                         * caused by stopping previous layout animation
                         */
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never committed to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            this.eventHandlers.clear();
            cancelFrame(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */
            if (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear) {
                cancelTreeOptimisedTransformAnimations(this);
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                /**
                 * Percentage translates resolve against layoutBox dimensions,
                 * so ancestors with them must be re-measured after transform reset.
                 */
                if (typeof node.latestValues.x === "string" ||
                    typeof node.latestValues.y === "string") {
                    node.isLayoutDirty = true;
                }
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                const wasBlockedByResize = this.updateBlockedByResize;
                this.unblockUpdate();
                this.updateBlockedByResize = false;
                this.clearAllSnapshots();
                /**
                 * When blocked by resize, still measure layouts so
                 * callbacks like onLayoutMeasure fire (e.g. Reorder).
                 * Skip notifyLayoutUpdate to prevent animations.
                 */
                if (wasBlockedByResize) {
                    this.nodes.forEach(forceLayoutMeasure);
                }
                this.nodes.forEach(clearMeasurements);
                return;
            }
            /**
             * If this is a repeat of didUpdate then ignore the animation.
             */
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(clearIsLayoutDirty);
                return;
            }
            this.animationCommitId = this.animationId;
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            else {
                this.isUpdating = false;
                /**
                 * Ensure animation-blocked nodes (e.g. during drag)
                 * get measured even when memoized (willUpdate skipped).
                 */
                this.nodes.forEach(ensureDraggedNodesSnapshotted);
                /**
                 * Write
                 */
                this.nodes.forEach(resetTransformStyle);
                /**
                 * Read ==================
                 */
                // Update layout measurements of updated children
                this.nodes.forEach(updateLayout);
                /**
                 * Write
                 */
                // Notify listeners that the layout is updated
                this.nodes.forEach(notifyLayoutUpdate);
            }
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = time.now();
            frameData.delta = clamp(0, 1000 / 60, now - frameData.timestamp);
            frameData.timestamp = now;
            frameData.isProcessing = true;
            frameSteps.update.process(frameData);
            frameSteps.preRender.process(frameData);
            frameSteps.render.process(frameData);
            frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                microtask.read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                frame.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            frame.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
            if (this.snapshot &&
                !calcLength(this.snapshot.measuredBox.x) &&
                !calcLength(this.snapshot.measuredBox.y)) {
                this.snapshot = undefined;
            }
        }
        updateLayout() {
            if (!this.instance)
                return;
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutVersion++;
            if (!this.layoutCorrected)
                this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement && this.instance) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot,
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                this.instance &&
                (hasProjection ||
                    hasTransform(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return createBox();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    translateAxis(box.x, scroll.offset.x);
                    translateAxis(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            if (this.scroll?.wasRoot) {
                return boxWithoutScroll;
            }
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.wasRoot) {
                        copyBoxInto(boxWithoutScroll, box);
                    }
                    translateAxis(boxWithoutScroll.x, scroll.offset.x);
                    translateAxis(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false, output) {
            const withTransforms = output || createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    translateAxis(withTransforms.x, -node.scroll.offset.x);
                    translateAxis(withTransforms.y, -node.scroll.offset.y);
                }
                if (!hasTransform(node.latestValues))
                    continue;
                transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
            }
            if (hasTransform(this.latestValues)) {
                transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!hasTransform(node.latestValues))
                    continue;
                let sourceBox;
                if (node.instance) {
                    hasScale(node.latestValues) && node.updateSnapshot();
                    sourceBox = createBox();
                    copyBoxInto(sourceBox, node.measurePageBox());
                }
                removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
            }
            if (hasTransform(this.latestValues)) {
                removeBoxTransforms(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = frameData.timestamp;
            const relativeParent = this.getClosestProjectingParent();
            if (relativeParent &&
                this.linkedParentVersion !== relativeParent.layoutVersion &&
                !relativeParent.options.layoutRoot) {
                this.removeRelativeTarget();
            }
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            if (!this.targetDelta && !this.relativeTarget) {
                if (this.options.layoutAnchor !== false &&
                    relativeParent &&
                    relativeParent.layout) {
                    this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
                }
                else {
                    this.removeRelativeTarget();
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = createBox();
                this.targetWithTransforms = createBox();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || undefined);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    this.applyTransform(this.layout.layoutBox, false, this.target);
                }
                else {
                    copyBoxInto(this.target, this.layout.layoutBox);
                }
                applyBoxDelta(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                copyBoxInto(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                if (this.options.layoutAnchor !== false &&
                    relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                hasScale(this.parent.latestValues) ||
                has2DTranslate(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        createRelativeTarget(relativeParent, layout, parentLayout) {
            this.relativeParent = relativeParent;
            this.linkedParentVersion = relativeParent.layoutVersion;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || undefined);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = undefined;
        }
        calcProjection() {
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = createBox();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) {
                this.createProjectionDeltas();
            }
            else {
                copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
                copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY ||
                !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.visualElement?.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = createDelta();
            this.projectionDelta = createDelta();
            this.projectionDeltaWithTransform = createDelta();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = createDelta();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = createBox();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        boxEquals(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = createBox();
                    copyBoxInto(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
                cancelFrame(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = frame.update(() => {
                globalProjectionState.hasAnimatedSinceResize = true;
                this.motionValue || (this.motionValue = motionValue(0));
                this.motionValue.jump(0, false);
                this.currentAnimation = animateSingleValue(this.motionValue, [0, 1000], {
                    ...options,
                    velocity: 0,
                    isSync: true,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onStop: () => {
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = calcLength(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            copyBoxInto(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            transformBox(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.lead || this : this;
        }
        getPrevLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.z ||
                latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ ||
                latestValues.skewX ||
                latestValues.skewY) {
                hasDistortingTransform = true;
            }
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform)
                return;
            const resetValues = {};
            if (latestValues.z) {
                resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            }
            // Check the skew and rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) {
                    this.animationValues[key] = resetValues[key];
                }
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        applyProjectionStyles(targetStyle, // CSSStyleDeclaration - doesn't allow numbers to be assigned to properties
        styleProp) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                targetStyle.visibility = "hidden";
                return;
            }
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                targetStyle.visibility = "";
                targetStyle.opacity = "";
                targetStyle.pointerEvents =
                    resolveMotionValue(styleProp?.pointerEvents) || "";
                targetStyle.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                if (this.options.layoutId) {
                    targetStyle.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    targetStyle.pointerEvents =
                        resolveMotionValue(styleProp?.pointerEvents) || "";
                }
                if (this.hasProjected && !hasTransform(this.latestValues)) {
                    targetStyle.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return;
            }
            targetStyle.visibility = "";
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                transform = transformTemplate(valuesToRender, transform);
            }
            targetStyle.transform = transform;
            const { x, y } = this.projectionDelta;
            targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                targetStyle.opacity =
                    lead === this
                        ? valuesToRender.opacity ??
                            this.latestValues.opacity ??
                            1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                targetStyle.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        targetStyle[applyTo[i]] = corrected;
                    }
                }
                else {
                    // If this is a CSS variable, set it directly on the instance.
                    // Replacing this function from creating styles to setting them
                    // would be a good place to remove per frame object creation
                    if (isCSSVariable) {
                        this.options.visualElement.renderState.vars[key] = corrected;
                    }
                    else {
                        targetStyle[key] = corrected;
                    }
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                targetStyle.pointerEvents =
                    lead === this
                        ? resolveMotionValue(styleProp?.pointerEvents) || ""
                        : "none";
            }
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => node.currentAnimation?.stop());
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (animationType === "x" || animationType === "y") {
            const snapAxis = animationType === "x" ? "y" : "x";
            copyAxisInto(isShared
                ? snapshot.measuredBox[snapAxis]
                : snapshot.layoutBox[snapAxis], layout[snapAxis]);
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !isDeltaZero(layoutDelta);
        let hasRelativeLayoutChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const anchor = node.options.layoutAnchor || undefined;
                    const relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
                    const relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox, anchor);
                    if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
                        hasRelativeLayoutChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeLayoutChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function forceLayoutMeasure(node) {
    node.isLayoutDirty = true;
    node.updateLayout();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
/**
 * When a node is animation-blocked (e.g. during drag) and its component
 * didn't re-render (memoized), willUpdate() is never called so there's
 * no snapshot. Use the previous layout as a snapshot and mark dirty so
 * resetTransform/updateLayout/notifyLayoutUpdate process it normally.
 */
function ensureDraggedNodesSnapshotted(node) {
    if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
        node.snapshot = node.layout;
        node.isLayoutDirty = true;
    }
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = mixNumber$1(delta.translate, 0, p);
    output.scale = mixNumber$1(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = mixNumber$1(from.min, to.min, p);
    output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : noop;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2)));
}
function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
}

const DocumentProjectionNode = createProjectionNode$1({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
        y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => true,
});

const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = createProjectionNode$1({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});

const {createContext: createContext$3} = await importShared('react');


/**
 * @public
 */
const MotionConfigContext = createContext$3({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});

const React$6 = await importShared('react');


/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */
/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    }
    else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
function composeRefs(...refs) {
    return (node) => {
        let hasCleanup = false;
        const cleanups = refs.map((ref) => {
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return () => {
                for (let i = 0; i < cleanups.length; i++) {
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    }
                    else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return React$6.useCallback(composeRefs(...refs), refs);
}

const React$5 = await importShared('react');

const {useId: useId$2,useRef: useRef$6,useContext: useContext$7,useInsertionEffect: useInsertionEffect$2} = await importShared('react');

/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends React$5.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
            const parent = element.offsetParent;
            const parentWidth = isHTMLElement(parent)
                ? parent.offsetWidth || 0
                : 0;
            const parentHeight = isHTMLElement(parent)
                ? parent.offsetHeight || 0
                : 0;
            const computedStyle = getComputedStyle(element);
            const size = this.props.sizeRef.current;
            size.height = parseFloat(computedStyle.height);
            size.width = parseFloat(computedStyle.width);
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
    const id = useId$2();
    const ref = useRef$6(null);
    const size = useRef$6({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });
    const { nonce } = useContext$7(MotionConfigContext);
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     */
    const childRef = children.props?.ref ??
        children?.ref;
    const composedRef = useComposedRefs(ref, childRef);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    useInsertionEffect$2(() => {
        const { width, height, top, left, right, bottom } = size.current;
        if (isPresent || pop === false || !ref.current || !width || !height)
            return;
        const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
        const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce)
            style.nonce = nonce;
        const parent = root ?? document.head;
        parent.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
        }
        return () => {
            ref.current?.removeAttribute("data-motion-pop-id");
            if (parent.contains(style)) {
                parent.removeChild(style);
            }
        };
    }, [isPresent]);
    return (jsxRuntimeExports.jsx(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size, pop: pop, children: pop === false
            ? children
            : React$5.cloneElement(children, { ref: composedRef }) }));
}

const React$4 = await importShared('react');

const {useId: useId$1,useMemo: useMemo$6} = await importShared('react');

const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = useId$1();
    let isReusedContext = true;
    let context = useMemo$6(() => {
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId) => {
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()) {
                    if (!isComplete)
                        return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId) => {
                presenceChildren.set(childId, false);
                return () => presenceChildren.delete(childId);
            },
        };
    }, [isPresent, presenceChildren, onExitComplete]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    if (presenceAffectsLayout && isReusedContext) {
        context = { ...context };
    }
    useMemo$6(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    React$4.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    children = (jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent: isPresent, anchorX: anchorX, anchorY: anchorY, root: root, children: children }));
    return (jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}

const {useContext: useContext$6,useId,useEffect: useEffect$4,useCallback: useCallback$4} = await importShared('react');

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed from the tree,
 * but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence(subscribe = true) {
    const context = useContext$6(PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = useId();
    useEffect$4(() => {
        if (subscribe) {
            return register(id);
        }
    }, [subscribe]);
    const safeToRemove = useCallback$4(() => subscribe && onExitComplete && onExitComplete(id), [id, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

const {Children,isValidElement} = await importShared('react');


const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    Children.forEach(children, (child) => {
        if (isValidElement(child))
            filtered.push(child);
    });
    return filtered;
}

const {useMemo: useMemo$5,useRef: useRef$5,useState: useState$4,useContext: useContext$5} = await importShared('react');
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = useMemo$5(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = useRef$5(true);
  const pendingPresentChildren = useRef$5(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = useRef$5(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = useState$4(presentChildren);
  const [renderedChildren, setRenderedChildren] = useState$4(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = useContext$5(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && safeToRemove?.();
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};

const {createContext: createContext$2} = await importShared('react');


const LazyContext = createContext$2({ strict: false });

const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
let isInitialized = false;
/**
 * Initialize feature definitions with isEnabled checks.
 * This must be called before any motion components are rendered.
 */
function initFeatureDefinitions() {
    if (isInitialized)
        return;
    const initialFeatureDefinitions = {};
    for (const key in featureProps) {
        initialFeatureDefinitions[key] = {
            isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
        };
    }
    setFeatureDefinitions(initialFeatureDefinitions);
    isInitialized = true;
}
/**
 * Get the current feature definitions, initializing if needed.
 */
function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return getFeatureDefinitions();
}

function loadFeatures(features) {
    const featureDefinitions = getInitializedFeatureDefinitions();
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
    setFeatureDefinitions(featureDefinitions);
}

/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        key.startsWith("onLayout") ||
        validMotionProps.has(key));
}

let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (typeof isValidProp !== "function")
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     *
     * String concatenation prevents bundlers like webpack (e.g. Storybook)
     * from statically resolving this optional dependency at build time.
     */
    const emotionPkg = "@emotion/is-prop-" + "valid";
    loadExternalIsValidProp(require(emotionPkg).default);
}
catch {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (isMotionValue(props[key]))
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] &&
                key.startsWith("onDrag"))) {
            filteredProps[key] =
                props[key];
        }
    }
    return filteredProps;
}

const {createContext: createContext$1} = await importShared('react');


const MotionContext = /* @__PURE__ */ createContext$1({});

function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}

const {useContext: useContext$4,useMemo: useMemo$4} = await importShared('react');

function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, useContext$4(MotionContext));
    return useMemo$4(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});

const {useMemo: useMemo$3} = await importShared('react');

function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return useMemo$3(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}

const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});

const {useMemo: useMemo$2} = await importShared('react');

function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = useMemo$2(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}

/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];

function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(Component)) {
        return true;
    }
    return false;
}

const {Fragment: Fragment$1,useMemo: useMemo$1,createElement} = await importShared('react');

function useRender(Component, props, ref, { latestValues, }, isStatic, forwardMotionProps = false, isSVG) {
    const useVisualProps = (isSVG ?? isSVGComponent(Component)) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    const elementProps = Component !== Fragment$1 ? { ...filteredProps, ...visualProps, ref } : {};
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */
    const { children } = props;
    const renderedChildren = useMemo$1(() => (isMotionValue(children) ? children.get() : children), [children]);
    return createElement(Component, {
        ...elementProps,
        children: renderedChildren,
    });
}

const {useContext: useContext$3} = await importShared('react');

function makeState({ scrapeMotionValuesFromProps, createRenderState, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        for (let i = 0; i < list.length; i++) {
            const resolved = resolveVariantFromProps(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for (const key in target) {
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */
                        const index = isInitialAnimationBlocked
                            ? valueTarget.length - 1
                            : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key] = valueTarget;
                    }
                }
                for (const key in transitionEnd) {
                    values[key] = transitionEnd[key];
                }
            }
        }
    }
    return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = useContext$3(MotionContext);
    const presenceContext = useContext$3(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
};

const useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState,
});

const useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
});

const motionComponentSymbol = Symbol.for("motionComponentSymbol");

const {useRef: useRef$4,useInsertionEffect: useInsertionEffect$1,useCallback: useCallback$3} = await importShared('react');


/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    /**
     * Store externalRef in a ref to avoid including it in the useCallback
     * dependency array. Including externalRef in dependencies causes issues
     * with libraries like Radix UI that create new callback refs on each render
     * when using asChild - this would cause the callback to be recreated,
     * triggering element remounts and breaking AnimatePresence exit animations.
     */
    const externalRefContainer = useRef$4(externalRef);
    useInsertionEffect$1(() => {
        externalRefContainer.current = externalRef;
    });
    // Store cleanup function returned by callback refs (React 19 feature)
    const refCleanup = useRef$4(null);
    return useCallback$3((instance) => {
        if (instance) {
            visualState.onMount?.(instance);
        }
        const ref = externalRefContainer.current;
        if (typeof ref === "function") {
            if (instance) {
                const cleanup = ref(instance);
                if (typeof cleanup === "function") {
                    refCleanup.current = cleanup;
                }
            }
            else if (refCleanup.current) {
                refCleanup.current();
                refCleanup.current = null;
            }
            else {
                ref(instance);
            }
        }
        else if (ref) {
            ref.current = instance;
        }
        if (visualElement) {
            instance ? visualElement.mount(instance) : visualElement.unmount();
        }
    }, [visualElement]);
}

const {createContext} = await importShared('react');


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = createContext({});

function isRefObject(ref) {
    return (ref &&
        typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}

const {useContext: useContext$2,useRef: useRef$3,useInsertionEffect,useEffect: useEffect$3} = await importShared('react');

function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = useContext$2(MotionContext);
    const lazyContext = useContext$2(LazyContext);
    const presenceContext = useContext$2(PresenceContext);
    const motionConfig = useContext$2(MotionConfigContext);
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = useRef$3(null);
    /**
     * Track whether the component has been through React's commit phase.
     * Used to detect when LazyMotion features load after the component has mounted.
     */
    const hasMountedOnce = useRef$3(false);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement =
        createVisualElement ||
            lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
            skipAnimations,
            isSVG,
        });
        /**
         * If the component has already mounted before features loaded (e.g. via
         * LazyMotion with async feature loading), we need to force the initial
         * animation to run. Otherwise state changes that occurred before features
         * loaded will be lost and the element will snap to its final state.
         */
        if (hasMountedOnce.current && visualElementRef.current) {
            visualElementRef.current.manuallyAnimateOnMount = true;
        }
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */
    const initialLayoutGroupConfig = useContext$2(SwitchLayoutGroupContext);
    if (visualElement &&
        !visualElement.projection &&
        ProjectionNodeConstructor &&
        (visualElement.type === "html" || visualElement.type === "svg")) {
        createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = useRef$3(false);
    useInsertionEffect(() => {
        /**
         * Check the component has already mounted before calling
         * `update` unnecessarily. This ensures we skip the initial update.
         */
        if (visualElement && isMounted.current) {
            visualElement.update(props, presenceContext);
        }
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = useRef$3(Boolean(optimisedAppearId) &&
        typeof window !== "undefined" &&
        !window.MotionHandoffIsComplete?.(optimisedAppearId) &&
        window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    useIsomorphicLayoutEffect(() => {
        /**
         * Track that this component has mounted. This is used to detect when
         * LazyMotion features load after the component has already committed.
         */
        hasMountedOnce.current = true;
        if (!visualElement)
            return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        visualElement.scheduleRenderMicrotask();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    useEffect$3(() => {
        if (!visualElement)
            return;
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(() => {
                window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
        /**
         * Now we've finished triggering animations for this element we
         * can wipe the enteringChildren set for the next render.
         */
        visualElement.enteringChildren = undefined;
    });
    return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade, } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"]
        ? undefined
        : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || (dragConstraints && isRefObject(dragConstraints)),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor,
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement)
        return undefined;
    return visualElement.options.allowProjection !== false
        ? visualElement.projection
        : getClosestProjectingNode(visualElement.parent);
}

const {forwardRef,useContext: useContext$1} = await importShared('react');
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout;
    const configAndProps = {
      ...useContext$1(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && typeof window !== "undefined") {
      useStrictMode();
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
    }
    return jsxRuntimeExports.jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout && context.visualElement ? jsxRuntimeExports.jsx(MeasureLayout, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext$1(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  useContext$1(LazyContext).strict;
}
function getProjectionFunctionality(props) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  const { drag, layout } = featureDefinitions;
  if (!drag && !layout)
    return {};
  const combined = { ...drag, ...layout };
  return {
    MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}

function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component, options) => {
    return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component, options) => {
    return factory(Component, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

const {Fragment} = await importShared('react');

const createDomVisualElement = (Component, options) => {
    /**
     * Use explicit isSVG override if provided, otherwise auto-detect
     */
    const isSVG = options.isSVG ?? isSVGComponent(Component);
    return isSVG
        ? new SVGVisualElement(options)
        : new HTMLVisualElement(options, {
            allowProjection: Component !== Fragment,
        });
};

class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if (isAnimationControls(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}

let id = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
        this.isExitComplete = false;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        if (isPresent && prevIsPresent === false) {
            /**
             * When re-entering, if the exit animation already completed
             * (element is at rest), reset to initial values so the enter
             * animation replays from the correct position.
             */
            if (this.isExitComplete) {
                const { initial, custom } = this.node.getProps();
                if (typeof initial === "string") {
                    const resolved = resolveVariant(this.node, initial, custom);
                    if (resolved) {
                        const { transition, transitionEnd, ...target } = resolved;
                        for (const key in target) {
                            this.node
                                .getValue(key)
                                ?.jump(target[key]);
                        }
                    }
                }
                this.node.animationState.reset();
                this.node.animationState.animateChanges();
            }
            else {
                this.node.animationState.setActive("exit", false);
            }
            this.isExitComplete = false;
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => {
                this.isExitComplete = true;
                onExitComplete(this.id);
            });
        }
    }
    mount() {
        const { register, onExitComplete } = this.node.presenceContext || {};
        if (onExitComplete) {
            onExitComplete(this.id);
        }
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}

const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};

function extractEventInfo(event) {
    return {
        point: {
            x: event.pageX,
            y: event.pageY,
        },
    };
}
const addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// Fixes https://github.com/motiondivision/motion/issues/2270
const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
};

const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

const overflowStyles = /*#__PURE__*/ new Set(["auto", "scroll"]);
/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element, } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * Raw (untransformed) event info, re-transformed each frame
         * so transformPagePoint sees the current parent matrix.
         * @internal
         */
        this.lastRawMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        /**
         * @internal
         */
        this.contextWindow = window;
        /**
         * Scroll positions of scrollable ancestors and window.
         * @internal
         */
        this.scrollPositions = new Map();
        /**
         * Cleanup function for scroll listeners.
         * @internal
         */
        this.removeScrollListeners = null;
        this.onElementScroll = (event) => {
            this.handleScroll(event.target);
        };
        this.onWindowScroll = () => {
            this.handleScroll(window);
        };
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            // Re-transform raw point through current transformPagePoint so
            // animated parent transforms (e.g. rotation) are picked up each frame
            if (this.lastRawMoveEventInfo) {
                this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
            }
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursor.
            const isDistancePastThreshold = distance2D(info.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastRawMoveEventInfo = info;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            frame.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            // Resume animation if dragSnapToOrigin is set OR if no drag started (user just clicked)
            // This ensures constraint animations continue when interrupted by a click
            if (this.dragSnapToOrigin || !this.startEvent) {
                resumeAnimation && resumeAnimation();
            }
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!isPrimaryPointer(event))
            return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.distanceThreshold = distanceThreshold;
        this.contextWindow = contextWindow || window;
        const info = extractEventInfo(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
        // Start scroll tracking if element provided
        if (element) {
            this.startScrollTracking(element);
        }
    }
    /**
     * Start tracking scroll on ancestors and window.
     */
    startScrollTracking(element) {
        // Store initial scroll positions for scrollable ancestors
        let current = element.parentElement;
        while (current) {
            const style = getComputedStyle(current);
            if (overflowStyles.has(style.overflowX) ||
                overflowStyles.has(style.overflowY)) {
                this.scrollPositions.set(current, {
                    x: current.scrollLeft,
                    y: current.scrollTop,
                });
            }
            current = current.parentElement;
        }
        // Track window scroll
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY,
        });
        // Capture listener catches element scroll events as they bubble
        window.addEventListener("scroll", this.onElementScroll, {
            capture: true,
        });
        // Direct window scroll listener (window scroll doesn't bubble)
        window.addEventListener("scroll", this.onWindowScroll);
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: true,
            });
            window.removeEventListener("scroll", this.onWindowScroll);
        };
    }
    /**
     * Handle scroll compensation during drag.
     *
     * For element scroll: adjusts history origin since pageX/pageY doesn't change.
     * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
     */
    handleScroll(target) {
        const initial = this.scrollPositions.get(target);
        if (!initial)
            return;
        const isWindow = target === window;
        const current = isWindow
            ? { x: window.scrollX, y: window.scrollY }
            : {
                x: target.scrollLeft,
                y: target.scrollTop,
            };
        const delta = { x: current.x - initial.x, y: current.y - initial.y };
        if (delta.x === 0 && delta.y === 0)
            return;
        if (isWindow) {
            // Window scroll: pageX/pageY changes, so update lastMoveEventInfo
            if (this.lastMoveEventInfo) {
                this.lastMoveEventInfo.point.x += delta.x;
                this.lastMoveEventInfo.point.y += delta.y;
            }
        }
        else {
            // Element scroll: pageX/pageY unchanged, so adjust history origin
            if (this.history.length > 0) {
                this.history[0].x -= delta.x;
                this.history[0].y -= delta.y;
            }
        }
        this.scrollPositions.set(target, current);
        frame.update(this.updatePoint, true);
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        this.removeScrollListeners && this.removeScrollListeners();
        this.scrollPositions.clear();
        cancelFrame(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    /**
     * If the selected point is the pointer-down origin (history[0]),
     * there are better movement points available, and the time gap
     * is suspiciously large (>2x timeDelta), use the next point instead.
     * This prevents stale pointer-down points from diluting velocity
     * in hold-then-flick gestures.
     */
    if (timestampedPoint === history[0] &&
        history.length > 2 &&
        lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta) * 2) {
        timestampedPoint = history[1];
    }
    const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic
            ? mixNumber$1(min, point, elastic.min)
            : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic
            ? mixNumber$1(max, point, elastic.max)
            : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}

const elementDragControls = new WeakMap();
class VisualElementDragControls {
    constructor(visualElement) {
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = createBox();
        /**
         * The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */
        this.latestPointerEvent = null;
        /**
         * The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */
        this.latestPanInfo = null;
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            if (snapToCursor) {
                this.snapToCursor(extractEventInfo(event).point);
            }
            this.stopAnimation();
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openDragLock)
                    this.openDragLock();
                this.openDragLock = setDragLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openDragLock)
                    return;
            }
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin and pointer offset
             */
            eachAxis((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = calcLength(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                frame.update(() => onDragStart(event, info), false, true);
            }
            addValueToWillChange(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openDragLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            if (onDrag) {
                frame.update(() => onDrag(event, info), false, true);
            }
        };
        const onSessionEnd = (event, info) => {
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.stop(event, info);
            this.latestPointerEvent = null;
            this.latestPanInfo = null;
        };
        const resumeAnimation = () => {
            const { dragSnapToOrigin: snap } = this.getProps();
            if (snap || this.constraints) {
                this.startAnimation({ x: 0, y: 0 });
            }
        };
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation,
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            distanceThreshold,
            contextWindow: getContextWindow(this.visualElement),
            element: this.visualElement.current,
        });
    }
    /**
     * @internal
     */
    stop(event, panInfo) {
        const finalEvent = event || this.latestPointerEvent;
        const finalPanInfo = panInfo || this.latestPanInfo;
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging || !finalPanInfo || !finalEvent)
            return;
        const { velocity } = finalPanInfo;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
        }
    }
    /**
     * @internal
     */
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.endPanSession();
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    /**
     * Clean up the pan session without modifying other drag state.
     * This is used during unmount to ensure event listeners are removed
     * without affecting projection animations or drag locks.
     * @internal
     */
    endPanSession() {
        this.panSession && this.panSession.end();
        this.panSession = undefined;
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection &&
            !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(false)
            : this.visualElement.projection?.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = resolveDragElastic(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative. This only applies to relative (non-ref)
         * constraints, as ref-based constraints from calcViewportConstraints are already in the
         * correct coordinate space for the motion value transform offset.
         */
        if (prevConstraints !== this.constraints &&
            !isRefObject(dragConstraints) &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            eachAxis((axis) => {
                if (this.constraints !== false &&
                    this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !isRefObject(constraints))
            return false;
        const constraintsElement = constraints.current;
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToBox(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = eachAxis((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin === true ||
                dragSnapToOrigin === axis)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        addValueToWillChange(this.visualElement, axis);
        return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial
                ? props.initial[axis]
                : undefined) || 0);
    }
    snapToCursor(point) {
        eachAxis((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                /**
                 * The layout measurement includes the current transform value,
                 * so we need to add it back to get the correct snap position.
                 * This fixes an issue where elements with initial coordinates
                 * would snap to the wrong position on the first drag.
                 */
                const current = axisValue.get() || 0;
                axisValue.set(point[axis] - mixNumber$1(min, max, 0.5) + current);
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        /**
         * Reset constraints so resolveConstraints() will recalculate them
         * with the freshly measured layout rather than returning the cached value.
         */
        this.constraints = false;
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        eachAxis((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
        });
        /**
         * Flush the updated transform to the DOM synchronously to prevent
         * a visual flash at the element's CSS layout position (0,0) when
         * the transform was stripped for measurement.
         */
        this.visualElement.render();
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            const target = event.target;
            /**
             * Only block drag if clicking on a text input child element
             * (input, textarea, select, contenteditable) where users might
             * want to select text or interact with the control.
             *
             * Buttons and links don't block drag since they don't have
             * click-and-move actions of their own.
             */
            const isClickingTextInputChild = target !== element && isElementTextInput(target);
            if (drag && dragListener && !isClickingTextInputChild) {
                this.start(event);
            }
        });
        /**
         * If using ref-based constraints, observe both the draggable element
         * and the constraint container for size changes via ResizeObserver.
         * Setup is deferred because dragConstraints.current is null when
         * addListeners first runs (React hasn't committed the ref yet).
         */
        let stopResizeObservers;
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if (isRefObject(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
                if (!stopResizeObservers) {
                    stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
                }
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        frame.read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
            stopResizeObservers && stopResizeObservers();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function skipFirstCall(callback) {
    let isFirst = true;
    return () => {
        if (isFirst) {
            isFirst = false;
            return;
        }
        callback();
    };
}
function startResizeObservers(element, constraintsElement, onResize) {
    const stopElement = resize(element, skipFirstCall(onResize));
    const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
    return () => {
        stopElement();
        stopContainer();
    };
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}

class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop;
        this.removeListeners = noop;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop;
    }
    update() {
        const { dragControls } = this.node.getProps();
        const { dragControls: prevDragControls } = this.node.prevProps || {};
        if (dragControls !== prevDragControls) {
            this.removeGroupControls();
            if (dragControls) {
                this.removeGroupControls = dragControls.subscribe(this.controls);
            }
        }
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
        /**
         * In React 19, during list reorder reconciliation, components may
         * briefly unmount and remount while the drag is still active. If we're
         * actively dragging, we should NOT end the pan session - it will
         * continue tracking pointer events via its window-level listeners.
         *
         * The pan session will be properly cleaned up when:
         * 1. The drag ends naturally (pointerup/pointercancel)
         * 2. The component is truly removed from the DOM
         */
        if (!this.controls.isDragging) {
            this.controls.endPanSession();
        }
    }
}

const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frame.update(() => handler(event, info), false, true);
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: getContextWindow(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: asyncHandler(onPan),
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frame.postRender(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}

const {useContext,Component} = await importShared('react');

/**
 * Track whether we've taken any snapshots yet. If not,
 * we can safely skip notification of didUpdate.
 *
 * Difficult to capture in a test but to prevent flickering
 * we must set this to true either on update or unmount.
 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
 */
let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            if (hasTakenAnySnapshot) {
                projection.root.didUpdate();
            }
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (prevProps.layoutDependency !== layoutDependency) {
            projection.setOptions({
                ...projection.options,
                layoutDependency,
            });
        }
        hasTakenAnySnapshot = true;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined ||
            prevProps.isPresent !== isPresent) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frame.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { visualElement, layoutAnchor } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.options.layoutAnchor = layoutAnchor;
            projection.root.didUpdate();
            microtask.postRender(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        hasTakenAnySnapshot = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = useContext(LayoutGroupContext);
    return (jsxRuntimeExports.jsx(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}

const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
        node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = ("onHover" + lifecycle);
    const callback = props[eventName];
    if (callback) {
        frame.postRender(() => callback(event, extractEventInfo(event)));
    }
}
class HoverGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        this.unmount = hover(current, (_element, startEvent) => {
            handleHoverEvent(this.node, startEvent, "Start");
            return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
        });
    }
    unmount() { }
}

class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}

function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    if (node.animationState && props.whileTap) {
        node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = ("onTap" + (lifecycle === "End" ? "" : lifecycle));
    const callback = props[eventName];
    if (callback) {
        frame.postRender(() => callback(event, extractEventInfo(event)));
    }
}
class PressGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        const { globalTapTarget, propagate } = this.node.props;
        this.unmount = press(current, (_element, startEvent) => {
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
        }, {
            useGlobalTarget: globalTapTarget,
            stopPropagation: propagate?.tap === false,
        });
    }
    unmount() { }
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.stopObserver?.();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() {
        this.stopObserver?.();
        this.hasEnteredView = false;
        this.isInView = false;
    }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}

const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};

const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

const featureBundle = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
};

const motion = /*@__PURE__*/ createMotionProxy(featureBundle, createDomVisualElement);

/**
 * Pure functions for Question and Questionnaire logic.
 * Part of the Hexagonal Architecture Domain Layer.
 */

/**
 * Updates an object at a specific path with a value.
 * @param {Object} obj - The object to update.
 * @param {string} path - The dot-separated path (e.g., 'answerConfig.type').
 * @param {any} value - The new value.
 * @returns {Object} A new object with the updated value.
 */
const setValueByPath = (obj, path, value) => {
  const newData = JSON.parse(JSON.stringify(obj));
  const parts = path.split('.');
  let current = newData;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }

  current[parts[parts.length - 1]] = value;
  return newData;
};

/**
 * Specifically handles question configuration updates with side effects.
 * @param {Object} config - The current config.
 * @param {string} path - The path to update.
 * @param {any} value - The new value.
 * @returns {Object} The updated config.
 */
const updateQuestionConfig = (config, path, value) => {
  let newConfig = JSON.parse(JSON.stringify(config));
  const parts = path.split('.');
  let current = newConfig;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }

  const field = parts[parts.length - 1];

  // Business Logic: Special handling for 'type' changes
  if (field === 'type') {
    if (path.includes('Condition')) {
      if (value === 'COMPOSITE') {
        current.attributes = { operator: 'AND' };
        current.children = current.children || [];
      } else {
        current.attributes = { 
          questionRootCode: '', 
          expectedValue: '', 
          ...(value === 'NUMERIC' ? { operator: 'GREATER_THAN' } : {}) 
        };
        delete current.children;
      }
    } else if (path === 'answerConfig.type' && value === 'OPTION_LIST') {
      if (!current.attributes) current.attributes = {};
      if (!current.attributes.answerOptions) current.attributes.answerOptions = [];
    }
  }

  current[field] = value;
  return newConfig;
};

/**
 * Use case to update the configuration of a node (Quiz or Question).
 * 
 * @param {Object} node - The current node from ReactFlow.
 * @param {string} path - The path to the field being updated.
 * @param {any} value - The new value for the field.
 * @returns {Object} The updated data object for the node.
 */
const updateNodeConfig = (node, path, value) => {
  const isQuiz = node.type === 'quizNode';
  const data = node.data || {};
  
  if (isQuiz) {
    return setValueByPath(data, path, value);
  } else {
    const config = data.config || { 
      order: 0, 
      answerConfig: { type: 'TEXT', attributes: {} }, 
      rootCondition: null 
    };
    const newConfig = updateQuestionConfig(config, path, value);
    return { ...data, config: newConfig };
  }
};

/**
 * Identificadores de Fluxo de Negócio (Flow IDs)
 * Utilizados nos headers x-flow-id para rastreabilidade no backend.
 */
const DESIGNER_FLOWS = {
  LOAD_DESIGN: 'load_questionnaire_design', // Carregamento do fluxo completo no canvas (Designer)
  SYNC_DESIGN: 'sync_questionnaire_design', // Sincronização (Upsert) de perguntas e condições no grafo
  LIST_QUESTIONS: 'designer_fetch_base_questions', // Busca de perguntas base para o catálogo do designer
};

const React$3 = await importShared('react');
const {useState: useState$3} = React$3;
function ConfigPanel({ node, allNodes, onUpdate, onDelete, onClose }) {
  if (!node) return null;
  const [pendingStatus, setPendingStatus] = useState$3(null);
  const isQuiz = node.type === "quizNode";
  const data = node.data || {};
  const config = isQuiz ? data : data.config || { order: 0, answerConfig: { type: "TEXT", attributes: {} }, rootCondition: null };
  const handleChange = (path, value) => {
    const newData = updateNodeConfig(node, path, value);
    onUpdate(node.id, newData);
  };
  const handleQuickStatusChange = (newStatus) => {
    setPendingStatus(newStatus);
  };
  const confirmStatusChange = async () => {
    const newStatus = pendingStatus;
    setPendingStatus(null);
    try {
      let result;
      if (isQuiz) {
        result = await dataService.updateQuiz(
          data.id,
          { nome: data.nome, status: newStatus, questionsToUpsert: [], questionIdsToRemove: [] },
          data.channelDistributionId,
          data.journeyDistributionId,
          DESIGNER_FLOWS.SYNC_DESIGN
        );
      } else {
        const payload = {
          label: data.label,
          status: newStatus,
          salesItemReferenceCode: data.salesItemReferenceCode || "",
          updatedBy: {
            id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
            referenceCode: "sys-admin",
            name: "Administrador",
            email: "admin@acme.com"
          }
        };
        result = await dataService.updatePergunta(data.id, payload, DESIGNER_FLOWS.SYNC_DESIGN);
      }
      if (result !== null && result !== void 0 && result !== false) {
        const newData = isQuiz ? updateNodeConfig(node, "status", newStatus) : { ...node.data, status: newStatus };
        onUpdate(node.id, newData);
      }
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
    }
  };
  const renderConditionEditor = (condition, path = "rootCondition") => {
    if (!condition) return null;
    const otherNodes = (allNodes || []).filter((n) => n.id !== node.id && n.type === "perguntaNode");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-zinc-950/50 border border-zinc-800/50 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-blue-500 uppercase tracking-tighter", children: "Regra de Visibilidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: condition.type || "EQUAL",
            onChange: (e) => handleChange(`${path}.type`, e.target.value),
            className: "bg-zinc-900 border border-zinc-800 text-[9px] p-1 text-zinc-300 outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EQUAL", children: "EQUAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NUMERIC", children: "NUMERIC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPOSITE", children: "COMPOSITE (AND/OR)" })
            ]
          }
        )
      ] }),
      condition.type === "COMPOSITE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-zinc-900 p-2 border border-zinc-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-500 uppercase", children: "Operador:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: condition.attributes?.operator === "AND", onChange: () => handleChange(`${path}.attributes.operator`, "AND"), className: "accent-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-300", children: "AND" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: condition.attributes?.operator === "OR", onChange: () => handleChange(`${path}.attributes.operator`, "OR"), className: "accent-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-300", children: "OR" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pl-4 border-l border-zinc-800", children: [
          (condition.children || []).map((child, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  const newChildren = [...condition.children];
                  newChildren.splice(idx, 1);
                  handleChange(`${path}.children`, newChildren);
                },
                className: "absolute -right-2 -top-2 p-1 bg-red-900/20 text-red-500 border border-red-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X$1, { size: 10 })
              }
            ),
            renderConditionEditor(child, `${path}.children.${idx}`)
          ] }, idx)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                const newChildren = [...condition.children || [], { type: "EQUAL", attributes: { questionRootCode: "", expectedValue: "" } }];
                handleChange(`${path}.children`, newChildren);
              },
              className: "w-full py-2 border border-dashed border-zinc-800 hover:border-blue-500/50 text-[9px] font-black uppercase text-zinc-600 hover:text-blue-500 transition-all",
              children: "+ Adicionar Regra ao Grupo"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600 uppercase", children: "Pergunta Pai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: condition.attributes?.questionRootCode || "",
              onChange: (e) => handleChange(`${path}.attributes.questionRootCode`, e.target.value),
              className: "w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione..." }),
                otherNodes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n.data.id, children: [
                  n.data.label,
                  " (",
                  n.data.id,
                  ")"
                ] }, n.id))
              ]
            }
          )
        ] }),
        condition.type === "NUMERIC" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600 uppercase", children: "Operador" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: condition.attributes?.operator || "EQUAL",
              onChange: (e) => handleChange(`${path}.attributes.operator`, e.target.value),
              className: "w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none font-mono",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EQUAL", children: "EQUAL (==)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NOT_EQUAL", children: "NOT_EQUAL (!=)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GREATER_THAN", children: "GREATER_THAN (>)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GREATER_THAN_OR_EQUAL", children: "GREATER_THAN_OR_EQUAL (>=)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LESS_THAN", children: "LESS_THAN (<)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LESS_THAN_OR_EQUAL", children: "LESS_THAN_OR_EQUAL (<=)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600 uppercase", children: "Valor Esperado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: condition.type === "NUMERIC" ? "number" : "text",
              value: condition.attributes?.expectedValue || "",
              onChange: (e) => {
                const val = condition.type === "NUMERIC" ? parseFloat(e.target.value) : e.target.value;
                handleChange(`${path}.attributes.expectedValue`, val);
              },
              className: "w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none",
              placeholder: condition.type === "NUMERIC" ? "Ex: 18, 100..." : "Ex: sim, true..."
            }
          )
        ] })
      ] })
    ] });
  };
  const renderQuizPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-600/5 border border-blue-500/20 rounded-none relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 64 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1", children: "Entidade Raiz" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white truncate pr-12", children: data.nome }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-mono text-zinc-600 mt-2", children: [
        "ID: ",
        data.id
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-blue-500" }),
        " Informações do Questionário"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-zinc-900/30 border border-zinc-800 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Descrição / Nome Exibição" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: data.nome || "",
              onChange: (e) => handleChange("nome", e.target.value),
              className: "w-full bg-zinc-950 border border-zinc-800 p-3 text-xs text-white outline-none focus:border-blue-600 transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Status do Fluxo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black px-2 py-1 border ${data.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : data.status === "INACTIVE" ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : "bg-zinc-800 text-zinc-500 border-zinc-700"}`, children: data.status || "DRAFT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-zinc-600 uppercase tracking-wider", children: "Status atual" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["ACTIVE", "DRAFT", "INACTIVE"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleQuickStatusChange(s),
              disabled: data.status === s,
              className: `flex-1 py-2 text-[8px] font-black uppercase tracking-widest border transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 ${s === "ACTIVE" ? "border-emerald-700 text-emerald-500 hover:bg-emerald-500/10" : s === "INACTIVE" ? "border-rose-700 text-rose-500 hover:bg-rose-500/10" : "border-zinc-700 text-zinc-400 hover:bg-zinc-800"}`,
              children: s
            },
            s
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14, className: "text-amber-500" }),
        " Estratégia de Distribuição"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 p-4 bg-zinc-900/30 border border-zinc-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-bold text-zinc-600 uppercase flex items-center gap-2 text-zinc-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 10 }),
            " Canal (Distribution ID)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 select-all", children: data.channelDistributionId })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-bold text-zinc-600 uppercase flex items-center gap-2 text-zinc-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Map$1, { size: 10 }),
            " Jornada (Journey ID)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 select-all", children: data.journeyDistributionId })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-zinc-600 italic px-2 leading-relaxed", children: "* A distribuição é imutável para esta instância. Para mudar o canal/jornada, crie um novo questionário." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14, className: "text-zinc-600" }),
        " Auditoria de Criação"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-zinc-900/30 border border-zinc-800 space-y-4 text-[10px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-1 border-b border-zinc-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-600", children: "Criado por:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-zinc-300", children: data.createdBy?.name || "Sistema" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-600", children: "Data de Criação:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-zinc-400 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
            " ",
            data.createdAt ? new Date(data.createdAt).toLocaleDateString() : "N/A"
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderQuestionPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] block", children: "Questão Identificada" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-zinc-200", children: data.label || "Sem título" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-mono text-zinc-600 mt-2 uppercase tracking-tighter", children: [
              "ID: ",
              data.id
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black px-2 py-1 shrink-0 border ${data.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : data.status === "INACTIVE" ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : "bg-zinc-800 text-zinc-500 border-zinc-700"}`, children: data.status || "DRAFT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-zinc-800 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Alterar Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["ACTIVE", "DRAFT", "INACTIVE"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleQuickStatusChange(s),
              disabled: data.status === s,
              className: `flex-1 py-2 text-[8px] font-black uppercase tracking-widest border transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 ${s === "ACTIVE" ? "border-emerald-700 text-emerald-500 hover:bg-emerald-500/10" : s === "INACTIVE" ? "border-rose-700 text-rose-500 hover:bg-rose-500/10" : "border-zinc-700 text-zinc-400 hover:bg-zinc-800"}`,
              children: s
            },
            s
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileBraces, { size: 14, className: "text-blue-500" }),
        " Configuração de Resposta"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-zinc-900/30 border border-zinc-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Estratégia de Validação (Type)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: config.answerConfig?.type || "TEXT",
              onChange: (e) => handleChange("answerConfig.type", e.target.value),
              className: "w-full bg-zinc-950 border border-zinc-800 p-3 rounded-none text-xs focus:border-blue-600 outline-none appearance-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TEXT", children: "TEXT Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NUMBER", children: "NUMBER Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DATE", children: "DATE Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OPTION_LIST", children: "OPTION_LIST Strategy" })
              ]
            }
          )
        ] }),
        config.answerConfig?.type === "TEXT" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Regex Pattern" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Ex: ^[A-Z]{3}-\\\\d{4}$", value: config.answerConfig?.attributes?.regexPattern || "", onChange: (e) => handleChange("answerConfig.attributes.regexPattern", e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 p-3 rounded-none text-xs outline-none focus:border-blue-600 font-mono" })
        ] }),
        config.answerConfig?.type === "NUMBER" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600", children: "MIN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: config.answerConfig?.attributes?.min ?? "", onChange: (e) => handleChange("answerConfig.attributes.min", parseFloat(e.target.value)), className: "w-full bg-zinc-950 border border-zinc-800 p-2 text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600", children: "MAX" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: config.answerConfig?.attributes?.max ?? "", onChange: (e) => handleChange("answerConfig.attributes.max", parseFloat(e.target.value)), className: "w-full bg-zinc-950 border border-zinc-800 p-2 text-xs" })
          ] })
        ] }),
        config.answerConfig?.type === "OPTION_LIST" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase", children: "Opções" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              const options = config.answerConfig?.attributes?.answerOptions || [];
              handleChange("answerConfig.attributes.answerOptions", [...options, { value: "", label: "" }]);
            }, className: "text-blue-500 text-[9px] font-black uppercase", children: "+ ADD" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: (config.answerConfig?.attributes?.answerOptions || []).map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "Label",
                value: opt.label,
                onChange: (e) => {
                  const options = config.answerConfig.attributes.answerOptions.map(
                    (o, i) => i === idx ? { ...o, label: e.target.value } : o
                  );
                  handleChange("answerConfig.attributes.answerOptions", options);
                },
                className: "flex-1 bg-zinc-950 border border-zinc-800 p-2 text-[10px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "Val",
                value: opt.value,
                onChange: (e) => {
                  const options = config.answerConfig.attributes.answerOptions.map(
                    (o, i) => i === idx ? { ...o, value: e.target.value } : o
                  );
                  handleChange("answerConfig.attributes.answerOptions", options);
                },
                onKeyDown: (e) => {
                  if (e.key === "Tab" && !e.shiftKey && idx === config.answerConfig.attributes.answerOptions.length - 1) {
                    const options = config.answerConfig.attributes.answerOptions || [];
                    handleChange("answerConfig.attributes.answerOptions", [...options, { value: "", label: "" }]);
                  }
                },
                className: "w-16 bg-zinc-950 border border-zinc-800 p-2 text-[10px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  const options = config.answerConfig.attributes.answerOptions.filter((_, i) => i !== idx);
                  handleChange("answerConfig.attributes.answerOptions", options);
                },
                className: "p-2 text-red-500 hover:bg-red-500/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
              }
            )
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-zinc-800/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-600 uppercase mb-2", children: "Mensagem de Erro Customizada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: config.answerConfig?.attributes?.customErrorMessage || "", onChange: (e) => handleChange("answerConfig.attributes.customErrorMessage", e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 p-3 text-xs outline-none resize-none focus:border-blue-600", placeholder: "Ex: Valor fora do permitido..." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, className: "text-amber-500" }),
        " Lógica Condicional (Recursiva)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-zinc-900/30 border border-zinc-800 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!config.rootCondition, onChange: (e) => handleChange("rootCondition", e.target.checked ? { type: "EQUAL", attributes: { questionRootCode: "", expectedValue: "" }, children: [] } : null), className: "w-4 h-4 accent-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-zinc-300", children: "Ativar Regra Complexa" })
        ] }),
        config.rootCondition && renderConditionEditor(config.rootCondition)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { size: 14, className: "text-zinc-600" }),
        " Configuração do Vínculo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600 uppercase", children: "Ordem de Exibição" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: config.order || 0, onChange: (e) => handleChange("order", parseInt(e.target.value)), className: "w-full bg-zinc-900 border border-zinc-800 p-3 text-xs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold text-zinc-600 uppercase", children: "Referência de Venda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-3 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 truncate", children: data.salesItemReferenceCode || "N/A" })
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { position: "top-right", className: "m-0 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { x: 400, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 400, opacity: 0 },
        className: "w-[400px] bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col h-[calc(100vh-65px)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-900/50 border-b border-zinc-800 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-none border ${isQuiz ? "bg-blue-600/10 border-blue-500/20" : "bg-zinc-800 border-zinc-700"}`, children: isQuiz ? /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 16, className: "text-blue-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16, className: "text-zinc-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-black uppercase tracking-widest text-white", children: isQuiz ? "Configuração Global" : "Configuração do Vínculo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-zinc-500 font-bold uppercase mt-1", children: isQuiz ? "Questionário de Domínio" : "Lógica da Pergunta" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-zinc-500 hover:text-white transition-all p-2 hover:bg-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 }) })
          ] }),
          isQuiz ? renderQuizPanel() : renderQuestionPanel(),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-900/80 border-t border-zinc-800 flex gap-3", children: [
            !isQuiz && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => onDelete(node.id),
                className: "flex-1 bg-red-950/20 hover:bg-red-900/40 text-red-500 border border-red-900/50 p-4 rounded-none text-[10px] font-black uppercase flex items-center justify-center gap-2 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }),
                  " Excluir do Fluxo"
                ]
              }
            ),
            isQuiz && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-[9px] text-zinc-600 font-bold uppercase text-center py-4 border border-zinc-800 border-dashed", children: "Configurações de Instância Protegidas" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: pendingStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        className: "bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-amber-500/10 text-amber-500 rounded-none flex items-center justify-center mx-auto border border-amber-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 32 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-white", children: "Alterar Status?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 mt-2 uppercase tracking-widest leading-relaxed", children: "Qualquer alteração não salva neste painel será perdida." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-blue-400 mt-3 font-bold", children: [
              "Status atual: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase", children: data.status || "DRAFT" }),
              " →",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "uppercase", children: [
                " ",
                pendingStatus
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setPendingStatus(null),
                className: "flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
                children: "Cancelar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: confirmStatusChange,
                className: "flex-1 bg-blue-600 hover:bg-blue-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
                children: "Confirmar"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}

const React$2 = await importShared('react');
const {useState: useState$2,useEffect: useEffect$2,useRef: useRef$2,useCallback: useCallback$2} = React$2;
const QuestionnaireLookup = ({ isOpen, onClose, onSelect, initialSearch = "" }) => {
  const [list, setList] = useState$2([]);
  const [isLoading, setIsLoading] = useState$2(false);
  const [isFetchingMore, setIsFetchingMore] = useState$2(false);
  const [nextCursor, setNextCursor] = useState$2(null);
  const [hasNext, setHasNext] = useState$2(false);
  const [filters, setFilters] = useState$2({
    buscaValor: "",
    buscaTipo: "NOME",
    status: "ALL",
    channelId: "",
    journeyId: ""
  });
  const [tempFilters, setTempFilters] = useState$2({
    buscaValor: "",
    buscaTipo: "NOME",
    status: "ALL",
    channelId: "",
    journeyId: ""
  });
  const observer = useRef$2();
  useEffect$2(() => {
    if (isOpen) {
      const initial = {
        buscaValor: initialSearch,
        buscaTipo: "NOME",
        status: "ALL",
        channelId: "",
        journeyId: ""
      };
      setFilters(initial);
      setTempFilters(initial);
      setList([]);
    }
  }, [isOpen, initialSearch]);
  const carregar = useCallback$2(async (cursor = null, append = false) => {
    if (!append) setIsLoading(true);
    else setIsFetchingMore(true);
    try {
      const response = await dataService.getQuestionarios({
        cursor,
        size: 8,
        filters,
        flowId: DESIGNER_FLOWS.LOAD_DESIGN
      });
      let newData = response.data || [];
      let meta = response.meta || { hasNext: false, nextCursor: null };
      setList((prev) => {
        if (!append) return newData;
        const ids = new Set(prev.map((i) => i.id));
        const filteredNew = newData.filter((i) => !ids.has(i.id));
        return [...prev, ...filteredNew];
      });
      setHasNext(meta.hasNext);
      setNextCursor(meta.nextCursor);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  }, [filters]);
  useEffect$2(() => {
    if (isOpen) carregar();
  }, [isOpen, carregar]);
  const lastElementRef = useCallback$2((node) => {
    if (isLoading || isFetchingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNext && nextCursor) {
        carregar(nextCursor, true);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, isFetchingMore, hasNext, nextCursor, carregar]);
  const handleSearch = () => {
    setFilters({ ...tempFilters });
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 20 },
      className: "bg-zinc-950 border border-zinc-800 rounded-none w-full max-w-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 border-b border-zinc-900 bg-zinc-900/50 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-white uppercase tracking-tighter", children: "Selecionar Questionário" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-2", children: "Escolha um contexto para carregar no Designer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-zinc-600 hover:text-white p-2 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X$1, { size: 24 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-900/30 border-b border-zinc-900 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-w-[200px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "bg-zinc-950 border border-zinc-800 border-r-0 p-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 outline-none focus:border-blue-600",
                value: tempFilters.buscaTipo,
                onChange: (e) => setTempFilters({ ...tempFilters, buscaTipo: e.target.value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NOME", children: "Nome" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ID", children: "ID Exato" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "flex-1 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600",
                placeholder: tempFilters.buscaTipo === "NOME" ? "Buscar por nome..." : "Buscar por ID...",
                value: tempFilters.buscaValor,
                onChange: (e) => setTempFilters({ ...tempFilters, buscaValor: e.target.value }),
                onKeyDown: (e) => e.key === "Enter" && handleSearch()
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "w-32 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600",
              placeholder: "Canal...",
              value: tempFilters.channelId,
              onChange: (e) => setTempFilters({ ...tempFilters, channelId: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "w-32 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600",
              placeholder: "Jornada...",
              value: tempFilters.journeyId,
              onChange: (e) => setTempFilters({ ...tempFilters, journeyId: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "bg-zinc-950 border border-zinc-800 p-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 outline-none focus:border-blue-600",
              value: tempFilters.status,
              onChange: (e) => setTempFilters({ ...tempFilters, status: e.target.value }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "Status: Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACTIVE", children: "Ativos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DRAFT", children: "Rascunho" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "INACTIVE", children: "Inativos" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleSearch,
              className: "bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 14 }),
                " Filtrar"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar min-h-[300px]", children: [
          isLoading && list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 bg-zinc-900/50 animate-pulse border border-zinc-800" }, i)) }) : list.map((q, index) => {
            const qId = q?.id;
            const key = qId !== null && qId !== void 0 && qId !== "" ? String(qId) : `item-${index}`;
            const statusColor = q.status === "ACTIVE" ? "text-emerald-500" : q.status === "INACTIVE" ? "text-rose-500" : "text-zinc-500";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: index === list.length - 1 ? lastElementRef : null,
                onClick: () => onSelect(q),
                className: "p-6 bg-zinc-900/40 border border-zinc-800 rounded-none cursor-pointer hover:bg-blue-600/5 hover:border-blue-600 transition-all flex justify-between items-center group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-sm text-zinc-300 group-hover:text-white transition-all uppercase truncate", children: q.nome }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black uppercase tracking-widest border border-current px-1.5 py-0.5 ${statusColor} bg-zinc-950/50`, children: q.status })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono text-zinc-600 tracking-widest uppercase truncate max-w-[200px]", children: q.id }),
                      q.channelDistributionId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 font-bold uppercase tracking-tighter", children: [
                        "CH: ",
                        q.channelDistributionId
                      ] }),
                      q.journeyDistributionId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 font-bold uppercase tracking-tighter", children: [
                        "JY: ",
                        q.journeyDistributionId
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-zinc-800 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0" })
                ]
              },
              key
            );
          }),
          isFetchingMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-center p-4 text-zinc-500 animate-pulse font-black uppercase tracking-[0.3em]", children: "Buscando mais registros..." }),
          !isLoading && list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-zinc-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 48, className: "opacity-10 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest", children: "Nenhum questionário encontrado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest mt-2 opacity-50 text-center max-w-[250px]", children: "Tente ajustar os filtros ou verificar os parâmetros de busca." })
          ] })
        ] })
      ]
    }
  ) });
};

await importShared('react');
function Header({
  busca,
  setBusca,
  quizAtivo,
  onOpenSearch,
  onAutoLayout,
  onSave
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "p-4 bg-zinc-900 border-b border-zinc-800 flex gap-4 items-center z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mr-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-600/10 border border-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 16, className: "text-blue-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[11px] font-black uppercase tracking-widest text-white leading-none", children: "Designer de Questionário" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-zinc-500 uppercase mt-1", children: "Acme Workforce" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "absolute left-3 text-zinc-600 group-focus-within:text-blue-500 transition-all" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "bg-zinc-950 border border-zinc-800 border-r-0 p-2.5 pl-10 rounded-none text-xs w-64 focus:border-blue-600 outline-none transition-all placeholder:text-zinc-700",
            placeholder: "ID ou Nome do Questionário...",
            value: busca,
            onChange: (e) => setBusca(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && onOpenSearch()
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onOpenSearch,
          className: "bg-blue-600 hover:bg-blue-500 border border-blue-600 p-2.5 transition-all active:scale-95 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest",
          title: "Abrir consulta de questionários",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 14 })
        }
      )
    ] }),
    quizAtivo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-2 bg-blue-600/5 border border-blue-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-tight text-blue-400 truncate max-w-[200px]", children: [
        "Ativo: ",
        quizAtivo.nome
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black px-1.5 py-0.5 rounded-none border ${quizAtivo.status === "ACTIVE" ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" : "bg-zinc-800 text-zinc-500 border-zinc-700"}`, children: quizAtivo.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onAutoLayout, className: "bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-none text-[10px] font-black border border-zinc-700 uppercase transition-all active:scale-95", children: "Auto Layout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSave, disabled: !quizAtivo, className: "bg-blue-600 hover:bg-blue-500 disabled:opacity-30 px-6 py-2.5 rounded-none text-[10px] font-black uppercase flex items-center gap-2 transition-all active:scale-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }),
        " Sincronizar API"
      ] })
    ] })
  ] });
}

const React$1 = await importShared('react');
const {useState: useState$1,useRef: useRef$1,useEffect: useEffect$1,useCallback: useCallback$1} = React$1;
function Sidebar({
  perguntas,
  selecionadas,
  toggleSelecao,
  adicionarSelecionadas,
  filtersQuestions,
  setFiltersQuestions,
  termoBuscaBiblioteca,
  setTermoBuscaBiblioteca,
  isLoadingQuestions,
  isFetchingMoreQuestions,
  hasNextQuestions,
  nextCursorQuestions,
  onLoadMore
}) {
  const observerRef = useRef$1();
  const lastElementRef = useCallback$1((node) => {
    if (isLoadingQuestions || isFetchingMoreQuestions) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextQuestions && nextCursorQuestions) {
        onLoadMore(nextCursorQuestions, true);
      }
    });
    if (node) observerRef.current.observe(node);
  }, [isLoadingQuestions, isFetchingMoreQuestions, hasNextQuestions, nextCursorQuestions, onLoadMore]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col z-10 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-zinc-800 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-zinc-500 uppercase tracking-widest", children: "Biblioteca de Questões" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-zinc-800 px-2 py-0.5 text-zinc-400 font-mono", children: perguntas.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "absolute left-3 top-3.5 text-zinc-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "w-full bg-zinc-950 border border-zinc-800 p-3.5 pl-10 rounded-none text-xs outline-none focus:border-blue-600 transition-all placeholder:text-zinc-700",
            placeholder: "Pressione Enter para buscar...",
            value: termoBuscaBiblioteca,
            onChange: (e) => setTermoBuscaBiblioteca(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && setFiltersQuestions((f) => ({ ...f, buscaValor: termoBuscaBiblioteca }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: [
      isLoadingQuestions ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 mt-4 uppercase tracking-widest", children: "Carregando..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-zinc-800/50", children: perguntas.map((p, idx) => {
        const pId = p?.id;
        const isLast = idx === perguntas.length - 1;
        const key = pId !== null && pId !== void 0 && pId !== "" ? String(pId) : `item-${idx}`;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: isLast ? lastElementRef : null,
            onClick: () => toggleSelecao(p.id),
            className: `p-4 cursor-pointer hover:bg-zinc-800/50 transition-all flex items-center gap-3 ${selecionadas.includes(p.id) ? "bg-blue-600/10" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-none border flex items-center justify-center transition-all
                    ${selecionadas.includes(p.id) ? "bg-blue-600 border-blue-600" : "bg-zinc-900 border-zinc-800"}`, children: selecionadas.includes(p.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, strokeWidth: 4 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold truncate text-zinc-200 group-hover:text-white", children: p.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-zinc-600 font-mono mt-1 uppercase tracking-tighter", children: p.id })
              ] })
            ]
          },
          key
        );
      }) }),
      isFetchingMoreQuestions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-center p-2 text-zinc-500 animate-pulse font-bold uppercase", children: "Carregando mais..." }),
      !isLoadingQuestions && perguntas.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-zinc-600 uppercase tracking-widest", children: "Nenhuma questão encontrada" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selecionadas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        onClick: adicionarSelecionadas,
        className: "w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-none text-[10px] font-black flex items-center justify-center gap-2 uppercase shadow-lg shadow-blue-600/20",
        children: [
          "Incluir ",
          selecionadas.length,
          " no fluxo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
        ]
      }
    ) })
  ] });
}

await importShared('react');
function FallbackDialog({ fallbackDialog, onClose, onConfirm }) {
  if (!fallbackDialog) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      className: "bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-amber-500/10 text-amber-500 rounded-none flex items-center justify-center mx-auto border border-amber-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 32 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-white", children: fallbackDialog.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 mt-2 uppercase tracking-widest leading-relaxed", children: fallbackDialog.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
              children: fallbackDialog.cancelText
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onConfirm,
              className: "flex-1 bg-amber-600 hover:bg-amber-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
              children: fallbackDialog.confirmText
            }
          )
        ] })
      ]
    }
  ) });
}

await importShared('react');
function ErrorToast({ apiError, onClose }) {
  if (!apiError) return null;
  const isServerError = apiError.status >= 500;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
      className: "fixed top-24 right-6 bg-red-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-red-400 flex items-center gap-4 max-w-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X$1, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-black uppercase tracking-widest opacity-70", children: [
            isServerError ? "Erro de Servidor" : "Falha de Validação",
            " (",
            apiError.status,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold mt-0.5", children: apiError.message }),
          apiError.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] mt-2 p-2 bg-black/20 font-medium leading-relaxed border-l border-white/20", children: apiError.detail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-white/10 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X$1, { size: 14 }) })
      ]
    },
    "error-toast"
  );
}

await importShared('react');
function FallbackBanner({ isFallback }) {
  if (!isFallback) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      className: "fixed bottom-6 right-6 bg-amber-600/90 backdrop-blur-lg text-white px-6 py-4 font-bold shadow-2xl flex items-center gap-4 z-[100] border border-amber-400/50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-amber-400/20 flex items-center justify-center rounded-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.2em] text-[10px] font-black", children: "Offline Fallback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium opacity-80 text-[10px] mt-1", children: "Conexão com a API Java perdida. Usando dados locais." })
        ] })
      ]
    },
    "fallback-banner"
  );
}

var ge=Object.defineProperty;var hn=(e,n,t)=>n in e?ge(e,n,{enumerable:true,configurable:true,writable:true,value:t}):e[n]=t;var fn=(e,n)=>{for(var t in n)ge(e,t,{get:n[t],enumerable:true});};var pe=(e,n,t)=>hn(e,n+"",t);var z={};fn(z,{Graph:()=>p,alg:()=>R,json:()=>ye,version:()=>pn});var bn=Object.defineProperty,Le=(e,n)=>{for(var t in n)bn(e,t,{get:n[t],enumerable:true});},p=class{constructor(e){this._isDirected=true,this._isMultigraph=false,this._isCompound=false,this._nodes={},this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={},this._nodeCount=0,this._edgeCount=0,this._defaultNodeLabelFn=()=>{},this._defaultEdgeLabelFn=()=>{},e&&(this._isDirected="directed"in e?e.directed:true,this._isMultigraph="multigraph"in e?e.multigraph:false,this._isCompound="compound"in e?e.compound:false),this._isCompound&&(this._parent={},this._children={},this._children["\0"]={});}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return typeof e!="function"?this._defaultNodeLabelFn=()=>e:this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){return this.nodes().filter(e=>Object.keys(this._in[e]).length===0)}sinks(){return this.nodes().filter(e=>Object.keys(this._out[e]).length===0)}setNodes(e,n){return e.forEach(t=>{n!==void 0?this.setNode(t,n):this.setNode(t);}),this}setNode(e,n){return e in this._nodes?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=true),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return e in this._nodes}removeNode(e){if(e in this._nodes){let n=t=>this.removeEdge(this._edgeObjs[t]);delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],this.children(e).forEach(t=>{this.setParent(t);}),delete this._children[e]),Object.keys(this._in[e]).forEach(n),delete this._in[e],delete this._preds[e],Object.keys(this._out[e]).forEach(n),delete this._out[e],delete this._sucs[e],--this._nodeCount;}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(n===void 0)n="\0";else {n+="";for(let t=n;t!==void 0;t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n);}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=true,this}parent(e){if(this._isCompound){let n=this._parent[e];if(n!=="\0")return n}}children(e="\0"){if(this._isCompound){let n=this._children[e];if(n)return Object.keys(n)}else {if(e==="\0")return this.nodes();if(this.hasNode(e))return []}return []}predecessors(e){let n=this._preds[e];if(n)return Object.keys(n)}successors(e){let n=this._sucs[e];if(n)return Object.keys(n)}neighbors(e){let n=this.predecessors(e);if(n){let t=new Set(n);for(let r of this.successors(e))t.add(r);return Array.from(t.values())}}isLeaf(e){let n;return this.isDirected()?n=this.successors(e):n=this.neighbors(e),n.length===0}filterNodes(e){let n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph()),Object.entries(this._nodes).forEach(([o,i])=>{e(o)&&n.setNode(o,i);}),Object.values(this._edgeObjs).forEach(o=>{n.hasNode(o.v)&&n.hasNode(o.w)&&n.setEdge(o,this.edge(o));});let t={},r=o=>{let i=this.parent(o);return !i||n.hasNode(i)?(t[o]=i!=null?i:void 0,i!=null?i:void 0):i in t?t[i]:r(i)};return this._isCompound&&n.nodes().forEach(o=>n.setParent(o,r(o))),n}setDefaultEdgeLabel(e){return typeof e!="function"?this._defaultEdgeLabelFn=()=>e:this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(e,n){return e.reduce((t,r)=>(n!==void 0?this.setEdge(t,r,n):this.setEdge(t,r),r)),this}setEdge(e,n,t,r){let o,i,s,a,d=false;typeof e=="object"&&e!==null&&"v"in e?(o=e.v,i=e.w,s=e.name,arguments.length===2&&(a=n,d=true)):(o=e,i=n,s=r,arguments.length>2&&(a=t,d=true)),o=""+o,i=""+i,s!==void 0&&(s=""+s);let l=C(this._isDirected,o,i,s);if(l in this._edgeLabels)return d&&(this._edgeLabels[l]=a),this;if(s!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(o),this.setNode(i),this._edgeLabels[l]=d?a:this._defaultEdgeLabelFn(o,i,s);let u=gn(this._isDirected,o,i,s);return o=u.v,i=u.w,Object.freeze(u),this._edgeObjs[l]=u,me(this._preds[i],o),me(this._sucs[o],i),this._in[i][l]=u,this._out[o][l]=u,this._edgeCount++,this}edge(e,n,t){let r=arguments.length===1?Y(this._isDirected,e):C(this._isDirected,e,n,t);return this._edgeLabels[r]}edgeAsObj(e,n,t){let r=arguments.length===1?this.edge(e):this.edge(e,n,t);return typeof r!="object"?{label:r}:r}hasEdge(e,n,t){return (arguments.length===1?Y(this._isDirected,e):C(this._isDirected,e,n,t))in this._edgeLabels}removeEdge(e,n,t){let r=arguments.length===1?Y(this._isDirected,e):C(this._isDirected,e,n,t),o=this._edgeObjs[r];if(o){let i=o.v,s=o.w;delete this._edgeLabels[r],delete this._edgeObjs[r],Ee(this._preds[s],i),Ee(this._sucs[i],s),delete this._in[s][r],delete this._out[i][r],this._edgeCount--;}return this}inEdges(e,n){return this.isDirected()?this.filterEdges(this._in[e],e,n):this.nodeEdges(e,n)}outEdges(e,n){return this.isDirected()?this.filterEdges(this._out[e],e,n):this.nodeEdges(e,n)}nodeEdges(e,n){if(e in this._nodes)return this.filterEdges({...this._in[e],...this._out[e]},e,n)}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e];}filterEdges(e,n,t){if(!e)return;let r=Object.values(e);return t?r.filter(o=>o.v===n&&o.w===t||o.v===t&&o.w===n):r}};function me(e,n){e[n]?e[n]++:e[n]=1;}function Ee(e,n){e[n]!==void 0&&!--e[n]&&delete e[n];}function C(e,n,t,r){let o=""+n,i=""+t;if(!e&&o>i){let s=o;o=i,i=s;}return o+""+i+""+(r===void 0?"\0":r)}function gn(e,n,t,r){let o=""+n,i=""+t;if(!e&&o>i){let a=o;o=i,i=a;}let s={v:o,w:i};return r&&(s.name=r),s}function Y(e,n){return C(e,n.v,n.w,n.name)}var pn="4.0.1",ye={};Le(ye,{read:()=>yn,write:()=>mn});function mn(e){let n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:En(e),edges:Ln(e)},t=e.graph();return t!==void 0&&(n.value=structuredClone(t)),n}function En(e){return e.nodes().map(n=>{let t=e.node(n),r=e.parent(n),o={v:n};return t!==void 0&&(o.value=t),r!==void 0&&(o.parent=r),o})}function Ln(e){return e.edges().map(n=>{let t=e.edge(n),r={v:n.v,w:n.w};return n.name!==void 0&&(r.name=n.name),t!==void 0&&(r.value=t),r})}function yn(e){let n=new p(e.options);return e.value!==void 0&&n.setGraph(e.value),e.nodes.forEach(t=>{n.setNode(t.v,t.value),t.parent&&n.setParent(t.v,t.parent);}),e.edges.forEach(t=>{n.setEdge({v:t.v,w:t.w,name:t.name},t.value);}),n}var R={};Le(R,{CycleException:()=>D,bellmanFord:()=>we,components:()=>Gn,dijkstra:()=>F,dijkstraAll:()=>_n,findCycles:()=>xn,floydWarshall:()=>On,isAcyclic:()=>Cn,postorder:()=>Pn,preorder:()=>Mn,prim:()=>jn,shortestPaths:()=>Sn,tarjan:()=>Ge,topsort:()=>ke});var wn=()=>1;function we(e,n,t,r){return Nn(e,String(n),t||wn,r||function(o){return e.outEdges(o)})}function Nn(e,n,t,r){let o={},i,s=0,a=e.nodes(),d=function(c){let h=t(c);o[c.v].distance+h<o[c.w].distance&&(o[c.w]={distance:o[c.v].distance+h,predecessor:c.v},i=true);},l=function(){a.forEach(function(c){r(c).forEach(function(h){let f=h.v===c?h.v:h.w,g=f===h.v?h.w:h.v;d({v:f,w:g});});});};a.forEach(function(c){let h=c===n?0:Number.POSITIVE_INFINITY;o[c]={distance:h,predecessor:""};});let u=a.length;for(let c=1;c<u&&(i=false,s++,l(),!!i);c++);if(s===u-1&&(i=false,l(),i))throw new Error("The graph contains a negative weight cycle");return o}function Gn(e){let n={},t=[],r;function o(i){i in n||(n[i]=true,r.push(i),e.successors(i).forEach(o),e.predecessors(i).forEach(o));}return e.nodes().forEach(function(i){r=[],o(i),r.length&&t.push(r);}),t}var Ne=class{constructor(){this._arr=[],this._keyIndices={};}size(){return this._arr.length}keys(){return this._arr.map(e=>e.key)}has(e){return e in this._keyIndices}priority(e){let n=this._keyIndices[e];if(n!==void 0)return this._arr[n].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(e,n){let t=this._keyIndices,r=String(e);if(!(r in t)){let o=this._arr,i=o.length;return t[r]=i,o.push({key:r,priority:n}),this._decrease(i),true}return  false}removeMin(){this._swap(0,this._arr.length-1);let e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key}decrease(e,n){let t=this._keyIndices[e];if(t===void 0)throw new Error(`Key not found: ${e}`);let r=this._arr[t].priority;if(n>r)throw new Error(`New priority is greater than current priority. Key: ${e} Old: ${r} New: ${n}`);this._arr[t].priority=n,this._decrease(t);}_heapify(e){let n=this._arr,t=2*e,r=t+1,o=e;t<n.length&&(o=n[t].priority<n[o].priority?t:o,r<n.length&&(o=n[r].priority<n[o].priority?r:o),o!==e&&(this._swap(e,o),this._heapify(o)));}_decrease(e){let n=this._arr,t=n[e].priority,r;for(;e!==0&&(r=e>>1,!(n[r].priority<t));)this._swap(e,r),e=r;}_swap(e,n){let t=this._arr,r=this._keyIndices,o=t[e],i=t[n];t[e]=i,t[n]=o,r[i.key]=e,r[o.key]=n;}},kn=()=>1;function F(e,n,t,r){let o=function(i){return e.outEdges(i)};return vn(e,String(n),t||kn,r||o)}function vn(e,n,t,r){let o={},i=new Ne,s,a,d=function(l){let u=l.v!==s?l.v:l.w,c=o[u],h=t(l),f=a.distance+h;if(h<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+l+" Weight: "+h);f<c.distance&&(c.distance=f,c.predecessor=s,i.decrease(u,f));};for(e.nodes().forEach(function(l){let u=l===n?0:Number.POSITIVE_INFINITY;o[l]={distance:u,predecessor:""},i.add(l,u);});i.size()>0&&(s=i.removeMin(),a=o[s],a.distance!==Number.POSITIVE_INFINITY);)r(s).forEach(d);return o}function _n(e,n,t){return e.nodes().reduce(function(r,o){return r[o]=F(e,o,n,t),r},{})}function Ge(e){let n=0,t=[],r={},o=[];function i(s){let a=r[s]={onStack:true,lowlink:n,index:n++};if(t.push(s),e.successors(s).forEach(function(d){d in r?r[d].onStack&&(a.lowlink=Math.min(a.lowlink,r[d].index)):(i(d),a.lowlink=Math.min(a.lowlink,r[d].lowlink));}),a.lowlink===a.index){let d=[],l;do l=t.pop(),r[l].onStack=false,d.push(l);while(s!==l);o.push(d);}}return e.nodes().forEach(function(s){s in r||i(s);}),o}function xn(e){return Ge(e).filter(function(n){return n.length>1||n.length===1&&e.hasEdge(n[0],n[0])})}var Tn=()=>1;function On(e,n,t){return In(e,n||Tn,t||function(r){return e.outEdges(r)})}function In(e,n,t){let r={},o=e.nodes();return o.forEach(function(i){r[i]={},r[i][i]={distance:0,predecessor:""},o.forEach(function(s){i!==s&&(r[i][s]={distance:Number.POSITIVE_INFINITY,predecessor:""});}),t(i).forEach(function(s){let a=s.v===i?s.w:s.v,d=n(s);r[i][a]={distance:d,predecessor:i};});}),o.forEach(function(i){let s=r[i];o.forEach(function(a){let d=r[a];o.forEach(function(l){let u=d[i],c=s[l],h=d[l],f=u.distance+c.distance;f<h.distance&&(h.distance=f,h.predecessor=c.predecessor);});});}),r}var D=class extends Error{constructor(...e){super(...e);}};function ke(e){let n={},t={},r=[];function o(i){if(i in t)throw new D;i in n||(t[i]=true,n[i]=true,e.predecessors(i).forEach(o),delete t[i],r.push(i));}if(e.sinks().forEach(o),Object.keys(n).length!==e.nodeCount())throw new D;return r}function Cn(e){try{ke(e);}catch(n){if(n instanceof D)return  false;throw n}return  true}function Rn(e,n,t,r,o){Array.isArray(n)||(n=[n]);let i=(a=>{var d;return (d=e.isDirected()?e.successors(a):e.neighbors(a))!=null?d:[]}),s={};return n.forEach(function(a){if(!e.hasNode(a))throw new Error("Graph does not have node: "+a);o=ve(e,a,t==="post",s,i,r,o);}),o}function ve(e,n,t,r,o,i,s){return n in r||(r[n]=true,t||(s=i(s,n)),o(n).forEach(function(a){s=ve(e,a,t,r,o,i,s);}),t&&(s=i(s,n))),s}function _e(e,n,t){return Rn(e,n,t,function(r,o){return r.push(o),r},[])}function Pn(e,n){return _e(e,n,"post")}function Mn(e,n){return _e(e,n,"pre")}function jn(e,n){let t=new p,r={},o=new Ne,i;function s(d){let l=d.v===i?d.w:d.v,u=o.priority(l);if(u!==void 0){let c=n(d);c<u&&(r[l]=i,o.decrease(l,c));}}if(e.nodeCount()===0)return t;e.nodes().forEach(function(d){o.add(d,Number.POSITIVE_INFINITY),t.setNode(d);}),o.decrease(e.nodes()[0],0);let a=false;for(;o.size()>0;){if(i=o.removeMin(),i in r)t.setEdge(i,r[i]);else {if(a)throw new Error("Input graph is not connected: "+e);a=true;}e.nodeEdges(i).forEach(s);}return t}function Sn(e,n,t,r){return Fn(e,n,t,r!=null?r:(o=>{let i=e.outEdges(o);return i!=null?i:[]}))}function Fn(e,n,t,r){if(t===void 0)return F(e,n,t,r);let o=false,i=e.nodes();for(let s=0;s<i.length;s++){let a=r(i[s]);for(let d=0;d<a.length;d++){let l=a[d],u=l.v===i[s]?l.v:l.w,c=u===l.v?l.w:l.v;t({v:u,w:c})<0&&(o=true);}if(o)return we(e,n,t,r)}return F(e,n,t,r)}function w(e,n,t,r){let o=r;for(;e.hasNode(o);)o=j(r);return t.dummy=n,e.setNode(o,t),o}function xe(e){let n=new p().setGraph(e.graph());return e.nodes().forEach(t=>n.setNode(t,e.node(t))),e.edges().forEach(t=>{let r=n.edge(t.v,t.w)||{weight:0,minlen:1},o=e.edge(t);n.setEdge(t.v,t.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)});}),n}function A(e){let n=new p({multigraph:e.isMultigraph()}).setGraph(e.graph());return e.nodes().forEach(t=>{e.children(t).length||n.setNode(t,e.node(t));}),e.edges().forEach(t=>{n.setEdge(t,e.edge(t));}),n}function H(e,n){let t=e.x,r=e.y,o=n.x-t,i=n.y-r,s=e.width/2,a=e.height/2;if(!o&&!i)throw new Error("Not possible to find intersection inside of the rectangle");let d,l;return Math.abs(i)*s>Math.abs(o)*a?(i<0&&(a=-a),d=a*o/i,l=a):(o<0&&(s=-s),d=s,l=s*i/o),{x:t+d,y:r+l}}function N(e){let n=k(X(e)+1).map(()=>[]);return e.nodes().forEach(t=>{let r=e.node(t),o=r.rank;o!==void 0&&(n[o]||(n[o]=[]),n[o][r.order]=t);}),n}function Te(e){let n=e.nodes().map(r=>{let o=e.node(r).rank;return o===void 0?Number.MAX_VALUE:o}),t=L(Math.min,n);e.nodes().forEach(r=>{let o=e.node(r);Object.hasOwn(o,"rank")&&(o.rank-=t);});}function Oe(e){let n=e.nodes().map(s=>e.node(s).rank).filter(s=>s!==void 0),t=L(Math.min,n),r=[];e.nodes().forEach(s=>{let a=e.node(s).rank-t;r[a]||(r[a]=[]),r[a].push(s);});let o=0,i=e.graph().nodeRankFactor;Array.from(r).forEach((s,a)=>{s===void 0&&a%i!==0?--o:s!==void 0&&o&&s.forEach(d=>e.node(d).rank+=o);});}function q(e,n,t,r){let o={width:0,height:0};return arguments.length>=4&&(o.rank=t,o.order=r),w(e,"border",o,n)}function Dn(e,n=Ie){let t=[];for(let r=0;r<e.length;r+=n){let o=e.slice(r,r+n);t.push(o);}return t}var Ie=65535;function L(e,n){if(n.length>Ie){let t=Dn(n);return e(...t.map(r=>e(...r)))}else return e(...n)}function X(e){let t=e.nodes().map(r=>{let o=e.node(r).rank;return o===void 0?Number.MIN_VALUE:o});return L(Math.max,t)}function Ce(e,n){let t={lhs:[],rhs:[]};return e.forEach(r=>{n(r)?t.lhs.push(r):t.rhs.push(r);}),t}function P(e,n){let t=Date.now();try{return n()}finally{console.log(e+" time: "+(Date.now()-t)+"ms");}}function M(e,n){return n()}var An=0;function j(e){let n=++An;return e+(""+n)}function k(e,n,t=1){n==null&&(n=e,e=0);let r=i=>i<n;t<0&&(r=i=>n<i);let o=[];for(let i=e;r(i);i+=t)o.push(i);return o}function T(e,n){let t={};for(let r of n)e[r]!==void 0&&(t[r]=e[r]);return t}function O(e,n){let t;return typeof n=="string"?t=r=>r[n]:t=n,Object.entries(e).reduce((r,[o,i])=>(r[o]=t(i,o),r),{})}function Re(e,n){return e.reduce((t,r,o)=>(t[r]=n[o],t),{})}var _="\0";var U="3.0.0";var K=class{constructor(){pe(this,"_sentinel");let n={};n._next=n._prev=n,this._sentinel=n;}dequeue(){let n=this._sentinel,t=n._prev;if(t!==n)return Pe(t),t}enqueue(n){let t=this._sentinel;n._prev&&n._next&&Pe(n),n._next=t._next,t._next._prev=n,t._next=n,n._prev=t;}toString(){let n=[],t=this._sentinel,r=t._prev;for(;r!==t;)n.push(JSON.stringify(r,Vn)),r=r._prev;return "["+n.join(", ")+"]"}};function Pe(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev;}function Vn(e,n){if(e!=="_next"&&e!=="_prev")return n}var Me=K;var Wn=()=>1;function Q(e,n){if(e.nodeCount()<=1)return [];let t=Yn(e,n||Wn);return Bn(t.graph,t.buckets,t.zeroIdx).flatMap(o=>e.outEdges(o.v,o.w)||[])}function Bn(e,n,t){var a;let r=[],o=n[n.length-1],i=n[0],s;for(;e.nodeCount();){for(;s=i.dequeue();)$(e,n,t,s);for(;s=o.dequeue();)$(e,n,t,s);if(e.nodeCount()){for(let d=n.length-2;d>0;--d)if(s=(a=n[d])==null?void 0:a.dequeue(),s){r=r.concat($(e,n,t,s,true)||[]);break}}}return r}function $(e,n,t,r,o){let i=[],s=o?i:void 0;return (e.inEdges(r.v)||[]).forEach(a=>{let d=e.edge(a),l=e.node(a.v);o&&i.push({v:a.v,w:a.w}),l.out-=d,J(n,t,l);}),(e.outEdges(r.v)||[]).forEach(a=>{let d=e.edge(a),l=a.w,u=e.node(l);u.in-=d,J(n,t,u);}),e.removeNode(r.v),s}function Yn(e,n){let t=new p,r=0,o=0;e.nodes().forEach(a=>{t.setNode(a,{v:a,in:0,out:0});}),e.edges().forEach(a=>{let d=t.edge(a.v,a.w)||0,l=n(a),u=d+l;t.setEdge(a.v,a.w,u);let c=t.node(a.v),h=t.node(a.w);o=Math.max(o,c.out+=l),r=Math.max(r,h.in+=l);});let i=zn(o+r+3).map(()=>new Me),s=r+1;return t.nodes().forEach(a=>{J(i,s,t.node(a));}),{graph:t,buckets:i,zeroIdx:s}}function J(e,n,t){var r,o,i;t.out?t.in?(i=e[t.out-t.in+n])==null||i.enqueue(t):(o=e[e.length-1])==null||o.enqueue(t):(r=e[0])==null||r.enqueue(t);}function zn(e){let n=[];for(let t=0;t<e;t++)n.push(t);return n}function je(e){(e.graph().acyclicer==="greedy"?Q(e,t(e)):Hn(e)).forEach(r=>{let o=e.edge(r);e.removeEdge(r),o.forwardName=r.name,o.reversed=true,e.setEdge(r.w,r.v,o,j("rev"));});function t(r){return o=>r.edge(o).weight}}function Hn(e){let n=[],t={},r={};function o(i){Object.hasOwn(r,i)||(r[i]=true,t[i]=true,e.outEdges(i).forEach(s=>{Object.hasOwn(t,s.w)?n.push(s):o(s.w);}),delete t[i]);}return e.nodes().forEach(o),n}function Se(e){e.edges().forEach(n=>{let t=e.edge(n);if(t.reversed){e.removeEdge(n);let r=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,r);}});}function Fe(e){e.graph().dummyChains=[],e.edges().forEach(n=>Xn(e,n));}function Xn(e,n){let t=n.v,r=e.node(t).rank,o=n.w,i=e.node(o).rank,s=n.name,a=e.edge(n),d=a.labelRank;if(i===r+1)return;e.removeEdge(n);let l,u,c;for(c=0,++r;r<i;++c,++r)a.points=[],u={width:0,height:0,edgeLabel:a,edgeObj:n,rank:r},l=w(e,"edge",u,"_d"),r===d&&(u.width=a.width,u.height=a.height,u.dummy="edge-label",u.labelpos=a.labelpos),e.setEdge(t,l,{weight:a.weight},s),c===0&&e.graph().dummyChains.push(l),t=l;e.setEdge(t,o,{weight:a.weight},s);}function De(e){e.graph().dummyChains.forEach(n=>{let t=e.node(n),r=t.edgeLabel,o;for(e.setEdge(t.edgeObj,r);t.dummy;)o=e.successors(n)[0],e.removeNode(n),r.points.push({x:t.x,y:t.y}),t.dummy==="edge-label"&&(r.x=t.x,r.y=t.y,r.width=t.width,r.height=t.height),n=o,t=e.node(n);});}function S(e){let n={};function t(r){let o=e.node(r);if(Object.hasOwn(n,r))return o.rank;n[r]=true;let i=e.outEdges(r),s=i?i.map(d=>d==null?Number.POSITIVE_INFINITY:t(d.w)-e.edge(d).minlen):[],a=L(Math.min,s);return a===Number.POSITIVE_INFINITY&&(a=0),o.rank=a}e.sources().forEach(t);}function v(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}var V=Kn;function Kn(e){let n=new p({directed:false}),t=e.nodes();if(t.length===0)throw new Error("Graph must have at least one node");let r=t[0],o=e.nodeCount();n.setNode(r,{});let i,s;for(;$n(n,e)<o&&(i=Jn(n,e),!!i);)s=n.hasNode(i.v)?v(e,i):-v(e,i),Qn(n,e,s);return n}function $n(e,n){function t(r){let o=n.nodeEdges(r);o&&o.forEach(i=>{let s=i.v,a=r===s?i.w:s;!e.hasNode(a)&&!v(n,i)&&(e.setNode(a,{}),e.setEdge(r,a,{}),t(a));});}return e.nodes().forEach(t),e.nodeCount()}function Jn(e,n){return n.edges().reduce((r,o)=>{let i=Number.POSITIVE_INFINITY;return e.hasNode(o.v)!==e.hasNode(o.w)&&(i=v(n,o)),i<r[0]?[i,o]:r},[Number.POSITIVE_INFINITY,null])[1]}function Qn(e,n,t){e.nodes().forEach(r=>n.node(r).rank+=t);}var{preorder:Zn,postorder:et}=R,Ve=x;x.initLowLimValues=ee;x.initCutValues=Z;x.calcCutValue=We;x.leaveEdge=Ye;x.enterEdge=ze;x.exchangeEdges=He;function x(e){e=xe(e),S(e);let n=V(e);ee(n),Z(n,e);let t,r;for(;t=Ye(n);)r=ze(n,e,t),He(n,e,t,r);}function Z(e,n){let t=et(e,e.nodes());t=t.slice(0,t.length-1),t.forEach(r=>nt(e,n,r));}function nt(e,n,t){let o=e.node(t).parent,i=e.edge(t,o);i.cutvalue=We(e,n,t);}function We(e,n,t){let o=e.node(t).parent,i=true,s=n.edge(t,o),a=0;s||(i=false,s=n.edge(o,t)),a=s.weight;let d=n.nodeEdges(t);return d&&d.forEach(l=>{let u=l.v===t,c=u?l.w:l.v;if(c!==o){let h=u===i,f=n.edge(l).weight;if(a+=h?f:-f,rt(e,t,c)){let b=e.edge(t,c).cutvalue;a+=h?-b:b;}}}),a}function ee(e,n){arguments.length<2&&(n=e.nodes()[0]),Be(e,{},1,n);}function Be(e,n,t,r,o){let i=t,s=e.node(r);n[r]=true;let a=e.neighbors(r);return a&&a.forEach(d=>{Object.hasOwn(n,d)||(t=Be(e,n,t,d,r));}),s.low=i,s.lim=t++,o?s.parent=o:delete s.parent,t}function Ye(e){return e.edges().find(n=>e.edge(n).cutvalue<0)}function ze(e,n,t){let r=t.v,o=t.w;n.hasEdge(r,o)||(r=t.w,o=t.v);let i=e.node(r),s=e.node(o),a=i,d=false;return i.lim>s.lim&&(a=s,d=true),n.edges().filter(u=>d===Ae(e,e.node(u.v),a)&&d!==Ae(e,e.node(u.w),a)).reduce((u,c)=>v(n,c)<v(n,u)?c:u)}function He(e,n,t,r){let o=t.v,i=t.w;e.removeEdge(o,i),e.setEdge(r.v,r.w,{}),ee(e),Z(e,n),tt(e,n);}function tt(e,n){let t=e.nodes().find(o=>!e.node(o).parent);if(!t)return;let r=Zn(e,[t]);r=r.slice(1),r.forEach(o=>{let s=e.node(o).parent,a=n.edge(o,s),d=false;a||(a=n.edge(s,o),d=true),n.node(o).rank=n.node(s).rank+(d?a.minlen:-a.minlen);});}function rt(e,n,t){return e.hasEdge(n,t)}function Ae(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}var Xe=ot;function ot(e){let n=e.graph().ranker;if(typeof n=="function")return n(e);switch(n){case "network-simplex":qe(e);break;case "tight-tree":st(e);break;case "longest-path":it(e);break;case "none":break;default:qe(e);}}var it=S;function st(e){S(e),V(e);}function qe(e){Ve(e);}var Ue=at;function at(e){let n=lt(e);e.graph().dummyChains.forEach(t=>{let r=e.node(t),o=r.edgeObj,i=dt(e,n,o.v,o.w),s=i.path,a=i.lca,d=0,l=s[d],u=true;for(;t!==o.w;){if(r=e.node(t),u){for(;(l=s[d])!==a&&e.node(l).maxRank<r.rank;)d++;l===a&&(u=false);}if(!u){for(;d<s.length-1&&e.node(s[d+1]).minRank<=r.rank;)d++;l=s[d];}l!==void 0&&e.setParent(t,l),t=e.successors(t)[0];}});}function dt(e,n,t,r){let o=[],i=[],s=Math.min(n[t].low,n[r].low),a=Math.max(n[t].lim,n[r].lim),d;d=t;do d=e.parent(d),o.push(d);while(d&&(n[d].low>s||a>n[d].lim));let l=d,u=r;for(;(u=e.parent(u))!==l;)i.push(u);return {path:o.concat(i.reverse()),lca:l}}function lt(e){let n={},t=0;function r(o){let i=t;e.children(o).forEach(r),n[o]={low:i,lim:t++};}return e.children(_).forEach(r),n}function Ke(e){let n=w(e,"root",{},"_root"),t=ut(e),r=Object.values(t),o=L(Math.max,r)-1,i=2*o+1;e.graph().nestingRoot=n,e.edges().forEach(a=>e.edge(a).minlen*=i);let s=ct(e)+1;e.children(_).forEach(a=>$e(e,n,i,s,o,t,a)),e.graph().nodeRankFactor=i;}function $e(e,n,t,r,o,i,s){var c;let a=e.children(s);if(!a.length){s!==n&&e.setEdge(n,s,{weight:0,minlen:t});return}let d=q(e,"_bt"),l=q(e,"_bb"),u=e.node(s);e.setParent(d,s),u.borderTop=d,e.setParent(l,s),u.borderBottom=l,a.forEach(h=>{var y;$e(e,n,t,r,o,i,h);let f=e.node(h),g=f.borderTop?f.borderTop:h,b=f.borderBottom?f.borderBottom:h,m=f.borderTop?r:2*r,E=g!==b?1:o-((y=i[s])!=null?y:0)+1;e.setEdge(d,g,{weight:m,minlen:E,nestingEdge:true}),e.setEdge(b,l,{weight:m,minlen:E,nestingEdge:true});}),e.parent(s)||e.setEdge(n,d,{weight:0,minlen:o+((c=i[s])!=null?c:0)});}function ut(e){let n={};function t(r,o){let i=e.children(r);i&&i.length&&i.forEach(s=>t(s,o+1)),n[r]=o;}return e.children(_).forEach(r=>t(r,1)),n}function ct(e){return e.edges().reduce((n,t)=>n+e.edge(t).weight,0)}function Je(e){let n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,e.edges().forEach(t=>{e.edge(t).nestingEdge&&e.removeEdge(t);});}var Ze=ft;function ft(e){function n(t){let r=e.children(t),o=e.node(t);if(r.length&&r.forEach(n),Object.hasOwn(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(let i=o.minRank,s=o.maxRank+1;i<s;++i)Qe(e,"borderLeft","_bl",t,o,i),Qe(e,"borderRight","_br",t,o,i);}}e.children(_).forEach(n);}function Qe(e,n,t,r,o,i){let s={width:0,height:0,rank:i,borderType:n},a=o[n][i-1],d=w(e,"border",s,t);o[n][i]=d,e.setParent(d,r),a&&e.setEdge(a,d,{weight:1});}function nn(e){var t;let n=(t=e.graph().rankdir)==null?void 0:t.toLowerCase();(n==="lr"||n==="rl")&&rn(e);}function tn(e){var t;let n=(t=e.graph().rankdir)==null?void 0:t.toLowerCase();(n==="bt"||n==="rl")&&bt(e),(n==="lr"||n==="rl")&&(gt(e),rn(e));}function rn(e){e.nodes().forEach(n=>en(e.node(n))),e.edges().forEach(n=>en(e.edge(n)));}function en(e){let n=e.width;e.width=e.height,e.height=n;}function bt(e){e.nodes().forEach(n=>ne(e.node(n))),e.edges().forEach(n=>{var r;let t=e.edge(n);(r=t.points)==null||r.forEach(ne),Object.hasOwn(t,"y")&&ne(t);});}function ne(e){e.y=-e.y;}function gt(e){e.nodes().forEach(n=>te(e.node(n))),e.edges().forEach(n=>{var r;let t=e.edge(n);(r=t.points)==null||r.forEach(te),Object.hasOwn(t,"x")&&te(t);});}function te(e){let n=e.x;e.x=e.y,e.y=n;}function re(e){let n={},t=e.nodes().filter(d=>!e.children(d).length),r=t.map(d=>e.node(d).rank),o=L(Math.max,r),i=k(o+1).map(()=>[]);function s(d){if(n[d])return;n[d]=true;let l=e.node(d);i[l.rank].push(d);let u=e.successors(d);u&&u.forEach(s);}return t.sort((d,l)=>e.node(d).rank-e.node(l).rank).forEach(s),i}function oe(e,n){let t=0;for(let r=1;r<n.length;++r)t+=mt(e,n[r-1],n[r]);return t}function mt(e,n,t){let r=Re(t,t.map((l,u)=>u)),o=n.flatMap(l=>{let u=e.outEdges(l);return u?u.map(c=>({pos:r[c.w],weight:e.edge(c).weight})).sort((c,h)=>c.pos-h.pos):[]}),i=1;for(;i<t.length;)i<<=1;let s=2*i-1;i-=1;let a=new Array(s).fill(0),d=0;return o.forEach(l=>{let u=l.pos+i;a[u]+=l.weight;let c=0;for(;u>0;)u%2&&(c+=a[u+1]),u=u-1>>1,a[u]+=l.weight;d+=l.weight*c;}),d}function ie(e,n=[]){return n.map(t=>{let r=e.inEdges(t);if(!r||!r.length)return {v:t};{let o=r.reduce((i,s)=>{let a=e.edge(s),d=e.node(s.v);return {sum:i.sum+a.weight*d.order,weight:i.weight+a.weight}},{sum:0,weight:0});return {v:t,barycenter:o.sum/o.weight,weight:o.weight}}})}function se(e,n){let t={};e.forEach((o,i)=>{let s={indegree:0,in:[],out:[],vs:[o.v],i};o.barycenter!==void 0&&(s.barycenter=o.barycenter,s.weight=o.weight),t[o.v]=s;}),n.edges().forEach(o=>{let i=t[o.v],s=t[o.w];i!==void 0&&s!==void 0&&(s.indegree++,i.out.push(s));});let r=Object.values(t).filter(o=>!o.indegree);return Et(r)}function Et(e){let n=[];function t(o){return i=>{i.merged||(i.barycenter===void 0||o.barycenter===void 0||i.barycenter>=o.barycenter)&&Lt(o,i);}}function r(o){return i=>{i.in.push(o),--i.indegree===0&&e.push(i);}}for(;e.length;){let o=e.pop();n.push(o),o.in.reverse().forEach(t(o)),o.out.forEach(r(o));}return n.filter(o=>!o.merged).map(o=>T(o,["vs","i","barycenter","weight"]))}function Lt(e,n){let t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight),n.weight&&(t+=n.barycenter*n.weight,r+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=true;}function ae(e,n){let t=Ce(e,u=>Object.hasOwn(u,"barycenter")),r=t.lhs,o=t.rhs.sort((u,c)=>c.i-u.i),i=[],s=0,a=0,d=0;r.sort(yt(!!n)),d=on(i,o,d),r.forEach(u=>{d+=u.vs.length,i.push(u.vs),s+=u.barycenter*u.weight,a+=u.weight,d=on(i,o,d);});let l={vs:i.flat(1)};return a&&(l.barycenter=s/a,l.weight=a),l}function on(e,n,t){let r;for(;n.length&&(r=n[n.length-1]).i<=t;)n.pop(),e.push(r.vs),t++;return t}function yt(e){return (n,t)=>n.barycenter<t.barycenter?-1:n.barycenter>t.barycenter?1:e?t.i-n.i:n.i-t.i}function W(e,n,t,r){let o=e.children(n),i=e.node(n),s=i?i.borderLeft:void 0,a=i?i.borderRight:void 0,d={};s&&(o=o.filter(h=>h!==s&&h!==a));let l=ie(e,o);l.forEach(h=>{if(e.children(h.v).length){let f=W(e,h.v,t,r);d[h.v]=f,Object.hasOwn(f,"barycenter")&&Nt(h,f);}});let u=se(l,t);wt(u,d);let c=ae(u,r);if(s&&a){c.vs=[s,c.vs,a].flat(1);let h=e.predecessors(s);if(h&&h.length){let f=e.node(h[0]),g=e.predecessors(a),b=e.node(g[0]);Object.hasOwn(c,"barycenter")||(c.barycenter=0,c.weight=0),c.barycenter=(c.barycenter*c.weight+f.order+b.order)/(c.weight+2),c.weight+=2;}}return c}function wt(e,n){e.forEach(t=>{t.vs=t.vs.flatMap(r=>n[r]?n[r].vs:r);});}function Nt(e,n){e.barycenter!==void 0?(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight):(e.barycenter=n.barycenter,e.weight=n.weight);}function de(e,n,t,r){r||(r=e.nodes());let o=Gt(e),i=new p({compound:true}).setGraph({root:o}).setDefaultNodeLabel(s=>e.node(s));return r.forEach(s=>{let a=e.node(s),d=e.parent(s);if(a.rank===n||a.minRank<=n&&n<=a.maxRank){i.setNode(s),i.setParent(s,d||o);let l=e[t](s);l&&l.forEach(u=>{let c=u.v===s?u.w:u.v,h=i.edge(c,s),f=h!==void 0?h.weight:0;i.setEdge(c,s,{weight:e.edge(u).weight+f});}),Object.hasOwn(a,"minRank")&&i.setNode(s,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]});}}),i}function Gt(e){let n;for(;e.hasNode(n=j("_root")););return n}function le(e,n,t){let r={},o;t.forEach(i=>{let s=e.parent(i),a,d;for(;s;){if(a=e.parent(s),a?(d=r[a],r[a]=s):(d=o,o=s),d&&d!==s){n.setEdge(d,s);return}s=a;}});}function B(e,n={}){if(typeof n.customOrder=="function"){n.customOrder(e,B);return}let t=X(e),r=sn(e,k(1,t+1),"inEdges"),o=sn(e,k(t-1,-1,-1),"outEdges"),i=re(e);if(an(e,i),n.disableOptimalOrderHeuristic)return;let s=Number.POSITIVE_INFINITY,a,d=n.constraints||[];for(let l=0,u=0;u<4;++l,++u){kt(l%2?r:o,l%4>=2,d),i=N(e);let c=oe(e,i);c<s?(u=0,a=Object.assign({},i),s=c):c===s&&(a=structuredClone(i));}an(e,a);}function sn(e,n,t){let r=new Map,o=(i,s)=>{r.has(i)||r.set(i,[]),r.get(i).push(s);};for(let i of e.nodes()){let s=e.node(i);if(typeof s.rank=="number"&&o(s.rank,i),typeof s.minRank=="number"&&typeof s.maxRank=="number")for(let a=s.minRank;a<=s.maxRank;a++)a!==s.rank&&o(a,i);}return n.map(function(i){return de(e,i,t,r.get(i)||[])})}function kt(e,n,t){let r=new p;e.forEach(function(o){t.forEach(a=>r.setEdge(a.left,a.right));let i=o.graph().root,s=W(o,i,r,n);s.vs.forEach((a,d)=>o.node(a).order=d),le(o,r,s.vs);});}function an(e,n){Object.values(n).forEach(t=>t.forEach((r,o)=>e.node(r).order=o));}function vt(e,n){let t={};function r(o,i){let s=0,a=0,d=o.length,l=i[i.length-1];return i.forEach((u,c)=>{let h=xt(e,u),f=h?e.node(h).order:d;(h||u===l)&&(i.slice(a,c+1).forEach(g=>{let b=e.predecessors(g);b&&b.forEach(m=>{let E=e.node(m),y=E.order;(y<s||f<y)&&!(E.dummy&&e.node(g).dummy)&&dn(t,m,g);});}),a=c+1,s=f);}),i}return n.length&&n.reduce(r),t}function _t(e,n){let t={};function r(i,s,a,d,l){k(s,a).forEach(u=>{let c=i[u];if(c!==void 0&&e.node(c).dummy){let h=e.predecessors(c);h&&h.forEach(f=>{if(f===void 0)return;let g=e.node(f);g.dummy&&(g.order<d||g.order>l)&&dn(t,f,c);});}});}function o(i,s){let a=-1,d=-1,l=0;return s.forEach((u,c)=>{if(e.node(u).dummy==="border"){let h=e.predecessors(u);if(h&&h.length){let f=h[0];if(f===void 0)return;d=e.node(f).order,r(s,l,c,a,d),l=c,a=d;}}r(s,l,s.length,d,i.length);}),s}return n.length&&n.reduce(o),t}function xt(e,n){if(e.node(n).dummy){let t=e.predecessors(n);if(t)return t.find(r=>e.node(r).dummy)}}function dn(e,n,t){if(n>t){let o=n;n=t,t=o;}let r=e[n];r||(e[n]=r={}),r[t]=true;}function Tt(e,n,t){if(n>t){let o=n;n=t,t=o;}let r=e[n];return r!==void 0&&Object.hasOwn(r,t)}function Ot(e,n,t,r){let o={},i={},s={};return n.forEach(a=>{a.forEach((d,l)=>{o[d]=d,i[d]=d,s[d]=l;});}),n.forEach(a=>{let d=-1;a.forEach(l=>{let u=r(l);if(u&&u.length){let c=u.sort((f,g)=>{let b=s[f],m=s[g];return (b!==void 0?b:0)-(m!==void 0?m:0)}),h=(c.length-1)/2;for(let f=Math.floor(h),g=Math.ceil(h);f<=g;++f){let b=c[f];if(b===void 0)continue;let m=s[b];if(m!==void 0&&i[l]===l&&d<m&&!Tt(t,l,b)){let E=o[b];E!==void 0&&(i[b]=l,i[l]=o[l]=E,d=m);}}}});}),{root:o,align:i}}function It(e,n,t,r,o=false){let i={},s=Ct(e,n,t,o),a=o?"borderLeft":"borderRight";function d(f,g){let b=s.nodes().slice(),m={},E=b.pop();for(;E;){if(m[E])f(E);else {m[E]=true,b.push(E);for(let y of g(E))b.push(y);}E=b.pop();}}function l(f){let g=s.inEdges(f);g?i[f]=g.reduce((b,m)=>{var I;let E=(I=i[m.v])!=null?I:0,y=s.edge(m);return Math.max(b,E+(y!==void 0?y:0))},0):i[f]=0;}function u(f){let g=s.outEdges(f),b=Number.POSITIVE_INFINITY;g&&(b=g.reduce((E,y)=>{let I=i[y.w],be=s.edge(y);return Math.min(E,(I!==void 0?I:0)-(be!==void 0?be:0))},Number.POSITIVE_INFINITY));let m=e.node(f);b!==Number.POSITIVE_INFINITY&&m.borderType!==a&&(i[f]=Math.max(i[f]!==void 0?i[f]:0,b));}function c(f){return s.predecessors(f)||[]}function h(f){return s.successors(f)||[]}return d(l,c),d(u,h),Object.keys(r).forEach(f=>{var b;let g=t[f];g!==void 0&&(i[f]=(b=i[g])!=null?b:0);}),i}function Ct(e,n,t,r){let o=new p,i=e.graph(),s=jt(i.nodesep,i.edgesep,r);return n.forEach(a=>{let d;a.forEach(l=>{let u=t[l];if(u!==void 0){if(o.setNode(u),d!==void 0){let c=t[d];if(c!==void 0){let h=o.edge(c,u);o.setEdge(c,u,Math.max(s(e,l,d),h||0));}}d=l;}});}),o}function Rt(e,n){return Object.values(n).reduce((t,r)=>{let o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;Object.entries(r).forEach(([a,d])=>{let l=St(e,a)/2;o=Math.max(d+l,o),i=Math.min(d-l,i);});let s=o-i;return s<t[0]&&(t=[s,r]),t},[Number.POSITIVE_INFINITY,null])[1]}function Pt(e,n){let t=Object.values(n),r=L(Math.min,t),o=L(Math.max,t);["u","d"].forEach(i=>{["l","r"].forEach(s=>{let a=i+s,d=e[a];if(!d||d===n)return;let l=Object.values(d),u=r-L(Math.min,l);s!=="l"&&(u=o-L(Math.max,l)),u&&(e[a]=O(d,c=>c+u));});});}function Mt(e,n=void 0){let t=e.ul;return t?O(t,(r,o)=>{var s,a;if(n){let d=n.toLowerCase(),l=e[d];if(l&&l[o]!==void 0)return l[o]}let i=Object.values(e).map(d=>{let l=d[o];return l!==void 0?l:0}).sort((d,l)=>d-l);return (((s=i[1])!=null?s:0)+((a=i[2])!=null?a:0))/2}):{}}function ln(e){let n=N(e),t=Object.assign(vt(e,n),_t(e,n)),r={},o;["u","d"].forEach(s=>{o=s==="u"?n:Object.values(n).reverse(),["l","r"].forEach(a=>{a==="r"&&(o=o.map(c=>Object.values(c).reverse()));let l=Ot(e,o,t,c=>(s==="u"?e.predecessors(c):e.successors(c))||[]),u=It(e,o,l.root,l.align,a==="r");a==="r"&&(u=O(u,c=>-c)),r[s+a]=u;});});let i=Rt(e,r);return Pt(r,i),Mt(r,e.graph().align)}function jt(e,n,t){return (r,o,i)=>{let s=r.node(o),a=r.node(i),d=0,l;if(d+=s.width/2,Object.hasOwn(s,"labelpos"))switch(s.labelpos.toLowerCase()){case "l":l=-s.width/2;break;case "r":l=s.width/2;break}if(l&&(d+=t?l:-l),l=void 0,d+=(s.dummy?n:e)/2,d+=(a.dummy?n:e)/2,d+=a.width/2,Object.hasOwn(a,"labelpos"))switch(a.labelpos.toLowerCase()){case "l":l=a.width/2;break;case "r":l=-a.width/2;break}return l&&(d+=t?l:-l),d}}function St(e,n){return e.node(n).width}function un(e){e=A(e),Ft(e),Object.entries(ln(e)).forEach(([n,t])=>e.node(n).x=t);}function Ft(e){let n=N(e),t=e.graph(),r=t.ranksep,o=t.rankalign,i=0;n.forEach(s=>{let a=s.reduce((d,l)=>{var c;let u=(c=e.node(l).height)!=null?c:0;return d>u?d:u},0);s.forEach(d=>{let l=e.node(d);o==="top"?l.y=i+l.height/2:o==="bottom"?l.y=i+a-l.height/2:l.y=i+a/2;}),i+=a+r;});}function he(e,n={}){let t=n.debugTiming?P:M;return t("layout",()=>{let r=t("  buildLayoutGraph",()=>Xt(e));return t("  runLayout",()=>Dt(r,t,n)),t("  updateInputGraph",()=>At(e,r)),r})}function Dt(e,n,t){n("    makeSpaceForEdgeLabels",()=>Ut(e)),n("    removeSelfEdges",()=>rr(e)),n("    acyclic",()=>je(e)),n("    nestingGraph.run",()=>Ke(e)),n("    rank",()=>Xe(A(e))),n("    injectEdgeLabelProxies",()=>Kt(e)),n("    removeEmptyRanks",()=>Oe(e)),n("    nestingGraph.cleanup",()=>Je(e)),n("    normalizeRanks",()=>Te(e)),n("    assignRankMinMax",()=>$t(e)),n("    removeEdgeLabelProxies",()=>Jt(e)),n("    normalize.run",()=>Fe(e)),n("    parentDummyChains",()=>Ue(e)),n("    addBorderSegments",()=>Ze(e)),n("    order",()=>B(e,t)),n("    insertSelfEdges",()=>or(e)),n("    adjustCoordinateSystem",()=>nn(e)),n("    position",()=>un(e)),n("    positionSelfEdges",()=>ir(e)),n("    removeBorderNodes",()=>tr(e)),n("    normalize.undo",()=>De(e)),n("    fixupEdgeLabelCoords",()=>er(e)),n("    undoCoordinateSystem",()=>tn(e)),n("    translateGraph",()=>Qt(e)),n("    assignNodeIntersects",()=>Zt(e)),n("    reversePoints",()=>nr(e)),n("    acyclic.undo",()=>Se(e));}function At(e,n){e.nodes().forEach(t=>{let r=e.node(t),o=n.node(t);r&&(r.x=o.x,r.y=o.y,r.order=o.order,r.rank=o.rank,n.children(t).length&&(r.width=o.width,r.height=o.height));}),e.edges().forEach(t=>{let r=e.edge(t),o=n.edge(t);r.points=o.points,Object.hasOwn(o,"x")&&(r.x=o.x,r.y=o.y);}),e.graph().width=n.graph().width,e.graph().height=n.graph().height;}var Vt=["nodesep","edgesep","ranksep","marginx","marginy"],Wt={ranksep:50,edgesep:20,nodesep:50,rankdir:"TB",rankalign:"center"},Bt=["acyclicer","ranker","rankdir","align","rankalign"],Yt=["width","height","rank"],cn={width:0,height:0},zt=["minlen","weight","width","height","labeloffset"],Ht={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},qt=["labelpos"];function Xt(e){let n=new p({multigraph:true,compound:true}),t=ce(e.graph());return n.setGraph(Object.assign({},Wt,ue(t,Vt),T(t,Bt))),e.nodes().forEach(r=>{let o=ce(e.node(r)),i=ue(o,Yt);Object.keys(cn).forEach(a=>{i[a]===void 0&&(i[a]=cn[a]);}),n.setNode(r,i);let s=e.parent(r);s!==void 0&&n.setParent(r,s);}),e.edges().forEach(r=>{let o=ce(e.edge(r));n.setEdge(r,Object.assign({},Ht,ue(o,zt),T(o,qt)));}),n}function Ut(e){let n=e.graph();n.ranksep/=2,e.edges().forEach(t=>{let r=e.edge(t);r.minlen*=2,r.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?r.width+=r.labeloffset:r.height+=r.labeloffset);});}function Kt(e){e.edges().forEach(n=>{let t=e.edge(n);if(t.width&&t.height){let r=e.node(n.v),i={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};w(e,"edge-proxy",i,"_ep");}});}function $t(e){let n=0;e.nodes().forEach(t=>{let r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=Math.max(n,r.maxRank));}),e.graph().maxRank=n;}function Jt(e){e.nodes().forEach(n=>{let t=e.node(n);if(t.dummy==="edge-proxy"){let r=t;e.edge(r.e).labelRank=t.rank,e.removeNode(n);}});}function Qt(e){let n=Number.POSITIVE_INFINITY,t=0,r=Number.POSITIVE_INFINITY,o=0,i=e.graph(),s=i.marginx||0,a=i.marginy||0;function d(l){let u=l.x,c=l.y,h=l.width,f=l.height;n=Math.min(n,u-h/2),t=Math.max(t,u+h/2),r=Math.min(r,c-f/2),o=Math.max(o,c+f/2);}e.nodes().forEach(l=>d(e.node(l))),e.edges().forEach(l=>{let u=e.edge(l);Object.hasOwn(u,"x")&&d(u);}),n-=s,r-=a,e.nodes().forEach(l=>{let u=e.node(l);u.x-=n,u.y-=r;}),e.edges().forEach(l=>{let u=e.edge(l);u.points.forEach(c=>{c.x-=n,c.y-=r;}),Object.hasOwn(u,"x")&&(u.x-=n),Object.hasOwn(u,"y")&&(u.y-=r);}),i.width=t-n+s,i.height=o-r+a;}function Zt(e){e.edges().forEach(n=>{let t=e.edge(n),r=e.node(n.v),o=e.node(n.w),i,s;t.points?(i=t.points[0],s=t.points[t.points.length-1]):(t.points=[],i=o,s=r),t.points.unshift(H(r,i)),t.points.push(H(o,s));});}function er(e){e.edges().forEach(n=>{let t=e.edge(n);if(Object.hasOwn(t,"x"))switch((t.labelpos==="l"||t.labelpos==="r")&&(t.width-=t.labeloffset),t.labelpos){case "l":t.x-=t.width/2+t.labeloffset;break;case "r":t.x+=t.width/2+t.labeloffset;break}});}function nr(e){e.edges().forEach(n=>{let t=e.edge(n);t.reversed&&t.points.reverse();});}function tr(e){e.nodes().forEach(n=>{if(e.children(n).length){let t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),i=e.node(t.borderLeft[t.borderLeft.length-1]),s=e.node(t.borderRight[t.borderRight.length-1]);t.width=Math.abs(s.x-i.x),t.height=Math.abs(o.y-r.y),t.x=i.x+t.width/2,t.y=r.y+t.height/2;}}),e.nodes().forEach(n=>{e.node(n).dummy==="border"&&e.removeNode(n);});}function rr(e){e.edges().forEach(n=>{if(n.v===n.w){let t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n);}});}function or(e){N(e).forEach(t=>{let r=0;t.forEach((o,i)=>{let s=e.node(o);s.order=i+r,(s.selfEdges||[]).forEach(a=>{w(e,"selfedge",{width:a.label.width,height:a.label.height,rank:s.rank,order:i+ ++r,e:a.e,label:a.label},"_se");}),delete s.selfEdges;});});}function ir(e){e.nodes().forEach(n=>{let t=e.node(n);if(t.dummy==="selfedge"){let r=t,o=e.node(r.e.v),i=o.x+o.width/2,s=o.y,a=t.x-i,d=o.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:i+2*a/3,y:s-d},{x:i+5*a/6,y:s-d},{x:i+a,y:s},{x:i+5*a/6,y:s+d},{x:i+2*a/3,y:s+d}],r.label.x=t.x,r.label.y=t.y;}});}function ue(e,n){return O(T(e,n),Number)}function ce(e){let n={};return e&&Object.entries(e).forEach(([t,r])=>{typeof t=="string"&&(t=t.toLowerCase()),n[t]=r;}),n}function fe(e){let n=N(e),t=new p({compound:true,multigraph:true}).setGraph({});return e.nodes().forEach(r=>{t.setNode(r,{label:r}),t.setParent(r,"layer"+e.node(r).rank);}),e.edges().forEach(r=>t.setEdge(r.v,r.w,{},r.name)),n.forEach((r,o)=>{let i="layer"+o;t.setNode(i,{rank:"same"}),r.reduce((s,a)=>(t.setEdge(s,a,{style:"invis"}),a));}),t}var sr={graphlib:z,version:U,layout:he,debug:fe,util:{time:P,notime:M}},To=sr;/*! For license information please see dagre.esm.js.LEGAL.txt */

const React = await importShared('react');
const {useState,useEffect,useCallback,useMemo,useRef} = React;
const nodeTypes = { perguntaNode: CustomNode, quizNode: CustomNode };
const dagreGraph = new To.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [perguntas, setPerguntas] = useState([]);
  const [busca, setBusca] = useState("");
  const [termoBuscaBiblioteca, setTermoBuscaBiblioteca] = useState("");
  const [selecionadas, setSelecionadas] = useState([]);
  const [quizAtivo, setQuizAtivo] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);
  const [originalQuestionIds, setOriginalQuestionIds] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);
  const [fallbackDialog, setFallbackDialog] = useState(null);
  const [nextCursorQuestions, setNextCursorQuestions] = useState(null);
  const [hasNextQuestions, setHasNextQuestions] = useState(false);
  const [isFetchingMoreQuestions, setIsFetchingMoreQuestions] = useState(false);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [filtersQuestions, setFiltersQuestions] = useState({ buscaValor: "", buscaTipo: "NOME" });
  const observerQuestions = useRef();
  useEffect(() => {
    const unsubFallback = dataService.subscribeToFallback(setIsFallback);
    const unsubError = dataService.subscribeToApiError(setApiError);
    const unsubSuccess = dataService.subscribeToApiSuccess(setApiSuccess);
    dataService.setDialogHandler((options) => {
      return new Promise((resolve) => {
        setFallbackDialog({
          ...options,
          onConfirm: () => {
            setFallbackDialog(null);
            resolve(true);
          },
          onCancel: () => {
            setFallbackDialog(null);
            resolve(false);
          }
        });
      });
    });
    return () => {
      unsubFallback();
      unsubError();
      unsubSuccess();
    };
  }, []);
  useEffect(() => {
    if (apiSuccess) {
      const timer = setTimeout(() => setApiSuccess(null), 3e3);
      return () => clearTimeout(timer);
    }
  }, [apiSuccess]);
  const carregarBiblioteca = useCallback(async (cursor = null, append = false) => {
    if (!append) setIsLoadingQuestions(true);
    else setIsFetchingMoreQuestions(true);
    try {
      const response = await dataService.getPerguntas({
        cursor,
        size: 15,
        filters: filtersQuestions,
        flowId: DESIGNER_FLOWS.LIST_QUESTIONS
      });
      let newData = response.data || [];
      let meta = response.meta || { hasNext: false, nextCursor: null };
      setPerguntas((prev) => {
        if (!append) return newData;
        const ids = new Set(prev.map((i) => i.id));
        const filteredNew = newData.filter((i) => !ids.has(i.id));
        return [...prev, ...filteredNew];
      });
      setHasNextQuestions(meta.hasNext);
      setNextCursorQuestions(meta.nextCursor);
    } catch (err) {
      console.error("Erro na biblioteca", err);
    } finally {
      setIsLoadingQuestions(false);
      setIsFetchingMoreQuestions(false);
    }
  }, [filtersQuestions]);
  useEffect(() => {
    carregarBiblioteca();
  }, [carregarBiblioteca]);
  useCallback((node) => {
    if (isLoadingQuestions || isFetchingMoreQuestions) return;
    if (observerQuestions.current) observerQuestions.current.disconnect();
    observerQuestions.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextQuestions && nextCursorQuestions) {
        carregarBiblioteca(nextCursorQuestions, true);
      }
    });
    if (node) observerQuestions.current.observe(node);
  }, [isLoadingQuestions, isFetchingMoreQuestions, hasNextQuestions, nextCursorQuestions, carregarBiblioteca]);
  const aplicarAutoLayout = useCallback((nodesParaAjustar, edgesParaAjustar, direcao = "TB") => {
    if (nodesParaAjustar.length === 0) return [];
    const g = new To.graphlib.Graph();
    g.setGraph({ rankdir: direcao, marginx: 50, marginy: 50 });
    g.setDefaultEdgeLabel(() => ({}));
    nodesParaAjustar.forEach((node) => g.setNode(node.id, { width: 220, height: 80 }));
    edgesParaAjustar.forEach((edge) => g.setEdge(edge.source, edge.target));
    To.layout(g);
    return nodesParaAjustar.map((node) => {
      const nodeWithPosition = g.node(node.id);
      return {
        ...node,
        position: { x: nodeWithPosition.x - 110, y: nodeWithPosition.y - 40 }
      };
    });
  }, []);
  const onNodesChange = useCallback((chs) => setNodes((nds) => applyNodeChanges(chs, nds)), []);
  const onEdgesChange = useCallback((chs) => setEdges((eds) => applyEdgeChanges(chs, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), []);
  const carregarFluxoQuestionario = async (quizSummary) => {
    try {
      const quiz = await dataService.getQuestionarioById(
        quizSummary.id,
        quizSummary.channelDistributionId,
        quizSummary.journeyDistributionId,
        DESIGNER_FLOWS.LOAD_DESIGN
      );
      setQuizAtivo(quiz);
      setIsSearchModalOpen(false);
      setSelectedNode(null);
      const idsOriginais = quiz.configuredQuestions?.map((cq) => cq.questionId) || [];
      setOriginalQuestionIds(idsOriginais);
      const quizNode = {
        id: quiz.id,
        type: "quizNode",
        data: quiz,
        position: { x: 0, y: 0 }
      };
      const qNodes = (quiz.configuredQuestions || []).map((cq) => {
        const pData = perguntas.find((p) => p.id === cq.questionId) || { id: cq.questionId, label: "Carregando..." };
        const safeAnswerConfig = cq.answerConfiguration || { type: "TEXT", attributes: {} };
        if (!safeAnswerConfig.attributes) safeAnswerConfig.attributes = {};
        return {
          id: `node_${cq.questionId}`,
          type: "perguntaNode",
          data: {
            ...pData,
            config: {
              order: cq.order,
              answerConfig: safeAnswerConfig,
              rootCondition: cq.rootCondition
            }
          },
          position: { x: 0, y: 0 }
        };
      });
      const extractDependencies = (condition) => {
        if (!condition) return [];
        if (condition.type === "COMPOSITE") {
          return (condition.children || []).flatMap(extractDependencies);
        }
        return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
      };
      const qEdges = (quiz.configuredQuestions || []).flatMap((cq) => {
        const targetId = `node_${cq.questionId}`;
        const dependentOnIds = extractDependencies(cq.rootCondition);
        if (dependentOnIds.length > 0) {
          return dependentOnIds.map((rootId) => ({
            id: `e-${rootId}-${cq.questionId}`,
            source: `node_${rootId}`,
            target: targetId,
            animated: true,
            label: "regr"
          }));
        }
        return [{ id: `e-${quiz.id}-${cq.questionId}`, source: quiz.id, target: targetId, animated: true }];
      });
      const allNodes = [quizNode, ...qNodes];
      setNodes(aplicarAutoLayout(allNodes, qEdges));
      setEdges(qEdges);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar questionário.");
    }
  };
  useCallback(() => {
    setEdges(() => {
      const newEdges = [];
      const currentQuestionNodes = nodes.filter((n) => n.type === "perguntaNode");
      const extractDeps = (condition) => {
        if (!condition) return [];
        if (condition.type === "COMPOSITE") {
          return (condition.children || []).flatMap(extractDeps);
        }
        return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
      };
      currentQuestionNodes.forEach((node) => {
        const config = node.data.config;
        const targetId = node.id;
        const dependentOnIds = extractDeps(config?.rootCondition);
        if (dependentOnIds.length > 0) {
          dependentOnIds.forEach((rootId) => {
            newEdges.push({
              id: `e-${rootId}-${node.data.id}`,
              source: `node_${rootId}`,
              target: targetId,
              animated: true,
              label: "regr"
            });
          });
        } else if (quizAtivo) {
          newEdges.push({
            id: `e-${quizAtivo.id}-${node.data.id}`,
            source: quizAtivo.id,
            target: targetId,
            animated: true
          });
        }
      });
      return newEdges;
    });
  }, [nodes, quizAtivo]);
  const salvarTudo = async () => {
    if (!quizAtivo) return;
    try {
      const currentQuestionNodes = nodes.filter((n) => n.type === "perguntaNode");
      const currentIds = currentQuestionNodes.map((n) => n.data.id);
      const questionsToUpsert = currentQuestionNodes.map((n) => ({
        questionId: n.data.id,
        param: {
          order: n.data.config?.order || 0,
          answerConfiguration: n.data.config?.answerConfig || { type: "TEXT", attributes: {} },
          rootCondition: n.data.config?.rootCondition || null
        }
      }));
      const questionIdsToRemove = originalQuestionIds.filter((id) => !currentIds.includes(id));
      await dataService.updateQuiz(quizAtivo.id, {
        nome: quizAtivo.nome,
        status: quizAtivo.status,
        questionsToUpsert,
        questionIdsToRemove
      }, quizAtivo.channelDistributionId, quizAtivo.journeyDistributionId, DESIGNER_FLOWS.SYNC_DESIGN);
      carregarFluxoQuestionario(quizAtivo);
    } catch (err) {
    }
  };
  const updateNodeData = (id, newData) => {
    setNodes((nds) => nds.map((n) => n.id === id ? { ...n, data: newData } : n));
    if (quizAtivo && id === quizAtivo.id) {
      setQuizAtivo(newData);
    }
  };
  const deleteNode = (id) => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
    setSelectedNode(null);
  };
  const toggleSelecao = (id) => {
    setSelecionadas((prev) => prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]);
  };
  const adicionarSelecionadas = () => {
    const novasPerguntas = perguntas.filter((p) => selecionadas.includes(p.id));
    const novosNodes = novasPerguntas.map((p) => ({
      id: `node_${p.id}`,
      type: "perguntaNode",
      data: { ...p, config: { order: nodes.length, answerConfig: { type: "TEXT", attributes: {} } } },
      position: { x: Math.random() * 200, y: Math.random() * 200 }
    }));
    const idsExistentes = new Set(nodes.map((n) => n.id));
    const filtrados = novosNodes.filter((n) => !idsExistentes.has(n.id));
    setNodes((nds) => nds.concat(filtrados));
    setSelecionadas([]);
  };
  const handleAutoLayout = () => {
    const extractDeps = (condition) => {
      if (!condition) return [];
      if (condition.type === "COMPOSITE") {
        return (condition.children || []).flatMap(extractDeps);
      }
      return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
    };
    const newEdges = [];
    const currentQuestionNodes = nodes.filter((n) => n.type === "perguntaNode");
    currentQuestionNodes.forEach((node) => {
      const config = node.data.config;
      const targetId = node.id;
      const dependentOnIds = extractDeps(config?.rootCondition);
      if (dependentOnIds.length > 0) {
        dependentOnIds.forEach((rootId) => {
          newEdges.push({
            id: `e-${rootId}-${node.data.id}`,
            source: `node_${rootId}`,
            target: targetId,
            animated: true,
            label: "regr"
          });
        });
      } else if (quizAtivo) {
        newEdges.push({
          id: `e-${quizAtivo.id}-${node.data.id}`,
          source: quizAtivo.id,
          target: targetId,
          animated: true
        });
      }
    });
    setEdges(newEdges);
    setNodes((nds) => aplicarAutoLayout(nds, newEdges));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Header,
      {
        busca,
        setBusca,
        quizAtivo,
        onOpenSearch: () => setIsSearchModalOpen(true),
        onAutoLayout: handleAutoLayout,
        onSave: salvarTudo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Sidebar,
        {
          perguntas,
          selecionadas,
          toggleSelecao,
          adicionarSelecionadas,
          filtersQuestions,
          setFiltersQuestions,
          termoBuscaBiblioteca,
          setTermoBuscaBiblioteca,
          isLoadingQuestions,
          isFetchingMoreQuestions,
          hasNextQuestions,
          nextCursorQuestions,
          onLoadMore: carregarBiblioteca
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 relative bg-zinc-950 w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ReactFlow,
          {
            nodes,
            edges,
            onNodesChange,
            onEdgesChange,
            onConnect,
            onNodeClick: (_, node) => setSelectedNode(node),
            onPaneClick: () => setSelectedNode(null),
            nodeTypes,
            deleteKeyCode: ["Backspace", "Delete"],
            fitView: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Background$1, { color: "#27272a", gap: 24, variant: "lines", size: 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Controls$1, { className: "bg-zinc-900 fill-white border-zinc-800 rounded-none m-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedNode && /* @__PURE__ */ jsxRuntimeExports.jsx(
                ConfigPanel,
                {
                  node: selectedNode,
                  allNodes: nodes,
                  onUpdate: (id, newData) => {
                    updateNodeData(id, newData);
                    setSelectedNode((prev) => ({ ...prev, data: newData }));
                    if (selectedNode.type === "perguntaNode" && newData.status) {
                      setPerguntas((prev) => prev.map(
                        (p) => p.id === selectedNode.data.id ? { ...p, status: newData.status } : p
                      ));
                    }
                  },
                  onDelete: deleteNode,
                  onClose: () => setSelectedNode(null)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { position: "bottom-left", className: "m-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-3 flex gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    nodes.length,
                    " nós"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-zinc-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    edges.length,
                    " conexões"
                  ] })
                ] }),
                quizAtivo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${quizAtivo.status === "ACTIVE" ? "bg-emerald-500" : "bg-zinc-500"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: quizAtivo.status })
                ] })
              ] }) })
            ]
          }
        ),
        isSearchModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuestionnaireLookup,
          {
            isOpen: isSearchModalOpen,
            onClose: () => setIsSearchModalOpen(false),
            onSelect: carregarFluxoQuestionario
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FallbackDialog,
      {
        fallbackDialog,
        onClose: () => setFallbackDialog(null),
        onConfirm: fallbackDialog?.onConfirm
      },
      "fallback-dialog"
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorToast, { apiError, onClose: () => setApiError(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FallbackBanner, { isFallback })
  ] }) });
}

export { App as default, jsxRuntimeExports as j };
