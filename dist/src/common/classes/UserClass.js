"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
class UserClass extends Document {
    constructor(firstName, lastName, username, password) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
}
exports.UserClass = UserClass;
//# sourceMappingURL=UserClass.js.map