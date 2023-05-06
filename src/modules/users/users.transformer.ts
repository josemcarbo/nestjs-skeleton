export class UsersTransformer {
  static toResponse(user) {
    const { _id, email, password, firstName, lastName, createdAt, updatedAt } =
      user;
    return {
      id: _id,
      email,
      password,
      firstName,
      lastName,
      createdAt,
      updatedAt,
    };
  }
}
