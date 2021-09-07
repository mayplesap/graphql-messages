import axios from "axios";

const BASE_URL = "https://users-messages-gql.herokuapp.com/graphql"

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
class UserMessagesApi {
  static async getAllUserMessages(){
    let query = `
      query {
        users {
          username
          first_name
          last_name
        }
        messages {
          id
          body
          user {
            username
          }
        }
      }
    `;
    let res = await axios.get(`${BASE_URL}?query=${query}`);
    return res.data.data;
  }

  static async getUser(searchTerm: string) {
    let query = `
      query {
        user(username:"${searchTerm}"){
          username
          first_name
          last_name
          messages {
            id
            body,
            user {
              username
            }
          }
        }
      }
    `;
    let res = await axios.get(`${BASE_URL}?query=${query}`);
    return res.data.data;
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
    `;
    let res = await axios.get(`${BASE_URL}?query=${query}`);
    return res.data.data;
  }

  static async createUser(username: string, firstName: string, lastName: string) {
    let mutation = `
      mutation {  
        createUser(username:"${username}", 
                  first_name:"${firstName}", 
                  last_name:"${lastName}") {    
          username    
          first_name    
          last_name  
        }
      }
    `;
    let res = await axios.post(BASE_URL, {query: mutation});
    return res.data.data;

  }

  static async createMessage(username:string, message:string) {
    let mutation = `
      mutation {  
        createMessage(
                    username:"${username}",
                    body:"${message}") {    
          id
          body
          user{
            username
          }
        }
      }
    `;
    let res = await axios.post(BASE_URL, {query: mutation});
    return res.data.data;
  }
}

export default UserMessagesApi;