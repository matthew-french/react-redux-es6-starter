export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id == id);
  if (author) return author[0]; //since filter returns an array, have to grab the first.
  return null;
}