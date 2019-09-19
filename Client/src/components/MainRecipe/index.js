import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SearchBarRecipe from './SearchBar'
import RecipeCard from './RecipeCard'
export default class RenderAll extends Component {
  render() {
    return (
      <View  >   
          <SearchBarRecipe/>
          <RecipeCard/>
                  
          
    </View>
    )
  }
}
