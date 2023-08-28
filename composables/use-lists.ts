import { defaultCurrentPage, defaultItemsPerPage } from '@/constants/list-constants';
import { PaginationData } from '@/interfaces/pagination-interfaces';

export default function () {
    const currentPage = ref<number>(defaultCurrentPage);
    const itemsPerPage = ref<number>(defaultItemsPerPage);

    const updateListItems = (data:PaginationData) => {
        currentPage.value = data?.offset ?? defaultCurrentPage;
        itemsPerPage.value = data?.limit ?? defaultItemsPerPage;
    };

    return {
        currentPage,
        itemsPerPage,
        updateListItems,
    };
}
