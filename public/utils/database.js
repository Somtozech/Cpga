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
    this.db.set(session, { students: [], session: [] }).write();
    return this;
  }

  /**
   * Add a student to a session in the datastore
   * @param {String} session - session
   * @param {Object} student - student's object
   */
  addStudentToSession(session, student) {
    //if student is existing already
    let existingStudent = this.db
      .get(session)
      .get('students')
      .find({ regNo: student.regNo })
      .value();
    if (existingStudent) return;

    student.session = [];
    student.id = shortid.generate();
    this.db
      .get(session)
      .get('students')
      .push(student)
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

  //get session's courses for all levels/years
  getCoursesInSession(session) {
    return this.db
      .get(session)
      .get('session')
      .value();
  }

  getStudentsInSession(session) {
    return this.db
      .get(session)
      .get('students')
      .value();
  }

  read() {
    return this.db.getState();
  }
}

module.exports = new Db();
