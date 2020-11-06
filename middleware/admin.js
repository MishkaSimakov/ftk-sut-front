export default function (context) {
    if (!context.$auth.loggedIn || !context.$auth.user.is_admin) {
        return context.error({ statusCode: 401, message: 'Not admin!' })
    }
}
