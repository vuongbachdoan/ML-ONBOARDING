"use client"

import { useState, useEffect, useRef } from 'react';
import { Box, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { FaRobot } from 'react-icons/fa';

const questions = Array.from({ length: 10 }, (_, i) => `Question ${i + 1}: Please answer.`);

export default function Step3AudioInterview () {
  const [currentQ, setCurrentQ] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  useEffect(() => {
    if (recording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = e => {
          audioChunks.current.push(e.data);
        };
        mediaRecorder.current.start();
      });
    } else if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      mediaRecorder.current = null;
    }
  }, [recording]);

  const handleAnswer = () => {
    setTranscript(prev => [...prev, `User answered Question ${currentQ + 1}`]);
    if (currentQ < 9) {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <Box>
      <Header variant="h2">Audio Interview</Header>
      <SpaceBetween size="m">
        <Box>
          <FaRobot /> <span>{questions[currentQ]}</span>
        </Box>
        <Button iconName="microphone" onClick={() => setRecording(!recording)}>
          {recording ? "Stop Recording" : "Start Recording"}
        </Button>
        <Button variant="primary" onClick={handleAnswer}>
          Submit Answer
        </Button>
        <Box margin={{ top: 'l' }}>
          <Header variant="h3">Transcript</Header>
          {transcript.map((t, idx) => (
            <Box key={idx}>{t}</Box>
          ))}
        </Box>
      </SpaceBetween>
    </Box>
  );
};
