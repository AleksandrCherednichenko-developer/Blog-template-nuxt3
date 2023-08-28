<template>
    <div v-tooltip.top="props.text" class="hint-icon">
        <SvgIcon :name="props.icon" />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    icon: string
    text: string
}

const props = withDefaults(defineProps<Props>(), {
    icon: '',
    text: 'top',
});
</script>

<style src="./styles.scss" lang="scss" scoped />
