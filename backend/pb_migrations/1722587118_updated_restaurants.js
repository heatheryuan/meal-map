/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_SPoAJfl` ON `restaurants` (\n  `name`,\n  `address`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uou2yihv08sr78z")

  collection.indexes = []

  return dao.saveCollection(collection)
})
