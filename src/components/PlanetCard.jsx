import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planet-card">
        <p className="planet-name">
          { planetName }
        </p>
        <div className="planet-image">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
