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

  // virtual-entry:./docs/components/modal/FFormModal.md
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FFormModal: import_vue4.FFormModal, FTextField: import_vue4.FTextField },
    props: {
      value: {
        type: Object,
        required: true
      }
    }
  });
  function render(_ctx, _cache) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_form_modal = (0, import_vue5.resolveComponent)("f-form-modal", true);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_form_modal, { value: _ctx.value }, {
      header: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)(" Awesome Modal ")
      ]),
      "input-text-fields": (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_text_field, {
          modelValue: _ctx.value.name,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value.name = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Awesome Field ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["value"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFormModal"
  });
})();
