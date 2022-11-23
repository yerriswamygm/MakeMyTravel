import React from 'react'
import Styles from '../profile/_profile.module.css'
import ProfileMainBlock from './ProfileMainBlock'
import ProfileSidebar from './ProfileSidebar'

const Profile = () => {
  return (
      <section id={Styles.profileBlock}>
          <article>
              <ProfileSidebar />
              <ProfileMainBlock/>
          </article>
    </section>
  )
}

export default Profile