import React from "react";

export default connect(
    state => ({
      result: state.users.createUser.result,
      loading: state.users.createUser.loading,
      error: state.users.createUser.error
    }),
    { createUser }
  )(UpdateUser);