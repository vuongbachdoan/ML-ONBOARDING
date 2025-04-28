'use client';

import React, { useState, useEffect } from 'react';
import { AppLayout, BreadcrumbGroup, Container, ContentLayout, Header, HelpPanel, Link, SideNavigation, SplitPanel } from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';

const LOCALE = 'en';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    // Load step from localStorage if it exists
    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
      setStep(parseInt(storedStep));
    }
  }, []);

  useEffect(() => {
    // Save the current step to localStorage
    localStorage.setItem('currentStep', step.toString());
  }, [step]);

  // Define valid paths for redirection
  const validPaths = [
    "/online-application",
    "/assessment",
    "/audio-interview",
    "/inperson-interview"
  ];

  useEffect(() => {
    // Perform client-side redirect if the path is invalid
    if (!validPaths.includes(window.location.pathname)) {
      window.location.href = '/online-application'; // Redirect to /online-application
    }
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <>
      <html lang="en">
        <body>
          <I18nProvider locale={LOCALE} messages={[messages]}>
            <AppLayout
              breadcrumbs={
                <BreadcrumbGroup
                  items={[
                    { text: 'Home', href: '#' },
                    { text: 'ML Onboarding', href: '#' },
                  ]}
                />
              }
              navigationOpen={true}
              navigation={
                <SideNavigation
                  header={{
                    href: '/',
                    text: 'ML Onboarding',
                  }}
                  items={[
                    { type: "link", text: "Online applications", href: "/online-application" },
                    { type: "link", text: "Assesments", href: "/assessment" },
                    { type: "link", text: "Audio interview", href: "/audio-interview" },
                    { type: "link", text: "In-person interview", href: "/inperson-interview" }
                  ]}
                />
              }
              toolsOpen={true}
              tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
              content={
                <ContentLayout
                  header={
                    <Header variant="h1" info={<Link variant="info">Info</Link>}>
                      Page header
                    </Header>
                  }
                >
                  <Container
                    header={
                      <Header variant="h2" description="Container description">
                        Container header
                      </Header>
                    }
                  >
                    {children}
                  </Container>
                </ContentLayout>
              }
              splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
            />
          </I18nProvider>
        </body>
      </html>
    </>
  );
}
