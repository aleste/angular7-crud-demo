"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_1 = require("../controllers/games");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', games_1.gamesController.index);
    }
}
const indexRoutes = new GamesRoutes();
exports.default = indexRoutes.router;
