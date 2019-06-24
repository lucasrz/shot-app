import Markup from 'interweave';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { getShotsSaga } from '../../actions';
import './style.css';

class Home extends Component {
    componentDidMount() {
    this.handleItemClick = this.handleItemClick.bind(this);
    this.props.getShotsSaga();
  }

  handleItemClick(id) {
    this.props.history.push(`/details/${id}`);
  }

  render() {
    const { shots } = this.props;
    return (
      <div className="container">
        {
          (!shots || shots.length === 0)  && <h1>Loading...</h1>
        }
        {
          shots && shots.length > 0 &&
          (
            <Table
              striped
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Tags</Table.HeaderCell>
                  <Table.HeaderCell>Publish date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {shots.map(({
                  id,
                  title,
                  description,
                  tags,
                  published_at
                }, i) => (
                    <Table.Row key={i}  className="hover" onClick={() => this.handleItemClick(id)}>
                      <Table.Cell className="no-wrap bold">{title}</Table.Cell>
                      <Table.Cell > <Markup content={description.toString()} /></Table.Cell>
                      <Table.Cell > {tags.map(item => item.charAt(0).toUpperCase() + item.slice(1) + ' ' )}</Table.Cell>
                      <Table.Cell>{(new Date(published_at)).toLocaleDateString()}</Table.Cell>
                    </Table.Row>))}
              </Table.Body>
            </Table>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shots: state.shotsReducer.shots
});

const mapDispatchToProps = (dispatch) => ({
  getShotsSaga: () => dispatch(getShotsSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
