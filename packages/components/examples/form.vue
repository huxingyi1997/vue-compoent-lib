<template>
  <div class="example">
    <Form ref="formRef" :model="model">
      <FormItem label="数据1(数字校验)" name="data1" :rule="rule1">
        <input v-model="model.data1" />
      </FormItem>
      <FormItem label="数据2(字母校验)" name="data2" :rule="rule2">
        <input v-model="model.data2" />
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Form } from '../src';
import { FormInstance } from '../src';

const { FormItem } = Form;
const formRef = ref<FormInstance>();
const model = reactive<{ data1: string; data2: string }>({
  data1: '123',
  data2: 'abc'
});

const rule1 = {
  validator: (val: string) => {
    const hasError = /^[0-9]{1,}$/gi.test(`${val || ''}`) !== true;
    return {
      hasError,
      message: hasError ? '仅支持0-9的数字' : ''
    };
  }
};

const rule2 = {
  validator: (val: string) => {
    const hasError = /^[a-z]{1,}$/gi.test(`${val || ''}`) !== true;
    return {
      hasError,
      message: hasError ? '仅支持a-z的大小写字母' : ''
    };
  }
};
</script>
