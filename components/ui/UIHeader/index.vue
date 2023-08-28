<template>
    <header class="header">
        <h4 class="title">
            {{ $t('welcome') }}
        </h4>

        <BaseButton icon="logout" @click="authStore.logOut()" />
    </header>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth-store';

const authStore = useAuthStore();
</script>

<style src="./styles.scss" lang="scss" scoped />
