<template>
    <div class="pagination">
        <div class="pagination__button pagination__button-prev">
            <PaginationButton
                v-show="!(firstPageSelected)"
                left
                double-icon
                aria-label="first page"
                @click="goToFirstPage"
            />
            <PaginationButton
                :is-disabled="firstPageSelected"
                left
                aria-label="previous page"
                @click="goToPrevPage"
            />
        </div>

        <form class="pagination__curren-page" @submit.prevent="updateCurrentPage">
            <BaseInput
                v-model="currentPage"
                class="pagination__curren-page__input"
                input-number
                integer-number
            />
            <label class="pagination__curren-page__label">
                / {{ props.pagesCount }}
            </label>
        </form>

        <div class="pagination__button pagination__button-next">
            <PaginationButton
                :is-disabled="lastPageSelected"
                aria-label="next page"
                @click="goToNextPage"
            />
            <PaginationButton
                v-show="!(lastPageSelected)"
                aria-label="last page"
                double-icon
                @click="goToLastPage"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, defineEmits, ref, watchEffect } from 'vue';

interface Props {
    currentPage?: number
    itemsPerPage?: number
    pagesCount?: number
    changePerPage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    currentPage: 0,
    itemsPerPage: 10,
    pagesCount: 1,
    changePerPage: false,
});

const emit = defineEmits(['update:itemsPerPage', 'update-item-per-page', 'update-current-page']);

const currentPage = ref(props.currentPage + 1);
const itemsPerPage = ref(props.itemsPerPage);
const firstPageSelected = computed(() => currentPage.value === 1);
const lastPageSelected = computed(() => (currentPage.value === props.pagesCount) || (props.pagesCount === 0));

const updateCurrentPage = () => {
    currentPage.value = Number(currentPage.value);
    currentPage.value = currentPage.value < 1 ? 1 : (currentPage.value > props.pagesCount ? props.pagesCount : currentPage.value);
    emit('update-current-page', currentPage.value - 1);
};

const goToNextPage = () => {
    if (currentPage.value !== props.pagesCount) {
        currentPage.value += 1;
        updateCurrentPage();
    }
};

const goToPrevPage = () => {
    if (currentPage.value !== 1) {
        currentPage.value -= 1;
        updateCurrentPage();
    }
};

const goToFirstPage = () => {
    currentPage.value = 1;
    updateCurrentPage();
};

const goToLastPage = () => {
    currentPage.value = props.pagesCount;
    updateCurrentPage();
};

watchEffect(() => {
    currentPage.value = props.currentPage + 1;
    itemsPerPage.value = props.itemsPerPage;
});
</script>

<style src='./styles.scss' lang='scss' scoped />
