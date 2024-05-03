import { gql } from '@/src/__generated__';

const GetCartByIdDocument = gql(`
    query Books {
        books {
        id
        title
        author
        description
        createdAt
        updatedAt
        imageUrl
        }
    }
`);
const CreateBookDocument = gql(`
  mutation CreateBook(
    $title: String!
    $author: String!
    $description: String!
    $imageUrl: String!
  ) {
    createBook(
      createBookInput: {
        title: $title
        author: $author
        description: $description
        imageUrl: $imageUrl
      }
    ) {
      id
      title
      author
      description
      imageUrl
      createdAt
      updatedAt
    }
  }
`);

const UpdateBookDocument = gql(
  `
    mutation UpdateBook(
        $title: String!
        $author: String!
        $description: String!
        $imageUrl: String!
        $id: String!
      ) {
        updateBook(
          updateBookInput: {
            title: $title
            author: $author
            description: $description
            imageUrl: $imageUrl
            id: $id
          }
        ) {
          id
          title
          author
          description
          imageUrl
          createdAt
          updatedAt
        }
      }
    `
);
const DeleteBookDocument = gql(
  `
  mutation RemoveBook($id: String!) {
    removeBook(id: $id) {
      id
      title
      author
      description
      imageUrl
      createdAt
      updatedAt
    }
  }
  `
);
export {
  GetCartByIdDocument,
  CreateBookDocument,
  UpdateBookDocument,
  DeleteBookDocument,
};
