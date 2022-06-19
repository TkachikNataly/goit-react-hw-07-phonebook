import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62ae33e3645d00a28a05e53f.mockapi.io/contacts',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: ({ name, number }) => ({
                url: '/contacts',
                method: 'POST',
                body: { name, number },
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});
export const {
    useFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;