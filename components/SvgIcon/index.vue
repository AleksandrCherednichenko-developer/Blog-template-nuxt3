<template>
    <component
        :is="svgIcon"
        :key="props.name"
        :aria-label="`icon-${props.name}`"
        class="icon-svg"
        :class="`icon-${props.name}`"
    />
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from 'vue';

interface Props {
    name: string
    pathToIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
    name: '',
    pathToIcon: '',
});

const iconName = computed(() => props.name ?? 'no-image');
const svgIcon = ref(null);

const getIcon = async () => {
    if (!props.name) return;

    const data = !props.pathToIcon
        ? import(`../../assets/icons/${iconName.value}.svg`)
        : import(`../../assets/icons/${props.pathToIcon}/${iconName.value}.svg`);

    svgIcon.value = await data;
};

onMounted(() => {
    watchEffect(() => {
        getIcon();
    });
});
</script>

<style src="./styles.scss" lang="scss" scoped />
