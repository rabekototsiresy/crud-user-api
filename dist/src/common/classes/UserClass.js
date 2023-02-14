"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
class UserClass extends Document {
    constructor(firstName, lastName, username, password, _id) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this._id = _id;
    }
}
exports.UserClass = UserClass;
//# sourceMappingURL=UserClass.js.map