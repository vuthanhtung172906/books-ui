'use client';

import { Query } from '@/src/__generated__/graphql';
import { gql, useMutation, useSuspenseQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const UPDATE_BOOK_MUTATION = gql`
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
`;

const GET_BOOK_QUERY = gql`
  query Book($id: String!) {
    book(id: $id) {
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

export default function Page({ params }: { params: { slug: string } }) {
  const { data: bookData } = useSuspenseQuery<Query>(GET_BOOK_QUERY, {
    variables: {
      id: params.slug,
    },
  });

  const router = useRouter();
  const [formData, setFormData] = useState({
    title: 'Test title',
    author: 'TungVT',
    description: 'Test description',
    imageUrl:
      'https://mcdn.coolmate.me/image/February2023/en-comic-la-gi-1139_368.jpg',
  });

  useEffect(() => {
    if (bookData) {
      setFormData({
        title: bookData.book.title,
        author: bookData.book.author,
        description: bookData.book.description,
        imageUrl: bookData.book.imageUrl,
      });
    }
  }, [bookData]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [newBook, { data, loading, error }] = useMutation(UPDATE_BOOK_MUTATION);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    newBook({
      variables: {
        title: formData.title,
        author: formData.author,
        description: formData.description,
        imageUrl: formData.imageUrl,
        id: params.slug,
      },
    });
    router.push('/');
    // Submit logic goes here
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          {formData.imageUrl && (
            <div className="mt-4">
              <img
                src={formData.imageUrl}
                alt="Book Preview"
                className="w-48 h-48 object-cover"
              />
            </div>
          )}

          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
