import {Request,Response } from 'express';
import pool from '../database';

class RegController {

    public index (req: Request,res: Response){
        pool.query('DESCRIBE teams');
        res.json({text: '/api/registro'})
    }

    public getone(req: Request,res: Response){
        res.json({text: 'equipo numero '+ req.params.id})
    }

    public async update(req: Request,res: Response){
        const {id}=req.params;
        const equipo = await pool.query('UPDATE teams set ? WHERE id = ?', [req.body, id]); 
        res.json({text: 'equipo actualizado '+ id})
    }
}

export const regController= new RegController();