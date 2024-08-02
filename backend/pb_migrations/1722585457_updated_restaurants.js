/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

  // remove
  collection.schema.removeField("lmr156ra")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vrs86187",
    "name": "lat",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1yd02yde",
    "name": "long",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

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

  // remove
  collection.schema.removeField("vrs86187")

  // remove
  collection.schema.removeField("1yd02yde")

  return dao.saveCollection(collection)
})
