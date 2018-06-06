import React from 'react';

const notFound = () => {
  const styles = {
    header: {
      backgroundColor: 'red',
      padding: '10px',
      top: '100px'
    }
  }

  return(
    <h1 style={styles.header}>
      404 Not found.
    </h1>
  )
}

export default notFound;
