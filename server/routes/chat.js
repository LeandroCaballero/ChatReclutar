const {Router} = require('express')
const router = Router()

router.route('/')
    .get((req, res) =>{
        res.send('server is up and runnig')
    })

router.route('/cursos')
    .get((req,res)=>{
        res.send()
    })

module.exports = router; 