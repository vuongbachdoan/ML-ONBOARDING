"use client"

import { Box, Header, SpaceBetween, Checkbox } from '@cloudscape-design/components';
import { useState } from 'react';

const questions = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  question: `Question ${i + 1}: What is the correct answer?`,
  answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D']
}));

export default function Step2Assessments () {
  const [selected, setSelected] = useState<{ [key: number]: string }>({});

  return (
    <Box>
      <Header variant="h2">Assessments</Header>
      <SpaceBetween size="l">
        {questions.map((q) => (
          <Box key={q.id}>
            <Box fontWeight="bold">{q.question}</Box>
            <SpaceBetween size="xs">
              {q.answers.map((ans, idx) => (
                <Checkbox
                  key={idx}
                  checked={selected[q.id] === ans}
                  onChange={() => setSelected({ ...selected, [q.id]: ans })}
                >
                  {ans}
                </Checkbox>
              ))}
            </SpaceBetween>
          </Box>
        ))}
      </SpaceBetween>
    </Box>
  );
};