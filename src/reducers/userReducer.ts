import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "@/schema/UserSchema";

interface UserState {
  profile: UserSchema;
}

const initialState: UserState = {
  profile: {
    createdAt: "",
    deletedAt: "",
    email: "",
    id: "",
    lastLogin: "",
    name: "",
    password: "",
    status: "",
    updatedAt: "",
    username: "",
    role: {
      title: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserSchema>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
