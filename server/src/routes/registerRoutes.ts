import { Router } from 'express';
import {regController} from '../controllers/regController';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', regController.index);
        this.router.get('/:id', regController.getone);
        this.router.put('/:id', regController.update);
        
    }


}

const indexRoutes =new IndexRoutes();
export default indexRoutes.router;