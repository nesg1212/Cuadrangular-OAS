import { Router } from 'express';
import {teamController} from '../controllers/teamsController';

class TeamsRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', teamController.list);
        this.router.delete('/:id', teamController.delete);
        this.router.put('/:id',teamController.update);
        this.router.get('/:id', teamController.getone);
        this.router.post('/', teamController.create);
    }

    


}

const teamsRoutes =new TeamsRoutes();
export default teamsRoutes.router;