const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');

const adapter = new FileSync('./db.json');
const db = low(adapter);

class Db {
  constructor() {
    this.db = db;
  }

  addSession(session) {
    this.db.set(session, {}).write();
    return this;
  }

  addStudentToSession(session, student) {
    student.session = [];
    this.db
      .get(session)
      .set(student.regNo, student)
      .write();
  }

  read() {
    return this.db.getState();
  }
}

module.exports = new Db();
