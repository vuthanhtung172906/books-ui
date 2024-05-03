'use client';

import { gql, useQuery } from '@apollo/client';
import { Book, BooksDocument, Query } from '@/src/__generated__/graphql';
import BookCard from '@/components/BookCard';
import Link from 'next/link';

const query = gql`
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
`;

export default function Home() {
  const { data, refetch } = useQuery<Query>(BooksDocument, {
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });

  return (
    <div className="container mx-auto px-4">
      <div className="group-btn m-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/item">Add Book</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data &&
          data.books.map((book) => (
            <BookCard refetch={refetch} key={book.id} data={book} />
          ))}
      </div>
    </div>
  );
}
