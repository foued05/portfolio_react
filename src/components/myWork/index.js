import { useEffect, useState, useCallback } from 'react'

import './index.scss'
import Loader from 'react-loaders'
import data from './data'
import useSectionClass from '../../hooks/use-sectionClass'
import Header from '../Ui/header/Header'
import useLetteranimation from '../../hooks/use-letterAnimation'
import Overlay from '../Ui/overlay/Overlay'

const MyWork = () => {
  const [projects, setProjects] = useState([])
  const [showOverlay, setShowOverlay] = useState(false)
  const [currentProjectId, setCurrentProjectId] = useState(null)
  const letterClass = useLetteranimation(300)

  const sectionClass = useSectionClass()

  const learnMoreBtnHandler = (id) => {
    setShowOverlay((prev) => !prev)
    setCurrentProjectId(id)
  }

  const showOverlayHandler = useCallback(() => {
    setShowOverlay((prev) => !prev)
  }, [])

  const project = currentProjectId
    ? projects.find((project) => project.id === currentProjectId)
    : null ;

  useEffect(() => {
    setProjects(data)
  }, [])
  return (
    <>
      <div className={`container my-work-page ${sectionClass}`}>
        <div className="text-zone">
          <Header
            strArray={[ 'M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
            letterClass={letterClass}
          />
        <div className="paraContainer">
          <p>
            A small gallery of recent projects chosen by me.I learned a lot of interesting tricks doing these projects, I have been always trying to apply all my new knowledge on each new project.
          </p>
        </div>
        </div>
          {project && showOverlay &&
          <Overlay onClickHandler={showOverlayHandler} project={project}/>}
        <section>
          {projects && projects.length > 0 ? (
            projects.map((project, idx) => (
              <article key={project.name + idx}>
                <div className="bar">
                  <i></i>
                  <h3>{project.name}</h3>
                </div>
                <div className="article-content">
                  <div className="article-modal">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                    <button
                      className="flat-button"
                      onClick={() => learnMoreBtnHandler(project.id)}
                    >
                      Learn more
                    </button>
                  </div>
                  <img src={project.homePage} alt={project.name} />
                </div>
              </article>
            ))
          ) : (
            <h2>No Projects found</h2>
          )}
        </section>
      </div>
      <Loader />
    </>
  )
}

export default MyWork
