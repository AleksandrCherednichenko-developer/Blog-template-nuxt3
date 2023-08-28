<template>
    <BaseModal
        :title="$t('createPost')"
        :button-text="$t('create')"
        @submit="postStore.createPost(data)"
    >
        <template #modal-content>
            <BaseInput
                v-model="data.title"
                label-top="title"
                placeholder="this is title for your post"
            />
            <BaseInput
                v-model="data.body"
                label-top="text"
                placeholder="what do you want to tell"
            />
        </template>
    </BaseModal>
</template>

<script lang="ts" setup>
import { usePostsStore } from '@/store/posts-store';
import { BodyPost } from '@/interfaces/requests-interfaces';
import { useAuthStore } from '@/store/auth-store';

const postStore = usePostsStore();
const authStore = useAuthStore();

const data = reactive<BodyPost>({
    title: '',
    body: '',
    userId: authStore.userId,
});
</script>
