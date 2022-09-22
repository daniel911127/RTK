import { createSlice } from "@reduxjs/toolkit";

inicialState={posts:[]}

export const postsSlices=createSlice({
  name:posts,
  loading:false,
  error:null
  inicialState,
})