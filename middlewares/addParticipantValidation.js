// const Joi = require('joi').extend(require('@joi/date'));

// module.exports = {
//     addParticipantValidation: (req, res, next) => {
//         const schema = Joi.object({
//             name: Joi.string()
//                  .required(),
//             email: Joi.string()
//                 .email({ tlds: { allow: false } })
//                 .required(),
//             birthdate: Joi.date()
//                 .format('YYYY-MM-DD').required(),
//             info: Joi.string().valid("social media", "friends", "found myself").required(),   
//         });

//         const validationResult = schema.validate(req.body);
//         if (validationResult.error) {
//             return res.status(400).json({ "message": ` ${validationResult.error}` });
//         }
//         next();
//     }
// }
