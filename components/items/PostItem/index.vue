<template>
    <div class="post__item">
        <h6 class="title post__item-content__title uppercase-first-letter">
            {{ props.title }}
        </h6>
        <div class="post__item-content">
            <span>{{ $t('author') }}: {{ userId }}</span>
            <div class="post__item-content__buttons">
                <BaseButton :text="$t('more')" class="post__item-button" @click="emit('click-more')" />
                <DeleteConfirmButton @apply-delete="emit('delete-post', props.id)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    userId: string | number
    id: string | number
    title: string;
    body: string;
}

const props = withDefaults(defineProps<Props>(), {
    userId: '',
    id: '',
    title: '',
    body: '',
});

const emit = defineEmits(['click-more', 'delete-post']);

</script>

<style src="./styles.scss" lang="scss" scoped />
