export default `

type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    SavedRecipes: [Recipe]
}



type AuthData {
    token: String!
    userId: String!
}



type Ingredients{
    text:String,
    weight:String
}

type Digest{
    label: String,
    tag: String,
    schemaOrgTag:String,
    total:String,
    hasRDI:String,
    daily:String,
    unit:String 
}

type Value{
    label:String,
    quantity:String,
    unit:String,
}

type totalNutrientsObj {
    FAT: Value,
    CHOCDF:Value,
    PROCNT:Value
}

type Recipe {
    _id: ID,

    label: String,
    image: String,
    uri: String,
    url: String,
    shareAs:String,
    source: String,
    yield: String,
    healthLabels:[String],
    dietLabels:[String],
    cautions: [String],
    ingredientLines:[String],
    ingredients: [Ingredients],
    calories: Float,
    totalWeight:Float,
    totalTime: Int,
    totalNutrients: totalNutrientsObj ,
    digest: [Digest]

   
    
   
}

input CreateRec{
        _id: ID,
    
        label: String,
        image: String,
        uri: String,
        url: String,
        shareAs:String,
        source: String,
        yield: String,
        healthLabels:[String],
        dietLabels:[String],
        cautions: [String],
        ingredientLines:[String],
        ingredients: [Ingredientss],
        calories: Float,
        totalWeight:Float,
        totalTime: Int,
        totalNutrients: totalNutrientsObjs ,
    
       
        
       
    
}


input Ingredientss{
    text:String,
    weight:String
}



input Values{
    label:String,
    quantity:String,
    unit:String,
}

input totalNutrientsObjs {
    FAT: Values,
    CHOCDF:Values,
    PROCNT:Values
}

type HIts{
    recipe:[Recipe]
}

type Res{
    hits:[HIts]
}



type RootQuery {
    GetSavedId(id: ID!): Recipe!
    user: User!
    Recipes(value:String!):[Recipe]
    getSavedRecipes:[Recipe]
}

type RootMutation {
    login(email: String!, password: String!): AuthData!

    createUser(
        email: String!,
    name: String!,
    password: String!,
    ): AuthData!

    CreateSavedRecipe( inputs:CreateRec
        ): Recipe!
    deleteSavedRecipe(id: String!): Boolean
}

schema {
    query: RootQuery
    mutation: RootMutation
}



`;
