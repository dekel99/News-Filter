exports.handler = async function(event, context) {
    const response = "this is test"

    return {
        statusCode: 200,
        body: response
    };
}