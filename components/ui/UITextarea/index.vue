<template>
    <textarea

        ref="textarea"
        v-model="input"
        class="textarea-resize"
        placeholder="What's on your mind?"
        @input="emit('update:model-value', input)"
    />
</template>

<script setup lang="ts">
defineComponent({ name: 'UITextarea' });

import { useTextareaAutosize } from '@vueuse/core';

const { textarea, input } = useTextareaAutosize();

interface Props {
    modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
});

const emit = defineEmits(['update:model-value']);

watch(() => props.modelValue,
    newValue => {
        input.value = newValue;
    });
</script>

<style src="./styles.scss" lang="scss" scoped />
