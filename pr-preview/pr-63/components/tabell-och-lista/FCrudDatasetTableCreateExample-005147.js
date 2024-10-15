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

  // virtual-entry:./packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");

  // packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
  var fruits = [
    {
      id: "1",
      name: "\xC4pple",
      origin: "Sverige",
      description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
    },
    {
      id: "2",
      name: "Banan",
      origin: "Colombia",
      description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
    },
    {
      id: "3",
      name: "Vattenmelon",
      origin: "Spanien",
      description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
    },
    {
      id: "4",
      name: "Grapefrukt",
      origin: "Turkiet",
      description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
    }
  ];

  // virtual-entry:./packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: {
      FCrudDataset: import_vue4.FCrudDataset,
      FDataTable: import_vue4.FDataTable,
      FTableColumn: import_vue4.FTableColumn,
      FTextField: import_vue4.FTextField,
      FTextareaField: import_vue4.FTextareaField
    },
    data() {
      return {
        fruits
      };
    },
    methods: {
      saveModel(row) {
        console.log("Post model to backend", row);
      }
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "b",
    null,
    "R\xE4ttigheter",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_data_table = (0, import_vue5.resolveComponent)("f-data-table");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_textarea_field = (0, import_vue5.resolveComponent)("f-textarea-field");
    const _component_f_crud_dataset = (0, import_vue5.resolveComponent)("f-crud-dataset");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_crud_dataset, {
      modelValue: _ctx.fruits,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event),
      onCreated: _ctx.saveModel,
      onUpdated: _ctx.saveModel,
      onDeleted: _ctx.saveModel
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_data_table, {
          rows: _ctx.fruits,
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => [
            _hoisted_1
          ]),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "name",
                title: "Namn",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.name),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            ),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "origin",
                title: "Land",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.origin),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            ),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "description",
                title: "Beskrivning",
                type: "text",
                expand: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.description),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["rows"])
      ]),
      add: (0, import_vue5.withCtx)(({ item }) => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: item.id,
          "onUpdate:modelValue": ($event) => item.id = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n                ID\n            ")
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
          [
            _directive_validation,
            { maxLength: { length: 4 } },
            void 0,
            {
              required: true,
              maxLength: true
            }
          ]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n                Namn\n            ")
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
          [
            _directive_validation,
            { maxLength: { length: 32 } },
            void 0,
            {
              required: true,
              maxLength: true
            }
          ]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: item.origin,
          "onUpdate:modelValue": ($event) => item.origin = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n                Land\n            ")
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
          [
            _directive_validation,
            { maxLength: { length: 32 } },
            void 0,
            {
              required: true,
              maxLength: true
            }
          ]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
          modelValue: item.description,
          "onUpdate:modelValue": ($event) => item.description = $event
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n                Beskrivning\n            ")
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "onCreated", "onUpdated", "onDeleted"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCrudDatasetTableCreateExample"
  });
})();
