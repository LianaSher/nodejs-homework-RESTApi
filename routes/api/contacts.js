const express = require("express");
const validateBody = require("../../decorators/validateBody");
const schemas = require("../../schemas/contactsSchema");
const contactsControllers = require("../../controllers/contactsControllers");
const isValidId = require("../../helpers/isValidId");

const router = express.Router();

router.get("/", contactsControllers.listContacts);

router.get("/:contactId", isValidId, contactsControllers.getContactById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  contactsControllers.addContact
);

router.delete("/:contactId", isValidId, contactsControllers.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.contactAddSchema),
  isValidId,
  contactsControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  contactsControllers.updateFavorite
);

module.exports = router;
