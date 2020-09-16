import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import styled from 'styled-components';
import CardAbout from '../components/CardAbout';
import {useDataLayerValue} from '../DataLayer';

const Styles = styled.div`
.card {
  font-size: 1em;
  margin: 50px;
}`;

export default function Abouts () {
  const [{abouts}, dispatch] = useDataLayerValue();

  // React.useEffect(() => {
  //   console.log(abouts)
  // }, [])
  return (
    <CardDeck>
    {abouts.map((about, index) => (
      <CardAbout key={index} image={about.image} title={about.title} text={about.text} />
    ))}
    </CardDeck>
  )}
// 