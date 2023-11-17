import { BudgetReducer } from "@/entities/budget";
import { ClassificationReducer } from "@/entities/classification";
import { TransactionReducer } from "@/entities/transaction";
import { UserReducer } from "@/entities/user";
import { UpdateBudgetReducer } from "@/features/update-budget";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    classificationSlice: ClassificationReducer,
    transactionSlice: TransactionReducer,
    userSlice: UserReducer,
    budgetSlice: BudgetReducer,
    updateBudgetSlice: UpdateBudgetReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
