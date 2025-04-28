"use client"

import { Box, Button, Header } from '@cloudscape-design/components';

export default function Step4InPersonInterview() {
  const handleJoinRoom = () => {
    alert('Joining Chime Room...');
  };

  return (
    <Box>
      <Header variant="h2">In-person Interview</Header>
      <Box margin={{ top: 'm' }}>
        <Button
          ariaLabel="Report a bug (opens new tab)"
          href="https://example.com"
          iconName="video-camera-on"
          target="_blank"
          iconAlign="left" onClick={handleJoinRoom}
        >
          Join Chime Room
        </Button>
      </Box>
    </Box>
  );
};
