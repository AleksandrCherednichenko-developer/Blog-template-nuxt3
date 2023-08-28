import { ref } from 'vue';
import { defineStore } from 'pinia';
import { PostsService } from '@/services/posts-service';
import { BodyPost } from '@/interfaces/requests-interfaces';
import { DataPost } from '@/interfaces/data-interfaces';

export const usePostsStore = defineStore('posts-store', () => {
    const postsList = ref<Object[]>([]);
    const postInfo = reactive<DataPost>({
        id: '',
        userId: '',
        title: '',
        body: '',
    });

    const updatePostInfo = (info: DataPost) => {
        postInfo.id = info.id;
        postInfo.userId = info.userId;
        postInfo.title = info.title;
        postInfo.body = info.body;
    };

    const getPostsList = async () => {
        const resp = await PostsService.getPostsList();

        if (resp) {
            postsList.value = resp;
        }
    };

    const getPostById = async (id: string | number) => {
        const resp = await PostsService.getPostById(id);

        if (resp) {
            updatePostInfo(resp);
        }
    };

    const updatePostById = async (id: string | number, body: object) => {
        const resp = await PostsService.updatePostById(id, body);

        if (resp) {
            updatePostInfo(resp);
        }
    };

    const deletePostById = async (id: string | number) => {
        const resp = await PostsService.deletePostById(id);

        if (resp) {
            // following code is not required with normal base
            const searchEl = postsList.value.findIndex((el:object) => String(el?.id) === String(id));
            postsList.value.splice(searchEl, 1);
            return resp;
        }
    };

    const createPost = async (body: BodyPost) => {
        const resp = await PostsService.createPost(body);

        if (resp) {
            postsList.value.push(resp);
        }
    };

    return {
        postsList,
        postInfo,
        getPostsList,
        getPostById,
        updatePostById,
        deletePostById,
        createPost,
    };
});
