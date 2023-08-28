<template>
    <form>
        <select v-model="locale" @update:model-value="setLocaleCookie(locale)">
            <option value="en">
                {{ $t('locales.en') }}
            </option>
            <option value="ru">
                {{ $t('locales.ru') }}
            </option>
        </select>
    </form>
</template>

<script lang="ts" setup>
const { locale, setLocaleCookie } = useI18n();

</script>

<style src="./styles.scss" lang="scss" scoped />
