<template>
    <div class="post-detail-page">
        <div class="page-inner">
            <BackButton />
            <div class="page-inner__controls">
                <BaseButton icon="save" @click="postStore.updatePostById(route.params.id, postStore.postInfo)" />
                <BaseButton icon="delete" @click="deletePost" />
            </div>
        </div>
        <div class="page-inner">
            <h6 class="title">
                <span>{{ $t('post') }} №</span>
                {{ postStore.postInfo.id }}
            </h6>
            <h6 class="title">
                <span>{{ $t('author') }}: </span>
                {{ postStore.postInfo.userId }}
            </h6>
        </div>
        <div class="page-inner__input">
            <p>{{ $t('title') }}:</p>
            <BaseInput v-model="postStore.postInfo.title" />
        </div>
        <div class="page-inner__input">
            <p>{{ $t('text') }}:</p>
            <UITextarea
                :model-value="postStore.postInfo.body"
                @update:model-value="(val)=>postStore.postInfo.body=val"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';
import { usePostsStore } from '@/store/posts-store';

const router = useRouter();
const route = useRoute();

const postStore = usePostsStore();

const deletePost = async () => {
    const resp = await postStore.deletePostById(route.params.id);
    if (!resp) return;
    await router.back();
};

onBeforeMount(() => {
    postStore.getPostById(route.params.id);
});
</script>

<style src="./styles-id.scss" lang="scss" scoped />
