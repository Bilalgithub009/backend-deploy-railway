
export default function sendResponse(res, status, data, err,msg) 
{
    res.status(status).json({err, msg, data: data,});
}