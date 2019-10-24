export default function ({ store, redirect, route }) {
    store.state.auth.authUser != null && route.name == 'login' ? redirect('/admin') : ''
    store.state.auth.authUser == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
    if (route.matched.some(record => record.path == '/admin')) {
        return true
    }
}