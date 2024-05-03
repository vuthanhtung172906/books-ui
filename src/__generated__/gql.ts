/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UpdateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n    $id: String!\n  ) {\n    updateBook(\n      updateBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n        id: $id\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateBookDocument,
    "\n  query Book($id: String!) {\n    book(id: $id) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.BookDocument,
    "\n  mutation CreateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n  ) {\n    createBook(\n      createBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateBookDocument,
    "\n  query Books {\n    books {\n      id\n      title\n      author\n      description\n      createdAt\n      updatedAt\n      imageUrl\n    }\n  }\n": types.BooksDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n    $id: String!\n  ) {\n    updateBook(\n      updateBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n        id: $id\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n    $id: String!\n  ) {\n    updateBook(\n      updateBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n        id: $id\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Book($id: String!) {\n    book(id: $id) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query Book($id: String!) {\n    book(id: $id) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n  ) {\n    createBook(\n      createBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBook(\n    $title: String!\n    $author: String!\n    $description: String!\n    $imageUrl: String!\n  ) {\n    createBook(\n      createBookInput: {\n        title: $title\n        author: $author\n        description: $description\n        imageUrl: $imageUrl\n      }\n    ) {\n      id\n      title\n      author\n      description\n      imageUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Books {\n    books {\n      id\n      title\n      author\n      description\n      createdAt\n      updatedAt\n      imageUrl\n    }\n  }\n"): (typeof documents)["\n  query Books {\n    books {\n      id\n      title\n      author\n      description\n      createdAt\n      updatedAt\n      imageUrl\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;