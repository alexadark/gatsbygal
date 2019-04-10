import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SubscriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SubmitButton = styled.button`
  background: #da1aef;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 15px 50px;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow: 0 8px 10px rgba(50, 50, 93, 0.3);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 12px 15px rgba(50, 50, 93, 0.5);
  }
`

const StyledInput = styled.input`
  background: transparent;
  padding: 20px;
  line-height: 20px;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 30px;
  border-radius: 0;
  color: #fff;
  &:focus {
    border: none;
    border-bottom: 2px solid #da1aef;
  }
`
const H3 = styled.h3`
  text-align: center;
  font-weight: 300;
`

const SubscriptionForm = () => (
  <SubscriptionWrap>
    <H3>Keep me informed!</H3>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 300,
        margin: "0 auto",
      }}
    >
      <StyledInput type="text" placeholder="Enter your email" />
      <SubmitButton TYpe="submit">Subscribe!</SubmitButton>
    </form>
  </SubscriptionWrap>
)

export default SubscriptionForm
