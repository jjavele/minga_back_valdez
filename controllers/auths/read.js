export default function(req, res){
    try{
        return res.status(200).json({
            success: true,
            response: 'acá luego nos vamos a conectar a mongo en sprint 3',
            message: '/users'
        })

    }catch(error){
        return res.status(500),json({
            success: false,
            response: null,
            message: error.message
        })
    }
}