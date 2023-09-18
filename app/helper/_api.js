import client from "../apollo-client";
import {gql} from '@apollo/client'

export async function getHistories (){

    const {data} = await client.query({
      query:gql`
      query histories {
    
        histories {
          details
          title
          id
          links {
            article
            reddit
            wikipedia
          }
          flight {
            details
            mission_name
          }
        }
      }`
    })
  
    return data.histories
}


export async function getHistory (params){
    const {slug} = params;
    const {data} = await client.query({
      query:gql`
      query history($historyId: ID!) {
        history(id: $historyId) {
          details
          links {
            wikipedia
            reddit
            article
          }
          title
        }
      }`,
      variables:{
        historyId: slug
      }
    })
  
    return data.history
}

export async function getLaunch (params){
    const {slug} = params;
    const {data} = await client.query({
      query:gql`
      query launch($launchId: ID!) {
        launch(id: $launchId) {
          details
          is_tentative
          launch_date_local
          launch_date_unix
          links {
            wikipedia
            video_link
            article_link
          }
          launch_success
          tentative_max_precision
          static_fire_date_unix
          mission_name
        }
      }`,
      variables:{
        launchId: slug
      }
    })
  
    return data.launch
}

export async function getLaunches (){

    const {data} = await client.query({
      query:gql`
      query Launches {
    
        launches {
          id
          mission_name
          mission_id
          details
        }
      }`
    })
  
    return data.launches
}