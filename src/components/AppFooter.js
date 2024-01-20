import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.qcharity.org/en/qa" target="_blank" rel="noopener noreferrer">
          Qatar Charity
        </a>
        <span className="ms-1">&copy; 2024</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://www.linkedin.com/in/haatem-saadli-765209223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saadli Hatem
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
