import { computed } from 'vue';
import { defineStore } from 'pinia';
import { BodyLogin, Me } from '@/interfaces/requests-interfaces';
import { useLoaderStore } from '@/store/loader-store';

export const useAuthStore = defineStore('auth', () => {
    const me = reactive<Me>({ login: '', id: 'test-id', role: '' });

    const isAuthorization = computed(() => !!me.id);

    const loaderStore = useLoaderStore();

    const updateMe = (info: Me) => {
        me.login = info.login;
        me.id = info.id;
        me.role = info.role;
    };

    const logIn = async (body: BodyLogin) => {
        loaderStore.startLoad();
        // request for "UserService.logIn(body)"
        // if (!resp) {
        //     loaderStore.stopLoad();
        //     return null;
        // }
        await updateMe({ login: body.login, id: 'test-id', role: 'test-user' });
        loaderStore.stopLoad();
    };

    const logOut = async () => {
        loaderStore.startLoad();
        // request for "UserService.logOut(body)"
        await updateMe({ login: '', id: '', role: '' });
        loaderStore.stopLoad();
    };

    const getUser = async () => {
        loaderStore.startLoad();
        // request for "UserService.getUser()"
        // if (!resp) {
        //     loaderStore.stopLoad();
        //     return null;
        // }
        // updateMe(resp)
        await updateMe({ login: '', id: '123', role: '' });
        loaderStore.stopLoad();
    };

    return {
        userId: me.id,
        isAuthorization,
        logIn,
        logOut,
        getUser,
    };
});
