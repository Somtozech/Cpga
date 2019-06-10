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

  /**
   * Add a student to a session in the datastore
   * @param {String} session - session
   * @param {Object} student - student's object
   */
  addStudentToSession(session, student) {
    student.session = [];
    this.db
      .get(session)
      .set(student.regNo, student)
      .write();
  }

  /**
   * Add an array of courses to a session
   * @param {String} session
   * @param {Array} courses
   */
  addCoursesToSession(session, courses) {
    this.db
      .get(session)
      .set('session', courses)
      .write();
  }

  read() {
    return this.db.getState();
  }
}

module.exports = new Db();
