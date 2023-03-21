import {Component} from 'react'
import {
  Heading,
  InputContainer,
  MemeDetailsContainer,
  MemeContainer,
  MainContainer,
  GenerateButton,
  InputElement,
  SelectElement,
  Option,
  Label,
  BottomText,
  TopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    size: '',
    isClicked: false,
  }

  onChangeImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSize = event => {
    this.setState({size: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    this.setState({isClicked: true})
  }

  render() {
    const {topText, bottomText, imageUrl, size, isClicked} = this.state
    return (
      <MainContainer>
        <MemeDetailsContainer onSubmit={this.onGenerate}>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <Label htmlFor="img">Image URL</Label>
            <InputElement
              value={imageUrl}
              onChange={this.onChangeImage}
              className="input-element"
              type="text"
              id="img"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="top">Top Text</Label>
            <InputElement
              value={topText}
              onChange={this.onChangeTop}
              className="input-element"
              type="text"
              id="top"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="bottom">Bottom Text</Label>
            <InputElement
              onChange={this.onChangeBottom}
              className="input-element"
              type="text"
              id="bottom"
              value={bottomText}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="size">Font Size</Label>
            <SelectElement
              id="size"
              className="input-element"
              onChange={this.onChangeSize}
              value={size}
            >
              {fontSizesOptionsList.map(eachSize => (
                <Option value={eachSize.optionId} key={eachSize.optionId}>
                  {eachSize.displayText}
                </Option>
              ))}
            </SelectElement>
          </InputContainer>

          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeDetailsContainer>

        {isClicked && (
          <MemeContainer data-testid="meme" image={imageUrl}>
            <TopText fontSize={`${size}px`}>{topText}</TopText>
            <BottomText fontSize={`${size}px`}>{bottomText}</BottomText>
          </MemeContainer>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
