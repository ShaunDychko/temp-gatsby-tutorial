import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"

const about = ({
  data: {
    personalData,
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" description="this is the about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>{personalData.lorem.sentence}</h2>
            <p>{personalData.lorem.paragraph}</p>
            <p>{personalData.lorem.paragraph}</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Personal pouring slat in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
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
      lorem {
        paragraph
        word
        sentence
      }
    }
  }
`

export default about
