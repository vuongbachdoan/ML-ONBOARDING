"use client"

import { Box, FileUpload, Header } from '@cloudscape-design/components';

export default function Step1OnlineApplication () {
  return (
    <Box>
      <Header variant="h2">Online Application</Header>
      <FileUpload
        accept="application/pdf"
        constraintText="Only PDF files accepted"
        value={[]}
        i18nStrings={{
          uploadButtonText: e => (e ? "Upload another file" : "Upload CV"),
          dropzoneText: () => "Drop CV here or choose file",
        }}
      />
    </Box>
  );
};
