import React from "react"
import galeryStyles from "../styles/components/gallery.module.scss"
import useHomeData from "../static_queries/useHomeData"
import { SRLWrapper } from "simple-react-lightbox"

const Gallery = () => {
  const { gallery } = useHomeData()
  const images = gallery.map(
    ({
      node: {
        childMarkdownRemark: {
          id,
          frontmatter: {
            caption,
            image: {
              childImageSharp: { full, thumbnail },
            },
          },
        },
      },
    }) => ({ id, caption, src: full.src, thumbnail: thumbnail.src })
  )
  const options = {
    settings: {
      autoplaySpeed: 5000,
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: false,
      hideControlsAfter: 3000,
      lightboxTransitionSpeed: 0.6,
      lightboxTransitionTimingFunction: "linear",
      overlayColor: "rgba(0, 0, 0, 0.9)",
      slideAnimationType: "fade",
      slideSpringValues: [300, 200],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: "linear",
    },
    buttons: {
      backgroundColor: "#47525d",
      iconColor: "#fff",
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontWeight: "300",
    },
  }

  return (
    <div className={`${galeryStyles.gallery_container}`}>
      <SRLWrapper options={options}>
        {images.map(({ caption, id, src, thumbnail }) => (
          <a
            className={`${galeryStyles.gallery_item}`}
            key={id}
            href={src}
            data-attribute="SRL"
          >
            <img src={thumbnail} alt={caption} />
          </a>
        ))}
      </SRLWrapper>
    </div>
  )
}

export default Gallery
