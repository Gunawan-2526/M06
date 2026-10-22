import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = new Function(`return ${input}`)();
      setInput(String(result));
    } catch (error) {
      setInput('Error');
    }
  };

  // Objek CSS Internal
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f9',
      fontFamily: 'Arial, sans-serif',
    },
    calculator: {
      width: '320px',
      backgroundColor: '#22252d',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
    },
    display: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      height: '60px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
      fontSize: '2.2rem',
      textAlign: 'right',
      padding: '0 10px',
      boxSizing: 'border-box',
    },
    buttons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
    },
    btn: {
      height: '55px',
      border: 'none',
      outline: 'none',
      borderRadius: '12px',
      backgroundColor: '#292d36',
      color: '#ffffff',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    btnOperator: {
      height: '55px',
      border: 'none',
      outline: 'none',
      borderRadius: '12px',
      backgroundColor: '#292d36',
      color: '#eb6666',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    btnAction: {
      height: '55px',
      border: 'none',
      outline: 'none',
      borderRadius: '12px',
      backgroundColor: '#292d36',
      color: '#26e7a6',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    btnEquals: {
      gridRow: 'span 2',
      height: '100%',
      border: 'none',
      outline: 'none',
      borderRadius: '12px',
      backgroundColor: '#eb6666',
      color: '#ffffff',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    btnZero: {
      gridColumn: 'span 2',
      height: '55px',
      border: 'none',
      outline: 'none',
      borderRadius: '12px',
      backgroundColor: '#292d36',
      color: '#ffffff',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <div style={styles.display}>
          <input type="text" value={input} placeholder="0" readOnly style={styles.input} />
        </div>
        <div style={styles.buttons}>
          <button onClick={handleClear} style={styles.btnAction}>AC</button>
          <button onClick={handleDelete} style={styles.btnAction}>DEL</button>
          <button onClick={() => handleButtonClick('/')} style={styles.btnOperator}>÷</button>
          <button onClick={() => handleButtonClick('*')} style={styles.btnOperator}>×</button>

          <button onClick={() => handleButtonClick('7')} style={styles.btn}>7</button>
          <button onClick={() => handleButtonClick('8')} style={styles.btn}>8</button>
          <button onClick={() => handleButtonClick('9')} style={styles.btn}>9</button>
          <button onClick={() => handleButtonClick('-')} style={styles.btnOperator}>-</button>

          <button onClick={() => handleButtonClick('4')} style={styles.btn}>4</button>
          <button onClick={() => handleButtonClick('5')} style={styles.btn}>5</button>
          <button onClick={() => handleButtonClick('6')} style={styles.btn}>6</button>
          <button onClick={() => handleButtonClick('+')} style={styles.btnOperator}>+</button>

          <button onClick={() => handleButtonClick('1')} style={styles.btn}>1</button>
          <button onClick={() => handleButtonClick('2')} style={styles.btn}>2</button>
          <button onClick={() => handleButtonClick('3')} style={styles.btn}>3</button>
          <button onClick={handleCalculate} style={styles.btnEquals}>=</button>

          <button onClick={() => handleButtonClick('0')} style={styles.btnZero}>0</button>
          <button onClick={() => handleButtonClick('.')} style={styles.btn}>.</button>
        </div>
      </div>
    </div>
  );
}