import React, { useState } from 'react';

const session = {
  'Year One': {
    first: [
      {
        code: 'GST 101',
        title: 'English and Technical Writing 1',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'GST 103',
        title: 'Nigerian people and culture',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'GST 105',
        title: 'Introduction to Logic and Philosophy',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'ICH 101',
        title: 'Chemistry 1',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'MAT 101',
        title: 'Mathematics 1',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'CHE 111',
        title: 'Intro. to Chemical Process Computation',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'CEE 111',
        title: 'Computer Programming & Language 1',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 151',
        title: 'Intro. to Engineering Materials',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      }
    ],
    second: [
      {
        code: 'GST 104',
        title: 'History & Philosophy of Science',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'GST 102',
        title: 'English and Technical Writing 1',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'ICH 102',
        title: 'Chemistry',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      }
    ],
    total: {
      first: { unit: 18, gp: 90, grade: '5.00' },
      second: { unit: 7, gp: 35, grade: '5.00' }
    }
  },
  'Year Two': {
    first: [
      {
        code: 'FEG 203',
        title: 'Engineering Analysis III',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'MEC 211',
        title: 'Engineering Drawing',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 211',
        title: 'Applied Electricity I',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      }
    ],
    second: [
      {
        code: 'FEG 204',
        title: 'Engineering Analysis IV',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'MEC 212',
        title: 'Engineering Drawing II',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 212',
        title: 'Applied Electricity II',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      }
    ],
    total: {
      first: { unit: 8, gp: 40, grade: '5.00' },
      second: { unit: 8, gp: 40, grade: '5.00' }
    }
  },
  'Year Three': {
    first: [
      {
        code: 'EEE 393',
        title: 'Practical',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 325',
        title: 'Physical Electronics',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 313',
        title: 'Circuit Theory',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      }
    ],
    second: [
      {
        code: 'EEE 394',
        title: 'Practical',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 326',
        title: 'Electronic Devices & Circuit I',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 372',
        title: 'Instrument & Measurement',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      }
    ],
    total: {
      first: { unit: 7, gp: 35, grade: '5.00' },
      second: { unit: 7, gp: 35, grade: '5.00' }
    }
  },
  'Year Four': {
    first: [
      {
        code: 'EEE 427',
        title: 'Electronics Devices and Circuit II',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 414',
        title: 'Circuit Theory',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 451',
        title: 'Electrical Services Design',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      }
    ],
    second: [
      {
        code: 'IT',
        title: 'Industrial Training',
        unit: 6,
        score: 70,
        grade: 'A',
        gp: 30
      }
    ],
    total: {
      first: { unit: 8, gp: 40, grade: '5.00' },
      second: { unit: 6, gp: 30, grade: '5.00' }
    }
  },
  'Year Five': {
    first: [
      {
        code: 'EEE 598',
        title: 'Seminar & Technical communication',
        unit: 2,
        score: 70,
        grade: 'A',
        gp: 10
      },
      {
        code: 'EEE 528',
        title: 'Solid State Electronics',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 533',
        title: 'Digital Communications',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      }
    ],
    second: [
      {
        code: 'EEE 574',
        title: 'Control System Engineering',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      },
      {
        code: 'EEE 599',
        title: 'Project 6',
        unit: 6,
        score: 70,
        grade: 'A',
        gp: 30
      },
      {
        code: 'EEE 534',
        title: 'Communication Principles',
        unit: 3,
        score: 70,
        grade: 'A',
        gp: 15
      }
    ],
    total: {
      first: { unit: 8, gp: 40, grade: '5.00' },
      second: { unit: 12, gp: 60, grade: '5.00' }
    }
  }
};

function CreateSessionPage(props) {
  const years = Object.keys(session);
  return (
    <div className="compute padded-more">
      <div className="student-info ">
        <div className="d-flex">
          <h5 className="flex">NAME OF STUDENT: EZECHI NNAEMEKA</h5>
          <h5 className="flex">REG NO: 2015030171355</h5>
        </div>
        <div className="d-flex">
          <h5 className="flex">MODE OF ENTRY: UTME</h5>
          <h5 className="flex">STATE OF ORIGIN: ENUGU</h5>
        </div>
      </div>

      <table class="table">
        {years.map((year, i) => {
          return (
            <React.Fragment key={i}>
              <thead>
                <tr>
                  <th colSpan="13" className="text-center">
                    {year}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="7">FIRST SEMESTER</th>
                  <th colSpan="6">SECOND SEMESTER</th>
                </tr>
                <TableRow year={session[year]} />
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
}

function TableRow({ year }) {
  const arr = [];
  arr.length = Math.max(year['first'].length, year['second'].length, 10);
  arr.fill(0);
  return (
    <React.Fragment>
      <tr className="course-head">
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text">
          UNIT
        </td>
        <td width="4%" className="rotate-text">
          SCORE
        </td>
        <td width="4%" className="rotate-text">
          GRADE
        </td>
        <td width="4%" className="rotate-text">
          GP
        </td>
        <td width="2%" />
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text">
          UNIT
        </td>
        <td width="4%" className="rotate-text">
          SCORE
        </td>
        <td width="4%" className="rotate-text">
          GRADE
        </td>
        <td width="4%" className="rotate-text">
          GP
        </td>
      </tr>
      <React.Fragment>
        {arr.map((f, i) => {
          console.log(f);
          const first = year['first'][i] || {
            code: '',
            title: '',
            unit: '',
            score: '',
            grade: '',
            gp: ''
          };
          const second = year['second'][i] || {
            code: '',
            title: '',
            unit: '',
            score: '',
            grade: '',
            gp: ''
          };
          return (
            <tr key={i}>
              <td contentEditable="true">{first.code}</td>
              <td contentEditable="true">{first.title}</td>
              <td contentEditable="true">{first.unit}</td>
              <td contentEditable="true">{first.score}</td>
              <td contentEditable="true">{first.grade}</td>
              <td contentEditable="true">{first.gp}</td>
              <td />
              <td contentEditable="true">{second.code}</td>
              <td contentEditable="true">{second.title}</td>
              <td contentEditable="true">{second.unit}</td>
              <td contentEditable="true">{second.score}</td>
              <td contentEditable="true">{second.grade}</td>
              <td contentEditable="true">{second.gp}</td>
            </tr>
          );
        })}
      </React.Fragment>
    </React.Fragment>
  );
}

export default CreateSessionPage;
