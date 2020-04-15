const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(scheme_id) {
    return db('steps as st')
        .join('schemes as sc', 'st.scheme_id', 'sc.id')
        .where({ scheme_id })
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .orderBy('st.step_number')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme);
}

function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where({ id });
}

function remove(id) {
    return db('schemes')
        .del()
        .where({ id });
}