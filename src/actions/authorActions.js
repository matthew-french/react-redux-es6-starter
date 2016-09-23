import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess (authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess (author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess (author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess (author) {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
}

export function loadAuthors () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor (author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(author => {
      author.id ? dispatch(updateAuthorSuccess(author)) :
        dispatch(createAuthorSuccess(author));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

// Optimistically deleting for perceived performance
// Note that there's no loading action dispatched
// Since the UI will be immediately updated
// The user will only be notified if there's an error.
export function deleteAuthor (authorId) {
  return dispatch => {
    dispatch(deleteAuthorSuccess(authorId));
    return AuthorApi.deleteAuthor(authorId)
                    .catch(error => {
                      dispatch(ajaxCallError(error));
                      throw(error);
                    });
  };
}

// export function deleteAuthor (author) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return AuthorApi.deleteAuthor(author.id).then(author => {
//                       dispatch(deleteAuthorSuccess(author));
//                     })
//                     .catch(error => {
//                       dispatch(ajaxCallError(error));
//                       throw(error);
//                     });
//   };
// }