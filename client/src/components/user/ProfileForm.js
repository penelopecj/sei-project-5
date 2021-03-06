import React from 'react'
import ImageUploadField from './ImageUpload'

function ProfileForm({ formdata, errors, handleChange, handleSubmit, buttonText = 'Submit' }) {
  return (
    <main>
      <section className="section login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="block-form">
            <label className="block-form">Username</label>
            <div className="control">
              <input
                className="block-form"
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={formdata.username}
              />
            </div>
            {errors.username && <p className="error-in-field">{errors.username}</p>}
          </div>
          <div className="block-form">
            <label className="block-form">Email</label>
            <div className="control">
              <input
                className="block-form"
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleChange}
                value={formdata.email}
              />
            </div>
            {errors.email && <p className="error-in-form">{errors.email}</p>}
          </div>
          <div className="block-form">
            <label className="block-form">City</label>
            <div className="control">
              <input
                className="block-form"
                placeholder="City"
                type="text"
                name="city"
                onChange={handleChange}
                value={formdata.city}
              />
            </div>
            {errors.city && <p className="error-in-form">{errors.city}</p>}
          </div>
          <div className="block-form">
            <label className="block-form">Profile Image: (please wait for image to appear)</label>
            <ImageUploadField
              onChange={handleChange}
              labelText="Profile Image"
              name="userImage"
              value={formdata.userImage}
            />
          </div>
          {errors.userImage && <p className="error-in-form">{errors.userImage}</p>}
          <div className="field">
            <label className="block-form">About Me:</label>
            <input
              className="block-form"
              placeholder="Tell us about yourself..."
              type="text"
              name="userBio"
              onChange={handleChange}
              value={formdata.userBio}
            />
          </div>
          {errors.userBio && <p className="error-in-form error-message">{errors.userBio}</p>}
          <div className="block-form">
            <button type="submit" className="block-form form-submit-button">{buttonText}</button>
          </div>
        </form>
      </section>
    </main>
    
  )

}

export default ProfileForm
