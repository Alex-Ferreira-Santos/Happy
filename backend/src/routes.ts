import orphanagesController from './Controllers/OrphanagesController'
import uploadConfig from './config/upload'

import { Router} from 'express'
import multer from 'multer'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', orphanagesController.index )
routes.get('/orphanages/:id', orphanagesController.show)
routes.post('/orphanages', upload.array('images') ,orphanagesController.create )


export default routes