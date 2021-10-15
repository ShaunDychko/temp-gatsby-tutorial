import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

export default function contact({
  data: {
    personalData,
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>{personalData.lorem.paragraph}</p>
            <p>{personalData.lorem.sentence}</p>
            <p>{personalData.lorem.paragraph}</p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mleakebq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this aweseomsauce!</h5>
          <RecipesList recipes={recipes} className="recipe" />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        prepTime
        cookTime
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
    personalData {
      id
      internet {
        email
      }
      phone {
        phoneNumber
      }
      address {
        streetAddress
        streetName
        city
        state
        zipCode
      }
      lorem {
        paragraph
        word
        sentence
      }
    }
  }
`
