import gql from "graphql-tag";

export default gql`
  mutation CreateSavedRecipe($inputs: CreateRec) {
    CreateSavedRecipe(inputs: $inputs) {
      _id
    }
  }
`;
