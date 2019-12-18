export function handler(_event, context, callback) {
    const { user } = context.clientContext

    if (!user) {
        return callback(null, { statusCode: 401, body: "unauthorised" })
    }

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify(user)
    })
}
