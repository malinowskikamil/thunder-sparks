import React from "react"
import teamStyles from "../styles/components/team.module.scss"
import layoutStyles from "../styles/components/layout.module.scss"
import useTeamData from "../static_queries/useTeamData"

const Team = () => {
  const data = useTeamData()
  return (
    <div className={`${layoutStyles.container__lime}`} id="team">
      <div className={`${layoutStyles.container}`}>
        <div className={`${layoutStyles.header}`}>
          <h2>Our team</h2>
        </div>
        <div className={`${teamStyles.wrapper}`}>
          {data &&
            data.map(
              ({
                node: {
                  childMarkdownRemark: {
                    frontmatter: {
                      name,
                      position,
                      short_description,
                      facebook_link,
                      linkedin_link,
                      image: {
                        childImageSharp: { fluid },
                      },
                    },
                  },
                },
              }) => (
                <div className={`${teamStyles.item}`}>
                  <div
                    className={`${teamStyles.item__image}`}
                    style={{ backgroundImage: `url(${fluid.src})` }}
                  />
                  <div className={`${teamStyles.item__content}`}>
                    <div className={`${teamStyles.item__header}`}>
                      <p className={`${teamStyles.name}`}>{name}</p>
                      <p className={`${teamStyles.position}`}>{position}</p>
                    </div>
                    <p className={`${teamStyles.item__description}`}>
                      {short_description}
                    </p>
                    <div className={`${teamStyles.item__icons}`}>
                      {facebook_link && (
                        <a
                          href={facebook_link}
                          target="__blank"
                          className={`${teamStyles.item__icons__link}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d={`M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z`}
                            />
                          </svg>
                        </a>
                      )}
                      {linkedin_link && (
                        <a
                          href={linkedin_link}
                          target="__blank"
                          className={`${teamStyles.item__icons__link}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  )
}

export default Team
