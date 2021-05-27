"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsController_1 = require("../controllers/teamsController");
class TeamsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', teamsController_1.teamController.list);
        this.router.delete('/:id', teamsController_1.teamController.delete);
        this.router.put('/:id', teamsController_1.teamController.update);
        this.router.get('/:id', teamsController_1.teamController.getone);
        this.router.post('/', teamsController_1.teamController.create);
    }
}
const teamsRoutes = new TeamsRoutes();
exports.default = teamsRoutes.router;
