"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFormMid = void 0;
/**
 *
 * @param schema
 * @returns objectt: invalidate form
 */
const validateFormMid = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body);
        if (!(result.error)) {
            //req.body.value = result.value;
            return next();
        }
        const { details } = result.error;
        const message = details.map((i) => i.message).join('');
        return res.status(200).json({ status: 403, message: message, success: false });
    };
};
exports.validateFormMid = validateFormMid;
//# sourceMappingURL=validateFormMiddleware.js.map