<template>
    <BaseButton
        class="back-button"
        icon="back"
        :text="$t('back')"
        disabled-hover
        @click="router.back()"
    />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style src="./styles.scss" lang="scss" scoped />
