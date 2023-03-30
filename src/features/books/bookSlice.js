import { createSlice } from '@reduxjs/toolkit'
import data from '../../../public/data/data.json'

import { v4 as uuidv4 } from 'uuid'

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: data.books },

  reducers: {
    addBook: (state, action) => {
      const addedBook = {
        ...action.payload
      }
      state.books.push(addedBook)
      localStorage.setItem('books', JSON.stringify(state.books))
    },

    updateBook: (state, action) => {
      const updatedBook = action.payload
      const index = state.books.findIndex((book) => book.id === updatedBook.id)
      state.books[index] = updatedBook
      localStorage.setItem('books', JSON.stringify(state.books))
    },

    deleteBook: (state, action) => {
      const deletedBook = action.payload
      const index = state.books.findIndex((book) => book.id === deletedBook.id)
      state.books.splice(index, 1)
      localStorage.setItem('books', JSON.stringify(state.books))
    },

    issueBook: (state, action) => {
      const { bookId, borrowerId } = action.payload
      const issuedBook = state.books.find((book) => book.id === bookId + '')
      console.log(state.books)
      console.log(issuedBook)
      // state.books = [
      //   { ...issuedBook, status: 'issued', borrowerId, issueDate: new Date().toISOString() },
      //   ...state.books.filter((book) => book.id !== bookId + '')
      // ]
      localStorage.setItem('books', JSON.stringify(state.books))
      return {
        ...state,
        books: [
          { ...issuedBook, status: 'issued', borrowerId, issueDate: new Date().toISOString() },
          ...state.books.filter((book) => book.id !== bookId + '')
        ]
      }
    }
  }
})

export const { addBook, updateBook, deleteBook, issueBook, renewBook, returnBook } =
  bookSlice.actions
export default bookSlice.reducer