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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/components/FMessageBox/examples/FMessageBoxContext.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FMessageBoxContext",
    components: { FMessageBox: import_vue4.FMessageBox }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "p",
    null,
    "Komponenten kommer vid fokus inte l\xE4ngre att l\xE4sa texten Informationsmeddelande.",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_message_box = (0, import_vue5.resolveComponent)("f-message-box");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_message_box, {
      type: "info",
      "provide-screen-reader-context": false
    }, {
      default: (0, import_vue5.withCtx)(({ headingSlotClass }) => [
        (0, import_vue5.createElementVNode)(
          "h2",
          {
            class: (0, import_vue5.normalizeClass)(headingSlotClass)
          },
          "\n                En rubrik som frist\xE5ende tydligt f\xF6rklarar sin kontext n\xE4r den f\xE5r fokus\n            ",
          2
          /* CLASS */
        ),
        (0, import_vue5.createTextVNode)(),
        _hoisted_1
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FMessageBoxContext"
  });
})();
