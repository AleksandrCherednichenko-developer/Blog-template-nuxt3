import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(Toast, {
        position: 'bottom-right',
        closeOnClick: true,
        timeout: 3000,
        pauseOnFocusLoss: false,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 1,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: false,
        rtl: false,
        filterToasts: (toasts: any) => {
            const types = {};
            return toasts.reduce((aggToasts: any, toast: any) => {
                if (!types[toast.type]) {
                    aggToasts.push(toast);
                    types[toast.type] = true;
                }
                return aggToasts;
            }, []);
        },
    });
});
