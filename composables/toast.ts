import { useToast } from 'vue-toastification';

const toast = useToast();

export const toastSuccess = (text: String) => {
    return toast.success(text, { timeout: 3000 });
};

export const toastError = (text: String) => {
    return toast.error(text, { timeout: 3000 });
};
