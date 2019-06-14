import React, { useState } from 'react';

function TableRow({ year, handleCellChange }) {
  const length = Math.max(year['first'].length, year['second'].length, 10);
  const arr = new Array(length).fill(0);
  const headers = [
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%' },
    { label: 'SCORE', width: '4%' },
    { label: '', width: '2%' },
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%' },
    { label: 'SCORE', width: '4%' }
  ];
  const initialValue = {
    code: '',
    title: '',
    unit: '',
    score: ''
  };

  return (
    <React.Fragment>
      <tr className="course-head">
        {headers.map((header, i) => (
          <td key={i} width={header.width}>
            {header.label}
          </td>
        ))}
      </tr>
      <React.Fragment>
        {arr.map((f, i) => {
          const first = year['first'][i] || initialValue;
          const second = year['second'][i] || initialValue;
          return (
            <tr key={i}>
              <Cell
                value={first.code}
                handleCellChange={handleCellChange}
                semester="first"
                x={i}
                type="code"
              />
              <Cell
                value={first.title}
                handleCellChange={handleCellChange}
                semester="first"
                x={i}
                type="title"
              />
              <Cell
                value={first.unit}
                handleCellChange={handleCellChange}
                semester="first"
                x={i}
                type="unit"
                textCenter={true}
              />
              <Cell
                value={first.score}
                handleCellChange={handleCellChange}
                semester="first"
                x={i}
                type="score"
                textCenter={true}
              />
              <td />
              <Cell
                value={second.code}
                handleCellChange={handleCellChange}
                semester="second"
                x={i}
                type="code"
              />
              <Cell
                value={second.title}
                handleCellChange={handleCellChange}
                semester="second"
                x={i}
                type="title"
              />
              <Cell
                value={second.unit}
                handleCellChange={handleCellChange}
                semester="second"
                x={i}
                type="unit"
                textCenter={true}
              />

              <Cell
                value={second.score}
                handleCellChange={handleCellChange}
                semester="second"
                x={i}
                type="score"
                textCenter={true}
              />
            </tr>
          );
        })}
      </React.Fragment>
    </React.Fragment>
  );
}

export default TableRow;

function Cell({ value, semester, handleCellChange, x, type, textCenter }) {
  const checkTypeAndValue = e => {
    if (type === 'score' || type === 'unit') {
      let textContent = e.target.textContent;
      if (!/^\d+$/.test(textContent)) {
        e.target.textContent = textContent.match(/\d+/g)
          ? textContent.match(/\d+/g)[0]
          : '';
      }
      const score = parseInt(textContent);
      e.target.textContent = isNaN(score) ? '' : score;
      if (score > 100) {
        e.target.textContent = parseInt(
          textContent.slice(0, textContent.length - 1)
        );
      }
    }
  };
  const handleInput = e => {
    checkTypeAndValue(e);
    handleCellChange({ semester, row: x, type, value: e.target.textContent });
  };
  const className = textCenter ? 'text-center' : '';
  return (
    <td
      contentEditable={true}
      onInput={handleInput}
      className={className}
      suppressContentEditableWarning={true}
      style={{ height: 20 }}
    >
      {value}
    </td>
  );
}
