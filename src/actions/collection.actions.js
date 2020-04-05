import { getAllCollections, deleteCollection } from '../services/collection.service';
import { errorActionCreator, clearActionCreator } from './alert.actions';

function getAllCollectionsActionCreator(data) {
  return {
    type: 'GET_ALL_COLLECTIONS',
    payload: data,
  };
}

function deleteCollectionActionCreator(data) {
  return {
    type: 'DELETE_COLLECTION',
    payload: data,
  };
}

export function getAllCollectionsAction() {
  return (dispatch) => {
    getAllCollections()
      .then(response => {
        dispatch(getAllCollectionsActionCreator(response.data));
        dispatch(clearActionCreator());
      })
      .catch(() => {
        dispatch(clearActionCreator());
        dispatch(errorActionCreator('Ошибка загрузки коллекций'));
      });
  };
}

export function deleteCollectionAction(idCollection) {
  return (dispatch) => {
    deleteCollection(idCollection)
      .then(() => {
        dispatch(deleteCollectionActionCreator(idCollection));
        dispatch(clearActionCreator());
      })
      .catch(() => {
        dispatch(clearActionCreator());
        dispatch(errorActionCreator('Ошибка удаления коллекции'));
      });
  };
}
