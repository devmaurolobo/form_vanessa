import React, { useState } from 'react';
import styled from 'styled-components';

const DragDropFieldContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 30px;
`;

const DragDropFieldText = styled.p`
  color: #888;
  font-size: 16px;
`;

const DragDropField = ({ onFileDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    onFileDrop(files);
  };

  return (
    <DragDropFieldContainer
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      isDragOver={isDragOver}
    >
      <DragDropFieldText>
      {isDragOver ? 'Solte o arquivo aqui' : 'Arraste e solte o arquivo aqui'}
      </DragDropFieldText>
    </DragDropFieldContainer>
  );
};

export default DragDropField;
