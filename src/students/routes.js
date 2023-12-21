import {Router} from 'express'
import controller from './controller.js'

const router=Router()



router.get('/getStu',controller.getStudents)

router.get('/getStu/:id',controller.getStudentById)

router.post('/addStu',controller.addStu)

router.put('/updStu/:id',controller.updStu)

router.delete('/delStu/:id',controller.delStu)


export default router;