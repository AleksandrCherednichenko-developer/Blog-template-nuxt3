<template>
    <button
        class="toggle__password-button"
        type="button"
        role="switch"
        aria-label="toggle-password"
        @click="toggle"
    >
        <SvgIcon
            v-if="value"
            name="eye-open"
            class="icon"
        />
        <SvgIcon
            v-else
            name="eye-closed"
            class="icon"
        />
    </button>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps } from 'vue';

interface Props {
    modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get () { return props.modelValue; },
    set (value) { emit('update:modelValue', value); },
});

const toggle = () => {
    value.value = !value.value;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
