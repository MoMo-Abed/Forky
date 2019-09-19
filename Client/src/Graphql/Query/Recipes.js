import gql from "graphql-tag";

export default gql`
  query Recipes($value: String!) {
    Recipes(value: $value) {
      _id
      label
      image
      uri
      url
      shareAs
      source
      yield
      healthLabels
      dietLabels
      cautions
      ingredients {
        text
        weight
      }
      ingredientLines
      calories
      totalWeight
      totalTime
      totalNutrients {
        FAT {
          label
          quantity
          unit
        }
        CHOCDF {
          label
          quantity
          unit
        }
        PROCNT {
          label
          quantity
          unit
        }
      }
    }
  }
`;
