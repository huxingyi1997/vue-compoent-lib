import {
  defineComponent,
  ref,
  watch,
  onUnmounted,
  openBlock,
  createElementBlock,
  createElementVNode,
  Fragment,
  renderList,
  normalizeClass,
  normalizeStyle,
  toDisplayString
} from 'vue';

const _hoisted_1 = { class: 'banner-slides-body' };
const _hoisted_2 = { class: 'banner-slides-item-text' };
const _hoisted_3 = { class: 'banner-slides-pointer-list' };
const _hoisted_4 = ['onClick', 'title'];
const duration = 3e3;
const autoPlay = true;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'banner-slides',
  setup(__props) {
    const list = [
      {
        id: 0,
        text: '\u8FD9\u662F\u7B2C1\u4E2A\u8F6E\u64AD\u5185\u5BB9',
        color: '#66ded3'
      },
      {
        id: 1,
        text: '\u8FD9\u662F\u7B2C2\u4E2A\u8F6E\u64AD\u5185\u5BB9',
        color: '#f5a991'
      },
      {
        id: 2,
        text: '\u8FD9\u662F\u7B2C3\u4E2A\u8F6E\u64AD\u5185\u5BB9',
        color: '#9ccef6'
      },
      {
        id: 3,
        text: '\u8FD9\u662F\u7B2C4\u4E2A\u8F6E\u64AD\u5185\u5BB9',
        color: '#ffeb3b'
      }
    ];
    const index = ref(0);
    let timer = void 0;
    const autoPlayFn = () => {
      clearInterval(timer);
      timer = window.setInterval(() => {
        index.value++;
        if (index.value >= list.length) {
          index.value = 0;
        }
      }, duration);
    };
    const stopPlay = () => {
      if (timer) clearInterval(timer);
    };
    const startPlay = () => {
      if (list.length && autoPlay) {
        autoPlayFn();
      }
    };
    const goToNextSlide = (step) => {
      index.value += step;
      if (index.value >= list.length) {
        index.value = 0;
        return;
      }
      if (index.value < 0) {
        index.value = list.length - 1;
      }
    };
    watch(
      () => list,
      (newVal) => {
        if (newVal.length > 1 && autoPlay) {
          index.value = 0;
          autoPlayFn();
        }
      },
      { immediate: true }
    );
    onUnmounted(() => {
      clearInterval(timer);
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'div',
          {
            class: 'banner-slides',
            onMouseenter: _cache[2] || (_cache[2] = ($event) => stopPlay()),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => startPlay())
          },
          [
            createElementVNode('div', _hoisted_1, [
              (openBlock(),
              createElementBlock(
                Fragment,
                null,
                renderList(list, (item, i) => {
                  return createElementVNode(
                    'div',
                    {
                      class: normalizeClass([
                        'banner-slides-item',
                        { fade: index.value === i }
                      ]),
                      key: item.id,
                      style: normalizeStyle({ background: item.color })
                    },
                    [
                      createElementVNode(
                        'div',
                        _hoisted_2,
                        toDisplayString(item.text),
                        1
                      )
                    ],
                    6
                  );
                }),
                64
              ))
            ]),
            createElementVNode(
              'span',
              {
                class: 'banner-slides-btn prev',
                onClick:
                  _cache[0] || (_cache[0] = ($event) => goToNextSlide(-1))
              },
              '<'
            ),
            createElementVNode(
              'span',
              {
                class: 'banner-slides-btn next',
                onClick: _cache[1] || (_cache[1] = ($event) => goToNextSlide(1))
              },
              '>'
            ),
            createElementVNode('div', _hoisted_3, [
              (openBlock(),
              createElementBlock(
                Fragment,
                null,
                renderList(list, (item, i) => {
                  return createElementVNode(
                    'span',
                    {
                      class: normalizeClass([
                        'banner-slides-pointer',
                        { active: index.value === i }
                      ]),
                      key: i,
                      onClick: ($event) => (index.value = i),
                      title: item.text
                    },
                    null,
                    10,
                    _hoisted_4
                  );
                }),
                64
              ))
            ])
          ],
          32
        )
      );
    };
  }
});

const bannerSlides_vue_vue_type_style_index_0_scoped_e9a0cbe8_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const BannerSiders = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['__scopeId', 'data-v-e9a0cbe8']
]);

export { BannerSiders as default };
