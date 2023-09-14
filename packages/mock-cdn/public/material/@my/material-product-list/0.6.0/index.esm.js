import {
  defineComponent,
  openBlock,
  createElementBlock,
  Fragment,
  renderList,
  createElementVNode,
  toDisplayString,
  createCommentVNode,
  pushScopeId,
  popScopeId
} from 'vue';

const _withScopeId = (n) => (
  pushScopeId('data-v-31302ec3'), (n = n()), popScopeId(), n
);
const _hoisted_1 = { class: 'product-list' };
const _hoisted_2 = { class: 'product-preview' };
const _hoisted_3 = ['src'];
const _hoisted_4 = { class: 'product-info' };
const _hoisted_5 = { class: 'product-title' };
const _hoisted_6 = {
  key: 0,
  class: 'product-label-list'
};
const _hoisted_7 = {
  key: 1,
  class: 'product-label-list'
};
const _hoisted_8 = { class: 'product-price' };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() =>
  /* @__PURE__ */ createElementVNode(
    'span',
    { class: 'product-price-unit' },
    '\xA5',
    -1
  )
);
const _hoisted_10 = { class: 'product-price-num' };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'product-list',
  props: {
    productList: {
      default: () =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          return {
            id: `000${i}`,
            title: `2023\u5E74\u6D41\u884C\u6B3E\u8863\u670D\u7B80\u7EA6\u98CE\u65F6\u5C1A\u98CE\u767E\u642D-${i}`,
            labels: ['\u5546\u5BB6\u5305\u90AE', '\u9001\u8FD0\u8D39\u9669'],
            imageUrl:
              'data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" fill="%23ffffff"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"></path><path d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>',
            price: '123.45'
          };
        })
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock('div', _hoisted_1, [
          (openBlock(true),
          createElementBlock(
            Fragment,
            null,
            renderList(props.productList, (item, index) => {
              return (
                openBlock(),
                createElementBlock(
                  'div',
                  {
                    class: 'product-item',
                    key: index
                  },
                  [
                    createElementVNode('div', _hoisted_2, [
                      createElementVNode(
                        'img',
                        {
                          class: 'product-image',
                          src: item?.imageUrl
                        },
                        null,
                        8,
                        _hoisted_3
                      )
                    ]),
                    createElementVNode('div', _hoisted_4, [
                      createElementVNode(
                        'div',
                        _hoisted_5,
                        toDisplayString(item.title),
                        1
                      ),
                      Array.isArray(item?.labels)
                        ? (openBlock(),
                          createElementBlock('div', _hoisted_6, [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(item?.labels, (label, idx) => {
                                return (
                                  openBlock(),
                                  createElementBlock(
                                    'span',
                                    {
                                      key: idx,
                                      class: 'product-label'
                                    },
                                    toDisplayString(label),
                                    1
                                  )
                                );
                              }),
                              128
                            ))
                          ]))
                        : typeof item?.labels === 'string'
                        ? (openBlock(),
                          createElementBlock('div', _hoisted_7, [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(
                                item?.labels?.split?.(','),
                                (label, idx) => {
                                  return (
                                    openBlock(),
                                    createElementBlock(
                                      'span',
                                      {
                                        key: idx,
                                        class: 'product-label'
                                      },
                                      toDisplayString(label),
                                      1
                                    )
                                  );
                                }
                              ),
                              128
                            ))
                          ]))
                        : createCommentVNode('', true),
                      createElementVNode('div', _hoisted_8, [
                        _hoisted_9,
                        createElementVNode(
                          'span',
                          _hoisted_10,
                          toDisplayString(item?.price),
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

const productList_vue_vue_type_style_index_0_scoped_31302ec3_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['__scopeId', 'data-v-31302ec3']
]);

export { ProductList as default };
