import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={footer}>
        <br/>
        <Container>
        <Row>
          <Col md="8">
            <p>MAKE SURE YOU ARE ON <b>WALLET.ZEROMACHINE.IO AND BOOKMARK IT</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe! SAVE YOUR PRIVATE KEY BEFORE SENDING OR RECEIVING, LEAVING THE PAGE WILL ERASE EVERYTHING.</p>

          </Col>
          <Col md="4">
            <a href="https://zerocurrency.io/" target="_blank">website</a><br/>
            <a href="https://bitcointalk.org/index.php?topic=3310714" target="_blank">ANN</a><br/>
            <a href="https://github.com/zerocurrencycoin" target="_blank">github</a><br/>
            <a href="https://t.me/zerocurrency" target="_blank">telegram</a><br/>
            <a href="https://discord.gg/Jq5knn5" target="_blank">discord</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
