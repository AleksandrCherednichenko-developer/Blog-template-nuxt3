import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loader-store', () => {
    const loading = ref<boolean>(true);

    function startLoad ():void {
        loading.value = true;
    }

    function stopLoad ():void {
        setTimeout(() => {
            loading.value = false;
        }, 100);
    }

    return {
        loading,
        startLoad,
        stopLoad,
    };
});
