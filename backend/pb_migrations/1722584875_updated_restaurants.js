/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

  // remove
  collection.schema.removeField("m2syjd7k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmr156ra",
    "name": "coords",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m2syjd7k",
    "name": "location",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("lmr156ra")

  return dao.saveCollection(collection)
})
