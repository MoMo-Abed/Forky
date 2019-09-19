import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Query } from "@apollo/react-components";
import USER from "../../Graphql/Query/user";
import { _styles } from "../../Styles/ProfilePage/profilemainView";
export class profilemainView extends PureComponent {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Query query={USER}>
        {(response, error) => {
          //If there is an error log the error to the console.
          if (error) {
            console.log("Get Player Error------", error);
          }
          console.log(response);

          //If the response has data.
          if (response.data && response.data.user) {
            //SEt the state of  the returnedPlayer to the response's player returned.
            // console.log(response.data.news.news);
            console.log(response.data.user);
            //  this._CreateNewArr();
            //console.log(this.state.Arr);
            //this.GetNews(response.data.news);
            //Set the state of the updatedWonSuperBowl
            return (
              <View
                colors={["#2A63F4", "#65009E"]}
                style={_styles.Container}
              ></View>
            );
          }
          //Return the loading text if there is no data.
          return <Text>Loading....</Text>;
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profilemainView);
