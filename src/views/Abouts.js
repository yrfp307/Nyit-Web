import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import styled from 'styled-components';
import CardAbout from '../components/CardAbout';
import {useDataLayerValue} from '../DataLayer';

const Styles = styled.div`
.card-deck {
  margin-left: 50px;
  margin-right: 50px;
}`;

export default function Abouts () {
  const [{abouts}, dispatch] = useDataLayerValue();
  return (
    <Styles>
    <CardDeck>
    {abouts.map((about, index) => (
      <CardAbout key={index} image={about.image} title={about.title} text={about.text} />
    ))}
    </CardDeck>
    </Styles>
  )}
