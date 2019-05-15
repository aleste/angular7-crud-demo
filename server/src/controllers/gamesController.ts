import { Request, Response } from 'express';
import pool from '../database'

class GamesController {

  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query('SELECT * FROM games')
    res.json(games)    
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const game = await pool.query('SELECT * FROM games WHERE id = ?', req.params.id)
    if(game.length > 0){
      res.json(game) 
    }
    res.status(404).json({ text: "The game doesn't exits" });
  }
  
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO games set ?', [ req.body ])
    res.json({message: 'Game saved'})    
  }  
  
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    //const oldGame = req.body;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({ message: "The game was Updated" });
  }   

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query('DELETE FROM games WHERE id = ?', req.params.id)
    res.json({message: 'Game deleted'})    
    
  }    

}

export const gamesController = new GamesController();
