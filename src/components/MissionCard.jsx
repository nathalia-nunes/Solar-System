import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card">
        <div className="mission-icon">
          <span className="material-symbols-outlined">
            rocket_launch
          </span>
        </div>
        <div className="mission-text">
          <p data-testid="mission-name">{ name }</p>
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
