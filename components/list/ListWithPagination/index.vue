<template>
    <div class="list__wrapper">
        <ul class="list">
            <li
                v-for="(item, index) in listItems"
                :key="index"
                class="list__item"
            >
                <slot
                    v-bind="item"
                    name="item"
                />
            </li>
        </ul>

        <UIPagination
            class="list__pagination"
            :current-page="props.currentPage"
            :items-per-page="props.itemsPerPage"
            :pages-count="pages"
            @update-current-page="onCurrentPageUpdate"
            @update-item-per-page="onItemsPerPageUpdate"
        />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    items: Array<Object>
    total?: number
    currentPage?: number | undefined
    itemsPerPage?: number | undefined
    sliceItems?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    items: () => ([]),
    total: 0,
    currentPage: 0,
    itemsPerPage: 10,
    sliceItems: false,
});

const emit = defineEmits(['update']);

const currentPage = ref(props.currentPage);
const itemsPerPage = ref(props.itemsPerPage);

const listItems = computed(() => {
    return props.sliceItems
        ? props.items.slice(props.currentPage * props.itemsPerPage, (props.currentPage * props.itemsPerPage) + props.itemsPerPage)
        : props.items;
});

const totalValue = computed(() => {
    return props.total ? props.total : props.items.length;
});

const pages = computed(() => Math.ceil(totalValue.value / props.itemsPerPage));

const onCurrentPageUpdate = (value:number) => {
    currentPage.value = value;
    emit('update', { offset: currentPage.value, limit: itemsPerPage.value });
};

const onItemsPerPageUpdate = (value:number) => {
    currentPage.value = 0;
    itemsPerPage.value = value;
    emit('update', { offset: currentPage.value, limit: itemsPerPage.value });
};
</script>

<style src="./styles.scss" lang="scss" scoped />
