export async function handler(event, context) {
    const { user } = context.clientContext
    const { station, direction } = event.queryStringParameters

    if (!process.env["NETLIFY_DEV"] && !user) {
        return { statusCode: 401, body: "unauthorised" }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ station, direction })
    }
}
