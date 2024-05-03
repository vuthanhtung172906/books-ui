'use client';

import { gql, useMutation } from '@apollo/client';

import { Book } from '@/src/__generated__/graphql';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export interface BookCardProps {
  data: Book;
  refetch: any;
}
const removeBook = gql`
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
`;
function BookCard({ data, refetch }: BookCardProps) {
  const [removeHandler, { data: removeData, loading, error }] =
    useMutation(removeBook);

  const handleDelete = async () => {
    await removeHandler({
      variables: {
        id: data.id,
      },
    });
    window.location.reload();
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white group">
      <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={data.imageUrl}
          alt={data.title}
        />
        {/* Edit Button */}
        <button
          className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          style={{ transitionDelay: '100ms' }}
        >
          <Link href={`/item/${data.id}`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </button>
        <button
          className="absolute top-10 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          style={{ transitionDelay: '100ms' }}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Author: {data.author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
          Created: {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default BookCard;
