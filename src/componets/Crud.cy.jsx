import React from 'react'
import { Crud } from './Crud'

describe('<Crud />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Crud />)
  })
})