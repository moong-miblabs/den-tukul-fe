import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '@/store'

// let routes = [
//     {
//         path: '/',
//         component: AppLayout,
//         children: [
//             {
//                 path: '/',
//                 name: 'dashboard',
//                 component: () => import('@/views/Dashboard.vue')
//             },
//             {
//                 path: '/uikit/formlayout',
//                 name: 'formlayout',
//                 component: () => import('@/views/uikit/FormLayout.vue')
//             },
//             {
//                 path: '/uikit/input',
//                 name: 'input',
//                 component: () => import('@/views/uikit/InputDoc.vue')
//             },
//             {
//                 path: '/uikit/button',
//                 name: 'button',
//                 component: () => import('@/views/uikit/ButtonDoc.vue')
//             },
//             {
//                 path: '/uikit/table',
//                 name: 'table',
//                 component: () => import('@/views/uikit/TableDoc.vue')
//             },
//             {
//                 path: '/uikit/list',
//                 name: 'list',
//                 component: () => import('@/views/uikit/ListDoc.vue')
//             },
//             {
//                 path: '/uikit/tree',
//                 name: 'tree',
//                 component: () => import('@/views/uikit/TreeDoc.vue')
//             },
//             {
//                 path: '/uikit/panel',
//                 name: 'panel',
//                 component: () => import('@/views/uikit/PanelsDoc.vue')
//             },

//             {
//                 path: '/uikit/overlay',
//                 name: 'overlay',
//                 component: () => import('@/views/uikit/OverlayDoc.vue')
//             },
//             {
//                 path: '/uikit/media',
//                 name: 'media',
//                 component: () => import('@/views/uikit/MediaDoc.vue')
//             },
//             {
//                 path: '/uikit/message',
//                 name: 'message',
//                 component: () => import('@/views/uikit/MessagesDoc.vue')
//             },
//             {
//                 path: '/uikit/file',
//                 name: 'file',
//                 component: () => import('@/views/uikit/FileDoc.vue')
//             },
//             {
//                 path: '/uikit/menu',
//                 name: 'menu',
//                 component: () => import('@/views/uikit/MenuDoc.vue')
//             },
//             {
//                 path: '/uikit/charts',
//                 name: 'charts',
//                 component: () => import('@/views/uikit/ChartDoc.vue')
//             },
//             {
//                 path: '/uikit/misc',
//                 name: 'misc',
//                 component: () => import('@/views/uikit/MiscDoc.vue')
//             },
//             {
//                 path: '/uikit/timeline',
//                 name: 'timeline',
//                 component: () => import('@/views/uikit/TimelineDoc.vue')
//             },
//             {
//                 path: '/pages/empty',
//                 name: 'empty',
//                 component: () => import('@/views/pages/Empty.vue')
//             },
//             {
//                 path: '/pages/crud',
//                 name: 'crud',
//                 component: () => import('@/views/pages/Crud.vue')
//             },
//             {
//                 path: '/documentation',
//                 name: 'documentation',
//                 component: () => import('@/views/pages/Documentation.vue')
//             }
//         ]
//     },
//     {
//         path: '/landing',
//         name: 'landing',
//         component: () => import('@/views/pages/Landing.vue')
//     },
//     {
//         path: '/pages/notfound',
//         name: 'notfound',
//         component: () => import('@/views/pages/NotFound.vue')
//     },

//     {
//         path: '/auth/login',
//         name: 'login',
//         component: () => import('@/views/pages/auth/Login.vue')
//     },
//     {
//         path: '/auth/access',
//         name: 'accessDenied',
//         component: () => import('@/views/pages/auth/Access.vue')
//     },
//     {
//         path: '/auth/error',
//         name: 'error',
//         component: () => import('@/views/pages/auth/Error.vue')
//     }
// ]

function auth(to, from, next) {
    const $store = useStore()
    if($store.getToken) {
        next()
    } else {
        next({ name: 'logout' })
    }
}

function guest(to, from, next) {
    const $store = useStore()
    if($store.getToken) {
        if($store.getRole == 'ADMIN') next({ name: 'dashboard' })
        else if($store.getRole == 'RESPONDEN') next({ name: 'home' })
        else next({ name: 'role' })
    } else {
        next()
    }
}

function authAsAdmin(to, from, next) {
    const $store = useStore()
    if($store.getToken) {
        if($store.getRole == 'ADMIN') next()
        else next({ name: 'logout' })
    } else {
        next({ name: 'logout' })
    }
}

function authAsResponden(to, from, next) {
    const $store = useStore()
    if($store.getToken) {
        if($store.getRole == 'RESPONDEN') next()
        else next({ name: 'logout' })
    } else {
        next({ name: 'logout' })
    }
}

function authAsAdminAndResponden(to, from, next) {
    const $store = useStore()
    if($store.getToken) {
        if($store.getRole == 'ADMIN,RESPONDEN') next()
        else next({ name: 'logout' })
    } else {
        next({ name: 'logout' })
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/pages/Home.vue'),
            beforeEnter: authAsResponden
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/uikit/Dashboard.vue'),
                    beforeEnter: authAsAdmin
                }
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/result',
                    name: 'result',
                    component: () => import('@/views/uikit/Result.vue'),
                    beforeEnter: authAsAdmin
                }
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/result2',
                    name: 'result2',
                    component: () => import('@/views/uikit/Result2.vue'),
                    beforeEnter: authAsAdmin
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue'),
            beforeEnter: guest
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/role',
                    name: 'role',
                    component: () => import('@/views/pages/Role.vue'),
                    beforeEnter: authAsAdminAndResponden
                }
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/edukasi',
                    name: 'edukasi',
                    component: () => import('@/views/uikit/Edukasi2.vue'),
                    beforeEnter: authAsResponden
                }
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/deteksi',
                    name: 'deteksi',
                    component: () => import('@/views/uikit/Deteksi.vue'),
                    beforeEnter: authAsResponden
                }
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children : [
                {
                    path: '/intervensi',
                    name: 'intervensi',
                    component: () => import('@/views/uikit/Intervensi.vue'),
                    beforeEnter: authAsResponden
                }
            ]
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('@/views/Logout.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue'),
            beforeEnter: guest
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ]
});

export default router;
