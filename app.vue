<template>
    <NuxtLayout :name="loadLayout" />

    <RootModals />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth-store';
import { useLoaderStore } from '@/store/loader-store';

const authStore = useAuthStore();
const loaderStore = useLoaderStore();
const loadLayout = computed(() => loaderStore.loading ? 'loader' : (authStore.isAuthorization ? 'default' : 'login'));

onMounted(() => {
    authStore.getUser();
});
</script>
