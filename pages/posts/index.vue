<template>
    <div class="post-page">
        <div class="post-page__inner">
            <h5 class="title post-page__title">
                {{ $t('postsList') }}
            </h5>
            <BaseButton :text="$t('createPost')" @click="$emitter.emit(EMITTER_EVENTS.createPost, true)" />
        </div>

        <ListWithPagination
            :items="postStore.postsList"
            :current-page="currentPage"
            :items-per-page="itemsPerPage"
            slice-items
            @update="(data)=>updateList(data)"
        >
            <template #item="item">
                <PostItem
                    v-bind="item"
                    :key="item?.id"
                    @click-more="router.push(ROUTE_NAMES.DETAIL_POST.routeName + item?.id)"
                    @delete-post="postStore.deletePostById(item.id)"
                />
            </template>
        </ListWithPagination>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'nuxt/app';
import { usePostsStore } from '@/store/posts-store';
import { PaginationData } from '@/interfaces/pagination-interfaces';
import { EMITTER_EVENTS } from '@/constants/emitter-events';
import { ROUTE_NAMES } from '@/routes/routes-names';

const { $emitter } = useNuxtApp();
const router = useRouter();

const postStore = usePostsStore();

const { currentPage, itemsPerPage, updateListItems } = useLists();

const updateList = (data:PaginationData):void => {
    updateListItems(data);
    // postStore.getPostList(currentPage.value * itemsPerPage.value, itemsPerPage.value); - for server pagination
};

onMounted(() => {
    postStore.getPostsList();
    // postStore.getPostList(currentPage.value * itemsPerPage.value, itemsPerPage.value); - for server pagination
});
</script>

<style src="./styles.scss" lang="scss" scoped />
