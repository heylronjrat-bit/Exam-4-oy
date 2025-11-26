export default async function successRes(res, data, statusCode = 200) {
    res.status(statusCode).json({
        message: 'Success',
        statusCode,
        data
    })
}