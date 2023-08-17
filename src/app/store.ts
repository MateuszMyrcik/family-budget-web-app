import { TransactionReducer } from "@/entities/transaction";
import { UserReducer } from "@/entities/user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { transactionSlice: TransactionReducer, userSlice: UserReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
