import axios from "axios";

const BASE_URL = "https://users-messages-gql.herokuapp.com/graphql"

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
class MessagesApi {
  static async getUsers(){
    let query = `
      query {
        users {
          username
          first_name
          last_name
        }
      }
    `
  }
  static async getUser(searchTerm: string) {
    let query = `
      query {
        user(username:"${searchTerm}"){
          username
          first_name
          last_name
        }
      }
    `
  }

  static async getMessages(){
    let query = `
      query {
        messages {
          id
          body
          user {
            username
          }
        }
      }
    `
  }

  static async getMessage(searchId: number) {
    let query = `
    query {
      message(id:"${searchId}"){
        id
        body
        user {
          username
        }
      }
    }
  `
  }

  static async createUser() {

  }

  static async createMessage() {

  }
}