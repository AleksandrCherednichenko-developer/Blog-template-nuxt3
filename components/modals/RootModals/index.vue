<template>
    <component
        :is="component"
        v-for="(component, name) in modalWrappers"
        :key="name"
    />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { EMITTER_EVENTS } from '@/constants/emitter-events';
import { modalWindowHoc } from '@/composables/modal-window-hoc';

const CreatePost = defineAsyncComponent(() => import('../CreatePostModal/index.vue'));

const modalWrappers = {
    CreatePost: modalWindowHoc(CreatePost, EMITTER_EVENTS.createPost),
};
</script>
