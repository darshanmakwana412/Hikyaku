/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users',function (table) {
        table.increments('userId')
        table.string('email')
            .notNullable()
        table.string('password')
            .notNullable()
        table.timestamps(true, true)
    })
    .createTable('ukiyo',function (table) {

        // Primary key for Ukiyo
        table.increments('ukiyoId')

        // Title of each Ukiyo
        table.string('title')
            .notNullable()

        // Description of each Ukiyo
        table.text('description')
            .notNullable()

        // Foreign key to Users table
        table.integer('authorId')
            .unsigned()
            .references('userId')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        // Timestamp for each Ukiyo
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('ukiyo')
};