import {Request,Response, text } from 'express';
import pool from '../database';

class TeamController {

    public async list (req: Request,res: Response){
        const equipos = await pool.query('SELECT * FROM teams');
        res.json(equipos);
    }

    public async getone(req: Request,res: Response){
        const {id}=req.params;
        const equipo = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
        if(equipo.length>0){res.json(equipo);}
        else{res.json({text:'equipo no encontrado'})};
        
    }

    public async update(req: Request,res: Response){
        const {id}=req.params;
        await pool.query('UPDATE teams set ? WHERE id = ?', [req.body, id]);
        res.json({text:'Equipo actualizado ' + id}); }


    public async delete(req: Request,res: Response){

        const {id}=req.params;
        await pool.query('DELETE FROM teams WHERE id = ?', [id]);
        res.json({text:'Eliminado el equipo' , id});

    }

    public async create(req:Request,res:Response):Promise<void>{
       await pool.query('INSERT INTO teams set ?',[req.body]);
       console.log([req.body]);
        res.json({text: 'Equipo creado'});
    }
}

export const teamController= new TeamController();