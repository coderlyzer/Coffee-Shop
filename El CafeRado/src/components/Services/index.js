import React from 'react'
import icon1 from '../../images/img-4.jpg'
import icon2 from '../../images/img-5.jpg'
import icon3 from '../../images/img-6.jpg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Roasted Coffees</ServicesH2>
          <ServicesP>
            Our Coffee Service gives you freshly roasted bean to cup coffee
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Traditional Breakfast</ServicesH2>
          <ServicesP>
            Our Breakfast Service gives you a choice of breakfast favourites
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Scrumptious Lunch</ServicesH2>
          <ServicesP>
            Our Lunch Service makes your lunchtime that much more special.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
