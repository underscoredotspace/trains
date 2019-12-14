exports.handler = function(_event, context, callback) {
    const { user } = context.clientContext

    return callback(null, {
        statusCode: user ? 200 : 401,
        body: user && JSON.stringify(user, null, 2)
    })
}
