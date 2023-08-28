<template>
    <aside class="navbar__wrapper">
        <nav class="navbar__menu">
            <NuxtLink
                v-for="item in navbarMenu"
                :key="item.label"
                :to="item.routeName"
                class="navbar__menu-item"
                active-class="navbar__menu-item--active"
            >
                <SvgIcon class="navbar__menu-item__icon" :name="item.icon" />
                <p class="navbar__menu-item__text uppercase-first-letter">
                    {{ $t(item.label) }}
                </p>
            </NuxtLink>
        </nav>
        <UIToggleLanguages />
    </aside>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from '@/routes/routes-names';

const navbarMenu = ref<object[]>([
    ROUTE_NAMES.PAGE_DASHBOARD,
    ROUTE_NAMES.PAGE_POSTS,
    ROUTE_NAMES.PAGE_USERS,
]);
</script>

<style src="./styles.scss" lang="scss" scoped />
