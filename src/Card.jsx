import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fff;
  max-width: 400px;
  border: 1px solid green;
`

export default function Card() {
  return (
    <Wrapper>
      <h1>Hello World</h1> 
    </Wrapper>
  )
}
