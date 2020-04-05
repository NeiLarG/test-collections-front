import React, { Component } from 'react';
import CollectionRow from './CollectionRow';

class CollectionList extends Component {
  render() {
    const { collections, deleteCollection } = this.props;
    return (
      <table className="table text-center table-bordered col-md-12">
        <thead className="thead-light">
          <tr>
              <th scope="col-collection-name">Название</th>
              <th scope="col-collection-topic">Тема</th>
              <th scope="col-collection-description">Описание</th>
              <th scope="col-collection-image">Изображение</th>
              <th scope="col-collection-author">Автор</th>
              <th scope="col-collection-actions">Действия</th>
          </tr>
        </thead>
        <tbody>
          {collections.map(collection => (
            <CollectionRow
              key={collection.id}
              id={collection.id}
              name={collection.name}
              topic={collection.topic}
              description={collection.description}
              image={collection.image}
              author={collection.person}
              deleteCollection={deleteCollection}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default CollectionList;
