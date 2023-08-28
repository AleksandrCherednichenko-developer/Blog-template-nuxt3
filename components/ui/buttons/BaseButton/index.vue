<template>
    <button
        class="button__base"
        :class="{'disabled-hover': props.disabledHover}"
        :type="props.type"
        :disabled="props.disabled"
    >
        <SvgIcon v-if="props.icon" class="button__base-icon" :name="props.icon" />
        <span v-if="props.text" class="button__base-text uppercase-first-letter">{{ text }}</span>
    </button>
</template>

<script setup lang="ts">
interface Props {
    text?: string
    type?: string
    icon?: string;
    disabled?: boolean;
    disabledHover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    text: '',
    type: 'button',
    icon: '',
    disabled: false,
    disabledHover: false,
});
</script>

<style src="./styles.scss" lang="scss" scoped />
