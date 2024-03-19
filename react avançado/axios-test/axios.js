import axios from "axios"

export async function fetchUserDetails(element, username) {
   try {
      // const response = await fetch(`https://api.github.com/users/${username}`)

      const response = await axios.get(`https://api.github.com/users/${username}`)

      // if (!response.ok) {
      //    throw new Error(`Github API return status code ${response.status}`)
      // }
      // const user = await response.json()
      
      const user = response.data;

      element.innerHTML = `
      <img src="${user.avatar_url}" alt="${user.name}" />
      <h1>${user.name ? user.name : "no name"}</h1>
      <p> ${user.bio ? user.bio : "no bio"}</p>
      `
   } catch (error) {
      console.error(`Error fetching Github user: ${error}`)
      element.innerHTML = `<p>Error loading user data<p>`
   }
}