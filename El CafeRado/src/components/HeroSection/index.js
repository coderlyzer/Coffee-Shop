import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover a world of coffee</HeroH1>
        <HeroP>
          Sign up online today and receive a free coffee voucher for you and a
          friend
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            primary="true"
            dark="true"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            One click away {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
