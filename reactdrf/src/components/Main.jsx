import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="container">
          <div className='p-5 mb-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>ReactDrfPortal App</h1>
              <p className="lead text-light">This ReactDrfPortal application utilizes machine learning techniques, specifically employing Keras and LSTM model. Keras provides a user-friendly API for building Long Short-Term Memory (LSTM) models, which are a powerful type of recurrent neural network (RNN) designed for processing sequential data. LSTMs are effective at capturing long-term dependencies in data and are widely used for tasks such as time-series forecasting, natural language processing, and speech recognition. </p>
              <Button text="Login" class="btn-info" url="/login" />
          </div>
      </div>
    </>
  )
}

export default Main