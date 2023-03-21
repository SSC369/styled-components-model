import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const MemeDetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 100vh;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.image});
  background-size: cover;
  width: 40vw;
  height: 400px;
  margin-left: 20px;
  padding: 30px;
`

export const TopText = styled.p`
  font-size: ${props => props.fontSize};
  color: white;
  font-weight: 600;
`

export const BottomText = styled.p`
  font-size: ${props => props.fontSize};
  color: white;
  font-weight: 600;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: white;
  font-size: 16px;
  border-width: 0px;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
`

export const InputElement = styled.input`
  border: 2px solid #d7dfe9;
  border-radius: 10px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  padding-left: 10px;
  margin-top: 4px;
  color: #7e858e;
  outline: none;
  cursor: pointer;
`
export const SelectElement = styled.select`
  border: 2px solid #d7dfe9;
  border-radius: 10px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  padding-left: 20px;
  margin-top: 4px;
  padding-right: 20px;
  outline: none;
  cursor: pointer;
`
export const Option = styled.option`
  margin-top: 10px;
  color: #1e293b;
`
export const Label = styled.label`
  color: #5a7184;
  font-weight: 600;
  font-size: 12px;
  margin-left: 4px;
`
