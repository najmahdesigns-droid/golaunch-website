/* @ds-bundle: {"format":4,"namespace":"GoLaunchStudioDesignSystem_b34a1d","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"a39e5340eaae","components/display/Card.jsx":"7cd50a675138","components/display/Tag.jsx":"b97b395115a1","components/feedback/Dialog.jsx":"5f1d14b9cf6f","components/feedback/Toast.jsx":"350ba2c302c9","components/feedback/Tooltip.jsx":"9a9560b40767","components/forms/Button.jsx":"ab3df16273fb","components/forms/Checkbox.jsx":"01706b6d045b","components/forms/IconButton.jsx":"fbe365a1223f","components/forms/Input.jsx":"b92035f2cf66","components/forms/Radio.jsx":"8f18d1d653c3","components/forms/Select.jsx":"bd4c4689b905","components/forms/Switch.jsx":"c3deb3ed1c49","components/navigation/Tabs.jsx":"f2a6aaa15d70","ui_kits/website/ContactScreen.jsx":"f50c83c4cbcf","ui_kits/website/Footer.jsx":"e00bdf6eacf8","ui_kits/website/HomeScreen.jsx":"82c5d66d82a4","ui_kits/website/Nav.jsx":"c65f30a6fe0a","ui_kits/website/WorkScreen.jsx":"18c506a918f4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GoLaunchStudioDesignSystem_b34a1d = window.GoLaunchStudioDesignSystem_b34a1d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const CSS_TEXT = `.gls-badge{display:inline-flex;align-items:center;font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border-radius:var(--radius-pill);padding:4px 12px;line-height:1.4}
.gls-badge-orange{background:var(--orange);color:#fff}
.gls-badge-blue{background:var(--blue);color:#fff}
.gls-badge-yellow{background:var(--yellow);color:var(--ink)}
.gls-badge-ink{background:var(--ink);color:var(--off-white)}
.gls-badge-neutral{background:var(--cream);color:var(--ink)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-badge-css')) {
  const s = document.createElement('style');
  s.id = 'gls-badge-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Badge({
  color = 'orange',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `gls-badge gls-badge-${color}`
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_TEXT = `.gls-card{background:var(--surface-card);border-radius:var(--radius-lg);font-family:var(--font-body);color:var(--ink)}
.gls-card-outline{border:1.5px solid var(--grey-line)}
.gls-card-shadow{box-shadow:var(--shadow-md)}
.gls-card-pop{border:1.5px solid var(--ink);box-shadow:var(--shadow-pop)}
.gls-card-sunken{background:var(--cream)}
.gls-card-pad{padding:var(--space-5)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-card-css')) {
  const s = document.createElement('style');
  s.id = 'gls-card-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Card({
  variant = 'outline',
  padded = true,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gls-card gls-card-${variant} ${padded ? 'gls-card-pad' : ''}`
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const CSS_TEXT = `.gls-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-size:13px;font-weight:500;color:var(--ink);border:1.5px solid var(--grey-line);border-radius:var(--radius-pill);padding:5px 12px;background:#fff}
.gls-tag button{all:unset;cursor:pointer;display:inline-flex;color:var(--warm-grey);border-radius:50%}
.gls-tag button:hover{color:var(--orange)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-tag-css')) {
  const s = document.createElement('style');
  s.id = 'gls-tag-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Tag({
  onRemove,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "gls-tag"
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS_TEXT = `.gls-dialog-overlay{position:fixed;inset:0;background:rgba(20,18,16,.5);display:flex;align-items:center;justify-content:center;padding:24px;z-index:100;animation:gls-fade .18s ease-out}
.gls-dialog{background:#fff;border-radius:var(--radius-xl);padding:var(--space-6);max-width:480px;width:100%;box-shadow:var(--shadow-lg);font-family:var(--font-body);color:var(--ink);animation:gls-rise .2s ease-out}
.gls-dialog h2{font-family:var(--font-display);font-size:26px;margin:0 0 8px}
@keyframes gls-fade{from{opacity:0}}
@keyframes gls-rise{from{opacity:0;transform:translateY(10px)}}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-dialog-css')) {
  const s = document.createElement('style');
  s.id = 'gls-dialog-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Dialog({
  open,
  title,
  onClose,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "gls-dialog-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gls-dialog",
    role: "dialog",
    "aria-modal": "true"
  }, title && /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("div", null, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CSS_TEXT = `.gls-toast{display:inline-flex;align-items:center;gap:12px;background:var(--ink);color:var(--off-white);font-family:var(--font-body);font-size:14px;font-weight:500;border-radius:var(--radius-md);padding:12px 16px;box-shadow:var(--shadow-lg);animation:gls-toast-in .2s ease-out}
.gls-toast::before{content:'';width:8px;height:8px;border-radius:50%;flex:none}
.gls-toast-info::before{background:var(--blue)}
.gls-toast-success::before{background:var(--yellow)}
.gls-toast-error::before{background:var(--orange)}
.gls-toast button{all:unset;cursor:pointer;color:var(--warm-grey);margin-left:4px}
.gls-toast button:hover{color:var(--off-white)}
@keyframes gls-toast-in{from{opacity:0;transform:translateY(8px)}}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-toast-css')) {
  const s = document.createElement('style');
  s.id = 'gls-toast-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Toast({
  kind = 'info',
  onDismiss,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `gls-toast gls-toast-${kind}`,
    role: "status"
  }, children, onDismiss && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS_TEXT = `.gls-tip{position:relative;display:inline-flex}
.gls-tip-bubble{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(2px);background:var(--ink);color:var(--off-white);font-family:var(--font-body);font-size:12px;font-weight:500;padding:6px 10px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease-out,transform .15s ease-out;z-index:50}
.gls-tip:hover .gls-tip-bubble,.gls-tip:focus-within .gls-tip-bubble{opacity:1;transform:translateX(-50%) translateY(0)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'gls-tooltip-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Tooltip({
  text,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "gls-tip"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "gls-tip-bubble",
    role: "tooltip"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_TEXT = `.gls-btn{font-family:var(--font-body);font-weight:600;border-radius:var(--radius-pill);cursor:pointer;display:inline-flex;align-items:center;gap:8px;border:1.5px solid transparent;transition:background .18s ease-out,color .18s ease-out,transform .1s ease-out;line-height:1}
.gls-btn:active{transform:scale(.97)}
.gls-btn:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.gls-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none}
.gls-btn-primary{background:var(--orange);color:#fff}.gls-btn-primary:hover:not([disabled]){background:var(--orange-deep)}
.gls-btn-secondary{background:transparent;color:var(--ink);border-color:var(--ink)}.gls-btn-secondary:hover:not([disabled]){background:var(--ink);color:var(--off-white)}
.gls-btn-ghost{background:transparent;color:var(--ink)}.gls-btn-ghost:hover:not([disabled]){background:var(--cream)}
.gls-btn-inverse{background:var(--off-white);color:var(--ink)}.gls-btn-inverse:hover:not([disabled]){background:var(--yellow)}
.gls-btn-sm{font-size:13px;padding:7px 14px}.gls-btn-md{font-size:15px;padding:10px 20px}.gls-btn-lg{font-size:17px;padding:14px 28px}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-button-css')) {
  const s = document.createElement('style');
  s.id = 'gls-button-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `gls-btn gls-btn-${variant} gls-btn-${size}`,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const CSS_TEXT = `.gls-check{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:15px;color:var(--ink)}
.gls-check input{position:absolute;opacity:0;width:0}
.gls-check-box{width:20px;height:20px;border:1.5px solid var(--grey-mid);border-radius:6px;background:#fff;display:inline-flex;align-items:center;justify-content:center;transition:all .15s ease-out;flex:none}
.gls-check input:checked+.gls-check-box{background:var(--orange);border-color:var(--orange)}
.gls-check input:focus-visible+.gls-check-box{outline:2px solid var(--focus-ring);outline-offset:2px}
.gls-check-box svg{opacity:0;transform:scale(.6);transition:all .15s ease-out}
.gls-check input:checked+.gls-check-box svg{opacity:1;transform:scale(1)}
.gls-check-disabled{opacity:.45;cursor:not-allowed}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-checkbox-css')) {
  const s = document.createElement('style');
  s.id = 'gls-checkbox-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `gls-check ${disabled ? 'gls-check-disabled' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "gls-check-box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_TEXT = `.gls-iconbtn{display:inline-flex;align-items:center;justify-content:center;border-radius:var(--radius-md);border:1.5px solid transparent;cursor:pointer;background:transparent;color:var(--ink);transition:background .18s ease-out;padding:0}
.gls-iconbtn:hover:not([disabled]){background:var(--cream)}
.gls-iconbtn:active{transform:scale(.94)}
.gls-iconbtn:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.gls-iconbtn[disabled]{opacity:.45;cursor:not-allowed}
.gls-iconbtn-outline{border-color:var(--ink)}
.gls-iconbtn-solid{background:var(--orange);color:#fff}.gls-iconbtn-solid:hover:not([disabled]){background:var(--orange-deep)}
.gls-iconbtn-sm{width:30px;height:30px}.gls-iconbtn-md{width:38px;height:38px}.gls-iconbtn-lg{width:46px;height:46px}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-iconbutton-css')) {
  const s = document.createElement('style');
  s.id = 'gls-iconbutton-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'plain',
  size = 'md',
  label,
  disabled = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `gls-iconbtn gls-iconbtn-${variant} gls-iconbtn-${size}`,
    "aria-label": label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_TEXT = `.gls-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body)}
.gls-field-label{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink)}
.gls-input{font-family:var(--font-body);font-size:15px;color:var(--ink);background:#fff;border:1.5px solid var(--grey-line);border-radius:var(--radius-md);padding:10px 14px;transition:border-color .18s ease-out}
.gls-input::placeholder{color:var(--warm-grey)}
.gls-input:hover{border-color:var(--grey-mid)}
.gls-input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-soft)}
.gls-input[disabled]{background:var(--cream);opacity:.6;cursor:not-allowed}
.gls-input-error{border-color:var(--danger)}
.gls-field-hint{font-size:13px;color:var(--warm-grey)}.gls-field-hint-error{color:var(--danger)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-input-css')) {
  const s = document.createElement('style');
  s.id = 'gls-input-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "gls-field"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "gls-field-label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: `gls-input ${error ? 'gls-input-error' : ''}`,
    disabled: disabled
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `gls-field-hint ${error ? 'gls-field-hint-error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const CSS_TEXT = `.gls-radio{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:15px;color:var(--ink)}
.gls-radio input{position:absolute;opacity:0;width:0}
.gls-radio-dot{width:20px;height:20px;border:1.5px solid var(--grey-mid);border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;transition:border-color .15s ease-out;flex:none}
.gls-radio-dot::after{content:'';width:10px;height:10px;border-radius:50%;background:var(--orange);transform:scale(0);transition:transform .15s ease-out}
.gls-radio input:checked+.gls-radio-dot{border-color:var(--orange)}
.gls-radio input:checked+.gls-radio-dot::after{transform:scale(1)}
.gls-radio input:focus-visible+.gls-radio-dot{outline:2px solid var(--focus-ring);outline-offset:2px}
.gls-radio-disabled{opacity:.45;cursor:not-allowed}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-radio-css')) {
  const s = document.createElement('style');
  s.id = 'gls-radio-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `gls-radio ${disabled ? 'gls-radio-disabled' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "gls-radio-dot"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_TEXT = `.gls-select{appearance:none;font-family:var(--font-body);font-size:15px;color:var(--ink);background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23141210' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 12px center;border:1.5px solid var(--grey-line);border-radius:var(--radius-md);padding:10px 38px 10px 14px;cursor:pointer;transition:border-color .18s ease-out}
.gls-select:hover{border-color:var(--grey-mid)}
.gls-select:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-soft)}
.gls-select[disabled]{background-color:var(--cream);opacity:.6;cursor:not-allowed}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-select-css')) {
  const s = document.createElement('style');
  s.id = 'gls-select-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "gls-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "gls-field-label",
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    className: "gls-select",
    disabled: disabled
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const CSS_TEXT = `.gls-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:15px;color:var(--ink)}
.gls-switch input{position:absolute;opacity:0;width:0}
.gls-switch-track{width:42px;height:24px;border-radius:999px;background:var(--grey-mid);position:relative;transition:background .18s ease-out;flex:none}
.gls-switch-track::after{content:'';position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .18s ease-out;box-shadow:var(--shadow-sm)}
.gls-switch input:checked+.gls-switch-track{background:var(--orange)}
.gls-switch input:checked+.gls-switch-track::after{left:21px}
.gls-switch input:focus-visible+.gls-switch-track{outline:2px solid var(--focus-ring);outline-offset:2px}
.gls-switch-disabled{opacity:.45;cursor:not-allowed}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-switch-css')) {
  const s = document.createElement('style');
  s.id = 'gls-switch-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `gls-switch ${disabled ? 'gls-switch-disabled' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "gls-switch-track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS_TEXT = `.gls-tabs{display:flex;gap:4px;border-bottom:1.5px solid var(--grey-line);font-family:var(--font-body)}
.gls-tab{all:unset;cursor:pointer;font-size:15px;font-weight:600;color:var(--warm-grey);padding:10px 16px;border-bottom:2.5px solid transparent;margin-bottom:-1.5px;transition:color .15s ease-out}
.gls-tab:hover{color:var(--ink)}
.gls-tab:focus-visible{outline:2px solid var(--focus-ring);outline-offset:-2px}
.gls-tab-active{color:var(--ink);border-bottom-color:var(--orange)}`;
if (typeof document !== 'undefined' && !document.getElementById('gls-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'gls-tabs-css';
  s.textContent = CSS_TEXT;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  active,
  defaultActive,
  onChange
}) {
  const [internal, setInternal] = React.useState(defaultActive ?? tabs[0]);
  const current = active ?? internal;
  return /*#__PURE__*/React.createElement("div", {
    className: "gls-tabs",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": t === current,
    className: `gls-tab ${t === current ? 'gls-tab-active' : ''}`,
    onClick: () => {
      setInternal(t);
      onChange && onChange(t);
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const ContactScreen = () => {
  const {
    Button,
    Input,
    Select,
    Checkbox,
    Toast
  } = window.GoLaunchStudioDesignSystem_b34a1d;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '56px 48px',
      background: 'var(--off-white)',
      minHeight: 520,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      marginBottom: 12
    }
  }, "Start a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "launch")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      maxWidth: 420,
      color: 'var(--warm-grey)'
    }
  }, "Tell us what you're building and when it needs to fly. We reply within a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 24,
      borderRadius: 16,
      background: 'var(--cream)',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Or write directly"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, "hello@golaunch.studio"))), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 440
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Founder"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    options: ['Brand launch', 'Campaign', 'Retainer', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell us more",
    placeholder: "What are you launching?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the launch checklist",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    type: "submit"
  }, "Send it")), sent && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    onDismiss: () => setSent(false)
  }, "Got it \u2014 we'll reply within a day")));
};
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const Footer = () => {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 48px',
      background: 'var(--ink)',
      color: 'var(--off-white)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24
    }
  }, "GoLaunch Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 13,
      color: 'var(--warm-grey)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("span", null, "LinkedIn"), /*#__PURE__*/React.createElement("span", null, "Pinterest"), /*#__PURE__*/React.createElement("span", null, "hello@golaunch.studio"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      background: 'var(--gradient-launch)'
    }
  }));
};
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const HomeScreen = ({
  go
}) => {
  const {
    Button,
    Badge,
    Card
  } = window.GoLaunchStudioDesignSystem_b34a1d;
  const services = [['Brand launch', 'Naming, identity, and a launch kit — six weeks from brief to liftoff.', 'pop'], ['Campaigns', 'Social-first campaign systems sized for every channel.', 'outline'], ['Retainers', 'A studio on call: content, decks, and design ops.', 'outline']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yellow)',
      padding: '88px 48px 72px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "ink"
  }, "Launch studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 76,
      letterSpacing: '-0.02em',
      margin: '20px 0 16px',
      maxWidth: 780
    }
  }, "Launch ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "louder.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "We take new brands and products from zero to launch day \u2014 identity, campaign, and everything in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Start a launch"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('work')
  }, "See the work"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      background: 'var(--off-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--orange)',
      marginBottom: 16
    }
  }, "What we do"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 20
    }
  }, services.map(([t, d, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: v
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--warm-grey)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 48px',
      background: 'var(--blue)',
      color: 'var(--off-white)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      color: 'var(--yellow)',
      maxWidth: 560
    }
  }, "Ready for liftoff? Tell us what you're building."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go('contact')
  }, "Get in touch")));
};
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
const Nav = ({
  page,
  go
}) => {
  const {
    Button
  } = window.GoLaunchStudioDesignSystem_b34a1d;
  const link = (p, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(p);
    },
    style: {
      color: page === p ? 'var(--orange)' : 'var(--ink)',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 15
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      background: 'var(--off-white)',
      borderBottom: '1.5px solid var(--grey-line)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-horizontal.png",
    alt: "GoLaunch Studio",
    style: {
      height: 26,
      display: 'block',
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, link('work', 'Work'), link('home', 'Services'), link('contact', 'Contact'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('contact')
  }, "Start a launch")));
};
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkScreen.jsx
try { (() => {
const WorkScreen = () => {
  const {
    Badge,
    Tag,
    Tabs
  } = window.GoLaunchStudioDesignSystem_b34a1d;
  const [filter, setFilter] = React.useState('All');
  const projects = [['Content 1', 'Brand launch', 'var(--orange)'], ['Content 2', 'Campaign', 'var(--blue)'], ['Content 3', 'Brand launch', 'var(--yellow)'], ['Content 4', 'Retainer', 'var(--ink)'], ['Content 5', 'Campaign', 'var(--cream)'], ['Content 6', 'Brand launch', 'var(--gradient-violet)']];
  const shown = projects.filter(p => filter === 'All' || p[1] === filter);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '56px 48px',
      background: 'var(--off-white)',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      marginBottom: 8
    }
  }, "Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--warm-grey)',
      margin: '0 0 24px'
    }
  }, "Placeholder tiles \u2014 the branding board's Canva template examples were blank; drop in real case imagery."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Brand launch', 'Campaign', 'Retainer'],
    active: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 28
    }
  }, shown.map(([name, cat, bg]) => /*#__PURE__*/React.createElement("div", {
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      borderRadius: 16,
      background: bg,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 16,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: bg === 'var(--yellow)' || bg === 'var(--cream)' ? 'ink' : 'yellow'
  }, cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16
    }
  }, name), /*#__PURE__*/React.createElement(Tag, null, cat))))));
};
Object.assign(window, {
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
