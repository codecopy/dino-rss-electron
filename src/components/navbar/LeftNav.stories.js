import LeftNav from './LeftNav.svelte';

export default {
    title: 'LeftNav',
    excludeStories: /.*Data$/,
};

export const Visitor = () => ({
    Component: LeftNav,
    props: {
        userInfo: {
            id: 1,
            uuid: 'c0e4d467-06db-48dc-ad3c-ee8c071de27c',
            level: 1,
            oauth: '',
            name: '',
            image: './icon/logo-grey.svg',
            blog: 'https://materializecss.com/icons.html',
        },
        activeTab: 'rss'
    },
    on: {},
});

export const Logined = () => ({
    Component: LeftNav,
    props: {
        userInfo: {
            id: 1,
            uuid: 'c0e4d467-06db-48dc-ad3c-ee8c071de27c',
            level: 1,
            oauth: 'github/28855629',
            name: 'richshaw2015',
            image: 'https://www.electronjs.org/images/electron-icon.png',
            blog: 'https://xingzx.org',
        },
        activeTab: 'star'
    },
    on: {},
});
