<template>
    <button class="pagination-button">
        <span
            v-if="!props.doubleIcon"
            class="pagination-button__icon"
            :data-state="props.isDisabled ? 'disabled' : ''"
            :class="[ props.left ? 'left' : 'right' ]"
        >
            <i /><i />
        </span>

        <span
            v-else
            class="pagination-button__icon pagination-button__icon--double-icon"
            :class="[ props.left ? 'left' : 'right' ]"
        >
            <i /><i /><i />
        </span>
    </button>
</template>

<script lang="ts" setup>
interface Props {
    isDisabled?: boolean
    left?: boolean
    doubleIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isDisabled: false,
    left: false,
    doubleIcon: false,
});
</script>

<style src='./styles.scss' lang='scss' scoped />
