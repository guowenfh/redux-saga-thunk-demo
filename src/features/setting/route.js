import DefaultPage from './DefaultPage';

export default {
    path: '/',
    name: 'Setting',
    childRoutes: [
        {
            path: 'setting',
            name: '设置',
            component: DefaultPage,
            isIndex: true
        }
    ]
};
