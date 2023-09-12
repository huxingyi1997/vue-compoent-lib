'use strict';

const vue = require('vue');

const _withScopeId = (n) => (
  vue.pushScopeId('data-v-0f135a3c'), (n = n()), vue.popScopeId(), n
);
const _hoisted_1 = { class: 'product-list' };
const _hoisted_2 = { class: 'product-preview' };
const _hoisted_3 = ['src'];
const _hoisted_4 = { class: 'product-info' };
const _hoisted_5 = { class: 'product-title' };
const _hoisted_6 = { class: 'product-label-list' };
const _hoisted_7 = { class: 'product-price' };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() =>
  /* @__PURE__ */ vue.createElementVNode(
    'span',
    { class: 'product-price-unit' },
    '\xA5',
    -1
  )
);
const _hoisted_9 = { class: 'product-price-num' };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: 'product-list',
  setup(__props) {
    const dataList = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      return {
        id: `000${i}`,
        title: `2023\u5E74\u6D41\u884C\u6B3E\u8863\u670D\u7B80\u7EA6\u98CE\u65F6\u5C1A\u98CE\u767E\u642D-${i}`,
        labels: ['\u5546\u5BB6\u5305\u90AE', '\u9001\u8FD0\u8D39\u9669'],
        imageUrl:
          'data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" fill="%23ffffff"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"></path><path d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>',
        price: '123.45'
      };
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock('div', _hoisted_1, [
          (vue.openBlock(true),
          vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(dataList), (item, index) => {
              return (
                vue.openBlock(),
                vue.createElementBlock(
                  'div',
                  {
                    class: 'product-item',
                    key: index
                  },
                  [
                    vue.createElementVNode('div', _hoisted_2, [
                      vue.createElementVNode(
                        'img',
                        {
                          class: 'product-image',
                          src: item.imageUrl
                        },
                        null,
                        8,
                        _hoisted_3
                      )
                    ]),
                    vue.createElementVNode('div', _hoisted_4, [
                      vue.createElementVNode(
                        'div',
                        _hoisted_5,
                        vue.toDisplayString(item.title),
                        1
                      ),
                      vue.createElementVNode('div', _hoisted_6, [
                        (vue.openBlock(true),
                        vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(item.labels, (label, idx) => {
                            return (
                              vue.openBlock(),
                              vue.createElementBlock(
                                'span',
                                {
                                  key: idx,
                                  class: 'product-label'
                                },
                                vue.toDisplayString(label),
                                1
                              )
                            );
                          }),
                          128
                        ))
                      ]),
                      vue.createElementVNode('div', _hoisted_7, [
                        _hoisted_8,
                        vue.createElementVNode(
                          'span',
                          _hoisted_9,
                          vue.toDisplayString(item.price),
                          1
                        )
                      ])
                    ])
                  ]
                )
              );
            }),
            128
          ))
        ])
      );
    };
  }
});

const productList_vue_vue_type_style_index_0_scoped_0f135a3c_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['__scopeId', 'data-v-0f135a3c']
]);

module.exports = ProductList;
