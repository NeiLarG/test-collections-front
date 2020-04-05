import React, { Component } from 'react';

class CollectionRow extends Component {
  onClickViewCollection = () => {};

  onClickDeleteCollection = (event) => {
    const { deleteCollection } = this.props;
    deleteCollection(parseInt(event.target.id));
  };

  render() {
    const {
      id,
      name,
      topic,
      description,
      image,
      author,
    } = this.props;
    return (
      <tr>
        <td className="col-collection-name">{name}</td>
        <td className="col-collection-topic">{topic.name}</td>
        <td className="col-collection-description">{description}</td>
        <td className="col-collection-image">
          <img src={image.link} alt={name} height="200" width="200" />
        </td>
        <td className="col-collection-author">{author.nickName}</td>
        <td className="col-collection-actions">
          <button
            type="button"
            className="btn btn-action btn-outline-dark"
            onClick={this.onClickViewCollection}
          >
            Просмотр
          </button>
          <button
            id={id}
            type="button"
            className="btn btn-action btn-outline-dark"
            onClick={this.onClickDeleteCollection}
          >
            Удаление
          </button>
        </td>
      </tr>
    );
  }
}

export default CollectionRow;
