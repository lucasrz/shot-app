import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShotSaga, clearStore  } from '../../actions';
import './styles.css';
import { Table } from 'semantic-ui-react';
import Markup from 'interweave';

class Details extends Component {
  componentDidMount() {
    this.props.clearStore();

    const id = this.props.match.params.id;
    if(!id) { 
      return this.props.history.push('/');
    }

    this.props.getShotSaga(id);
  }
  
  render() {
    const { shot } = this.props;
    return (
      <div className="container">
      {
        !shot && <h1>Loading...</h1> 
      }
      {
        shot &&
        (
          <Table
            striped
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="left" >Image</Table.HeaderCell>
                <Table.HeaderCell>Titulo</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Tags</Table.HeaderCell>
                <Table.HeaderCell>Publish date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                  <Table.Cell className="left"><img className="shot-img" alt="" src={shot.images.hidpi}></img>{}</Table.Cell>
                  <Table.Cell className="bold no-wrap">{shot.title}</Table.Cell>
                  <Table.Cell > <Markup content={shot.description.toString()}/></Table.Cell>
                  <Table.Cell > {shot.tags.map(item => item.charAt(0).toUpperCase() + item.slice(1) + ' ' )}</Table.Cell>
                  <Table.Cell>{(new Date(shot.published_at)).toLocaleDateString()}</Table.Cell>
                </Table.Row>
            </Table.Body>
          </Table>
          )
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shot: state.shotsReducer.shot
});

const mapDispatchToProps = (dispatch) => ({
  getShotSaga: (id) => dispatch(getShotSaga(id)),
  clearStore: () =>  dispatch(clearStore())
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
