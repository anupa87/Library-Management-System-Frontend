import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authorService from '../../author/services/authorService'

export const getAllAuthors = createAsyncThunk('authors/getAllAuthors', async () => {
  const authors = await authorService.getAllAuthors()
  return authors
})

export const getAuthorById = createAsyncThunk('authors/getAuthorById', async (authorId) => {
  const author = await authorService.getAuthorById(authorId)
  return author
})

export const addAuthor = createAsyncThunk('authors/addAuthor', async (author) => {
  const newAuthor = await authorService.addAuthor(author)
  return newAuthor
})

export const updateAuthor = createAsyncThunk(
  'authors/updateAuthor',
  async ({ authorId, author }) => {
    const updatedAuthor = await authorService.updateAuthor(authorId, author)
    return updatedAuthor
  }
)

export const deleteAuthor = createAsyncThunk('authors/deleteAuthor', async (authorId) => {
  const deletedAuthor = await authorService.deleteAuthor(authorId)
  return deletedAuthor
})

const initialState = {
  authors: [],
  status: 'idle',
  error: null,
  selectedAuthor: null
}

const authorSlice = createSlice({
  name: 'authors',
  initialState,

  reducers: {
    setSelectedAuthor: (state, action) => {
      state.selectedAuthor = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllAuthors.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors = action.payload
      })
      .addCase(getAllAuthors.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getAuthorById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAuthorById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.selectedAuthor = action.payload
      })
      .addCase(getAuthorById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors.push(action.payload)
      })
      .addCase(addAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const updatedAuthorIndex = state.authors.findIndex(
          (author) => author.authorId === action.payload.authorId
        )
        state.authors[updatedAuthorIndex] = action.payload
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors = state.authors.filter((author) => author.authorId !== action.payload)
      })
      .addCase(deleteAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setSelectedAuthor } = authorSlice.actions

export default authorSlice.reducer
