"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration, educator, nome }) {
        console.log(nome, duration, educator);
    }
}
exports.default = new CreateCourseService;
