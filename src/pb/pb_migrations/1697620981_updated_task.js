/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7lx778apnkwlpb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n9aupr33",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "backlog",
        "progress",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7lx778apnkwlpb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n9aupr33",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "backlog",
        "progress",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
})