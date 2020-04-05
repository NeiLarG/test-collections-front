import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCollectionsAction, deleteCollectionAction } from '../actions/collection.actions';
import CollectionList from '../components/CollectionList';

class HomePage extends Component {
  componentDidMount() {
    const { getAllCollections } = this.props;
    getAllCollections();
  }

  onClickCreateCollection = () => {};

  render() {
    const { collections, auth, deleteCollection } = this.props;
    return (
      <section className="container">
        <h4>Список коллекций</h4>
        {auth.loggedInUser ?
          <button
            type="button"
            className="btn btn-action btn-outline-dark"
            onClick={this.onClickCreateCollection}
          >
            Создать коллекцию
          </button>
        : null}
        {collections ? <CollectionList collections={collections} deleteCollection={deleteCollection} /> : null}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  collections: state.collection.collections,
});

const mapDispatchToProps = dispatch => ({
  getAllCollections: () => dispatch(getAllCollectionsAction()),
  deleteCollection: (idCollection) => dispatch(deleteCollectionAction(idCollection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
