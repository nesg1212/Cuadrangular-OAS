import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import registerRoutes from './routes/registerRoutes';
import teamsRoutes from './routes/teamsRoutes';

class Server {
    
    public app: Application;


    constructor(){
        express();
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev')); //access to requeriment
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes():void{
        this.app.use('/api/register',registerRoutes);
        this.app.use('/api/teams',teamsRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server= new Server();
server.start();
console.log('workingr')
