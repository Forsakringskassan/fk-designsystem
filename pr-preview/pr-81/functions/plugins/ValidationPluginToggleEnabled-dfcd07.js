"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./packages/vue/src/plugins/validation/examples/ValidationPluginToggleEnabled.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ValidationPluginToggleEnabled",
    components: { FTextField: import_vue4.FTextField },
    data() {
      return { model: "", toggleEnabled: true };
    },
    mounted() {
      import_logic.ValidationService.setSubmitted("validator-enabled");
    }
  });
  function render(_ctx, _cache) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)(
        "p",
        null,
        "Validering aktiverad: " + (0, import_vue5.toDisplayString)(_ctx.toggleEnabled),
        1
        /* TEXT */
      ),
      _cache[3] || (_cache[3] = (0, import_vue5.createTextVNode)()),
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        id: "validator-enabled",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
          (0, import_vue5.createTextVNode)("\n            Max tio tecken\n        ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [_directive_test, "validator-enabled"],
        [
          _directive_validation,
          { maxLength: { enabled: _ctx.toggleEnabled, length: 10 } },
          void 0,
          { maxLength: true }
        ]
      ]),
      _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)()),
      (0, import_vue5.createElementVNode)("button", {
        class: "button button--primary",
        "data-test": "validator-enabled-button",
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggleEnabled = !_ctx.toggleEnabled)
      }, "\n            Aktivera/Inaktivera\n        ")
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ValidationPluginToggleEnabled"
  });
})();
