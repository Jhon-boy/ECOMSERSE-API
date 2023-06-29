import React from 'react'
import { Eprovider } from './Eprovider'

describe('<Eprovider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Eprovider />)
  })
})