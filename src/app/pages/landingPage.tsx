'use client'
import { Button, Card, Flex, Grid, Icon, Subtitle, Text, Title } from '@tremor/react';
import styles from '../styles/landingPage.module.css';
import { PageProps } from '../types/pageProps';
import { CalculatorIcon, CalendarIcon, ScaleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const LandingPage: React.FC<PageProps> = ({ onNextStep }) => {
  const handleButtonClick = (nextStep: number) => {
    const container = document.getElementById('mainContainer');
    if (container) {
      container.classList.add('wipe-out-right');

      setTimeout(() => {
        container.classList.remove('wipe-out-right');
        onNextStep(nextStep);
      }, 1050);
    }
  };

  return (
    <Grid numCols={2} style={{ width: '80%' }}>
      <Card style={{ border: 'none'}}>
        <Title style={{ fontSize: '65px', margin: 'auto', paddingBottom: '2rem' }}>Cut 🔪 or Bulk 💪</Title>
        <Subtitle style={{ fontSize: '30px', margin: 'auto', paddingBottom: '2.5rem' }}>Find out based on your body fat percentage</Subtitle>
        <Button size="xl" style={{ background: 'rgb(255,190,35)', border: '0.5px solid black', color: 'black', padding: '0.8rem' }} onClick={() => handleButtonClick(2)}>
          Get Started
        </Button>
        <Grid numCols={1} style={{ paddingTop: '3rem' }}>
          <Title>Find out your</Title>
          <Grid numCols={1}>
            <Subtitle><Icon size="lg" icon={ScaleIcon} />Macros</Subtitle>
            <Subtitle><Icon size="lg" icon={CalculatorIcon} />Calories per day</Subtitle>
            <Subtitle><Icon size="lg" icon={CalendarIcon} />Expected Weight Date</Subtitle>
          </Grid>
        </Grid>
      </Card>
        <Image
          src="/landing.jpg"
          alt="landing"
          width={550}
          height={500}
        />
    </Grid>
  );
};

export default LandingPage;