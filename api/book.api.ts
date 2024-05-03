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

export { GetCartByIdDocument };
