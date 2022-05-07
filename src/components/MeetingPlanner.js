import React from 'react';
import useScript from '../hooks/useScript';

function MeetingPlanner() {
    useScript('https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js');
  return (
    <div>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/isak-antin?embed=true"
      ></div>
    </div>
  );
}

export default MeetingPlanner;
