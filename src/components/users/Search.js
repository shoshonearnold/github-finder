import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('please enter a username', 'light')
    } else {
      this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
    }
  };

  handleChange = e => this.setState({ text: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;


    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
      </div>
    );
  }
}

export default Search;
