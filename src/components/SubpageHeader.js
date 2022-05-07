import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SubpageHeader({url, alt}) {
    const navigate = useNavigate();

  return (
    <div>
      <header className="subpage__header">
        <button onClick={() => navigate('/')()}>
        <FontAwesomeIcon icon={ faArrowLeft} /> Back
        </button>
        <img src={url} alt={alt}></img>
      </header>
    </div>
  );
}

export default SubpageHeader;
