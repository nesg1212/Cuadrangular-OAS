"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regController_1 = require("../controllers/regController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regController_1.regController.index);
        this.router.get('/:id', regController_1.regController.getone);
        this.router.put('/:id', regController_1.regController.update);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
